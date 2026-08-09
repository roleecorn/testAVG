# 專案架構與輸出原則

這份文件給 AI 使用，用來把純文字劇本轉成 H5 魔塔編輯器可用的樓層與事件資料。此專案雖是魔塔編輯器，但只要把地圖邏輯降到最低，完全可以用「背景圖 + 對話 + 圖片 + Flag + 音訊」實作 AVG。

## 專案架構

核心檔案位置：

- `project/floors/*.js`：每個樓層一個 JS 檔，格式是 `main.floors.<floorId> = { ... }`。AVG 可把「樓層」視為「場景」或「章節」。
- `project/mainStory/CH1`～`CH6`：現行主線劇情的唯一真實來源。來源更新後以 `node scripts/generate_main_story.js --refresh-ir` 正規化並驗證，再從 IR 重建主線 floor；不得把 Story IR 或生成後的 floor 反向當成主線來源。
- `project/story/*.txt`：角色劇情內容與章節結構的唯一真實來源（source of truth），不是僅供追溯而保留的原始附件。所有被分類為角色劇情的 TXT，無論來自 ZIP、DOCX、PDF 或其他來源，都必須先落地到這裡，再依與主線相同的 Story IR 契約新增或轉換樓層。`project/floors/*.js` 中的 scene／floor 是依文本轉換出的遊戲實作；兩者有劇情內容差異時，必須以文本為準並重新產生 Story IR 與 scene／floor。
- `project/story-ir/main/*.json`、`project/story-ir/character/*.json`：納入 Git 的共用 Story IR 衍生產物，保存來源路徑與 SHA-256。主線與支線使用相同 schema／validator／emitter；來源雜湊不符時禁止生成 floor。
- `project/data.js`：全塔設定。`main.floorIds` 決定樓層順序與可用樓層；`main.images/bgms/sounds/nameMap` 決定圖片、音樂、音效與別名。
- `project/images/`：自定義圖片，例如背景、立繪、CG、UI 圖。動作 CG 的 `*_cg.png` 是母檔，`*_action_cg.png` 是衍生 runtime 檔；地點背景必須每個地點各用唯一檔名。
- `project/action-cg-manifest.json`：由 `scripts/build_action_cgs.py` 產生的動作 CG 母檔／輸出同步雜湊，不可手改。
- `project/bgms/`：背景音樂。
- `project/sounds/`：音效。
- `project/maps.js`：圖塊數字到圖塊 ID 的對照。AVG 通常不需要大量改這裡。
- `_docs/event.md`、`_docs/instruction.md`：事件與事件指令說明。
- `_server/table/comment.js`：編輯器表格定義，可看到樓層屬性的實際欄位。
- `_server/MotaAction.g4`：事件編輯器方塊到 JSON 的格式來源。
- `extensions/minigames/*.js`：獨立小遊戲本體。接入規範見 [小遊戲新增與接入指南](minigame-integration.md)。
- `project/plugins.js`：小遊戲載入、事件入口與回寫魔塔狀態的封裝位置。

主線文本生成器是 JavaScript，不是 Python；但動作 CG 在交給生成器前有獨立的固定圖片預處理：

```powershell
python scripts/build_action_cgs.py
python scripts/build_action_cgs.py --check
node scripts/generate_main_story.js --refresh-ir
node scripts/generate_main_story.js --check
node scripts/generate_main_story.js
node scripts/manage_story_ir.js
node scripts/manage_story_ir.js --emit-character
```

只有母檔新增或變更時才執行第一個命令；它固定產生 416×286 的 `*_action_cg.png` 與 manifest。第二個命令可單獨驗證圖片同步。主線來源變更時用 `--refresh-ir` 更新納入 Git 的 IR；一般生成與 `--check` 都只讀 IR，後者驗證來源 SHA-256、schema、素材／跳轉註冊、17×13 尺寸與 floor round-trip 且不寫檔。角色支線以 `manage_story_ir.js` 驗證，`--emit-character` 才由 IR 重建 floor。`remove_bk.py`、`split_emotion_image.py` 只屬於角色圖片處理，不是主線文本生成器。

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

- 主線與角色支線一律先將自然語言來源正規化為相同 schema 的 Story IR，完成指令、必要參數、素材與流程驗證後，再確定性轉為事件 JSON。Story IR 是衍生資料，不取代兩種來源文本；不得讓任一分支繞過它。
- 自然語言理解只發生在來源正規化階段。事件生成器不得重新猜測原文語意；未辨識或缺參數的製作指令必須停止受影響範圍並落入 question／TODO，不能降級成玩家可見旁白或台詞。
- 每個場景用一個樓層，或每個章節用一個樓層。
- 全專案只有一套標準 AVG 版面，主線與角色支線都使用 `17x13`；兩者只在觸發方式與來源檔案位置不同。`map` 全部填 `0`，只保留一張背景圖和劇情事件。既有 13 格內容保留在左側，右側四格補 `0`。
- 新版 AVG 的下方空間配置固定為「左人物槽－中央對話框－右人物槽」大致同一水平帶；中央對話框不得再佔據幾乎全部畫面寬度。人物底部以單一全局 `portraitBottomGap` 參數對齊畫面底部，人物圖層位於對話框後方。左右槽是可選站位，不代表兩名人物同時常駐；每句仍先清空人物，再只顯示當前發言者。
- 共用 runtime 已提供全局 layout config、`pos: "avg"` 中央對話框及 `portraitLeft`／`portraitRight`／`portraitBottom` 人物定位；所有現有主線與角色支線 floor 已遷移到這些語意槽位。全局人物可見寬度硬上限為 `128px`、對話框遮擋比例上限為 25%；runtime 依各槽實際空間收斂尺寸（目前左約 106.7px、右 128px）、按 alpha bbox 對齊可見左右／底邊，過大圖片等比例縮小且不放大小圖。後續調整只能修改單一 config 與共用資產規則，不得在 floor 或角色 mapping 建立例外。
- 每個劇本地點都使用獨立背景檔名與精確 mapping。正式背景只替換該地點檔；`scene_street.png`、`scene_mapo_shop.png`、`scene_tournament.png` 等 generic 圖只可作為初始 placeholder 來源，不得因單一地點到件而覆寫。
- 所有故事劇情、章節劇情、場景演出都放在樓層 `eachArrive`，讓每次進入章節都從頭播放。
- `firstArrive` 目前不放故事，也不要放一般章節內容；只保留給未來明確需要「整個存檔只執行一次」的指導規則或初始化功能。
- 選項與分支放在 `choices`、`if`、`switch`、`setValue`。
- 場景轉換用事件指令 `changeFloor`，或地圖點的 `changeFloor` 屬性。
- 預設英雄圖 `project/images/hero.png` 是同尺寸全透明圖，AVG 場景中不顯示地圖主角。
- 獨立小遊戲不要塞進樓層事件或 `project/plugins.js` 大段邏輯；小遊戲本體放 `extensions/minigames/`，由 `project/plugins.js` 提供薄封裝。

