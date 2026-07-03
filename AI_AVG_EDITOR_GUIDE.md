# AI AVG 編輯器撰寫指南

這份文件給 AI 使用，用來把純文字劇本轉成 H5 魔塔編輯器可用的樓層與事件資料。此專案雖是魔塔編輯器，但只要把地圖邏輯降到最低，完全可以用「背景圖 + 對話 + 圖片 + Flag + 音訊」實作 AVG。

## 專案架構

核心檔案位置：

- `project/floors/*.js`：每個樓層一個 JS 檔，格式是 `main.floors.<floorId> = { ... }`。AVG 可把「樓層」視為「場景」或「章節」。
- `project/data.js`：全塔設定。`main.floorIds` 決定樓層順序與可用樓層；`main.images/bgms/sounds/nameMap` 決定圖片、音樂、音效與別名。
- `project/images/`：自定義圖片，例如背景、立繪、CG、UI 圖。
- `project/bgms/`：背景音樂。
- `project/sounds/`：音效。
- `project/maps.js`：圖塊數字到圖塊 ID 的對照。AVG 通常不需要大量改這裡。
- `_docs/event.md`、`_docs/instruction.md`：事件與事件指令說明。
- `_server/table/comment.js`：編輯器表格定義，可看到樓層屬性的實際欄位。
- `_server/MotaAction.g4`：事件編輯器方塊到 JSON 的格式來源。

啟動編輯器：

1. 執行根目錄 `启动服务.exe`。
2. 開遊戲：`http://127.0.0.1:1055/index.html`。
3. 開編輯器：`http://127.0.0.1:1055/editor.html`。
4. 若同時開多個服務，埠號會往後遞增，例如 `1056`、`1057`。

## AI 輸出原則

AI 產生內容時，優先產生「可貼進事件 JSON 區」或「可直接存成樓層 JS」的資料。不要假設玩家會寫 JS。

對 AVG 最穩定的做法：

- 每個場景用一個樓層，或每個章節用一個樓層。
- `map` 全部填 `0`，只保留一張背景圖和劇情事件。
- 主線劇情放在樓層 `firstArrive`，讓第一次進入場景自動播放。
- 選項與分支放在 `choices`、`if`、`switch`、`setValue`。
- 場景轉換用事件指令 `changeFloor`，或地圖點的 `changeFloor` 屬性。

## 1. 如何新增樓層

新增樓層至少要做兩件事：

1. 在 `project/floors/` 新增 `<floorId>.js`。
2. 在 `project/data.js` 的 `main.floorIds` 加入 `<floorId>`。

樓層最小模板：

```js
main.floors.scene_intro =
{
    "floorId": "scene_intro",
    "title": "序章",
    "name": "序章",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "intro_bg.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "opening.mp3",
    "ratio": 1,
    "map": [
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    "width": 13,
    "height": 13,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "bgmap": [],
    "fgmap": []
}
```

`floorId`、檔名、`main.floors.<floorId>` 必須一致。`width/height` 必須符合 `map` 的列數與每列長度。AVG 若只靠背景圖，可固定使用 13x13。

在編輯器中新增樓層：資料區切到「地圖編輯」後使用「新建空白地圖」。儲存後編輯器會建立樓層檔並更新 `main.floorIds`。

## 2. 如何撰寫對話

事件列表是一個陣列；字串就是「顯示文章」。最常用格式：

```txt
\t[標題,圖像]\b[對話框效果]\f[立繪]正文
```

常見寫法：

```js
[
    "\t[旁白]雨停了，但街燈還在微微發亮。",
    "\t[澪,hero]\b[hero]你終於醒了。",
    "\t[悠真,man]\b[this]我剛才...在哪裡？",
    "\t[澪]\f[mio.png:0,0,1]不要急，先聽我說。"
]
```

欄位規則：

- `標題`：說話者名稱。可用 `null` 強制不顯示標題。
- `圖像`：可填圖塊 ID、`hero`、`this`，或 `project/images` 中的圖片檔名。
- `\b[...]`：對話框位置。常用 `hero`、`this`、`up,hero`、`down,hero`、`center`、`up,null`、`down,null`。
- `\f[...]`：立繪，只在這一句顯示，下一個指令前會清掉。要持續顯示請用 `showImage`。
- 正文可用 `\n` 換行，可用 `${...}` 插入數值或表達式，例如 `${flag:trust}`。

先設定文字外觀可用 `setText`：

```js
[
    {
        "type": "setText",
        "background": "winskin.png",
        "title": [255, 255, 255, 1],
        "text": [255, 255, 255, 1],
        "time": 0
    },
    "\t[旁白]這裡開始使用新的文字框樣式。"
]
```

分支選項範例：

```js
{
    "type": "choices",
    "text": "\t[澪]你相信我嗎？",
    "choices": [
        {
            "text": "相信",
            "action": [
                {"type": "setValue", "name": "flag:trust_mio", "operator": "+=", "value": "1"},
                "\t[澪]謝謝你。"
            ]
        },
        {
            "text": "還不能",
            "action": [
                {"type": "setValue", "name": "flag:trust_mio", "operator": "-=", "value": "1"},
                "\t[澪]我明白。"
            ]
        }
    ]
}
```

## 3. 如何顯示/隱藏圖片

本專案有三種「顯示/隱藏」，不要混用：

- `show` / `hide`：顯示或隱藏地圖上的事件圖塊，例如 NPC、門、怪。
- `showImage` / `hideImage`：顯示或清除 UI 圖片，最適合 AVG 立繪、CG、特效遮罩。
- `showFloorImg` / `hideFloorImg`：顯示或隱藏樓層貼圖，也就是樓層 `images` 中的持續背景/前景貼圖。

### 顯示持續圖片

圖片需放在 `project/images`，並登錄到 `project/data.js -> main.images`。

```js
[
    {
        "type": "showImage",
        "code": 1,
        "image": "mio_normal.png",
        "loc": [20, 40],
        "opacity": 1,
        "time": 300
    },
    "\t[澪]我在這裡。",
    {
        "type": "hideImage",
        "code": 1,
        "time": 300
    }
]
```

`code` 是圖片編號：

- 編號越大越蓋在上面。
- 1-24：在色調層下方。
- 25-40：在色調層上方、UI 下方。
- 41-50：在 UI 上方，會蓋住文字框，需慎用。

### 更換立繪

```js
[
    {"type": "hideImage", "code": 1, "time": 150, "async": true},
    {"type": "showImage", "code": 1, "image": "mio_smile.png", "loc": [20, 40], "opacity": 1, "time": 150},
    "\t[澪]這樣就好多了。"
]
```

### 只顯示當前發言者

AVG 對話的立繪規則是：同一時間只顯示「當前發言的人物」。不要把所有在場角色都常駐在畫面上。每句角色台詞前先清掉其他角色，再顯示當前說話者；旁白則清掉所有角色。

若立繪用 `showImage`：

```js
[
    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 10, "image": "keng.png", "loc": [6, 86], "opacity": 1, "time": 0},
    "\t[梗平]這一句只有梗平的圖。",

    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 11, "image": "mei.png", "loc": [252, 54], "opacity": 1, "time": 0},
    "\t[表妹]這一句只顯示表妹。",

    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0},
    "\t[旁白]\b[up,null]旁白不顯示人物立繪。"
]
```

若立繪使用樓層 `images` 的 `canvas: "fg"` 貼圖，需以貼圖左上角像素座標切換：

```js
[
    {"type": "hideFloorImg", "loc": [[6, 86], [252, 54]]},
    {"type": "showFloorImg", "loc": [[6, 86]]},
    "\t[梗平]左側梗平發言。",

    {"type": "hideFloorImg", "loc": [[6, 86], [252, 54]]},
    {"type": "showFloorImg", "loc": [[252, 54]]},
    "\t[表妹]右側表妹發言。",

    {"type": "hideFloorImg", "loc": [[6, 86], [252, 54]]},
    "\t[旁白]\b[up,null]切到旁白時清空人物圖。"
]
```

### 樓層貼圖

樓層貼圖寫在樓層屬性 `images`：

```js
"images": [
    {"name": "school_day.jpg", "canvas": "bg", "x": 0, "y": 0},
    {"name": "window_light.png", "canvas": "fg", "x": 160, "y": 0}
]
```

`canvas` 可用：

- `bg`：背景層，會在地圖事件與角色下方。
- `fg`：前景層，會在角色與事件上方。
- `auto`：按圖片下方 32px 畫在背景、其餘畫在前景，常用於大型物件遮擋。

顯示/隱藏樓層貼圖時以貼圖左上角像素座標作為識別：

```js
[
    {"type": "hideFloorImg", "loc": [[160, 0]]},
    "\t[旁白]窗邊的光暗了下去。",
    {"type": "showFloorImg", "loc": [[160, 0]]}
]
```

## 4. 如何設置局部/全局 Flag，並且如何搜尋

### 存檔內 Flag

`flag:xxx` 存在目前遊戲存檔的 `core.status.hero.flags`。未定義時讀取預設為 `0`。這是 AVG 分支最常用的狀態。

```js
{"type": "setValue", "name": "flag:met_mio", "operator": "=", "value": "true"}
{"type": "setValue", "name": "flag:trust_mio", "operator": "+=", "value": "1"}
{"type": "setValue", "name": "flag:route", "operator": "=", "value": "'mio'"}
{"type": "setValue", "name": "flag:met_mio", "operator": "=", "value": "null"}
```

`value: "null"` 會刪除該 Flag。

條件判斷：

```js
{
    "type": "if",
    "condition": "flag:trust_mio >= 3",
    "true": ["\t[澪]我相信你。"],
    "false": ["\t[澪]現在還不行。"]
}
```

文字中顯示：

```js
"\t[旁白]澪的信任值是 ${flag:trust_mio}。"
```

### 局部 Flag：獨立開關

`switch:A` 到 `switch:Z` 是「每層、每個座標」獨立的局部變數。適合 NPC 首次對話、某一個場景內的小機關。

```js
[
    {
        "type": "if",
        "condition": "switch:A",
        "true": [
            "\t[少女]又見面了。"
        ],
        "false": [
            "\t[少女]初次見面。",
            {"type": "setValue", "name": "switch:A", "operator": "=", "value": "true"}
        ]
    }
]
```

實際底層會轉成類似 `flag:<floorId>@x@y@A` 的 Flag。如果跨座標存取，要直接用完整 Flag 名稱。

### 臨時變數

`temp:A` 到 `temp:Z` 是事件流臨時變數，事件結束後清空。適合迴圈計數，不適合保存劇情分支。

```js
{"type": "setValue", "name": "temp:A", "operator": "=", "value": "0"}
```

### 跨存檔全局存儲

`global:xxx` 寫入瀏覽器 localStorage，跨存檔存在。適合成就、回想、音樂鑑賞、已讀章節。

```js
{"type": "setValue", "name": "global:cg_mio_01", "operator": "=", "value": "true"}
```

讀取時同樣可用：

```js
{
    "type": "if",
    "condition": "global:cg_mio_01",
    "true": ["\t[系統]已解鎖回想。"]
}
```

### 如何搜尋 Flag

在事件編輯器中使用「變量出現位置搜索」。搜尋格式必須是冒號縮寫量，例如 `flag:trust_mio`。它會搜尋：

- 各樓層 `firstArrive`、`eachArrive`
- 地圖點事件 `events`、`autoEvent`、`changeFloor`、`beforeBattle`、`afterBattle`、`afterGetItem`、`afterOpenDoor`
- 公共事件
- 道具使用事件
- 怪物戰前/戰後事件
- 圖塊碰觸事件、門資訊
- 標題事件、開場劇情、難度分歧、商店

注意：搜尋主要認得 `flag:xxx` 這種事件用寫法。原生腳本中的 `flags.xxx`、複雜 `core.insertAction(...)` 可能搜不到或不完整。AI 產生劇情時應優先使用 `flag:xxx`。

## 5. 場景顯示的邏輯

畫面是多層 canvas 疊起來的。從下到上大致是：

1. `bg`：背景層，包含 `bgmap` 和樓層貼圖 `canvas: "bg"`。
2. `event`：地圖事件層，包含 NPC、道具、牆、怪物等。
3. `hero`：勇士層。
4. `event2`：48px 高圖塊的上半部，用來修正遮擋。
5. `fg`：前景層，包含 `fgmap` 和樓層貼圖 `canvas: "fg"`。
6. `damage`：顯傷層。
7. `animate`：動畫層。
8. `weather`：天氣層。
9. `route`：路線層。
10. `image` 類圖片層：由 `showImage` 控制，依圖片編號決定相對於色調與 UI 的前後。
11. UI/文字框層。

AVG 推薦畫面策略：

- 場景背景：放樓層 `images` 的 `canvas: "bg"`，或用 `showImage` 編號 1 顯示。
- 角色立繪：每句對話只顯示當前發言者；可用 `showImage/hideImage`，或用樓層 `images` 搭配 `showFloorImg/hideFloorImg` 切換。
- CG：用 `showImage` 編號 25-40，必要時蓋過色調。
- 黑幕/白幕轉場：用 `setCurtain` 或高編號 `showImage`。
- 對話框：用顯示文章字串，不要用圖片蓋住 UI。
- 地圖本身：全部用 `0` 即可；若需要點擊或移動觸發，再放 NPC 或透明事件點。

樓層進入流程：

1. 切換到樓層後，載入該樓層的 `images`、`bgm`、`color`、`weather`。
2. 第一次到達時執行 `firstArrive`。
3. 每次到達時執行 `eachArrive`。
4. 玩家可操作後，踩到或碰到座標事件才執行 `events` 或系統觸發器。
5. 狀態列刷新時會檢查 `autoEvent` 條件。

若純 AVG 不需要玩家移動，可在 `firstArrive` 中連續播放劇情，最後用 `changeFloor` 進下一幕：

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    {"type": "showImage", "code": 10, "image": "mio_normal.png", "loc": [32, 36], "opacity": 1, "time": 300},
    "\t[澪]走吧，故事要開始了。",
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 500}
]
```

## 6. 如何新增音樂/特效

### 新增背景音樂

1. 把檔案放到 `project/bgms/`，支援常見音訊格式；編輯器表格允許 `mp3/ogg/wav/m4a/flac`。
2. 在 `project/data.js -> main.bgms` 加入檔名。
3. 可選：在 `main.nameMap` 加別名，例如 `"主題曲": "theme.mp3"`。
4. 樓層預設 BGM 可寫在樓層屬性：`"bgm": "theme.mp3"`。
5. 劇情中播放用 `playBgm`。

```js
{"type": "playBgm", "name": "theme.mp3", "startTime": 0, "keep": true}
```

`keep: true` 代表持續到下一個本事件，底層會設置 `flag:__bgm__`。若不設 `keep`，切樓層時可能回到樓層預設 BGM。

其他 BGM 指令：

```js
{"type": "pauseBgm"}
{"type": "resumeBgm", "resume": true}
{"type": "loadBgm", "name": "battle.mp3"}
{"type": "freeBgm", "name": "battle.mp3"}
{"type": "setVolume", "value": 60, "time": 500}
{"type": "setBgmSpeed", "value": 80, "pitch": true}
```

### 新增音效

1. 把檔案放到 `project/sounds/`。
2. 在 `project/data.js -> main.sounds` 加入檔名。
3. 可選：在 `main.nameMap` 加別名，例如 `"心跳": "heartbeat.mp3"`。
4. 劇情中播放用 `playSound`。

```js
{"type": "playSound", "name": "heartbeat.mp3"}
```

常用參數：

```js
{"type": "playSound", "name": "heartbeat.mp3", "stop": true}
{"type": "playSound", "name": "heartbeat.mp3", "pitch": 120}
{"type": "playSound", "name": "heartbeat.mp3", "sync": true}
{"type": "stopSound"}
```

- `stop: true`：播放前停止其他音效。
- `pitch`：30 到 300，100 是正常音調/速度。
- `sync: true`：等待音效播完再執行下一條事件。

### 新增動畫特效

動畫檔放在 `project/animates/`，並在 `project/data.js -> main.animates` 登錄不含副檔名的名稱。播放：

```js
{"type": "animate", "name": "hand", "loc": "hero"}
```

也可指定座標：

```js
{"type": "animate", "name": "thunder", "loc": [6, 6]}
```

## 純文字到事件 JSON 的建議格式

AI 接到劇本文本時，先轉成中間格式，再轉成事件陣列。

中間格式範例：

```txt
[SCENE scene_intro]
title: 序章
bg: intro_bg.jpg
bgm: opening.mp3

旁白: 雨停了。
澪@mio_normal.png: 你終於醒了。
CHOICE 你相信我嗎？
- 相信 => flag:trust_mio += 1
- 還不能 => flag:trust_mio -= 1
GOTO scene_002
```

事件輸出範例：

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    "\t[旁白]雨停了。",
    {"type": "showImage", "code": 10, "image": "mio_normal.png", "loc": [32, 36], "opacity": 1, "time": 200},
    "\t[澪]你終於醒了。",
    {
        "type": "choices",
        "text": "\t[澪]你相信我嗎？",
        "choices": [
            {
                "text": "相信",
                "action": [
                    {"type": "setValue", "name": "flag:trust_mio", "operator": "+=", "value": "1"}
                ]
            },
            {
                "text": "還不能",
                "action": [
                    {"type": "setValue", "name": "flag:trust_mio", "operator": "-=", "value": "1"}
                ]
            }
        ]
    },
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 500}
]
```

## AI 撰寫檢查清單

- 新樓層檔名、`floorId`、`main.floors.<id>` 三者一致。
- 新樓層 ID 已加入 `project/data.js -> main.floorIds`。
- 新圖片已放入 `project/images` 並加入 `main.images`。
- 新 BGM 已放入 `project/bgms` 並加入 `main.bgms`。
- 新音效已放入 `project/sounds` 並加入 `main.sounds`。
- 所有事件 JSON 都是合法 JS 物件/陣列；字串內換行使用 `\n`。
- 對話字串用 `\t[角色,圖像]\b[位置]正文`。
- 立繪切換要遵守「只顯示當前發言者」；旁白前要清空人物圖。
- 持續立繪用 `showImage/hideImage` 或 `showFloorImg/hideFloorImg`，不要只用 `\f`。
- 劇情分支用 `flag:xxx`；單點一次性狀態用 `switch:A`；跨存檔解鎖用 `global:xxx`。
- 搜尋 Flag 時使用事件編輯器的「變量出現位置搜索」，搜尋 `flag:xxx`。
- AVG 場景若不需要地圖玩法，`map` 全填 `0`，背景交給樓層貼圖或 `showImage`。
