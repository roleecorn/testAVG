const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { isDeepStrictEqual } = require("util");
const { bundleToFloors, readBundle, validateAvgFloorDimensions, validateProjectReferences } = require("./story_ir");
const { CHARACTER_PORTRAITS, resolvePortrait } = require("./portrait_resolver");
const { DONGSHAN_PORTRAIT_DECISIONS } = require("./main_story_portrait_decisions");

const root = path.resolve(__dirname, "..");
const p = (...parts) => path.join(root, ...parts);
const MAIN_STORY_IR = p("project", "story-ir", "main", "main-story.json");

const MAP_WIDTH = 17;
const MAP_HEIGHT = 13;
const VIEWPORT_WIDTH = 544;
const VIEWPORT_HEIGHT = 416;
const LEGACY_STAGE_WIDTH = 416;
const BACKGROUND_LOC = [0, 0];
const CG_LOC = [112, 50, 320, 220];
const GENERAL_CG_SLOC = [0, 65, 416, 286];
const MAIN_STORY_ASSET_PATTERN = /^CH[1-7]_L\d+\.png$/;
const PORTRAIT_ASSETS = Object.values(CHARACTER_PORTRAITS)
  .flatMap(({ images }) => Object.values(images))
  .filter((image, index, images) => images.indexOf(image) === index);

function readProjectMain() {
  const context = {};
  vm.runInNewContext(fs.readFileSync(p("project", "data.js"), "utf8"), context);
  const data = Object.values(context)[0];
  return data.main;
}

const PROJECT_MAIN = readProjectMain();
const AVG_LAYOUT = PROJECT_MAIN.styles.avgLayout;
const REGISTERED_BGMS = new Set(PROJECT_MAIN.bgms || []);
const REGISTERED_SOUNDS = new Set(PROJECT_MAIN.sounds || []);
const mainStoryAssetImages = fs.readdirSync(p("project", "images"))
  .filter((image) => MAIN_STORY_ASSET_PATTERN.test(image))
  .sort();
const mainStoryAssetImageSet = new Set(mainStoryAssetImages);
const mainStoryCgImageSet = new Set(mainStoryAssetImages);

function parseCgDirective(line) {
  const text = normalizeSourceLine(line);
  if (!text.startsWith("【CG：") || !text.endsWith("】")) return null;
  const directive = text.slice("【CG：".length, -1).trim();
  const operationMatch = directive.match(/^(.*?)[\s　_]+(出現|消失)$/);
  return {
    name: (operationMatch ? operationMatch[1] : directive).trim(),
    operation: operationMatch?.[2] || null,
  };
}

function parseBackgroundDirective(line) {
  const text = normalizeSourceLine(line);
  if (!text.startsWith("【背景：") || !text.endsWith("】")) return null;
  return { name: text.slice("【背景：".length, -1).trim() };
}

function readMainStoryCgFirstAppearances() {
  const appearances = new Map();
  for (let chapter = 1; chapter <= 7; chapter++) {
    const lines = fs.readFileSync(p("project", "mainStory", `CH${chapter}`), "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      const directive = parseCgDirective(line);
      if (!directive || directive.operation !== "出現") return;
      const key = directive.name;
      if (!appearances.has(key)) {
        appearances.set(key, {
          chapter,
          lineNumber: index + 1,
          image: `CH${chapter}_L${index + 1}.png`,
        });
      }
    });
  }
  return appearances;
}

const mainStoryCgFirstAppearances = readMainStoryCgFirstAppearances();

function readMainStoryBackgroundFirstAppearances() {
  const appearances = new Map();
  for (let chapter = 1; chapter <= 7; chapter++) {
    const lines = fs.readFileSync(p("project", "mainStory", `CH${chapter}`), "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      const directive = parseBackgroundDirective(line);
      if (!directive) return;
      const key = directive.name;
      if (!appearances.has(key)) {
        appearances.set(key, {
          chapter,
          lineNumber: index + 1,
          image: `CH${chapter}_L${index + 1}.png`,
        });
      }
    });
  }
  return appearances;
}

const mainStoryBackgroundFirstAppearances = readMainStoryBackgroundFirstAppearances();

function sourceCgImageFor(ctx, name) {
  if (!ctx.chapter) return null;
  const firstAppearance = mainStoryCgFirstAppearances.get(name);
  return firstAppearance && mainStoryAssetImageSet.has(firstAppearance.image)
    ? firstAppearance.image
    : null;
}

function validateMainStoryAssetAddresses() {
  for (const image of mainStoryAssetImages) {
    const match = image.match(/^CH(\d+)_L(\d+)\.png$/);
    const chapter = Number(match[1]);
    const lineNumber = Number(match[2]);
    const line = fs.readFileSync(p("project", "mainStory", `CH${chapter}`), "utf8").split(/\r?\n/)[lineNumber - 1];
    const cgDirective = line === undefined ? null : parseCgDirective(line);
    const backgroundDirective = line === undefined ? null : parseBackgroundDirective(line);
    const kind = cgDirective && cgDirective.operation === "出現" ? "CG" : backgroundDirective ? "background" : null;
    const directive = kind === "CG" ? cgDirective : backgroundDirective;
    if (!directive) {
      throw new Error(`${image} does not point to a CG 出現 or background directive in project/mainStory/CH${chapter} line ${lineNumber}`);
    }
    const firstAppearance = kind === "CG"
      ? mainStoryCgFirstAppearances.get(directive.name)
      : mainStoryBackgroundFirstAppearances.get(directive.name);
    if (firstAppearance.image !== image) {
      throw new Error(`${image} is a later occurrence of 「${directive.name}」; reuse ${firstAppearance.image} instead`);
    }
  }
}

validateMainStoryAssetAddresses();

const MAP = Array.from({ length: MAP_HEIGHT }, () => Array(MAP_WIDTH).fill(0));

const floors = {
  "1-1": { id: "mapo_1_1", title: "主線 CH1 1-1 車站", name: "1-1", bg: "ms_bg_station.png", bgm: "bossa_casual_shop.mp3", next: "mapo_1_2" },
  "1-2": { id: "mapo_1_2", title: "主線 CH1 1-2 倉庫區", name: "1-2", bg: "ms_bg_street.png", bgm: "dark_alleys_tension.ogg", next: "mapo_1_3" },
  "1-3": { id: "mapo_1_3", title: "主線 CH1 1-3 麻婆豆腐店", name: "1-3", bg: "ms_bg_mapo_shop.png", bgm: "bossa_casual_shop.mp3", next: "mapo_1_4" },
  "1-4": { id: "mapo_1_4", title: "主線 CH1 1-4 炭烤蜜瓜兔子", name: "1-4", bg: "ms_bg_cafe.png", bgm: "flags_drama.mp3", next: "mapo_1_5" },
  "1-5": { id: "mapo_1_5", title: "主線 CH1 1-5 掉落物", name: "1-5", bg: "ms_bg_street.png", bgm: "twists_suspense.mp3", next: "mapo_1_6" },
  "2-1": { id: "mapo_1_6", title: "主線 CH2 2-1 咖啡廳早晨", name: "2-1", bg: "ms_bg_riverside.png", bgm: "bossa_casual_shop.mp3", next: "main_ch2_2" },
  "2-2": { id: "main_ch2_2", title: "主線 CH2 2-2 三過書店", name: "2-2", bg: "ms_bg_bookstore_a.png", bgm: "twists_suspense.mp3", next: "main_ch2_3" },
  "2-3": { id: "main_ch2_3", title: "主線 CH2 2-3 遊戲中心", name: "2-3", bg: "ms_bg_arcade.png", bgm: "warped_surreal.mp3", next: "main_ch2_4" },
  "2-4": { id: "main_ch2_4", title: "主線 CH2 2-4 書店A內部", name: "2-4", bg: "ms_bg_bookstore_a_interior.png", bgm: "dark_alleys_tension.ogg", next: "main_ch3_1" },
  "3-1": { id: "main_ch3_1", title: "主線 CH3 3-1 自爆篇", name: "3-1", bg: "ms_bg_street.png", bgm: "bossa_casual_shop.mp3", next: "main_ch3_2" },
  "3-2": { id: "main_ch3_2", title: "主線 CH3 3-2 貝琪晚餐", name: "3-2", bg: "ms_bg_street.png", bgm: "next_to_you_emotional.mp3", next: "main_ch3_3" },
  "3-3": { id: "main_ch3_3", title: "主線 CH3 3-3 傑士塔威會議", name: "3-3", bg: "ms_bg_street.png", bgm: "warped_surreal.mp3", next: "main_ch4_1" },
  "4-1": { id: "main_ch4_1", title: "主線 CH4 4-1 搶火車篇", name: "4-1", bg: "ms_bg_street.png", bgm: "great_mission_heroic.mp3", next: "main_ch4_2" },
  "4-2": { id: "main_ch4_2", title: "主線 CH4 4-2 修卡已逝", name: "4-2", bg: "ms_bg_vehicle_interior.png", bgm: "flags_drama.mp3", next: "main_ch5_1" },
  "5-1": { id: "main_ch5_1", title: "主線 CH5 5-1 五日無戰事篇", name: "5-1", bg: "ms_bg_vehicle_interior.png", bgm: "bossa_casual_shop.mp3", next: "main_ch6_1" },
  "6-1": { id: "main_ch6_1", title: "主線 CH6 6-1 肥宅潮", name: "6-1", bg: "ms_bg_bookstore_a.png", bgm: "waking_the_devil_crisis.mp3", next: "main_ch6_2" },
  "6-2": { id: "main_ch6_2", title: "主線 CH6 6-2 結婚抉擇", name: "6-2", bg: "ms_bg_street.png", bgm: "flags_drama.mp3", next: "main_ch6_3" },
  "6-3": { id: "main_ch6_3", title: "主線 CH6 6-3 逃亡與希望", name: "6-3", bg: "ms_bg_horses_knee.png", bgm: "next_to_you_emotional.mp3", next: "main_ch6_4" },
  "6-4": { id: "main_ch6_4", title: "主線 CH6 6-4 婚禮與終章", name: "6-4", bg: "ms_bg_wedding.png", bgm: "next_to_you_emotional.mp3", next: "main_ch7_1" },
  "7-1": { id: "main_ch7_1", title: "主線 CH7 7-1 東山篇", name: "7-1", bg: "ms_bg_street_day.png", bgm: "bossa_casual_shop.mp3", next: "main_ch7_2" },
  "7-2": { id: "main_ch7_2", title: "主線 CH7 7-2 聖典與ANIsister", name: "7-2", bg: "ms_bg_bookstore_a_interior.png", bgm: "twists_suspense.mp3", next: "main_ch7_3" },
  "7-3": { id: "main_ch7_3", title: "主線 CH7 7-3 集合與突破", name: "7-3", bg: "ms_bg_street_day.png", bgm: "dark_alleys_tension.ogg", next: "main_ch7_4" },
  "7-4": { id: "main_ch7_4", title: "主線 CH7 7-4 劫車作戰", name: "7-4", bg: "ms_bg_maid_cafe.png", bgm: "battle_theme_a.mp3", next: "main_ch7_5" },
  "7-5": { id: "main_ch7_5", title: "主線 CH7 7-5 昭告天下", name: "7-5", bg: "ms_bg_street_day.png", bgm: "next_to_you_emotional.mp3", next: null },
};

const characterExchanges = {
  "1-3": { floorId: "mapo_1_3_exchange_1" },
  "2-4": { floorId: "main_ch2_4_exchange_1" },
  "3-1": { floorId: "main_ch3_1_exchange_1" },
  "5-1": { floorId: "main_ch5_1_exchange_1", targetCount: 2 },
};

const backgroundAssets = [
  { name: "車站", image: "ms_bg_station.png", placeholder: "scene_station.png" },
  { name: "秋葉原車站", image: "ms_bg_station_akihabara.png", placeholder: "ms_bg_station.png" },
  { name: "街道", image: "ms_bg_street.png", placeholder: "scene_street.png" },
  { name: "街道(日)", image: "ms_bg_street_day.png", placeholder: "ms_bg_street.png" },
  { name: "鐵道倉庫區(日)", image: "ms_bg_warehouse_district_day.png", placeholder: "ms_bg_warehouse_district.png" },
  { name: "麻婆豆腐店", image: "ms_bg_mapo_shop.png", placeholder: "scene_mapo_shop.png" },
  { name: "中華料理店內部", image: "ms_bg_mapo_shop_interior.png", placeholder: "ms_bg_mapo_shop.png" },
  { name: "中式料理節目背景", image: "ms_bg_chinese_cooking_show.png", placeholder: "ms_bg_tournament_venue.png" },
  { name: "大賽場地", image: "ms_bg_tournament_venue.png", placeholder: "scene_tournament.png" },
  { name: "咖啡廳", image: "ms_bg_cafe.png", placeholder: "scene_mapo_shop.png" },
  { name: "兔子咖啡廳內部", image: "ms_bg_cafe_rabbit_interior.png", placeholder: "ms_bg_cafe.png" },
  { name: "便利商店", image: "ms_bg_convenience_store.png", placeholder: "scene_mapo_shop.png" },
  { name: "商業地點內部(明亮)", image: "ms_bg_commercial_interior_day.png", placeholder: "ms_bg_convenience_store.png" },
  { name: "河邊", image: "ms_bg_riverside.png", placeholder: "scene_street.png" },
  { name: "河邊(夜)", image: "ms_bg_riverside_night.png", placeholder: "ms_bg_riverside.png" },
  { name: "書店A", image: "ms_bg_bookstore_a.png", placeholder: "scene_street.png" },
  { name: "倉庫", image: "ms_bg_warehouse.png", placeholder: "scene_street.png" },
  { name: "家庭餐廳", image: "ms_bg_family_restaurant.png", placeholder: "scene_mapo_shop.png" },
  { name: "倉庫區", image: "ms_bg_warehouse_district.png", placeholder: "scene_street.png" },
  { name: "遊戲中心", image: "ms_bg_arcade.png", placeholder: "scene_tournament.png" },
  { name: "書店A內部", image: "ms_bg_bookstore_a_interior.png", placeholder: "scene_street.png" },
  { name: "美術館", image: "ms_bg_museum.png", placeholder: "scene_tournament.png" },
  { name: "馬的膝蓋", image: "ms_bg_horses_knee.png", placeholder: "scene_street.png" },
  { name: "街道(夜)", image: "ms_bg_street_night.png", placeholder: "scene_street.png" },
  { name: "酒吧", image: "ms_bg_bar.png", placeholder: "scene_mapo_shop.png" },
  { name: "訓練室", image: "ms_bg_training_room.png", placeholder: "scene_tournament.png" },
  { name: "家庭餐廳內部", image: "ms_bg_family_restaurant_interior.png", placeholder: "scene_mapo_shop.png" },
  { name: "COMIKE倒三角建築", image: "ms_bg_tokyo_big_sight.png", placeholder: "scene_tournament.png" },
  { name: "高級餐廳", image: "ms_bg_fine_dining.png", placeholder: "scene_mapo_shop.png" },
  { name: "醫院", image: "ms_bg_hospital.png", placeholder: "scene_street.png" },
  { name: "鐵道", image: "ms_bg_railway.png", placeholder: "scene_street.png" },
  { name: "貝琪宅邸", image: "ms_bg_becky_mansion.png", placeholder: "scene_street.png" },
  { name: "車上", image: "ms_bg_vehicle_interior.png", placeholder: "scene_street.png" },
  { name: "僕咖", image: "ms_bg_maid_cafe.png", placeholder: "scene_mapo_shop.png" },
  { name: "婚禮", image: "ms_bg_wedding.png", placeholder: "scene_tournament.png" },
  { name: "LIVE大舞台", image: "ms_bg_live_stage.png", placeholder: "scene_tournament.png" },
  { name: "派出所", image: "ms_bg_police_station.png", placeholder: "scene_street.png" },
  { name: "手機簡訊", image: "ms_bg_phone_message.png", placeholder: "ms_bg_street.png" },
  { name: "帶頭紗貝琪微笑泛淚", image: "CH7_L1310.png", placeholder: "ms_bg_wedding.png" },
  { name: "東山與小夥伴們出攤", image: "ms_bg_higashiyama_booth.png", placeholder: "ms_bg_tokyo_big_sight.png" },
  { name: "表妹與一排人打小鋼珠", image: "ms_bg_pachinko_group.png", placeholder: "ms_bg_arcade.png" },
  { name: "克莉絲跟幾個人划龍舟", image: "ms_bg_dragon_boat.png", placeholder: "ms_bg_riverside.png" },
  { name: "桶至教官訓練一排人萌耶萌耶啾", image: "ms_bg_training_group.png", placeholder: "ms_bg_training_room.png" },
  { name: "梗平與貝琪與誰一起假面騎士變身", image: "ms_bg_keng_becky_transform.png", placeholder: "ms_bg_wedding.png" },
  { name: "蘭斯跟不知道 大凶角?", image: "ms_bg_lance_unknown_corner.png", placeholder: "ms_bg_street_night.png" },
  { name: "用塑膠盒裝著的切好的綜合水果盤：放了一個晚上被窗外的朝陽照到的水果", image: "ms_bg_fruit_box_sunrise.png", placeholder: "ms_bg_street_day.png" },
  { name: "等著填", image: "ms_bg_tbd.png", placeholder: "ms_bg_street_day.png" },
];
const bgByName = new Map(backgroundAssets.map(({ name, image }) => [name, image]));
const backgroundAliases = {
  "河邊(日)": "河邊",
  "泛用書店內部(明亮)": "書店A內部",
  "泛用書店內部(昏暗)": "書店A內部",
  "群組訊息背景": "街道",
  "團練室": "訓練室",
  "電子遊樂場內部": "遊戲中心",
  "美術館內部": "美術館",
  "掛著畫的休息室": "美術館",
  "裡世界的休息室": "美術館",
  "鐵道倉庫區(夜)": "倉庫區",
  "泛用車內": "車上",
  "貝琪莊園": "貝琪宅邸",
  "女僕咖啡廳內部": "僕咖",
  "便利商店內部": "便利商店",
  "泛用街道(日)": "街道(日)",
  "泛用街道(夜)": "街道(夜)",
  "結婚式場": "婚禮",
};
for (const [alias, canonical] of Object.entries(backgroundAliases)) {
  bgByName.set(alias, bgByName.get(canonical));
}
bgByName.set("河邊(夜))", bgByName.get("河邊(夜)"));

const actionCgByName = {
  "麻婆豆腐店門口": { image: "ms_ch1_mapo_shop_entrance_action_cg.png", sloc: [0, 0, 416, 286] },
  "店門口的沙丁魚們": { image: "ms_ch1_mapo_shop_entrance_action_cg.png", sloc: [0, 0, 416, 286] },
  "梗平參戰": { image: "ms_ch1_keng_join_action_cg.png", sloc: [0, 0, 416, 286] },
  "2.5梗平": { image: "ms_ch1_keng_2_5_action_cg.png", sloc: [0, 0, 416, 286] },
  "放大的鱷魚圖": { image: "ms_ch1_thunder_crocodile_action_cg.png", sloc: [0, 0, 416, 286] },
  "雷霆大鱷魚與梗平對峙": { image: "ms_ch1_thunder_crocodile_action_cg.png", sloc: [0, 0, 416, 286] },
  "梗平被腳踏車撞飛": { image: "ms_ch2_keng_bicycle_action_cg.png", sloc: [0, 0, 416, 286] },
  "夕陽下的神祕少女": { image: "ms_ch2_eri_sunset_action_cg.png", sloc: [0, 0, 416, 286] },
};

const actionGifByName = {
  "梗平參戰": { image: "ms_ch1_keng_join_action_cg.png", sloc: [0, 0, 416, 286] },
};

const persistentCgByName = {
  "手機簡訊": { image: "ms_ch1_phone_message_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "梗平躲到表妹身後": { image: "ms_ch1_keng_hiding_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "黑衣人": { image: "ms_ch1_black_coat_men_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "中華料理店門口": { image: "ms_ch1_mapo_shop_entrance_action_cg.png", sloc: [0, 0, 416, 286] },
  "一中華大碗紅色液體": { image: "ms_ch1_red_mapo_bowl_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "梗平參戰": { image: "ms_ch1_keng_join_action_cg.png", sloc: [0, 0, 416, 286] },
  "梗平VS宿儺": { image: "ms_ch1_keng_vs_sukuna_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "2.5梗平": { image: "ms_ch1_keng_2_5_action_cg.png", sloc: [0, 0, 416, 286] },
  "小兔子黑暗無限破": { image: "ms_ch1_rabbit_attack_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "紙箱": { image: "ms_ch1_cardboard_box_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "紙箱人梗平": { image: "ms_ch1_cardboard_keng_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "小丑": { image: "ms_ch1_clown_cg.png", sloc: [0, 65, 416, 286], placeholder: true },
  "鱷魚": { image: "ms_ch1_thunder_crocodile_action_cg.png", sloc: [0, 0, 416, 286] },
};

const requiredActionCgImages = [
  "ms_ch1_mapo_shop_entrance_action_cg.png",
  "ms_ch1_keng_join_action_cg.png",
  "ms_ch1_keng_2_5_action_cg.png",
  "ms_ch1_thunder_crocodile_action_cg.png",
  "ms_ch2_keng_bicycle_action_cg.png",
  "ms_ch2_eri_sunset_action_cg.png",
];
const requiredActionCgPairs = new Map([
  ["ms_ch1_mapo_shop_entrance_cg.png", "ms_ch1_mapo_shop_entrance_action_cg.png"],
  ["ms_ch1_keng_join_cg.png", "ms_ch1_keng_join_action_cg.png"],
  ["ms_ch1_keng_2_5_cg.png", "ms_ch1_keng_2_5_action_cg.png"],
  ["ms_ch1_thunder_crocodile_cg.png", "ms_ch1_thunder_crocodile_action_cg.png"],
  ["ms_ch2_keng_bicycle_cg.png", "ms_ch2_keng_bicycle_action_cg.png"],
  ["ms_ch2_eri_sunset_cg.png", "ms_ch2_eri_sunset_action_cg.png"],
]);

const placeholderAssets = [
  ["project/images/scene_mapo_cg.png", "project/images/ms_ch1_mapo_shop_entrance_cg.png"],
  ["project/images/scene_badend.png", "project/images/ms_ch1_keng_2_5_cg.png"],
  ["project/images/scene_badend.png", "project/images/ms_ch1_thunder_crocodile_cg.png"],
  ["project/images/scene_tournament.png", "project/images/ms_ch1_keng_join_cg.png"],
  ["project/bgms/spacetime_mystery.mp3", "project/bgms/ms_ch2_gallery_opening.mp3"],
];

const extraImages = [
  ...mainStoryAssetImages,
  ...PORTRAIT_ASSETS,
  ...backgroundAssets.map(({ image }) => image),
  ...Object.values(persistentCgByName).map(({ image }) => image),
  "ms_ch1_mapo_shop_entrance_cg.png",
  "ms_ch1_keng_2_5_cg.png",
  "ms_ch1_thunder_crocodile_cg.png",
  "ms_ch1_keng_join_cg.png",
  "ms_ch1_mapo_shop_entrance_action_cg.png",
  "ms_ch1_keng_2_5_action_cg.png",
  "ms_ch1_thunder_crocodile_action_cg.png",
  "ms_ch1_keng_join_action_cg.png",
  "ms_ch2_keng_bicycle_action_cg.png",
  "ms_ch2_eri_sunset_action_cg.png",
];

const extraBgms = ["ms_ch2_gallery_opening.mp3"];

const knownSpeakers = new Map([
  ["梗", "梗平"],
  ["梗平", "梗平"],
  ["梗？", "不知道是誰的梗？"],
  ["妹", "表妹"],
  ["表妹", "表妹"],
  ["Ａ", "友人A"],
  ["A", "友人A"],
  ["B", "友人B"],
  ["Ｃ", "友人C"],
  ["C", "友人C"],
  ["三", "三角"],
  ["智", "智乃"],
  ["柯", "柯南"],
  ["IB", "IB"],
  ["麻", "麻婆店長"],
  ["芹", "芹澤"],
  ["宿", "宿儺"],
  ["d", "迪奧"],
  ["路A", "路人A"],
  ["路B", "路人B"],
  ["記者", "記者"],
  ["李嚴", "李嚴"],
  ["哥", "哥吉拉"],
  ["員", "店員"],
  ["肥", "肥宅"],
  ["貝", "貝琪"],
  ["警", "警察"],
  ["統", "統至"],
  ["腐", "腐妞"],
  ["官", "色情刊物檢官"],
  ["鈴", "鈴仙"],
  ["修", "修女"],
  ["店", "書店A店長"],
  ["416", "416"],
  ["松", "不知道是誰的松"],
  ["416(對講機)", "416(對講機)"],
  ["？", "不知道是誰的？"],
  ["？(店員)", "不知道是誰的？(店員)"],
  ["丑？", "不知道是誰的丑？"],
]);

const uncertainSpeakers = new Set();
const storyTodos = new Set();
const AVG_TEXT_FONTS = { small: 12, normal: 16, large: 24, extraLarge: 32 };

function fwToHalfNumber(text) {
  return text.replace(/[０-９１２３４５６７８９]/g, (ch) => {
    const table = "０１２３４５６７８９";
    const idx = table.indexOf(ch);
    if (idx >= 0) return String(idx);
    return ({ "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9" })[ch] || ch;
  });
}

function readSections(file, options = {}) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n").split("\n");
  const sections = {};
  let current = null;
  for (let rawIndex = 0; rawIndex < raw.length; rawIndex++) {
    const line = raw[rawIndex];
    const m = line.trim().match(/^(\d+-\d+)$/);
    if (m) {
      current = m[1];
      sections[current] = [];
      sections[current].sourceLineNumbers = [];
      continue;
    }
    if (!current && options.implicitFirstSection && options.startMarker && options.startMarker.test(line.trim())) {
      current = options.implicitFirstSection;
      sections[current] = [];
      sections[current].sourceLineNumbers = [];
      continue;
    }
    if (current) {
      sections[current].push(line);
      sections[current].sourceLineNumbers.push(rawIndex + 1);
    }
  }
  return sections;
}

function sliceSection(lines, start, end) {
  const result = lines.slice(start, end);
  result.sourceLineNumbers = (lines.sourceLineNumbers || []).slice(start, end);
  return result;
}

function normalizeSourceLine(line) {
  return line
    .trim()
    .replace(/^【背景\s*[：:]\s*/, "【背景：")
    .replace(/^【CG\s*[：:]\s*/, "【CG：")
    .replace(/^【GIF\s*[：:]?\s*/, "【GIF ");
}

function setTextEvent(overrides = {}) {
  return {
    type: "setText",
    avg: true,
    position: "down",
    offset: 0,
    align: "left",
    bold: true,
    background: "winskin.png",
    title: [255, 225, 80, 1],
    text: [255, 255, 255, 1],
    titlefont: 22,
    textfont: 16,
    lineHeight: 22,
    fixedLines: AVG_LAYOUT.dialogueFixedLines,
    time: 10,
    letterSpacing: 0,
    animateTime: 120,
    ...overrides,
  };
}

function textFontFromDirective(text) {
  if (/更大字/.test(text)) return AVG_TEXT_FONTS.extraLarge;
  if (/大字/.test(text)) return AVG_TEXT_FONTS.large;
  if (/小字/.test(text)) return AVG_TEXT_FONTS.small;
  if (/一般/.test(text)) return AVG_TEXT_FONTS.normal;
  return null;
}

function actionCgEvents(spec) {
  return [
    {
      type: "showImage",
      code: 30,
      image: spec.image,
      sloc: [...spec.sloc],
      loc: [...CG_LOC],
      opacity: 1,
      time: 0,
    },
    { type: "sleep", time: 1000, noSkip: true },
    { type: "hideImage", code: 30, time: 0 },
  ];
}

function removeInlineProductionDirectives(body, ctx) {
  return body.replace(/【([^】]+)】/g, (whole, directive) => {
    if (directive === "想必是一個完美的笑容") {
      ctx.forceSmile = true;
      return "";
    }
    if (!/字體|立繪|替換|動畫|CG|GIF|背景|想必是一個完美的笑容/.test(directive)) return whole;
    storyTodos.add(`${ctx.source} ${ctx.section}：行內製作指令「【${directive}】」尚未轉成正式事件。`);
    return "";
  }).trim();
}

function isBracketedPhoneSpeaker(label) {
  const normalized = label.trim();
  return knownSpeakers.has(normalized)
    || ([...normalized].length <= 8 && !/[，。！？、]/.test(normalized));
}

function dialogueToEvents(rawName, rawBody, ctx, forcePhone = false) {
  let body = rawBody.trim();
  let phone = forcePhone;
  const phoneBody = body.match(/^\{(.*)\}$/);
  if (phoneBody) {
    body = phoneBody[1];
    phone = true;
  }
  body = removeInlineProductionDirectives(body, ctx);

  const display = knownSpeakers.get(rawName) || rawName;
  if (/^不知道是誰的/.test(display)) {
    uncertainSpeakers.add(`${ctx.source} ${ctx.section}：${display}（原始名稱：${rawName}）`);
  }
  let portrait = null;
  if (ctx.suppressPortraitCount > 0) {
    ctx.suppressPortraitCount -= 1;
  } else if (phone) {
    // Phone-message dialogue is text-only, regardless of whether a phone-message CG is visible.
  } else if (ctx.nextPortraitOverride) {
    portrait = resolvePortrait(ctx.nextPortraitOverride, expressionForDialogue(ctx.nextPortraitOverride, body));
    ctx.nextPortraitOverrideCount -= 1;
    if (ctx.nextPortraitOverrideCount <= 0) {
      ctx.nextPortraitOverride = null;
      ctx.nextPortraitOverrideCount = 0;
    }
  } else if (display === "東山") {
    const image = DONGSHAN_PORTRAIT_DECISIONS[body] || "dongshan_normal.png";
    const expression = image.match(/^dongshan_(.+)\.png$/)?.[1] || "normal";
    portrait = resolvePortrait(display, expression);
  } else {
    portrait = resolvePortrait(display, expressionForDialogue(display, body));
  }
  const textFont = ctx.nextTextFont;
  ctx.nextTextFont = null;
  ctx.forceSmile = false;
  const clearCg = ctx.cgVisible && !ctx.cgPersistent ? [{ type: "hideImage", code: 30, time: 150 }] : [];
  if (!ctx.cgPersistent) ctx.cgVisible = false;
  return [
    ...(textFont ? [setTextEvent({ textfont: textFont })] : []),
    ...clearCg,
    ...(portrait ? [portrait] : []),
    `\t[${display}]${body}`,
    ...(portrait ? [{ type: "hideImage", code: portrait.code, time: 0 }] : []),
    ...(textFont ? [setTextEvent({ textfont: AVG_TEXT_FONTS.normal })] : []),
  ];
}

function expressionForDialogue(speaker, body) {
  if (/笑|哈哈|開心|高興|太好了|嘻/.test(body)) return "smile";
  if (/怒|滾|閉嘴|混蛋|可惡|生氣/.test(body)) return "angry";
  if (/哭|悲|難過|嗚|眼淚/.test(body)) return "sad";
  if (/什麼|怎麼可能|真的假的|！|!/.test(body)) return "surprised";
  if (/怕|恐|救命|糟糕|危險|完蛋/.test(body)) return "panic";
  return "normal";
}

function resolveRegisteredAudio(rawName, registered, kind, ctx) {
  const mapped = findRegisteredAudio(rawName, registered);
  if (!mapped) {
    throw new Error(`${ctx.source} ${ctx.section}: unresolved ${kind} directive asset: ${rawName}`);
  }
  return mapped;
}

function findRegisteredAudio(rawName, registered) {
  const name = rawName.trim().replace(/^[「『"']|[」』"']$/g, "");
  const mapped = (PROJECT_MAIN.nameMap || {})[name] || name;
  if (registered.has(mapped)) return mapped;
  const stemMatches = [...registered].filter((filename) => path.parse(filename).name === mapped);
  return stemMatches.length === 1 ? stemMatches[0] : null;
}

function normalizeAudioDirective(text, ctx) {
  const bare = text.replace(/^【/, "").replace(/】$/, "").trim();
  if (/^(?:BGM暫停|暫停BGM|暫停背景音樂)$/i.test(bare)) return [{ type: "pauseBgm" }];
  if (/^(?:恢復BGM|繼續BGM|恢復背景音樂|繼續背景音樂)$/i.test(bare)) return [{ type: "resumeBgm" }];
  if (/^(?:停止音效|音效停止)$/i.test(bare)) return [{ type: "stopSound" }];

  const semanticBgm = {
    "(日常)": "bossa_casual_shop.mp3",
    "日常": "bossa_casual_shop.mp3",
    "(煽情)": "next_to_you_emotional.mp3",
    "煽情": "next_to_you_emotional.mp3",
    "(懸疑)": "twists_suspense.mp3",
    "懸疑": "twists_suspense.mp3",
    "(懸疑?)": "twists_suspense.mp3",
    "懸疑?": "twists_suspense.mp3",
    "(熱血)": "battle_theme_a.mp3",
    "熱血": "battle_theme_a.mp3",
  };
  const semantic = bare.match(/^BGM\s*[：:]\s*(.+)$/i);
  if (semantic && semanticBgm[semantic[1].trim()]) {
    return [{ type: "playBgm", name: resolveRegisteredAudio(semanticBgm[semantic[1].trim()], REGISTERED_BGMS, "BGM", ctx), keep: true }];
  }
  if (semantic) {
    const requested = semantic[1].trim();
    const mapped = findRegisteredAudio(requested, REGISTERED_BGMS);
    if (!mapped) {
      storyTodos.add(`${ctx.source} ${ctx.section}：${text} 未能對應已登錄 BGM，保留為非玩家可見演出待辦。`);
      return [{ type: "comment", text: `TODO: ${text}` }];
    }
    return [{ type: "playBgm", name: mapped, keep: true }];
  }

  let match = bare.match(/^(?:使用|播放|切換)\s*(?:BGM|背景音樂)(?:\s*[：:]\s*|\s+)(.+)$/i);
  if (match) return [{ type: "playBgm", name: resolveRegisteredAudio(match[1], REGISTERED_BGMS, "BGM", ctx), keep: true }];
  if (/^(?:使用|播放)\s*(?:BGM|背景音樂)$/i.test(bare)) {
    if (!ctx.defaultBgm) throw new Error(`${ctx.source} ${ctx.section}: BGM directive has no name or scene default`);
    return [{ type: "playBgm", name: resolveRegisteredAudio(ctx.defaultBgm, REGISTERED_BGMS, "BGM", ctx), keep: true }];
  }

  match = bare.match(/^(?:播放|使用)\s*音效(?:\s*[：:]\s*|\s+)(.+)$/i) || bare.match(/^使用\s*(.+?)\s*音效$/i);
  if (match) return [{ type: "playSound", name: resolveRegisteredAudio(match[1], REGISTERED_SOUNDS, "sound", ctx) }];
  if (/^播放\s*音效$/i.test(bare)) {
    throw new Error(`${ctx.source} ${ctx.section}: sound directive requires a registered filename or alias`);
  }
  return null;
}

function lineToEvents(line, ctx) {
  const t = normalizeSourceLine(line);
  if (!t) return [];

  const audio = normalizeAudioDirective(t, ctx);
  if (audio) return audio;

  if (/^【背景：/.test(t)) {
    const name = t.replace(/^【背景：/, "").replace(/】$/, "");
    const bg = bgByName.get(name);
    if (!bg) throw new Error(`${ctx.source} ${ctx.section}: unknown background directive: ${name}`);
    ctx.cgVisible = false;
    ctx.cgPersistent = false;
    return [
      { type: "hideImage", code: 30, time: 150 },
      { type: "showImage", code: 1, image: bg, loc: [...BACKGROUND_LOC], opacity: 1, time: 250 },
    ];
  }

  if (/^【CG：/.test(t)) {
    const { name, operation } = parseCgDirective(t);
    const actionCg = actionCgByName[name];
    if (actionCg && operation === "出現") {
      ctx.cgVisible = false;
      ctx.cgPersistent = false;
      const sourceCgImage = sourceCgImageFor(ctx, name);
      if (sourceCgImage) {
        ctx.cgVisible = true;
        ctx.cgPersistent = true;
        return [
          ...actionCgEvents(actionCg),
          { type: "showImage", code: 30, image: sourceCgImage, loc: [...CG_LOC], opacity: 1, time: 250 },
        ];
      }
      return actionCgEvents(actionCg);
    }
    if (actionCg && operation === "消失") return [];
    const sourceCgImage = sourceCgImageFor(ctx, name);
    if (sourceCgImage && operation === "出現") {
      ctx.cgVisible = true;
      ctx.cgPersistent = true;
      const legacyActionCg = persistentCgByName[name];
      const prefix = legacyActionCg && !legacyActionCg.placeholder && legacyActionCg.image.endsWith("_action_cg.png")
        ? actionCgEvents(legacyActionCg)
        : [];
      return [
        ...prefix,
        { type: "showImage", code: 30, image: sourceCgImage, loc: [...CG_LOC], opacity: 1, time: 250 },
      ];
    }
    if (operation === "消失") {
      ctx.cgVisible = false;
      ctx.cgPersistent = false;
      return [{ type: "hideImage", code: 30, time: 150 }];
    }
    if (operation === "出現") {
      const persistentCg = persistentCgByName[name];
      if (persistentCg) {
        if (persistentCg.placeholder) {
          storyTodos.add(`${ctx.source} ${ctx.section}：【CG：${name}】暫用 ${persistentCg.image}，需替換正式素材。`);
        }
        ctx.cgVisible = true;
        ctx.cgPersistent = true;
        return [
          { type: "showImage", code: 30, image: persistentCg.image, sloc: [...persistentCg.sloc], loc: [...CG_LOC], opacity: 1, time: 250 },
        ];
      }
      storyTodos.add(`${ctx.source} ${ctx.section}：【CG：${name} 出現】尚無專用素材，暫用 scene_mapo_cg.png。`);
      ctx.cgVisible = true;
      ctx.cgPersistent = true;
      return [{ type: "showImage", code: 30, image: "scene_mapo_cg.png", sloc: [...GENERAL_CG_SLOC], loc: [...CG_LOC], opacity: 1, time: 250 }];
    }
    if (actionCg) {
      ctx.cgVisible = false;
      ctx.cgPersistent = false;
      return actionCgEvents(actionCg);
    }
    const image = "scene_mapo_cg.png";
    storyTodos.add(`${ctx.source} ${ctx.section}：【CG：${name}】尚無專用素材，暫用 ${image}。`);
    ctx.cgVisible = true;
    ctx.cgPersistent = false;
    return [{ type: "showImage", code: 30, image, sloc: [...GENERAL_CG_SLOC], loc: [...CG_LOC], opacity: 1, time: 250 }];
  }

  if (/^【GIF /.test(t)) {
    const name = t.replace(/^【GIF\s*/, "").replace(/】$/, "");
    const actionCg = actionGifByName[name];
    if (actionCg) {
      ctx.cgVisible = false;
      ctx.cgPersistent = false;
      return actionCgEvents(actionCg);
    }
    const image = "ms_ch1_keng_join_cg.png";
    storyTodos.add(`${ctx.source} ${ctx.section}：【GIF ${name}】尚無專用素材，暫用 ${image}。`);
    ctx.cgVisible = true;
    ctx.cgPersistent = false;
    return [{ type: "showImage", code: 30, image, sloc: [...GENERAL_CG_SLOC], loc: [...CG_LOC], opacity: 1, time: 250 }];
  }

  if (/^【BE/.test(t) || /^【.*結束】$/.test(t) || /^【.*END.*】$/.test(t)) {
    return [{ type: "comment", text: t }];
  }

  if (/^[-—]+END[-—]+$/.test(t)) {
    return [{ type: "comment", text: t }];
  }

  if (/^【(?:人物交流時間|角色劇情時間)/.test(t)) {
    const exchange = characterExchanges[ctx.section];
    if (exchange) {
      return [
        { type: "comment", text: "人物交流回合：完成角色好感劇情後，進入交流後續 scene。" },
        {
          type: "function",
          function: `function () { core.plugin.beginCharacterExchange({ floorId: '${exchange.floorId}', loc: [6, 10], direction: 'up', time: 500 }${exchange.targetCount != null ? `, ${exchange.targetCount}` : ""}); }`,
        },
      ];
    }
    storyTodos.add(`${ctx.source} ${ctx.section}：${t} 尚未撰寫，已以文字標記保留。`);
    return [{ type: "comment", text: `TODO: ${t}` }];
  }

  if (t === "【播放炫酷的結尾小動畫】") {
    storyTodos.add(`${ctx.source} ${ctx.section}：${t} 尚未製作正式結尾動畫，目前用既有轉場影片事件暫代。`);
    return [{ type: "playTransitionVideo" }];
  }

  const wait = t.match(/^【等待\s*([0-9]+(?:\.[0-9]+)?)\s*秒】$/);
  if (wait) return [{ type: "sleep", time: Math.round(Number(wait[1]) * 1000) }];

  if (/^【(?:下一句|下一句話|下句|下面一句|下面一句話|下兩句|下兩句話|下面兩句|下面兩句話|下五句|下五句話).*不(?:需)?使用立繪】$/.test(t)) {
    ctx.suppressPortraitCount = /下五句/.test(t) ? 5 : /兩句/.test(t) ? 2 : 1;
    const font = textFontFromDirective(t);
    if (font) ctx.nextTextFont = font;
    return [];
  }
  const fontDirective = t.match(/^【(?!(?:下方兩句明日頭條))(?:(?:下一句|下一句話|下句|下句台詞|下句字體|下句台詞字體))[^】]*(更大字|大字|小字|一般)[^】]*】$/);
  if (fontDirective) {
    ctx.nextTextFont = textFontFromDirective(t);
    return [];
  }
  if (t === "【有BGM的話由爆炸聲終止】") return [{ type: "pauseBgm" }];
  if (t === "【下面一句話使用麻婆作為立繪】") {
    ctx.nextPortraitOverride = "麻婆店長";
    ctx.nextPortraitOverrideCount = 1;
    return [];
  }
  if (t === "【下一句話使用三角作為立繪】") {
    ctx.nextPortraitOverride = "三角";
    ctx.nextPortraitOverrideCount = 1;
    return [];
  }
  if (t === "【下兩句話使用三日月作為立繪】") {
    ctx.nextPortraitOverride = "三日月";
    ctx.nextPortraitOverrideCount = 2;
    return [];
  }
  if (t === "【下一句？？？使用雜貨店老闆立繪】") {
    ctx.nextPortraitOverride = "雜貨店老闆";
    ctx.nextPortraitOverrideCount = 1;
    return [];
  }

  if (t === "【後日談時間】") {
    storyTodos.add(`${ctx.source} ${ctx.section}：${t} 尚未撰寫，已以文字標記保留。`);
    return [{ type: "comment", text: `TODO: ${t}` }];
  }

  if (/^\[END：/.test(t)) return [t.replace(/^\[/, "【").replace(/\]$/, "】")];

  const wrappedDirective = t.match(/^\[【([^】]+)】\]$/);
  if (wrappedDirective) return lineToEvents(`【${wrappedDirective[1]}】`, ctx);

  const bracketedDialogue = t.match(/^\[([^\[\]]+?)[：:](.*)\]$/);
  if (bracketedDialogue && isBracketedPhoneSpeaker(bracketedDialogue[1])) {
    return dialogueToEvents(bracketedDialogue[1].trim(), bracketedDialogue[2], ctx, true);
  }

  if (/^\[.*\]$/.test(t)) return [t.slice(1, -1)];

  if (/^【.*(?:立繪|替換|字體|動畫|小遊戲).*】$/.test(t)) {
    storyTodos.add(`${ctx.source} ${ctx.section}：製作指令「${t}」尚未轉成正式事件。`);
    return [{ type: "comment", text: `TODO: ${t}` }];
  }

  if (/^【.*(?:大字|小字|更大字|頭條|公告文|濾鏡|有BGM|製作名單|少女讀取|白色慢速).*】$/.test(t)) {
    storyTodos.add(`${ctx.source} ${ctx.section}：製作指令「${t}」尚未轉成正式事件。`);
    return [{ type: "comment", text: `TODO: ${t}` }];
  }

  if (/^【[^】]+】$/.test(t)) {
    return [{ type: "comment", text: t }];
  }

  if (/^\(.+\)$/.test(t)) {
    const mediaName = t.slice(1, -1).trim();
    if (actionCgByName[mediaName]) {
      ctx.cgVisible = false;
      return actionCgEvents(actionCgByName[mediaName]);
    }
    if (/鴿子|沒打完|補|自己補|可以再追加|OOO|音樂|嘆息|小遊戲|動畫|後日談|人物交流/.test(t)) storyTodos.add(`${ctx.source} ${ctx.section}：${t}`);
    if (/美術館開場的音樂/.test(t)) {
      return [{ type: "playBgm", name: "ms_ch2_gallery_opening.mp3", keep: true }, t];
    }
    return [t];
  }

  const colon = t.match(/^(.+?)[：:](.*)$/);
  if (colon) {
    const rawName = colon[1].trim();
    return dialogueToEvents(rawName, colon[2], ctx);
  }

  return [t];
}

function branchLabel(line) {
  const m = fwToHalfNumber(line.trim()).match(/^([0-9]+)[.．]?\s*$/);
  return m ? m[1] : null;
}

function optionLine(line) {
  const m = fwToHalfNumber(line.trim()).match(/^([0-9]+)[.．]\s*(.+)$/);
  return m ? { num: m[1], text: m[2].trim() } : null;
}

function targetFloor(ref) {
  const key = fwToHalfNumber(ref);
  return floors[key] && floors[key].id;
}

function hasChangeFloor(events) {
  return events.some((event) => {
    if (event && typeof event === "object" && event.type === "changeFloor") return true;
    if (event && typeof event === "object" && event.type === "choices") return event.choices.some((c) => hasChangeFloor(c.action || []));
    return false;
  });
}

function hasTopLevelChangeFloor(events) {
  return events.some((event) => event && typeof event === "object" && event.type === "changeFloor");
}

function containsEnd(events) {
  const text = JSON.stringify(events);
  return /BE|END|錯過|失去.*權利|Comike早已結束|COMIKE早已結束|comike早已結束|鴿子|嘆息寫|暫未實作/.test(text);
}

function parseEvents(lines, start, ctx, stopLabels = null) {
  const events = [];
  let i = start;
  while (i < lines.length) {
    const t = lines[i].trim();
    const bl = branchLabel(t);
    if (stopLabels && bl && stopLabels.has(bl)) break;
    if (!t) {
      i++;
      continue;
    }
    if (/^分[歧岐]選項/.test(t)) {
      const parsed = parseChoice(lines, i, ctx, stopLabels);
      events.push(parsed.choice);
      i = parsed.index;
      continue;
    }
    const link = t.match(/^【接(?:續)?([0-9１２３４５６７８９]+-[0-9１２３４５６７８９]+)】$/);
    if (link) {
      const floorId = targetFloor(link[1]);
      if (floorId) events.push({ type: "changeFloor", floorId, loc: [6, 10], direction: "up", time: 500 });
      return { events, index: i + 1, stoppedByMarker: true };
    }
    if (/^【返回分歧選項】$/.test(t)) {
      events.push({ type: "changeFloor", floorId: ctx.floorId, loc: [6, 10], direction: "up", time: 0 });
      return { events, index: i + 1, stoppedByMarker: true };
    }
    if (/^【(?:劇情推進|(?:進到)?推進劇情)】$/.test(t)) {
      return { events, index: i + 1, stoppedByMarker: true };
    }
    ctx.chapter = ctx.chapter || ctx.source.match(/CH(\d+)/)?.[1];
    ctx.lineNumber = (ctx.sourceLineNumbers && ctx.sourceLineNumbers[i]) || i + 1;
    events.push(...lineToEvents(lines[i], ctx));
    i++;
  }
  return { events, index: i, stoppedByMarker: false };
}

function parseChoice(lines, start, ctx, parentStopLabels = null) {
  let i = start + 1;
  const options = [];
  while (i < lines.length) {
    const t = lines[i].trim();
    if (!t) {
      i++;
      if (options.length) break;
      continue;
    }
    const opt = optionLine(t);
    if (!opt) break;
    options.push(opt);
    i++;
  }
  while (i < lines.length && !lines[i].trim()) i++;

  const nums = new Set(options.map((o) => o.num));
  const choices = [];

  const firstLabel = branchLabel(lines[i] || "");
  if (!firstLabel || !nums.has(firstLabel)) {
    const fallbackText = options.map((o) => o.text).join(" / ");
    if (/美術館/.test(fallbackText)) {
      const first = parseEvents(lines, i, ctx, parentStopLabels);
      choices.push({ text: options[0].text, action: first.events.concat({ type: "changeFloor", floorId: ctx.floorId, loc: [6, 10], direction: "up", time: 0 }) });
      for (const opt of options.slice(1)) {
        storyTodos.add(`${ctx.source} ${ctx.section}：分歧「${opt.text}」尚未撰寫，暫回到本場景。`);
        choices.push({ text: opt.text, action: [`【TODO】${opt.text} 尚未撰寫。`, { type: "changeFloor", floorId: ctx.floorId, loc: [6, 10], direction: "up", time: 0 }] });
      }
      return { choice: { type: "choices", text: "請選擇接下來的地點。", choices }, index: first.index };
    }
    return { choice: { type: "choices", text: "請選擇。", choices: options.map((o) => ({ text: o.text, action: [`【TODO】分歧「${o.text}」尚未接入。`] })) }, index: i };
  }

  for (const opt of options) {
    while (i < lines.length && !lines[i].trim()) i++;
    if (branchLabel(lines[i] || "") !== opt.num) {
      choices.push({ text: opt.text, action: [`【TODO】分歧「${opt.text}」尚未撰寫。`, { type: "changeFloor", floorId: ctx.floorId, loc: [6, 10], direction: "up", time: 0 }] });
      continue;
    }
    i++;
    const parsed = parseEvents(lines, i, ctx, nums);
    let action = parsed.events;
    if (containsEnd(action) && !hasChangeFloor(action)) {
      action = action.concat({ type: "changeFloor", floorId: ctx.floorId, loc: [6, 10], direction: "up", time: 0 });
    }
    choices.push({ text: opt.text, action });
    i = parsed.index;
  }

  return { choice: { type: "choices", text: "請選擇。", choices }, index: i };
}

function buildFloor(section, lines, overrides = {}) {
  const meta = { ...floors[section], ...overrides };
  const chapter = section.split("-")[0];
  const ctx = {
    floorId: meta.id,
    bg: meta.bg,
    defaultBgm: meta.bgm,
    source: `project/mainStory/CH${chapter}`,
    section,
    chapter,
    sourceLineNumbers: lines.sourceLineNumbers || [],
    cgVisible: false,
    cgPersistent: false,
    suppressPortraitCount: 0,
    nextPortraitOverride: null,
    nextPortraitOverrideCount: 0,
  };
  const parsed = parseEvents(lines, 0, ctx);
  const events = [
    setTextEvent(),
    { type: "playBgm", name: meta.bgm },
    { type: "showImage", code: 1, image: meta.bg, loc: [...BACKGROUND_LOC], opacity: 1, time: 0 },
    { type: "comment", text: `【${meta.title}】` },
    ...parsed.events,
  ];
  if (meta.next && !hasTopLevelChangeFloor(events.slice(-8))) {
    events.push({ type: "playTransitionVideo" }, { type: "changeFloor", floorId: meta.next, loc: [6, 10], direction: "up", time: 0 });
  }

  const floor = {
    floorId: meta.id,
    title: meta.title,
    name: meta.name,
    canFlyTo: false,
    canFlyFrom: false,
    canUseQuickShop: false,
    cannotViewMap: true,
    defaultGround: "ground",
    images: [
      { name: meta.bg, canvas: "bg", x: 0, y: 0 },
    ],
    bgm: meta.bgm,
    ratio: 1,
    map: MAP,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    firstArrive: [],
    eachArrive: events,
    parallelDo: "",
    events: {},
    changeFloor: {},
    beforeBattle: {},
    afterBattle: {},
    afterGetItem: {},
    afterOpenDoor: {},
    autoEvent: {},
    cannotMove: {},
    cannotMoveIn: {},
    bgmap: [],
    fgmap: [],
  };

  validateGeneratedFloor(floor);
  return floor;
}

function renderFloor(floor) {
  return `main.floors.${floor.floorId}=\n${JSON.stringify(floor, null, 4)}\n`;
}

function readFloor(file) {
  const text = fs.readFileSync(file, "utf8");
  return JSON.parse(text.slice(text.indexOf("{")));
}

function walkEvents(events, visitor) {
  for (const event of events || []) {
    visitor(event);
    if (!event || typeof event !== "object") continue;
    if (event.type === "choices") {
      for (const choice of event.choices || []) walkEvents(choice.action, visitor);
    }
    if (Array.isArray(event.data)) walkEvents(event.data, visitor);
    if (Array.isArray(event.true)) walkEvents(event.true, visitor);
    if (Array.isArray(event.false)) walkEvents(event.false, visitor);
  }
}

function validateGeneratedFloor(floor) {
  validateAvgFloorDimensions(floor);
  walkEvents(floor.eachArrive, (event) => {
    if (typeof event === "string" && /^【(?:CG|GIF|背景)\s*[：:]/.test(event)) {
      throw new Error(`${floor.floorId}: player-visible production directive: ${event}`);
    }
  });
}

function ensureAssets() {
  throw new Error("ensureAssets is disabled: assets and registrations are Agent-managed; this emitter must not create placeholders.");
  /* Legacy implementation retained only for migration reference; it must not run. */
  for (const [src, dest] of placeholderAssets) {
    const from = p(...src.split("/"));
    const to = p(...dest.split("/"));
    if (!fs.existsSync(to)) fs.copyFileSync(from, to);
  }
  for (const { image, placeholder } of backgroundAssets) {
    const from = p("project", "images", placeholder);
    const to = p("project", "images", image);
    if (!fs.existsSync(to)) fs.copyFileSync(from, to);
  }
  for (const { image, placeholder } of Object.values(persistentCgByName)) {
    if (!placeholder) continue;
    const from = p("project", "images", "scene_mapo_cg.png");
    const to = p("project", "images", image);
    if (!fs.existsSync(to)) fs.copyFileSync(from, to);
  }
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function pngSize(file) {
  const data = fs.readFileSync(file);
  if (data.length < 24 || data.toString("ascii", 1, 4) !== "PNG") throw new Error(`Not a PNG file: ${file}`);
  return [data.readUInt32BE(16), data.readUInt32BE(20)];
}

function validateActionCgSync() {
  const manifestFile = p("project", "action-cg-manifest.json");
  if (!fs.existsSync(manifestFile)) {
    throw new Error("Missing project/action-cg-manifest.json; run python scripts/build_action_cgs.py");
  }
  const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
  if (manifest.version !== 1 || manifest.targetRatio !== "16:11" || (manifest.outputSize || []).join(",") !== "416,286") {
    throw new Error("Action-CG manifest contract is stale; run python scripts/build_action_cgs.py");
  }
  const actualPairs = new Map();
  for (const entry of manifest.assets || []) {
    if (actualPairs.has(entry.master)) throw new Error(`Duplicate action-CG master in manifest: ${entry.master}`);
    actualPairs.set(entry.master, entry.output);
    const master = p("project", "images", entry.master);
    const output = p("project", "images", entry.output);
    if (!fs.existsSync(master) || !fs.existsSync(output)) throw new Error(`Missing action-CG pair: ${entry.master} -> ${entry.output}`);
    if (sha256(master) !== entry.masterSha256) throw new Error(`Action-CG master changed; run python scripts/build_action_cgs.py: ${entry.master}`);
    if (sha256(output) !== entry.outputSha256) throw new Error(`Generated action CG is stale; run python scripts/build_action_cgs.py: ${entry.output}`);
    if (pngSize(output).join(",") !== "416,286" || (entry.outputSize || []).join(",") !== "416,286") {
      throw new Error(`Action CG must be 416x286: ${entry.output}`);
    }
  }
  if (actualPairs.size !== requiredActionCgPairs.size) throw new Error("Action-CG manifest asset count is stale");
  for (const [master, output] of requiredActionCgPairs) {
    if (actualPairs.get(master) !== output) throw new Error(`Action-CG manifest is missing ${master} -> ${output}`);
  }
}

function updateData() {
  throw new Error("updateData is disabled: runtime registrations are Agent-managed and this emitter is read-only except for floor output.");
  /* Legacy implementation retained only for migration reference; it must not run. */
  const file = p("project", "data.js");
  let text = fs.readFileSync(file, "utf8");
  const mainStoryOrder = Object.values(floors).map((meta) => meta.id);
  const floorIdsMatch = text.match(/"floorIds": \[\n([\s\S]*?)\n\t\t\]/);
  if (!floorIdsMatch) throw new Error("Cannot locate floorIds in project/data.js");
  const currentFloorIds = Array.from(floorIdsMatch[1].matchAll(/"([^"]+)"/g)).map((m) => m[1]);
  const remove = new Set(mainStoryOrder);
  const reordered = currentFloorIds.filter((id) => !remove.has(id));
  const mt0Index = reordered.indexOf("MT0");
  const insertAt = mt0Index >= 0 ? mt0Index + 1 : reordered.length;
  reordered.splice(insertAt, 0, ...mainStoryOrder);
  const floorIdsBlock = `"floorIds": [\n${reordered.map((id) => `\t\t\t"${id}"`).join(",\n")}\n\t\t]`;
  text = text.replace(/"floorIds": \[\n[\s\S]*?\n\t\t\]/, floorIdsBlock);
  for (const id of mainStoryOrder) {
    if (!text.includes(`"${id}"`)) {
      throw new Error(`Failed to insert ${id} into floorIds`);
    }
  }
  for (const img of extraImages) {
    if (!text.includes(`"${img}"`)) {
      text = text.replace(/("scene_mapo_cg\.png",)/, `$1\n\t\t\t"${img}",`);
    }
  }
  for (const bgm of extraBgms) {
    if (!text.includes(`"${bgm}"`)) {
      text = text.replace(/("warped_surreal\.mp3")/, `$1,\n\t\t\t"${bgm}"`);
    }
  }
  text = text.replace(/"title": "麻婆豆腐"/, `"title": "秋葉原之旅"`);
  fs.writeFileSync(file, text, "utf8");
}

function updateTimeline() {
  throw new Error("updateTimeline is disabled: timeline metadata is Agent-managed and this emitter is read-only except for floor output.");
  /* Legacy implementation retained only for migration reference; it must not run. */
  const chapterTitles = {
    1: "CH1 麻婆豆腐篇",
    2: "CH2 三過書店而不入篇",
    3: "CH3 自爆篇",
    4: "CH4 搶火車篇",
    5: "CH5 五日無戰事篇",
    6: "CH6 結婚篇",
    7: "CH7 東山篇",
  };
  const chapters = Object.entries(chapterTitles).map(([chapter, title]) => {
    const nodes = Object.entries(floors)
      .filter(([section]) => section.startsWith(`${chapter}-`))
      .map(([section, meta]) => ({
        id: meta.id,
        title: `${section} ${meta.title.replace(/^主線 CH\d+ \d+-\d+ /, "")}`,
        floorId: meta.id,
        image: meta.bg,
        ...(section === "1-1" ? { alwaysUnlocked: true } : {}),
        ...(meta.next ? { next: meta.next } : {}),
      }));
    return { id: `main_ch${chapter}`, title, nodes };
  });

  const timeline = {
    title: "章節時間線",
    subtitle: "秋葉原之旅",
    defaultLoc: [6, 10],
    defaultDirection: "up",
    changeFloorTime: 500,
    nodeGap: 188,
    laneGap: 126,
    chapterPadding: 72,
    allowUnvisited: true,
    chapters,
  };
  fs.writeFileSync(p("project", "timeline.json"), JSON.stringify(timeline, null, "\t") + "\n", "utf8");
}

function updateTodo() {
  throw new Error("updateTodo is disabled: TODO is Agent-managed and must never be regenerated by the emitter.");
  /* Legacy implementation retained only for migration reference; it must not run. */
  const people = Array.from(uncertainSpeakers).sort();
  const todoLines = [
    "# 主線 TODO",
    "",
    "主線劇本轉換或補寫時，TODO、待確認人物、缺素材與未定演出統一記錄在這裡。不要只把待辦寫在對話框內。",
    "",
    "## 待確認人物",
    "",
    ...people.map((x) => `- ${x}`),
    ...(people.length ? [] : ["- 目前尚未整理。"]),
    "",
    "## 待補劇情",
    "",
    ...Array.from(storyTodos).sort().map((x) => `- ${x}`),
    "- `project/mainStory/CH3 3-1`：街頭賣藝分歧目前原稿為「嘆息寫」，已保留為可回流分歧。",
    "- `project/mainStory/CH3 3-3`：傑士塔威會議可追加煩人小遊戲，目前以原劇情旁白接續。",
    "- `project/mainStory/CH6 6-4`：後日談時間尚未撰寫，已以文字標記保留。",
    "",
    "## 待補素材",
    "",
    "- `BGM-20260822T150228Z-1-001.zip` 內四首 BGM 已接入來源指令，但 ZIP 未附原曲／作者／授權資訊；請補充授權以完成公開發行追溯，詳見 `.codex/task-questions/20260822-231945-bgm-zip-import.md`。",
    "",
    "- `project/images/ms_ch1_mapo_shop_entrance_cg.png`：暫用複製 CG，來源為 `project/images/scene_mapo_cg.png`；之後需要替換成「麻婆豆腐店門口」正式 CG。",
    "- `project/images/ms_ch1_keng_2_5_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「2.5 梗平」正式 CG。",
    "- `project/images/ms_ch1_thunder_crocodile_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「放大的鱷魚圖」正式 CG。",
    "- `project/images/ms_ch1_keng_join_cg.png`：專案目前沒有現有 GIF 可複製，母檔暫用複製靜態圖，來源為 `project/images/scene_tournament.png`；之後需要替換成「梗平參戰」正式 CG，再執行 `python scripts/build_action_cgs.py`。",
    "- `project/images/ms_ch2_keng_bicycle_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「梗平被腳踏車撞飛」正式 CG。",
    "- `project/images/ms_ch2_eri_sunset_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「夕陽下的神祕少女」正式 CG。",
    "- `project/bgms/ms_ch2_gallery_opening.mp3`：暫用複製 BGM，來源為 `project/bgms/spacetime_mystery.mp3`；之後需要替換成美術館開場正式 BGM。",
    "- `project/mainStory/CH1` 新增的日／夜與室內背景：目前以既有同類背景複製成唯一檔名，待替換秋葉原車站、街道、倉庫區、中華料理店、料理節目、兔子咖啡廳、商業地點與河邊夜景正式素材。",
    "- `project/mainStory/CH1` 的手機簡訊、梗平躲藏、黑衣人、紅色麻婆碗、梗平VS宿儺、兔子攻擊、紙箱、紙箱人、小丑等 CG：目前以 `project/images/scene_mapo_cg.png` 複製素材暫代，待替換正式素材。",
    "- `project/mainStory/CH1 1-3`：來源要求「麻婆」立繪，但 `project/images/` 尚無可確認的麻婆角色立繪，該句暫不顯示立繪。",
    "- `project/mainStory/CH1 1-4`：來源標記 `河邊(夜))` 多一個右括號，生成器暫以 `河邊(夜)` mapping 處理，未改寫來源。",
    "- `project/mainStory/CH2`～`CH7` 新增的泛用／日夜／室內背景名稱：目前映射到既有同類背景資產，待替換正式專用素材。",
    "- Open: `main-story-background-live-stage`",
    "  - Scope: `project/mainStory/CH7 7-5` 的 `【背景：LIVE大舞台】`。",
    "  - Temporary: `project/images/ms_bg_live_stage.png` 為由 `project/images/scene_tournament.png` 複製的暫代背景。",
    "  - Expected: 正式 `LIVE大舞台` 背景；完成驗收後替換圖片並通過遊戲內驗證。",
    "  - Evidence: `scripts/generate_main_story.js` background mapping、`project/story-ir/main/main-story.json`、`project/floors/main_ch7_5.js`；目前維持 open。",
    "- Open: `main-story-background-police-station`",
    "  - Scope: `project/mainStory/CH7 7-5` 的 `【背景：派出所】`。",
    "  - Temporary: `project/images/ms_bg_police_station.png` 為由 `project/images/scene_street.png` 複製的暫代背景。",
    "  - Expected: 正式 `派出所` 背景；完成驗收後替換圖片並通過遊戲內驗證。",
    "  - Evidence: `scripts/generate_main_story.js` background mapping、`project/story-ir/main/main-story.json`、`project/floors/main_ch7_5.js`；目前維持 open。",
    "- Open: `main-story-costume-portraits`",
    "  - Scope: `project/mainStory/CH3 3-1`、`project/mainStory/CH6 6-4`、`project/mainStory/CH7 7-5` 的服裝狀態角色標籤。",
    "  - Missing: 正式服裝梗平／貝琪／前輩／桶至學長立繪與角色 mapping；目前不使用未驗收素材。",
    "  - Done when: 正式服裝立繪完成驗收，接入 `project/images/`、`project/data.js`、Story IR 與對應 floor，並完成遊戲內驗證。",
    "  - Evidence: 服裝角色標籤保留於權威來源與 Story IR；目前維持 open。",
    "",
    "## 待實作演出或小遊戲",
    "",
    "- `project/mainStory/CH1 1-4`：下水道雷霆大鱷魚戰鬥目前依原稿以旁白略過，之後可補正式戰鬥或小遊戲。",
    "- `project/mainStory/CH3 3-3`：統至分析傑士塔威的橋段可補獨立小遊戲。",
    "- `project/mainStory/CH6 6-4`：結尾小動畫目前使用既有轉場影片事件暫代，之後可替換正式結尾動畫。",
    "",
    "## 已確認可處理",
    "",
    "- CH1-CH7 主線已接入樓層與時間線，可先作為完整可跑版本繼續迭代。",
    "- `CG-20260822T143824Z-1-001.zip`（SHA-256：`3AA8EAC2B3834C718010A1E60D88F8AA7AA77999D7AC19D9D65F305F407DFEE6`）：83 張 `CH<N>_L<N>.png` 已逐檔核對首次 CG 出現行號，並接入 `project/images`、`project/data.js`、Story IR 與 floor；其中 22 張實際內容為 JPEG，依使用者確認保留原始 `.png` 檔名。驗證：`python scripts/build_action_cgs.py --check`、`node scripts/generate_main_story.js --check`、`node scripts/manage_story_ir.js`、83/83 圖片引用檢查。",
  ];
  fs.writeFileSync(p("project", "mainStory", "TODO.md"), todoLines.join("\n") + "\n", "utf8");
}

function validateRuntimeRegistrations(generatedFloors) {
  const dataText = fs.readFileSync(p("project", "data.js"), "utf8");
  for (const image of extraImages) {
    if (!fs.existsSync(p("project", "images", image))) throw new Error(`Missing image asset: ${image}`);
    if (!dataText.includes(`"${image}"`)) throw new Error(`Image is not registered in project/data.js: ${image}`);
  }
  if (!backgroundAssets.every(({ name }) => bgByName.has(name)) || new Set(backgroundAssets.map(({ image }) => image)).size !== backgroundAssets.length) {
    throw new Error("Each background directive must map one-to-one to a unique image filename");
  }
  if (VIEWPORT_WIDTH !== MAP_WIDTH * 32 || VIEWPORT_HEIGHT !== MAP_HEIGHT * 32) {
    throw new Error("Viewport constants do not match map dimensions");
  }
  if (LEGACY_STAGE_WIDTH !== 416 || BACKGROUND_LOC.join(",") !== "0,0") {
    throw new Error("Legacy 416x416 backgrounds must remain at the stage origin");
  }
  if (CG_LOC[0] !== (VIEWPORT_WIDTH - CG_LOC[2]) / 2 || CG_LOC.join(",") !== "112,50,320,220") {
    throw new Error("CG panel must match the 544x416 reference layout");
  }
  if (GENERAL_CG_SLOC.join(",") !== "0,65,416,286" || GENERAL_CG_SLOC[2] * 11 !== GENERAL_CG_SLOC[3] * 16) {
    throw new Error("General CG crop must be the centered 16:11 crop of a 416x416 source");
  }
  const text = setTextEvent();
  if (!text.avg || text.fixedLines !== AVG_LAYOUT.dialogueFixedLines ||
      AVG_LAYOUT.dialogueX !== 16 || AVG_LAYOUT.dialogueY !== 295 ||
      AVG_LAYOUT.dialogueWidth !== 512 || AVG_LAYOUT.portraitDialogueGap !== 0 ||
      AVG_LAYOUT.portraitScale !== 0.92 || AVG_LAYOUT.portraitBottomY !== 440) {
    throw new Error("AVG layout contract is stale");
  }
  const usedActionCgImages = new Set();
  let generatedActionCgCount = 0;
  let migratedPortraitCount = 0;
  for (const floor of generatedFloors) {
    walkEvents(floor.eachArrive, (event) => {
      const text = typeof event === "string" ? event : event && event.type === "text" ? event.text : "";
      if (event && event.type === "showImage" && requiredActionCgImages.includes(event.image)) {
        if (!usedActionCgImages.has(event.image)) {
          usedActionCgImages.add(event.image);
          generatedActionCgCount += 1;
        }
      }
      if (event && event.type === "showImage" && (event.code === 10 || event.code === 11 || event.code === 20)) {
        if (!Array.isArray(event.loc) || event.loc[0] !== "portraitSpeakerX" || event.loc[1] !== "portraitSpeakerY") {
          throw new Error(`${floor.floorId}: portrait must use the unified speaker slot`);
        }
        migratedPortraitCount += 1;
      }
    });
  }
  if (migratedPortraitCount === 0) {
    throw new Error("Main story: expected at least one unified speaker portrait");
  }
  const missingActionCg = requiredActionCgImages.filter((image) => !usedActionCgImages.has(image));
  if (missingActionCg.length) {
    throw new Error(`Main-story action CG directives are stale or missing: ${missingActionCg.join(", ")}`);
  }
  if (generatedActionCgCount !== requiredActionCgImages.length) {
    throw new Error(`Expected ${requiredActionCgImages.length} action CG events, got ${generatedActionCgCount}`);
  }
  for (const spec of [...Object.values(actionCgByName), ...Object.values(actionGifByName)]) {
    if (spec.sloc.join(",") !== "0,0,416,286") throw new Error(`Generated action CG must use its full 416x286 canvas: ${spec.image}`);
  }
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const refreshIr = process.argv.includes("--refresh-ir");
  if (refreshIr) throw new Error("--refresh-ir is disabled: Story IR must be authored by the Agent; this command only validates or emits from existing IR.");
  validateActionCgSync();
  let generated;
  const bundle = readBundle(root, MAIN_STORY_IR);
  validateProjectReferences(root, bundle);
  generated = bundleToFloors(bundle);
  generated.forEach(validateGeneratedFloor);

  for (const floor of generated) {
    const file = p("project", "floors", `${floor.floorId}.js`);
    const output = renderFloor(floor);
    if (checkOnly) {
      if (!fs.existsSync(file) || !isDeepStrictEqual(readFloor(file), floor)) {
        throw new Error(`${floor.floorId}: engine floor is stale; run node scripts/generate_main_story.js`);
      }
    } else fs.writeFileSync(file, output, "utf8");
  }

  validateRuntimeRegistrations(generated);
  console.log(`${checkOnly ? "Validated" : "Emitted"} ${generated.length} main-story floors at ${MAP_WIDTH}x${MAP_HEIGHT}.`);
}

if (require.main === module) main();

module.exports = {};
