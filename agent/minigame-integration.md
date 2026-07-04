# 小遊戲新增與接入指南

這份文件給之後新增小遊戲時使用。目標是先判斷外部插件或玩法是否真的是「獨立於魔塔 Grid 系統的小遊戲」，再決定是否下載、改寫與實裝。

## 本次插件判定

來源：

- 插件庫頁面：`https://h5mota.com/plugin/`
- 插件資料 API：`https://h5mota.com/plugins/getData.php`
- 實際插件名稱：`仿东方boss战`
- 作者：`Happy`
- 上傳時間：`2022-05-06 15:16:40`
- 插件版本說明：`仿东方BOSS战 Ver 1.1.0`

結論：這個插件不是獨立小遊戲，不應直接作為「非 Grid 小遊戲」下載實裝。

原因：

- 插件註解明確寫著「適配15x15樣板，適用於9*9區域內的回合制特殊戰」。
- 戰鬥流程依賴魔塔地圖格子與樓層事件，例如 `setBlock`、`jumpHero`、`jump`、`hide`、`getBlockId(x, y)`。
- 需要把 `core.plugin.doAttack()` 接到「每步後事件」，把 `core.plugin.detectBattle(enemyId, damage)` 接到「戰後事件」。
- BOSS 階段切換會掃描固定格子區域 `x = 3..11`、`y = 3..11`，本質上仍是格子地圖玩法。
- 它是魔塔戰鬥/地圖事件的擴充，不是 canvas 或 DOM 上自行管理輸入、碰撞、狀態與結束回呼的獨立小遊戲。

可保留的參考價值：

- 可以參考它的「開始戰鬥、階段資料、結束回呼」結構。
- 不要把它當作獨立小遊戲模板。
- 若未來要做「格子制特殊戰」，它可以作為參考；若要做彈幕、節奏、QTE、射擊、躲避等非格子玩法，應走下方接入流程。

## 獨立小遊戲判定標準

符合以下多數條件，才視為獨立小遊戲：

- 主要畫面由獨立 `canvas`、DOM 或 WebGL 場景繪製，而不是魔塔樓層格子。
- 玩家位置、敵人、子彈、碰撞、倒數、得分等狀態由小遊戲自己管理。
- 操作輸入直接由小遊戲處理，例如鍵盤、滑鼠、觸控，而不是依靠魔塔移動到某格觸發事件。
- 可以用單一入口函數開始，例如 `core.plugin.startMiniGame(config, callback)`。
- 結束時能回報結果，例如 `win`、`lose`、`score`、`hp`、`time`，再交回魔塔事件流。
- 不要求改動樓層 `map` 的大量圖塊，也不需要在特定座標反覆 `setBlock` 才能運作。

若插件主要依賴 `setBlock`、`getBlockId`、`moveHero`、`afterBattle`、每步後事件、樓層格子掃描，通常不是獨立小遊戲。

## 建議檔案位置

未來新增小遊戲時，優先使用以下結構：

- `extensions/minigames/<game-id>.js`：小遊戲主邏輯。
- `extensions/minigames/<game-id>.css`：小遊戲樣式；只有 DOM UI 需要時才新增。
- `project/images/minigames/<game-id>/`：小遊戲圖片資源。
- `project/sounds/minigames/<game-id>/`：小遊戲音效資源。
- `agent/minigame-integration.md`：記錄接入方法、入口函數與事件範例。

如果專案現有載入流程不會自動載入 `extensions/minigames/*.js`，應在 `project/plugins.js` 中建立薄封裝，動態載入或直接註冊小遊戲入口。

目前採用「一個小遊戲一個檔案」：

- 小遊戲本體只處理自己的畫面、輸入、規則、清理與 result。
- `project/plugins.js` 只處理載入、事件入口、把 result 寫回魔塔狀態。
- 不要把每個小遊戲的大段 UI 與規則邏輯都塞進 `project/plugins.js`。

## 接入原則

小遊戲應以「魔塔事件流暫停，小遊戲接管畫面與輸入，結束後恢復事件流」為基本模型。

建議入口：

```js
core.plugin.startMiniGame = function (gameId, options, callback) {
    // 依 gameId 啟動指定小遊戲
};
```

建議回傳：

```js
callback({
    result: "win",
    score: 0,
    reason: "clear"
});
```

接入時要處理：

- 開始前呼叫 `core.lockControl()`，避免魔塔本體同時吃輸入。
- 建立專用 canvas 或 DOM 節點，z-index 高於一般 UI。
- 註冊鍵盤、滑鼠、觸控事件，並在結束時完整移除。
- 使用 `requestAnimationFrame` 或 `core.registerAnimationFrame` 更新畫面。
- 結束時刪除 canvas/DOM、取消動畫、解除事件監聽。
- 結束後依需求呼叫 `core.unlockControl()` 或 `core.events.doAction()` 接回事件。
- 若小遊戲會進入存檔流程，必須把必要狀態存入 `flag:minigame.xxx`，否則不要允許中途存檔。

## 手機與電腦模式的版面差異

H5 魔塔的小遊戲 DOM 通常掛在 `core.dom.gameDraw` 裡，而不是整個瀏覽器 viewport。電腦模式下 `gameDraw` 外圍空間較寬，彈窗可以接近桌機 UI 的 430px 寬度；手機模式下 `gameDraw` 可能被縮放成較小的正方形區域，還可能和系統狀態列、瀏覽器工具列、虛擬按鍵區競爭高度。因此手機模式不能只用 `width: 100%` 加 `aspect-ratio: 1/1` 撐主遊戲區，否則底部按鈕很容易被推出可見範圍。

本次 `slot777` 的修正方案：

- overlay 設定 `box-sizing: border-box`、固定 padding、`overflow: auto`，避免內容被直接裁掉。
- panel 設定 `max-height: 100%`、`display: flex`、`flex-direction: column`，並在緊湊畫面允許 panel 內部捲動。
- 以 JS 讀取 `overlay.clientWidth/clientHeight`，判斷 `overlayWidth <= 460` 或 `overlayHeight <= 520` 時進入 compact layout。
- compact layout 先預留標題、狀態文字、分數列與底部按鈕高度，再把剩餘高度分配給 3x3 主遊戲區。
- 主遊戲區不再單純依寬度撐成正方形，而是用 `min(可用寬度, 可用高度)` 計算尺寸，確保 START / STOP / SETTLE 按鈕留在畫面內。
- 按鈕加入 `touch-action: manipulation`，手機點擊時不要依賴鍵盤，也不要只做 hover 狀態。

今後製作小遊戲時要注意：

- 手機驗收至少檢查 360x640、390x844，以及魔塔常見的 416x416 遊戲區高度；不要只看桌機瀏覽器。
- 大型棋盤、轉盤、卡牌區、清單區都要先保留控制列高度，再決定主內容尺寸。
- 底部主要按鈕不得只靠頁面自然流排版；需要 `max-height`、`overflow` 或明確尺寸計算保護。
- 手機操作必須有可點擊按鈕或觸控區，不可只依賴鍵盤快捷鍵。
- 彈窗關閉、取消、結算按鈕的高度建議至少 38px，文字不要超出按鈕。
- 若小遊戲使用 canvas，canvas 的 CSS 尺寸與實際繪圖尺寸要一起縮放；若使用 DOM grid，格子的 `aspect-ratio` 也必須受最大高度限制。
- 驗收時要測「剛開啟」、「遊戲進行中」、「結算後顯示結果」三種狀態，因為底部按鈕文字長度和狀態列文字可能改變高度。

## 實作檢查清單

新增小遊戲前：

- 確認它是否真的非 Grid。
- 確認授權或來源允許複製、改寫或嵌入。
- 記錄來源 URL、插件名稱、作者、版本、抓取日期。
- 判斷是否需要圖片、音效、字體或外部函式庫。

新增小遊戲時：

- 小遊戲入口函數名稱固定且可從事件呼叫。
- 所有資源路徑使用專案相對路徑。
- 不污染全域變數；必要狀態收在單一 namespace。
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

## 事件呼叫範例

目前已有 demo：

- 小遊戲 ID：`ticTacToe`
- 入口：`core.plugin.startMiniGame("ticTacToe", options, callback)`
- 正常遊戲入口：起始樓層 `project/floors/mapo_1_1.js` 的劇情選項「玩圈圈叉叉」。
- 事件用封裝入口：`core.plugin.startTicTacToeDemoEvent()`
- 關閉目前小遊戲：`core.plugin.closeMiniGame()`
- 小遊戲本體：`extensions/minigames/ticTacToe.js`
- 魔塔接回封裝：`project/plugins.js -> Tic_Tac_Toe`
- 回傳結果：
  - `result: "win"`：有人獲勝，另有 `winner: "X"` 或 `"O"`。
  - `result: "draw"`：平手。
  - `result: "cancel"`：玩家關閉或返回。
- 魔塔狀態變化：
  - 寫入 `flag:lastMiniGameResult`。
  - 寫入 `flag:lastMiniGameScore`。
  - 有勝者時寫入 `flag:lastMiniGameWinner`，否則清除該 flag。
  - 勝利時 `status:money += 100`。
  - 平手時 `status:money += 20`。
  - 取消時不變更金錢。

測試前請先依 [專案架構與輸出原則](project-overview.md) 的標準流程啟動根目錄 `启动服务.exe`，從 `http://127.0.0.1:1055/index.html` 進入遊戲，再透過遊戲中的選項啟動小遊戲。不要用 URL query 參數、`8765` 或 `python -m http.server` 測小遊戲，否則不是正常遊戲流程，也可能打到其他專案或缺少魔塔樣板服務路由。

事件中可用自定義 JS 呼叫：

```js
core.plugin.startTicTacToeDemoEvent();
```

如果事件需要等待小遊戲結束，自定義 JS 事件應選擇「不執行下一個事件」。`core.plugin.startTicTacToeDemoEvent()` 會在 callback 內寫入結果、改變魔塔狀態、插入結果文字，最後呼叫 `core.doAction()` 接續事件流。
