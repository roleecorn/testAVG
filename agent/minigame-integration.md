# 小遊戲新增與接入指南

這份文件記錄目前專案的小遊戲接入規範。只有「不依賴魔塔地圖 Grid、自己管理畫面與輸入、結束後回傳結果」的玩法，才放進這套流程。

## 獨立小遊戲判定標準

符合以下多數條件，才視為獨立小遊戲：

- 主要畫面由獨立 `canvas`、DOM 或 WebGL 場景繪製，而不是魔塔樓層格子。
- 玩家位置、敵人、子彈、碰撞、倒數、得分等狀態由小遊戲自己管理。
- 操作輸入直接由小遊戲處理，例如鍵盤、滑鼠、觸控，而不是依靠魔塔移動到某格觸發事件。
- 可以用單一入口函數開始，例如 `core.plugin.startMiniGame(gameId, options, callback)`。
- 結束時能回報結果，例如 `win`、`lose`、`draw`、`cancel`、`score`，再交回魔塔事件流。
- 不要求改動樓層 `map` 的大量圖塊，也不需要在特定座標反覆 `setBlock` 才能運作。

若玩法主要依賴 `setBlock`、`getBlockId`、`moveHero`、`afterBattle`、每步後事件或樓層格子掃描，通常應視為魔塔格子玩法，不要放進獨立小遊戲架構。

## 檔案位置

- `extensions/minigames/<game-id>.js`：小遊戲主邏輯。
- `extensions/minigames/<game-id>.css`：小遊戲樣式；只有 DOM UI 需要時才新增。
- `project/images/minigames/<game-id>/`：小遊戲圖片資源。
- `project/sounds/minigames/<game-id>/`：小遊戲音效資源。
- `project/plugins.js`：只負責允許清單、動態載入、事件入口與結果回寫。

目前採用「一個小遊戲一個檔案」：

- 小遊戲本體只處理自己的畫面、輸入、規則、清理與 result。
- `project/plugins.js` 只處理載入、事件入口、把 result 寫回魔塔狀態。
- 不要把每個小遊戲的大段 UI 與規則邏輯都塞進 `project/plugins.js`。

## 現有入口

`project/plugins.js` 目前允許的小遊戲 ID：

- `ticTacToe`
- `slot777`

通用入口：

```js
core.plugin.startMiniGame(gameId, options, callback);
```

目前封裝好的事件入口：

```js
core.plugin.startTicTacToeDemoEvent();
core.plugin.startSlot777DemoEvent();
core.plugin.closeMiniGame();
```

起始樓層 `project/floors/mapo_1_1.js` 的小遊戲機選項會呼叫：

- 「玩圈圈叉叉」：`core.plugin.startTicTacToeDemoEvent()`
- 「玩 777 拉霸」：`core.plugin.startSlot777DemoEvent()`

## 接入原則

小遊戲應以「魔塔事件流暫停，小遊戲接管畫面與輸入，結束後恢復事件流」為基本模型。

接入時要處理：

- 開始前呼叫 `core.lockControl()`，避免魔塔本體同時吃輸入。
- 建立專用 canvas 或 DOM 節點，z-index 高於一般 UI。
- 註冊鍵盤、滑鼠、觸控事件，並在結束時完整移除。
- 使用 `requestAnimationFrame` 或 `core.registerAnimationFrame` 更新畫面。
- 結束時刪除 canvas/DOM、取消動畫、解除事件監聽。
- 結束後依需求呼叫 `core.unlockControl()` 或 `core.events.doAction()` 接回事件。
- 若小遊戲會進入存檔流程，必須把必要狀態存入 `flag:minigame.xxx`，否則不要允許中途存檔。

建議回傳：

```js
callback({
    result: "win",
    score: 0,
    reason: "clear"
});
```

若事件需要等待小遊戲結束，自定義 JS 事件應選擇「不執行下一個事件」。目前的封裝入口會在 callback 內寫入結果、改變魔塔狀態、插入結果文字，最後呼叫 `core.doAction()` 接續事件流。

## 版面規範

H5 魔塔的小遊戲 DOM 通常掛在 `core.dom.gameDraw` 裡，而不是整個瀏覽器 viewport。手機模式下 `gameDraw` 可能被縮放成較小的正方形區域，還會和系統狀態列、瀏覽器工具列、虛擬按鍵區競爭高度。因此小遊戲版面要以遊戲區短邊為基準，不要只用桌機寬度設計。

手機與桌機都要遵守：

- 不使用 scrollbar 作為主要解法；overlay 與 panel 預設保持 `overflow: hidden`，小遊戲必須完整塞進畫面。
- 以魔塔 13x13 格為優先設計基準，可用 `unit = min(width, height) / 13` 計算尺寸。
- 主內容、狀態列、分數列、底部按鈕要共享同一個高度預算，不要混用外層格單位與內層固定 px 最小值。
- 大型棋盤、轉盤、卡牌區、清單區都要先保留控制列高度，再決定主內容尺寸。
- 手機操作必須有可點擊按鈕或觸控區，不可只依賴鍵盤快捷鍵。
- 彈窗關閉、取消、結算按鈕的高度建議至少 38px，文字不要超出按鈕。
- 若小遊戲使用 canvas，canvas 的 CSS 尺寸與實際繪圖尺寸要一起縮放；若使用 DOM grid，格子的 `aspect-ratio` 也必須受最大高度限制。

驗收至少檢查：

- 桌機正常視窗。
- 手機直向 360x640、390x844。
- 魔塔常見的 416x416 遊戲區。
- 短邊被壓縮的嵌入尺寸，例如 260x416、240x360、208x416。
- 「剛開啟」、「遊戲進行中」、「結算後顯示結果」三種狀態。

## 實作檢查清單

新增小遊戲前：

- 確認它是否真的非 Grid。
- 確認授權或來源允許複製、改寫或嵌入。
- 記錄來源 URL、名稱、作者、版本、抓取日期。
- 判斷是否需要圖片、音效、字體或外部函式庫。

新增小遊戲時：

- 小遊戲入口函數名稱固定且可從事件呼叫。
- `project/plugins.js` 的允許清單加入 `<game-id>`。
- 所有資源路徑使用專案相對路徑。
- 不污染全域變數；必要狀態收在單一 namespace，例如 `window.MotaMiniGames.<game-id>`。
- 不覆寫核心 API，除非文件明確說明原因。
- 結束時能完全清理畫面、動畫與輸入。
- 失敗與取消路徑也會執行清理。

驗收時：

- 從一個事件呼叫小遊戲，確認能開始。
- 鍵盤與滑鼠/觸控至少一種操作可用；行動端需求明確時兩者都要可用。
- 勝利、失敗、取消都能正確返回魔塔事件流。
- 小遊戲結束後，魔塔移動、選單、事件仍正常。
- 重新開始同一小遊戲不會殘留上一局 canvas、timer、listener 或 flag。
- 開啟瀏覽器 console，確認沒有未捕捉錯誤。

測試前請先依 [專案架構與輸出原則](project-overview.md) 的標準流程啟動根目錄 `启动服务.exe`，從 `http://127.0.0.1:1055/index.html` 進入遊戲，再透過遊戲中的選項啟動小遊戲。不要用 URL query 參數、`8765` 或 `python -m http.server` 測小遊戲，否則不是正常遊戲流程，也可能打到其他專案或缺少魔塔樣板服務路由。
