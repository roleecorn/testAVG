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

- 現行畫布：544×416（17×13）；舊 416×416 舞台位於左側，新增的 128 像素在右側。
- 場景背景：既有 416×416 背景放樓層 `images` 的 `canvas: "bg"`、`x: 0, y: 0`，或用 `showImage` 編號 1、`loc: [0, 0]` 顯示；不要自動拉伸。
- 角色立繪：左、右人物槽與中央對話框形成下方橫向空間配置，但每句仍先清空人物，只顯示當前發言者。人物 bottom 由全局 `portraitBottomGap` 對齊畫面 bottom；三人以上共用左右槽位，不新增第三槽位。
- CG：用 `showImage` 編號 25-40，中央面板固定為 `loc: [112, 50, 320, 220]`；來源先以 16:11 的 `sloc` 裁切，必要時蓋過色調。
- 固定一秒動作 CG：沿用同一個 320×220 面板，事件順序固定為 `showImage` → `sleep(1000, noSkip)` → `hideImage`。

主線 scene 與角色支線 scene 共用上述唯一版面契約；觸發流程不同不構成背景、立繪、對話框或 CG 座標例外。人物圖層位於 UI／對話框之後，中央對話框寬度明顯小於畫布並可遮住人物伸入的部分。現有主線與舊支線版面等待全局 layout config 實作、量測及視覺驗收後另行遷移，目前不得把歷史座標複製到新 scene。

每個地點使用自己的背景檔與精確名稱 mapping。共用 generic 背景只能複製成 placeholder；正式背景替換不得修改共用來源，以免同時改變其他地點。
- 黑幕/白幕轉場：用 `setCurtain` 或高編號 `showImage`。
- 對話框：使用下方中央窄框與顯示文章字串；精確矩形由全局 layout config 提供，不再採目前 `(13,295)–(531,411)` 的近全寬範圍。對話框 UI 必須蓋在人物前方。
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

上例的 `[28, 210]` 是現有 floor 可讀的歷史座標，只示範事件流程；新版事件改用 `loc: ["portraitLeft", "portraitBottom"]` 或 `loc: ["portraitRight", "portraitBottom"]`。目前只有 `huangmo_1` 套用試作值，其餘 floor 待視覺定稿後統一遷移。

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

