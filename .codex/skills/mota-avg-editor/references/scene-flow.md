# 場景顯示邏輯

## 場景顯示的邏輯

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

- 現行畫布：544×416（17×13）。
- 場景背景：必須是 544×416，放樓層 `images` 的 `canvas: "bg"`、`x: 0, y: 0`，或用 `showImage` 編號 1、`loc: [0, 0]` 顯示，並完整覆蓋畫布。416×416 背景或 placeholder 均為錯誤，必須替換，不得縮放、裁切或保留作為相容方案。
- 角色立繪：只保留一個普通當前發言者槽。人物可見 bbox 左右置中於畫面，且可見 bottom 錨定於畫面外的 `portraitBottomY: 440`，由 416px viewport 裁切下半身。每句有立繪的台詞固定使用 `showImage(本句 code) → dialogue → hideImage(同一 code)`；只管理本句實際顯示的圖片，不清空所有可能人物 code。
- CG：用 `showImage` 編號 25-40，中央面板固定為 `loc: [112, 50, 320, 220]`；來源先以 16:11 的 `sloc` 裁切，必要時蓋過色調。
- 固定一秒動作 CG：沿用同一個 320×220 面板，事件順序固定為 `showImage` → `sleep(1000, noSkip)` → `hideImage`。

主線 scene 與角色支線 scene 共用上述唯一版面與逐句生命週期契約；觸發流程不同不構成背景、立繪、對話框或 CG 座標例外。人物圖層位於 UI／對話框之後，可見 bbox 的水平中心等於畫面水平中心，可見 bottom 等於 `portraitBottomY: 440`。所有立繪必須套用相同的全局 `portraitScale: 0.92`；標準構圖的頭頂約落在畫面上緣 5–10%，下半身延伸到對話框後並被畫面底部裁切。alpha bbox 只用於對齊，不可依圖片尺寸各自縮放。舊的左右槽、依 `dialogueY` 錨定、128px 可見寬度與 25% 對話框遮擋規則全部廢止。

每個地點使用自己的背景檔與精確名稱 mapping。共用 generic 背景只能複製成 placeholder；正式背景替換不得修改共用來源，以免同時改變其他地點。
- 黑幕/白幕轉場：用 `setCurtain` 或高編號 `showImage`。
- 「此段」：指從該演出註記或段落標記開始，到下一次背景發生變化之前的連續劇情範圍。背景變化包括切換樓層背景、替換全畫面背景圖，或來源明確指定新的場景背景；單純的對話、角色立繪、音樂、音效、黑幕／白幕轉場或其他不改變背景內容的演出，不會結束「此段」。一旦背景變化發生，前一個「此段」結束，後續內容必須依新背景重新判定適用的演出效果。
- 回憶段落：當來源以 `【過場：回憶】` 開始，並以後續說明指定「模仿復古膠捲播放時的棕色調」時，定義為「此段」套用全畫面的棕色、低飽和暖色視覺語意。這是場景演出需求，不代表必須建立獨立濾鏡素材或新增濾鏡系統；應優先使用既有的畫面顏色調整能力完成。色調從回憶標記開始生效，持續到下一次背景變化；不得只套用在單句對話、角色立繪或局部圖片上。若來源沒有指定精確 RGB、透明度或持續時間，實作者應維持專案既有畫面調整介面，並以「全畫面可辨識為復古棕色、仍能清楚閱讀對話與辨識畫面」作為驗收標準，不得自行把語意擴張成膠片噪點、掃描線、邊框或影片效果。
- 對話框：使用下方文字框與顯示文章字串；精確矩形由全局 layout config 提供，不因人物左右站位預留空間。對話框 UI 必須蓋在人物圖層前方。
- 地圖本身：全部用 `0` 即可；若需要點擊或移動觸發，再放 NPC 或透明事件點。
- 地圖英雄：本專案預設以透明 `hero.png` 隱形；引擎也支援 `hideHero/showHero`，底層是切換 `flag:__heroOpacity__`，但 AVG 預設不依賴事件逐場隱藏。

樓層進入流程：

1. 切換到樓層後，載入該樓層的 `images`、`bgm`、`color`、`weather`。
2. 第一次到達時執行 `firstArrive`。
3. 每次到達時執行 `eachArrive`。
4. 玩家可操作後，踩到或碰到座標事件才執行 `events` 或系統觸發器。
5. 狀態列刷新時會檢查 `autoEvent` 條件。

本專案的 AVG 故事劇情一律放在 `eachArrive`。`firstArrive` 目前不放故事，也不要放一般章節內容；它只保留給未來明確需要「整個存檔只執行一次」的指導規則或初始化功能。已拜訪樓層再次進入時不會執行 `firstArrive`，若把故事放在那裡，時間線或章節跳轉會直接落在該樓層跑完後的狀態。

若純 AVG 不需要玩家移動，可在 `eachArrive` 中連續播放劇情，最後用 `changeFloor` 進下一幕：

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    {"type": "showImage", "code": 10, "image": "keng_neutral_portrait.png", "loc": [28, 210], "opacity": 1, "time": 300},
    "\t[梗平]走吧，故事要開始了。",
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 500}
]
```

上例的 `[28, 210]` 只用來辨識歷史事件流程，不是新版標準。後續實作必須改用單一當前發言者語意槽，並由全局 layout config 解析左右置中、畫面外 bottom 錨點與縮放倍率；視覺定稿只修改全局 config。正式逐句事件還必須在 dialogue 後立即 hide 同一 code。

影片轉場必須用獨立事件 `playTransitionVideo` 明確指定，接著立刻用 `changeFloor` 切樓層，且 `changeFloor.time` 設為 `0`，避免觸發原本樓層淡入淡出。一般 `changeFloor` 不會播放影片轉場。

```js
[
    {"type": "playTransitionVideo"},
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "time": 0}
]
```

## 主線與角色好感劇情的交流回合

劇情分成兩類：

- **主線劇情**：依主線 scene 的順序推進。
- **角色好感劇情**：從秋葉原地點選擇並進入的獨立事件 scene。

主線文本中的「人物交流回合」是主線暫停、轉入角色好感劇情的獨立流程標記，不是章節標題。標記前與標記後必須視為兩個不同的 floor/scene：標記前 scene 在此結束；標記後文本放入新的 continuation scene。不得完成好感劇情後重新進入標記所在的 floor，也不得重播標記前內容。

### 流程規則

1. 主線 scene 播放至人物交流回合後，保存標記後的 continuation scene 與轉場設定，切換到 `Akiba`。
2. 玩家在秋葉原完成一段角色好感劇情後，`count` 加 1。
3. 目標 `count` 預設為 `2`；標記有指定 `X` 時，使用該 `X`，例如「人物交流回合 X2」。
4. 未達目標時，角色好感劇情結尾照常回到秋葉原，讓玩家再選一段可觸發劇情。
5. 達目標後，角色好感劇情結尾不回秋葉原，而是進入先前保存的 continuation scene；該 scene 再依自己的結尾進入下一段主線。

這套流程由 `project/plugins.js` 的 `core.plugin.beginCharacterExchange(destination, targetCount)`、`core.plugin.completeAkibaEvent(eventId)` 與 `core.plugin.returnToAkiba()` 管理。`beginCharacterExchange()` 會清掉離開主線 scene 後不應殘留的事件佇列，因此標記後的劇情不能留在原 scene 的執行流程，必須放到 `destination` 指定的新 floor。

主線 scene 的收尾範例：

```js
[
    {
        "type": "comment",
        "text": "人物交流回合：完成 2 段角色好感劇情後，進入交流後續 scene。"
    },
    {
        "type": "function",
        "function": "function () { core.plugin.beginCharacterExchange({ floorId: 'scene_001_exchange_1', loc: [6, 10], direction: 'up', time: 500 }); }"
    }
]
```

指定三段角色好感劇情時，第二個參數傳入 `3`：

```js
core.plugin.beginCharacterExchange({ floorId: 'scene_001_exchange_1', loc: [6, 10], direction: 'up', time: 500 }, 3);
```

角色好感劇情的結尾仍維持原有順序：先呼叫 `completeAkibaEvent(eventId)`，再呼叫 `returnToAkiba()`；不要直接寫死 `changeFloor` 回秋葉原，否則達標時無法自動續接主線。

## 跨 scene 的 image 清理

`showImage` 產生的是名稱為 `image<code+100>` 的動態 canvas，不會因為 `changeFloor` 自動刪除。若不清理，主線 scene、角色好感劇情與秋葉原地圖之間都可能保留前一幕的立繪、CG 或 `showImage` 背景。

本專案已在 `project/functions.js -> changingFloor()` 統一執行以下 image-only 清理；所有主線與角色好感劇情都會自動套用，**不要**為了清圖片改用 `deleteAllCanvas()`：

```js
core.deleteCanvas(function (name) {
    return /^image\d+$/.test(name);
});
```

此做法只刪除 `showImage` 的 `image*` 圖層，不會影響其他插件或 UI 的動態 canvas。新 scene 在切換後應自行顯示需要的背景、立繪與 CG，不應依賴前一個 scene 的 image 保留。

### 實作防呆：人物交流標籤

- 不要把「人物交流時間」當作文本標題，或讓它所在的 floor 在好感劇情後重新播放。
- 標籤後的第一句起，必須搬到新的 continuation floor；新 floor 的檔名、`floorId` 與 `project/data.js -> floorIds` 必須一致。
- 因換 floor 時會清除 `image*`，continuation scene 必須在開頭重新顯示所需背景，再播放標籤後的劇情。
- 交付前至少檢查：標籤的 `beginCharacterExchange()` 目的地存在於 `floorIds`，且新 floor 可通過 `node --check`。

