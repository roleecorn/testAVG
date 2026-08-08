const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.resolve(__dirname, "..");
const p = (...parts) => path.join(root, ...parts);

const MAP_WIDTH = 17;
const MAP_HEIGHT = 13;
const VIEWPORT_WIDTH = 544;
const VIEWPORT_HEIGHT = 416;
const LEGACY_STAGE_WIDTH = 416;
const BACKGROUND_LOC = [0, 0];
const CG_LOC = [112, 50, 320, 220];
const GENERAL_CG_SLOC = [0, 65, 416, 286];

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
  "6-4": { id: "main_ch6_4", title: "主線 CH6 6-4 婚禮與終章", name: "6-4", bg: "ms_bg_wedding.png", bgm: "next_to_you_emotional.mp3", next: null },
};

const characterExchanges = {
  "1-3": { floorId: "mapo_1_3_exchange_1" },
  "2-4": { floorId: "main_ch2_4_exchange_1" },
  "3-1": { floorId: "main_ch3_1_exchange_1" },
  "5-1": { floorId: "main_ch5_1_exchange_1", targetCount: 2 },
};

const backgroundAssets = [
  { name: "車站", image: "ms_bg_station.png", placeholder: "scene_station.png" },
  { name: "街道", image: "ms_bg_street.png", placeholder: "scene_street.png" },
  { name: "麻婆豆腐店", image: "ms_bg_mapo_shop.png", placeholder: "scene_mapo_shop.png" },
  { name: "大賽場地", image: "ms_bg_tournament_venue.png", placeholder: "scene_tournament.png" },
  { name: "咖啡廳", image: "ms_bg_cafe.png", placeholder: "scene_mapo_shop.png" },
  { name: "便利商店", image: "ms_bg_convenience_store.png", placeholder: "scene_mapo_shop.png" },
  { name: "河邊", image: "ms_bg_riverside.png", placeholder: "scene_street.png" },
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
];
const bgByName = new Map(backgroundAssets.map(({ name, image }) => [name, image]));

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
const usedActionCgImages = new Set();
let generatedActionCgCount = 0;
let generatedPhoneLineCount = 0;

const placeholderAssets = [
  ...backgroundAssets.map(({ image, placeholder }) => [`project/images/${placeholder}`, `project/images/${image}`]),
  ["project/images/scene_mapo_cg.png", "project/images/ms_ch1_mapo_shop_entrance_cg.png"],
  ["project/images/scene_badend.png", "project/images/ms_ch1_keng_2_5_cg.png"],
  ["project/images/scene_badend.png", "project/images/ms_ch1_thunder_crocodile_cg.png"],
  ["project/images/scene_tournament.png", "project/images/ms_ch1_keng_join_cg.png"],
  ["project/bgms/spacetime_mystery.mp3", "project/bgms/ms_ch2_gallery_opening.mp3"],
];

const extraImages = [
  ...backgroundAssets.map(({ image }) => image),
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

function fwToHalfNumber(text) {
  return text.replace(/[０-９１２３４５６７８９]/g, (ch) => {
    const table = "０１２３４５６７８９";
    const idx = table.indexOf(ch);
    if (idx >= 0) return String(idx);
    return ({ "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9" })[ch] || ch;
  });
}

function readSections(file) {
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n").split("\n");
  const sections = {};
  let current = null;
  for (const line of raw) {
    const m = line.trim().match(/^(\d+-\d+)$/);
    if (m) {
      current = m[1];
      sections[current] = [];
      continue;
    }
    if (current) sections[current].push(line);
  }
  return sections;
}

function normalizeSourceLine(line) {
  return line
    .trim()
    .replace(/^【背景\s*[：:]\s*/, "【背景：")
    .replace(/^【CG\s*[：:]\s*/, "【CG：")
    .replace(/^【GIF\s*[：:]?\s*/, "【GIF ");
}

function setTextEvent() {
  return {
    type: "setText",
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
    time: 10,
    letterSpacing: 0,
    animateTime: 120,
  };
}

function hidePortraits() {
  return [
    { type: "hideImage", code: 10, time: 0, async: true },
    { type: "hideImage", code: 11, time: 0, async: true },
  ];
}

function actionCgEvents(spec) {
  usedActionCgImages.add(spec.image);
  generatedActionCgCount += 1;
  return [
    ...hidePortraits(),
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

function portraitFor(speaker, text) {
  if (speaker === "梗平") {
    let img = "keng_neutral_portrait.png";
    if (/嘔|不要|可惡|痛|啊|不行|錯愕|什麼|？|\?|救命|死/.test(text)) img = "keng_panic_portrait.png";
    if (/哼|專業|有道理|假面騎士|變身|騎士|勝|交給我|會贏/.test(text)) img = "keng_smile_portrait.png";
    if (/嚴肅|重要|守護|責任/.test(text)) img = "keng_serious_portrait.png";
    return { type: "showImage", code: 10, image: img, loc: [28, "textTop"], opacity: 1, time: 0 };
  }
  if (speaker === "表妹") {
    let img = "suou_sad_portrait.png";
    if (/痛|你的良心|垃圾|人渣|太詳細|不要|騙|冷/.test(text)) img = "suou_angry_portrait.png";
    if (/誒|等等|什麼|啊|？|\?/.test(text)) img = "suou_surprised_portrait.png";
    if (/嘿|笑|好|嗯/.test(text)) img = "suou_smile_portrait.png";
    return { type: "showImage", code: 11, image: img, loc: [260, "textTop"], opacity: 1, time: 0 };
  }
  return null;
}

function removeInlineProductionDirectives(body, ctx) {
  return body.replace(/【([^】]+)】/g, (whole, directive) => {
    if (!/字體|立繪|替換|動畫|CG|GIF|背景/.test(directive)) return whole;
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
  if (phone) {
    body = `（手機）${body}`;
    generatedPhoneLineCount += 1;
  }

  const display = knownSpeakers.get(rawName) || rawName;
  if (/^不知道是誰的/.test(display)) {
    uncertainSpeakers.add(`${ctx.source} ${ctx.section}：${display}（原始名稱：${rawName}）`);
  }
  const portrait = portraitFor(display, body);
  const clearCg = ctx.cgVisible ? [{ type: "hideImage", code: 30, time: 150 }] : [];
  ctx.cgVisible = false;
  return [...hidePortraits(), ...clearCg, ...(portrait ? [portrait] : []), `\t[${display}]${body}`];
}

function lineToEvents(line, ctx) {
  const t = normalizeSourceLine(line);
  if (!t) return [];

  if (/^【背景：/.test(t)) {
    const name = t.replace(/^【背景：/, "").replace(/】$/, "");
    const bg = bgByName.get(name);
    if (!bg) throw new Error(`${ctx.source} ${ctx.section}: unknown background directive: ${name}`);
    ctx.cgVisible = false;
    return [
      ...hidePortraits(),
      { type: "hideImage", code: 30, time: 150 },
      { type: "showImage", code: 1, image: bg, loc: [...BACKGROUND_LOC], opacity: 1, time: 250 },
    ];
  }

  if (/^【CG：/.test(t)) {
    const name = t.replace(/^【CG：/, "").replace(/】$/, "");
    const actionCg = actionCgByName[name];
    if (actionCg) {
      ctx.cgVisible = false;
      return actionCgEvents(actionCg);
    }
    const image = "scene_mapo_cg.png";
    storyTodos.add(`${ctx.source} ${ctx.section}：【CG：${name}】尚無專用素材，暫用 ${image}。`);
    ctx.cgVisible = true;
    return [...hidePortraits(), { type: "showImage", code: 30, image, sloc: [...GENERAL_CG_SLOC], loc: [...CG_LOC], opacity: 1, time: 250 }];
  }

  if (/^【GIF /.test(t)) {
    const name = t.replace(/^【GIF\s*/, "").replace(/】$/, "");
    const actionCg = actionGifByName[name];
    if (actionCg) {
      ctx.cgVisible = false;
      return actionCgEvents(actionCg);
    }
    const image = "ms_ch1_keng_join_cg.png";
    storyTodos.add(`${ctx.source} ${ctx.section}：【GIF ${name}】尚無專用素材，暫用 ${image}。`);
    ctx.cgVisible = true;
    return [...hidePortraits(), { type: "showImage", code: 30, image, sloc: [...GENERAL_CG_SLOC], loc: [...CG_LOC], opacity: 1, time: 250 }];
  }

  if (/^【BE/.test(t) || /^【.*結束】$/.test(t) || /^【.*END.*】$/.test(t)) {
    return [...hidePortraits(), t];
  }

  if (/^【人物交流時間/.test(t)) {
    const exchange = characterExchanges[ctx.section];
    if (exchange) {
      return [
        ...hidePortraits(),
        { type: "comment", text: "人物交流回合：完成角色好感劇情後，進入交流後續 scene。" },
        {
          type: "function",
          function: `function () { core.plugin.beginCharacterExchange({ floorId: '${exchange.floorId}', loc: [6, 10], direction: 'up', time: 500 }${exchange.targetCount != null ? `, ${exchange.targetCount}` : ""}); }`,
        },
      ];
    }
    storyTodos.add(`${ctx.source} ${ctx.section}：${t} 尚未撰寫，已以文字標記保留。`);
    return [...hidePortraits(), `${t.replace(/】$/, "")}：待補】`];
  }

  if (t === "【播放炫酷的結尾小動畫】") {
    storyTodos.add(`${ctx.source} ${ctx.section}：${t} 尚未製作正式結尾動畫，目前用既有轉場影片事件暫代。`);
    return [...hidePortraits(), { type: "playTransitionVideo" }];
  }

  if (t === "【後日談時間】") {
    storyTodos.add(`${ctx.source} ${ctx.section}：${t} 尚未撰寫，已以文字標記保留。`);
    return [...hidePortraits(), "【後日談時間：待補】"];
  }

  if (/^\[END：/.test(t)) return [...hidePortraits(), t.replace(/^\[/, "【").replace(/\]$/, "】")];

  const bracketedDialogue = t.match(/^\[([^\[\]]+?)[：:](.*)\]$/);
  if (bracketedDialogue && isBracketedPhoneSpeaker(bracketedDialogue[1])) {
    return dialogueToEvents(bracketedDialogue[1].trim(), bracketedDialogue[2], ctx, true);
  }

  if (/^\[.*\]$/.test(t)) return [...hidePortraits(), t.slice(1, -1)];

  if (/^【.*(?:立繪|替換|字體|動畫|小遊戲).*】$/.test(t)) {
    storyTodos.add(`${ctx.source} ${ctx.section}：製作指令「${t}」尚未轉成正式事件。`);
    return [{ type: "comment", text: `TODO: ${t}` }];
  }

  if (/^\(.+\)$/.test(t)) {
    const mediaName = t.slice(1, -1).trim();
    if (actionCgByName[mediaName]) {
      ctx.cgVisible = false;
      return actionCgEvents(actionCgByName[mediaName]);
    }
    if (/鴿子|沒打完|補|自己補|可以再追加|OOO|音樂|嘆息|小遊戲|動畫|後日談|人物交流/.test(t)) storyTodos.add(`${ctx.source} ${ctx.section}：${t}`);
    if (/美術館開場的音樂/.test(t)) {
      return [{ type: "playBgm", name: "ms_ch2_gallery_opening.mp3", keep: true }, ...hidePortraits(), t];
    }
    return [...hidePortraits(), t];
  }

  const colon = t.match(/^(.+?)[：:](.*)$/);
  if (colon) {
    const rawName = colon[1].trim();
    return dialogueToEvents(rawName, colon[2], ctx);
  }

  return [...hidePortraits(), t];
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
  const ctx = { floorId: meta.id, bg: meta.bg, source: `project/mainStory/CH${chapter}`, section };
  const parsed = parseEvents(lines, 0, ctx);
  const events = [
    setTextEvent(),
    { type: "playBgm", name: meta.bgm },
    { type: "showImage", code: 1, image: meta.bg, loc: [...BACKGROUND_LOC], opacity: 1, time: 0 },
    ...hidePortraits(),
    `【${meta.title}】`,
    ...parsed.events,
    ...hidePortraits(),
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
      { name: "keng_portrait.png", canvas: "fg", x: 28, y: 210, disabled: true },
      { name: "suou_sad_portrait.png", canvas: "fg", x: 260, y: 185, disabled: true },
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
  return `main.floors.${meta.id}=\n${JSON.stringify(floor, null, 4)}\n`;
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
  if (floor.width !== MAP_WIDTH || floor.height !== MAP_HEIGHT) {
    throw new Error(`${floor.floorId}: expected ${MAP_WIDTH}x${MAP_HEIGHT}`);
  }
  if (floor.map.length !== MAP_HEIGHT || floor.map.some((row) => row.length !== MAP_WIDTH)) {
    throw new Error(`${floor.floorId}: map dimensions do not match width/height`);
  }
  walkEvents(floor.eachArrive, (event) => {
    if (typeof event === "string" && /^【(?:CG|GIF|背景)\s*[：:]/.test(event)) {
      throw new Error(`${floor.floorId}: player-visible production directive: ${event}`);
    }
  });
}

function ensureAssets() {
  for (const [src, dest] of placeholderAssets) {
    const from = p(...src.split("/"));
    const to = p(...dest.split("/"));
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
  const chapterTitles = {
    1: "CH1 麻婆豆腐篇",
    2: "CH2 三過書店而不入篇",
    3: "CH3 自爆篇",
    4: "CH4 搶火車篇",
    5: "CH5 五日無戰事篇",
    6: "CH6 結婚篇",
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
    chapters,
  };
  fs.writeFileSync(p("project", "timeline.json"), JSON.stringify(timeline, null, "\t") + "\n", "utf8");
}

function updateTodo() {
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
    "- `project/images/ms_ch1_mapo_shop_entrance_cg.png`：暫用複製 CG，來源為 `project/images/scene_mapo_cg.png`；之後需要替換成「麻婆豆腐店門口」正式 CG。",
    "- `project/images/ms_ch1_keng_2_5_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「2.5 梗平」正式 CG。",
    "- `project/images/ms_ch1_thunder_crocodile_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「放大的鱷魚圖」正式 CG。",
    "- `project/images/ms_ch1_keng_join_cg.png`：專案目前沒有現有 GIF 可複製，母檔暫用複製靜態圖，來源為 `project/images/scene_tournament.png`；之後需要替換成「梗平參戰」正式 CG，再執行 `python scripts/build_action_cgs.py`。",
    "- `project/images/ms_ch2_keng_bicycle_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「梗平被腳踏車撞飛」正式 CG。",
    "- `project/images/ms_ch2_eri_sunset_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「夕陽下的神祕少女」正式 CG。",
    "- `project/bgms/ms_ch2_gallery_opening.mp3`：暫用複製 BGM，來源為 `project/bgms/spacetime_mystery.mp3`；之後需要替換成美術館開場正式 BGM。",
    ...backgroundAssets.map(({ name, image, placeholder }) => `- \`project/images/${image}\`：${name}的獨立背景檔目前暫用 \`project/images/${placeholder}\` 複製；正式背景只能替換此地點專檔，不得覆寫共用來源。`),
    "",
    "## 待實作演出或小遊戲",
    "",
    "- `project/mainStory/CH1 1-4`：下水道雷霆大鱷魚戰鬥目前依原稿以旁白略過，之後可補正式戰鬥或小遊戲。",
    "- `project/mainStory/CH3 3-3`：統至分析傑士塔威的橋段可補獨立小遊戲。",
    "- `project/mainStory/CH6 6-4`：結尾小動畫目前使用既有轉場影片事件暫代，之後可替換正式結尾動畫。",
    "",
    "## 已確認可處理",
    "",
    "- CH1-CH6 主線已接入樓層與時間線，可先作為完整可跑版本繼續迭代。",
  ];
  fs.writeFileSync(p("project", "mainStory", "TODO.md"), todoLines.join("\n") + "\n", "utf8");
}

function validateRuntimeRegistrations(expectedPhoneLineCount) {
  const dataText = fs.readFileSync(p("project", "data.js"), "utf8");
  for (const image of extraImages) {
    if (!fs.existsSync(p("project", "images", image))) throw new Error(`Missing image asset: ${image}`);
    if (!dataText.includes(`"${image}"`)) throw new Error(`Image is not registered in project/data.js: ${image}`);
  }
  if (bgByName.size !== backgroundAssets.length || new Set(backgroundAssets.map(({ image }) => image)).size !== backgroundAssets.length) {
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
  const fixedLines = 2;
  const dialogueHeight = 45 + fixedLines * text.lineHeight + text.titlefont + 5;
  const dialogueTop = VIEWPORT_HEIGHT - dialogueHeight - 5 - text.offset;
  const dialogueLeft = 7 + 3 * (Math.floor(MAP_WIDTH / 2) - 6);
  const dialogueRight = VIEWPORT_WIDTH - dialogueLeft;
  if ([dialogueLeft, dialogueTop, dialogueRight - dialogueLeft, dialogueHeight].join(",") !== "13,295,518,116") {
    throw new Error("Dialogue box must match the 544x416 reference layout");
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
  if (generatedPhoneLineCount !== expectedPhoneLineCount) {
    throw new Error(`Expected ${expectedPhoneLineCount} phone lines, got ${generatedPhoneLineCount}`);
  }
}

function main() {
  const checkOnly = process.argv.includes("--check");
  if (!checkOnly) ensureAssets();
  validateActionCgSync();
  const sections = {
    ...readSections(p("project", "mainStory", "CH1")),
    ...readSections(p("project", "mainStory", "CH2")),
    ...readSections(p("project", "mainStory", "CH3")),
    ...readSections(p("project", "mainStory", "CH4")),
    ...readSections(p("project", "mainStory", "CH5")),
    ...readSections(p("project", "mainStory", "CH6")),
  };
  const expectedPhoneLineCount = Object.values(sections).flat().filter((line) => {
    const t = line.trim();
    const bracketed = t.match(/^\[([^\[\]]+?)[：:].*\]$/);
    return (bracketed && isBracketedPhoneSpeaker(bracketed[1])) || /^.+?[：:]\s*\{.*\}$/.test(t);
  }).length;

  let generatedFloors = 0;
  for (const key of Object.keys(floors)) {
    const content = sections[key];
    if (!content) throw new Error(`Missing section ${key}`);
    const file = p("project", "floors", `${floors[key].id}.js`);
    const exchange = characterExchanges[key];
    if (!exchange) {
      const output = buildFloor(key, content);
      if (!checkOnly) fs.writeFileSync(file, output, "utf8");
      generatedFloors += 1;
      continue;
    }

    const markerIndex = content.findIndex((line) => /^【人物交流時間/.test(line.trim()));
    if (markerIndex < 0) throw new Error(`Missing character exchange marker in section ${key}`);
    const beforeExchange = buildFloor(key, content.slice(0, markerIndex + 1), { next: null });
    if (!checkOnly) fs.writeFileSync(file, beforeExchange, "utf8");
    generatedFloors += 1;
    const continuationFile = p("project", "floors", `${exchange.floorId}.js`);
    const afterExchange = buildFloor(key, content.slice(markerIndex + 1), {
      id: exchange.floorId,
      title: `${floors[key].title}（交流後）`,
    });
    if (!checkOnly) fs.writeFileSync(continuationFile, afterExchange, "utf8");
    generatedFloors += 1;
  }

  if (!checkOnly) {
    updateData();
    updateTimeline();
    updateTodo();
  }
  validateRuntimeRegistrations(expectedPhoneLineCount);
  console.log(`${checkOnly ? "Validated" : "Generated"} ${generatedFloors} main-story floors at ${MAP_WIDTH}x${MAP_HEIGHT}.`);
}

main();
