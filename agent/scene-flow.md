# 場景顯示邏輯

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
- 角色立繪：每句對話只顯示當前發言者；可用 `showImage/hideImage`，或用樓層 `images` 搭配 `showFloorImg/hideFloorImg` 切換。站位以下方對話框遮住下半身、上半身露出為準。
- CG：用 `showImage` 編號 25-40，必要時蓋過色調。
- 黑幕/白幕轉場：用 `setCurtain` 或高編號 `showImage`。
- 對話框：用顯示文章字串，不要用圖片蓋住 UI。
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
    {"type": "showImage", "code": 10, "image": "mio_normal.png", "loc": [32, 36], "opacity": 1, "time": 300},
    "\t[澪]走吧，故事要開始了。",
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 500}
]
```

