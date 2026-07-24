const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const p = (...parts) => path.join(root, ...parts);

const MAP = Array.from({ length: 13 }, () => Array(13).fill(0));

const floors = {
  "1-1": { id: "mapo_1_1", title: "主線 CH1 1-1 車站", name: "1-1", bg: "scene_station.png", bgm: "bossa_casual_shop.mp3", next: "mapo_1_2" },
  "1-2": { id: "mapo_1_2", title: "主線 CH1 1-2 倉庫區", name: "1-2", bg: "scene_road.png", bgm: "dark_alleys_tension.ogg", next: "mapo_1_3" },
  "1-3": { id: "mapo_1_3", title: "主線 CH1 1-3 麻婆豆腐店", name: "1-3", bg: "scene_mapo_shop.png", bgm: "bossa_casual_shop.mp3", next: "mapo_1_4" },
  "1-4": { id: "mapo_1_4", title: "主線 CH1 1-4 炭烤蜜瓜兔子", name: "1-4", bg: "scene_street.png", bgm: "flags_drama.mp3", next: "mapo_1_5" },
  "1-5": { id: "mapo_1_5", title: "主線 CH1 1-5 掉落物", name: "1-5", bg: "scene_street.png", bgm: "twists_suspense.mp3", next: "mapo_1_6" },
  "2-1": { id: "mapo_1_6", title: "主線 CH2 2-1 咖啡廳早晨", name: "2-1", bg: "scene_street.png", bgm: "bossa_casual_shop.mp3", next: "main_ch2_2" },
  "2-2": { id: "main_ch2_2", title: "主線 CH2 2-2 三過書店", name: "2-2", bg: "scene_road.png", bgm: "twists_suspense.mp3", next: "main_ch2_3" },
  "2-3": { id: "main_ch2_3", title: "主線 CH2 2-3 遊戲中心", name: "2-3", bg: "scene_street.png", bgm: "warped_surreal.mp3", next: "main_ch2_4" },
  "2-4": { id: "main_ch2_4", title: "主線 CH2 2-4 書店A內部", name: "2-4", bg: "scene_road.png", bgm: "dark_alleys_tension.ogg", next: null },
};

const bgByName = [
  [/車站/, "scene_station.png"],
  [/街道|道路|河邊|倉庫|鐵道|書店A/, "scene_street.png"],
  [/麻婆豆腐店/, "scene_mapo_shop.png"],
  [/大賽場地|遊戲中心|美術館/, "scene_tournament.png"],
  [/咖啡廳|便利商店|家庭餐廳|書店A內部/, "scene_mapo_shop.png"],
];

const cgByName = {
  "麻婆豆腐店門口": "ms_ch1_mapo_shop_entrance_cg.png",
  "2.5梗平": "ms_ch1_keng_2_5_cg.png",
};

const gifByName = {
  "梗平參戰": "ms_ch1_keng_join_placeholder.png",
};

const placeholderAssets = [
  ["project/images/scene_mapo_cg.png", "project/images/ms_ch1_mapo_shop_entrance_cg.png"],
  ["project/images/scene_badend.png", "project/images/ms_ch1_keng_2_5_cg.png"],
  ["project/images/scene_tournament.png", "project/images/ms_ch1_keng_join_placeholder.png"],
  ["project/bgms/spacetime_mystery.mp3", "project/bgms/ms_ch2_gallery_opening.mp3"],
];

const extraImages = [
  "ms_ch1_mapo_shop_entrance_cg.png",
  "ms_ch1_keng_2_5_cg.png",
  "ms_ch1_keng_join_placeholder.png",
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

function setTextEvent() {
  return {
    type: "setText",
    position: "down",
    offset: 8,
    align: "left",
    bold: true,
    background: "winskin.png",
    title: [255, 225, 80, 1],
    text: [255, 255, 255, 1],
    titlefont: 22,
    textfont: 20,
    lineHeight: 30,
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

function lineToEvents(line, ctx) {
  const t = line.trim();
  if (!t) return [];

  if (/^【背景：/.test(t)) {
    const name = t.replace(/^【背景：/, "").replace(/】$/, "");
    const bg = (bgByName.find(([re]) => re.test(name)) || [null, ctx.bg])[1];
    return [
      ...hidePortraits(),
      { type: "hideImage", code: 30, time: 150 },
      { type: "showImage", code: 1, image: bg, loc: [0, 0], opacity: 1, time: 250 },
      `【背景：${name}】`,
    ];
  }

  if (/^【CG：/.test(t)) {
    const name = t.replace(/^【CG：/, "").replace(/】$/, "");
    const image = cgByName[name] || "scene_mapo_cg.png";
    return [...hidePortraits(), { type: "showImage", code: 30, image, loc: [0, 0], opacity: 1, time: 250 }];
  }

  if (/^【GIF /.test(t)) {
    const name = t.replace(/^【GIF\s*/, "").replace(/】$/, "");
    const image = gifByName[name] || "ms_ch1_keng_join_placeholder.png";
    return [...hidePortraits(), { type: "showImage", code: 30, image, loc: [0, 0], opacity: 1, time: 250 }];
  }

  if (/^【BE/.test(t) || /^【.*結束】$/.test(t) || /^【.*END.*】$/.test(t)) {
    return [...hidePortraits(), t];
  }

  if (/^\[END：/.test(t)) return [...hidePortraits(), t.replace(/^\[/, "【").replace(/\]$/, "】")];

  if (/^\[.*\]$/.test(t)) return [...hidePortraits(), t.slice(1, -1)];

  if (/^\(.+\)$/.test(t)) {
    if (/鴿子|沒打完|補|自己補|可以再追加|OOO|音樂/.test(t)) storyTodos.add(`${ctx.source} ${ctx.section}：${t}`);
    if (/美術館開場的音樂/.test(t)) {
      return [{ type: "playBgm", name: "ms_ch2_gallery_opening.mp3", keep: true }, ...hidePortraits(), t];
    }
    return [...hidePortraits(), t];
  }

  const colon = t.match(/^(.+?)[：:](.*)$/);
  if (colon) {
    const rawName = colon[1].trim();
    let body = colon[2].trim();
    const phone = body.match(/^\{(.*)\}$/);
    if (phone) body = `（手機）${phone[1]}`;
    const display = knownSpeakers.get(rawName) || rawName;
    if (/^不知道是誰的/.test(display)) uncertainSpeakers.add(`${ctx.source} ${ctx.section}：${display}（原始名稱：${rawName}）`);
    const portrait = portraitFor(display, body);
    return [...hidePortraits(), ...(portrait ? [portrait] : []), `\t[${display}]${body}`];
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

function containsEnd(events) {
  const text = JSON.stringify(events);
  return /BE|END|錯過了?\s*Comike|錯過了?COMIKE|錯過了?comike|鴿子|暫未實作/.test(text);
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
    if (/^【(?:進到)?推進劇情】$/.test(t)) {
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

function buildFloor(section, lines) {
  const meta = floors[section];
  const ctx = { floorId: meta.id, bg: meta.bg, source: section.startsWith("1-") ? "project/mainStory/CH1" : "project/mainStory/CH2", section };
  const parsed = parseEvents(lines, 0, ctx);
  const events = [
    setTextEvent(),
    { type: "playBgm", name: meta.bgm },
    { type: "showImage", code: 1, image: meta.bg, loc: [0, 0], opacity: 1, time: 0 },
    ...hidePortraits(),
    `【${meta.title}】`,
    ...parsed.events,
    ...hidePortraits(),
  ];
  if (meta.next && !hasChangeFloor(events.slice(-8))) {
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
    width: 13,
    height: 13,
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

  return `main.floors.${meta.id}=\n${JSON.stringify(floor, null, 4)}\n`;
}

function ensureAssets() {
  for (const [src, dest] of placeholderAssets) {
    const from = p(...src.split("/"));
    const to = p(...dest.split("/"));
    if (!fs.existsSync(to)) fs.copyFileSync(from, to);
  }
}

function updateData() {
  const file = p("project", "data.js");
  let text = fs.readFileSync(file, "utf8");
  const mainStoryOrder = ["mapo_1_1", "mapo_1_2", "mapo_1_3", "mapo_1_4", "mapo_1_5", "mapo_1_6", "main_ch2_2", "main_ch2_3", "main_ch2_4"];
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
  for (const id of ["main_ch2_2", "main_ch2_3", "main_ch2_4"]) {
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
  const timeline = {
    title: "章節時間線",
    subtitle: "秋葉原之旅",
    defaultLoc: [6, 10],
    defaultDirection: "up",
    changeFloorTime: 500,
    nodeGap: 188,
    laneGap: 126,
    chapterPadding: 72,
    chapters: [
      {
        id: "main_ch1",
        title: "CH1 麻婆豆腐篇",
        nodes: [
          { id: "mapo_1_1", title: "1-1 車站", floorId: "mapo_1_1", image: "scene_station.png", alwaysUnlocked: true, next: "mapo_1_2" },
          { id: "mapo_1_2", title: "1-2 倉庫區", floorId: "mapo_1_2", image: "scene_road.png", next: "mapo_1_3" },
          { id: "mapo_1_3", title: "1-3 麻婆豆腐店", floorId: "mapo_1_3", image: "scene_mapo_shop.png", next: "mapo_1_4" },
          { id: "mapo_1_4", title: "1-4 炭烤蜜瓜兔子", floorId: "mapo_1_4", image: "scene_street.png", next: "mapo_1_5" },
          { id: "mapo_1_5", title: "1-5 掉落物", floorId: "mapo_1_5", image: "scene_street.png", next: "mapo_1_6" },
        ],
      },
      {
        id: "main_ch2",
        title: "CH2 三過書店而不入篇",
        nodes: [
          { id: "mapo_1_6", title: "2-1 咖啡廳早晨", floorId: "mapo_1_6", image: "scene_street.png", next: "main_ch2_2" },
          { id: "main_ch2_2", title: "2-2 三過書店", floorId: "main_ch2_2", image: "scene_road.png", next: "main_ch2_3" },
          { id: "main_ch2_3", title: "2-3 遊戲中心", floorId: "main_ch2_3", image: "scene_street.png", next: "main_ch2_4" },
          { id: "main_ch2_4", title: "2-4 書店A內部", floorId: "main_ch2_4", image: "scene_road.png" },
        ],
      },
    ],
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
    "- `project/mainStory/CH1 1-4`：人物交流時間尚未實作，已以文字標記保留。",
    "- `project/mainStory/CH2 2-4`：美術館支線後續與動物園/其他怪談類分歧尚未完整撰寫。",
    "",
    "## 待補素材",
    "",
    "- `project/images/ms_ch1_mapo_shop_entrance_cg.png`：暫用複製 CG，來源為 `project/images/scene_mapo_cg.png`；之後需要替換成「麻婆豆腐店門口」正式 CG。",
    "- `project/images/ms_ch1_keng_2_5_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「2.5 梗平」正式 CG。",
    "- `project/images/ms_ch1_keng_join_placeholder.png`：專案目前沒有現有 GIF 可複製，暫用複製靜態圖，來源為 `project/images/scene_tournament.png`；之後需要替換成「梗平參戰」正式 GIF。",
    "- `project/bgms/ms_ch2_gallery_opening.mp3`：暫用複製 BGM，來源為 `project/bgms/spacetime_mystery.mp3`；之後需要替換成美術館開場正式 BGM。",
    "- CH1/CH2 多處背景（咖啡廳、便利商店、河邊、書店A、家庭餐廳、遊戲中心、美術館）目前沿用既有背景圖；之後可替換正式背景。",
    "",
    "## 待實作演出或小遊戲",
    "",
    "- `project/mainStory/CH1 1-4`：下水道雷霆大鱷魚戰鬥目前依原稿以旁白略過，之後可補正式戰鬥或小遊戲。",
    "",
    "## 已確認可處理",
    "",
    "- CH1/CH2 主線已接入樓層與時間線，可先作為可跑版本繼續迭代。",
  ];
  fs.writeFileSync(p("project", "mainStory", "TODO.md"), todoLines.join("\n") + "\n", "utf8");
}

function main() {
  ensureAssets();
  const sections = {
    ...readSections(p("project", "mainStory", "CH1")),
    ...readSections(p("project", "mainStory", "CH2")),
  };

  for (const key of Object.keys(floors)) {
    const content = sections[key];
    if (!content) throw new Error(`Missing section ${key}`);
    const file = p("project", "floors", `${floors[key].id}.js`);
    fs.writeFileSync(file, buildFloor(key, content), "utf8");
  }

  updateData();
  updateTimeline();
  updateTodo();
}

main();
