# 圖片與立繪

## 如何顯示/隱藏圖片

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
        "image": "keng_neutral_portrait.png",
        "loc": [28, 210],
        "opacity": 1,
        "time": 300
    },
    "\t[梗平]我在這裡。",
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
    {"type": "showImage", "code": 1, "image": "keng_smile_portrait.png", "loc": [28, 210], "opacity": 1, "time": 150},
    "\t[梗平]這樣就好多了。"
]
```

### 只顯示當前發言者

AVG 對話的立繪規則是：同一時間只顯示「當前發言的人物」。不要把所有在場角色都常駐在畫面上。每句角色台詞前先清掉其他角色，再顯示當前說話者；旁白不是發言者，旁白敘述前要清掉所有角色。

若立繪用 `showImage`：

```js
[
    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 10, "image": "keng.png", "loc": [28, 210], "opacity": 1, "time": 0},
    "\t[梗平]這一句只有梗平的圖。",

    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 11, "image": "suou_sad_portrait.png", "loc": [260, 185], "opacity": 1, "time": 0},
    "\t[表妹]這一句只顯示表妹。",

    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0},
    "旁白不顯示人物立繪。"
]
```

若立繪使用樓層 `images` 的 `canvas: "fg"` 貼圖，需以貼圖左上角像素座標切換：

```js
"images": [
    {"name": "school_day.jpg", "canvas": "bg", "x": 0, "y": 0},
    {"name": "keng_portrait.png", "canvas": "fg", "x": 28, "y": 210, "disabled": true},
    {"name": "suou_sad_portrait.png", "canvas": "fg", "x": 260, "y": 185, "disabled": true}
],

"eachArrive": [
    {"type": "hideFloorImg", "loc": [[28, 210], [260, 185]]},
    "這句旁白不顯示人物。",

    {"type": "hideFloorImg", "loc": [[28, 210], [260, 185]]},
    {"type": "showFloorImg", "loc": [[28, 210]]},
    "\t[梗平]左側梗平發言。",

    {"type": "hideFloorImg", "loc": [[28, 210], [260, 185]]},
    {"type": "showFloorImg", "loc": [[260, 185]]},
    "\t[表妹]右側表妹發言。"
]
```

`disabled: true` 很重要：樓層 `images` 會在進入場景時立刻繪製，若角色立繪沒有初始禁用，會在第一個事件執行前短暫閃出來。AVG 角色貼圖只要不是場景一開始就應該出現，都要先設為 `disabled: true`，再由 `showFloorImg` 顯示。

AVG 立繪位置應以「底部對話框遮住下半身、上半身探出」為基準。不要把人物完整浮在對話框上方；以 416x416 畫面為例，目前使用：

- 梗平 `keng_portrait.png`：`x: 28, y: 210`
- 表妹/蘇芳 `suou_sad_portrait.png`：`x: 260, y: 185`

### 常用立繪 mapping

自動產生 AVG 對話時，角色表情立繪優先使用 `showImage`，因為可直接指定圖片檔名，不會受樓層貼圖座標鍵限制。一般對話前先清掉人物 code，再顯示當前發言者：

```js
[
    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 10, "image": "keng_smile_portrait.png", "loc": [28, 210], "opacity": 1, "time": 0},
    "\t[梗平]這一句使用梗平笑臉。"
]
```

自動為劇本補立繪時，必須先保留正確角色名，確認圖片屬於當前發言角色後，再依台詞當下的情緒選擇合適表情。同一個角色理論上會有複數張表情圖可用，例如 `neutral`、`smile`、`angry`、`surprised` 等；若判斷不出情緒，才使用該角色的預設/平常立繪。若找不到當前角色的任何圖片，就視為沒有可用圖片，不可用其他角色或相似名字的圖片代替。未知角色如 `???` 沒有已確認身分與同角色圖片時，只清掉目前角色圖，不顯示立繪。

新增角色支線劇情時，輸入應是一個 `.txt` 劇本文本，且能從檔案名稱確認這是哪個角色的支線。開始轉 scene 前，先確認 `project/images` 是否已存在該角色的原始角色圖；若沒有對應角色圖，必須拒絕這次改動，不要先產生缺圖劇情。若已有原始角色圖，先使用 `split_emotion_image.py` 分割出六張表情圖；分割工具會把輸出圖等比例縮小到固定上限，預設不超過 `195x195`，再登錄到 `project/data.js -> main.images` 並用於後續劇情轉換。

若支線劇情中的發言者被刻意隱蔽，例如 `???`、`神秘人`、`神祕人`，預設視為該支線劇情持有者本人來選擇立繪；但對話中顯示的發言者名稱仍保留原本的隱蔽寫法，不要提前暴露真名。

`梗平` 是既有角色，一定有可用立繪；預設使用 `keng_neutral_portrait.png`、code `10`、loc `[28, 210]`。除非劇本明確指定表情，否則不要把 `梗平` 判定為缺圖。

`表妹`、`妹`、`蘇芳`、`蘇方` 都指同一位角色，統一使用 `suou_*_portrait.png` 與 code `11`。

| 角色 | code | loc | 表情/別名 | 圖片 |
| --- | ---: | --- | --- | --- |
| 梗平 | 10 | `[28, 210]` | 預設、平常 | `keng_neutral_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 生氣、不爽 | `keng_angry_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 崩潰、顏藝、恐慌 | `keng_panic_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 嚴肅、低落 | `keng_serious_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 笑、得意 | `keng_smile_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 驚訝、錯愕 | `keng_surprised_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 哀、難過、預設 | `suou_sad_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 怒、生氣 | `suou_angry_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 喜、微笑 | `suou_smile_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 樂、開心 | `suou_happy_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 顏藝、崩壞 | `suou_goofy_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 驚訝、錯愕 | `suou_surprised_portrait.png` |
| 荒漠 | 12 | `[260, 185]` | 笑、友善、預設 | `huangmo_smile.png` |
| 荒漠 | 12 | `[260, 185]` | 怒、生氣、制止 | `huangmo_angry.png` |
| 荒漠 | 12 | `[260, 185]` | 哀、難過 | `huangmo_sad.png` |
| 荒漠 | 12 | `[260, 185]` | 樂、開心 | `huangmo_happy.png` |
| 荒漠 | 12 | `[260, 185]` | 驚訝、錯愕 | `huangmo_surprised.png` |
| 荒漠 | 12 | `[260, 185]` | 崩潰、恐慌 | `huangmo_panic.png` |

若必須改用樓層 `images` + `showFloorImg` 做持續貼圖，每張表情在同一樓層內都要有不同的 `x, y` 作為識別鍵；不可把同一角色多張表情都放在完全相同座標，否則 `showFloorImg` 會一次顯示同座標的所有表情。實作時可讓同角色表情使用相鄰的 `x` 值，例如梗平 `[28,210]` 到 `[33,210]`，切換前用 `hideFloorImg` 清掉該角色全部表情座標。

新增角色時，先估算底部對話框大約覆蓋畫面下方 100-140px，將人物腰部到大腿位置放進這個範圍，頭部與胸口留在文字框上方。

簡化事件範例：

```js
[
    {"type": "hideFloorImg", "loc": [[28, 210], [260, 185]]},
    {"type": "showFloorImg", "loc": [[28, 210]]},
    "\t[梗平]左側梗平發言。",

    {"type": "hideFloorImg", "loc": [[28, 210], [260, 185]]},
    {"type": "showFloorImg", "loc": [[260, 185]]},
    "\t[表妹]右側表妹發言。",

    {"type": "hideFloorImg", "loc": [[28, 210], [260, 185]]},
    "切到旁白時清空人物圖。"
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
    "窗邊的光暗了下去。",
    {"type": "showFloorImg", "loc": [[160, 0]]}
]
```

