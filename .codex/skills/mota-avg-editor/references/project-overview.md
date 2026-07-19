# 專案架構與輸出原則

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
- `extensions/minigames/*.js`：獨立小遊戲本體。接入規範見 [小遊戲新增與接入指南](minigame-integration.md)。
- `project/plugins.js`：小遊戲載入、事件入口與回寫魔塔狀態的封裝位置。

啟動服務與編輯器：

1. 執行根目錄 `启动服务.exe`。
2. 開遊戲：`http://127.0.0.1:1055/index.html`。
3. 開編輯器：`http://127.0.0.1:1055/editor.html`。
4. 若同時開多個服務，埠號會往後遞增，例如 `1056`、`1057`。

重要注意：

- 本專案的標準啟動方式是根目錄 `启动服务.exe`。不要把 `python -m http.server`、`server.py` 或其他靜態服務當作預設啟動方式。
- 不要預設使用 `8765`。該 port 可能是其他專案留下的靜態服務，會導致看到錯誤專案內容。
- 若 `1055` 打開後顯示不是目前專案，先確認是哪個程序佔用 `1055`，關閉錯誤服務後，再從 `D:\coding\mota-js\启动服务.exe` 重新啟動。
- 啟動後可用以下 URL 確認服務：
  - 遊戲：`http://127.0.0.1:1055/index.html`
  - 編輯器：`http://127.0.0.1:1055/editor.html`
  - 若 `1055` 被同一類服務佔用，再依啟動服務實際提示檢查 `1056`、`1057`。
- AI 需要展示或驗證遊戲效果時，優先使用上述標準 URL；只有使用者明確要求診斷伺服器時，才考慮其他啟動方式。

## AI 輸出原則

AI 產生內容時，優先產生「可貼進事件 JSON 區」或「可直接存成樓層 JS」的資料。不要假設玩家會寫 JS。

對 AVG 最穩定的做法：

- 每個場景用一個樓層，或每個章節用一個樓層。
- `map` 全部填 `0`，只保留一張背景圖和劇情事件。
- 所有故事劇情、章節劇情、場景演出都放在樓層 `eachArrive`，讓每次進入章節都從頭播放。
- `firstArrive` 目前不放故事，也不要放一般章節內容；只保留給未來明確需要「整個存檔只執行一次」的指導規則或初始化功能。
- 選項與分支放在 `choices`、`if`、`switch`、`setValue`。
- 場景轉換用事件指令 `changeFloor`，或地圖點的 `changeFloor` 屬性。
- 預設英雄圖 `project/images/hero.png` 是同尺寸全透明圖，AVG 場景中不顯示地圖主角。
- 獨立小遊戲不要塞進樓層事件或 `project/plugins.js` 大段邏輯；小遊戲本體放 `extensions/minigames/`，由 `project/plugins.js` 提供薄封裝。

