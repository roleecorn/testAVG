# 專案架構與輸出原則

這份文件給 AI 使用，用來把純文字劇本轉成 H5 魔塔編輯器可用的樓層與事件資料。此專案雖是魔塔編輯器，但只要把地圖邏輯降到最低，完全可以用「背景圖 + 對話 + 圖片 + Flag + 音訊」實作 AVG。

## 專案架構

核心檔案位置：

- `project/floors/*.js`：每個樓層一個 JS 檔，格式是 `main.floors.<floorId> = { ... }`。AVG 可把「樓層」視為「場景」或「章節」。
- `project/mainStory/CH1`～`CH7`：現行主線劇情的唯一真實來源。Agent 不得自行編修、補寫、潤稿、修錯字、格式化或從 IR／floor 反向改寫；但可將使用者提供或其他已確認、可追溯的完整主線來源新增為完整檔案，或整檔覆蓋舊來源，不得自行合併局部修訂。來源更新後由 Agent 依完整語意建立或更新 Story IR，再由只讀驗證與確定性 emitter 產生主線 floor。
- `project/story/*.txt`：角色劇情內容與章節結構的唯一真實來源（source of truth），不是僅供追溯而保留的原始附件。Agent 不得局部修改或自行改寫其內容；但所有被分類且驗收完成的角色劇情 TXT，可由 Agent 以完整檔案新增，或用 ZIP／DOCX／TXT 等已確認完整新來源整檔覆蓋同角色舊稿。`project/floors/*.js` 中的 scene／floor 是依文本轉換出的遊戲實作；兩者有差異時以來源文本為準，不得反向修改來源。
- `project/story/manifest.md`：角色原始劇本與素材之使用方式、最後命名的永久追溯索引，不是劇情來源。每個角色使用獨立區段，逐筆保存原始 ZIP／run、原始相對路徑、SHA-256、資源種類、差異狀態、使用方式、最後命名／路徑、對應來源 TXT 或 scene 與驗證證據。重新命名、替換或停用時保留舊紀錄並標示 `superseded`；缺乏可信歷史證據時標示 `needs-backfill`，不得猜測。
- `project/story-ir/main/*.json`、`project/story-ir/character/*.json`：納入 Git 的共用 Story IR 語意文件，由 Agent 依完整權威來源、上下文與 Git log 建立／更新，保存來源路徑與 SHA-256。主線與支線使用相同 schema／validator／emitter；來源雜湊不符時禁止生成 floor。任何自動化程式不得建立、覆寫、重排、拆分、合併或刪除 Story IR，只能讀取、驗證或從已驗證 IR 確定性產出 floor。現存 IR 不因規則變更自動重寫；檔案過大時由 Agent 依 scene／chapter 語意邊界拆分並保留追溯。Story IR 不可獨立交付或提交：任何新增、修改或刪除都必須在同一個內容 commit 中同步更新其對應 scene／floor。
- `project/data.js`：全塔設定。`main.floorIds` 決定樓層順序與可用樓層；`main.images/bgms/sounds/nameMap` 決定圖片、音樂、音效與別名。
- `project/images/`：只保存 scene 會實際消費的自定義 runtime 圖片，例如背景、立繪、CG、UI 圖；不得作為 ZIP 原始圖片的暫存區或素材倉庫。此目錄內每張圖片都必須登錄於 `project/data.js -> main.images`，而每個 `main.images` 項目都必須由至少一個 validated Story IR scene 及對應 floor 使用。直接使用或由來源生成的正式圖片必須走完這條鏈；IR 缺少正式圖片時複製的暫時替代圖也必須走完同一條鏈，並在角色劇情 `project/story/TODO.md` 或主線 `project/mainStory/TODO.md` 記錄 copied source、目標正式素材、scene 與替換驗證。動作 CG 的 `*_cg.png` 是母檔，`*_action_cg.png` 是衍生 runtime 檔；每張地點背景必須為完整畫面的 544×416，且每個地點各用唯一檔名。
- `unknown/`：repo 根層的未引用 ZIP 圖片待辦隔離區，不是 `project/images/unknown/`。無法對應 scene、也尚未作為生成來源的圖片須原樣保存於 `unknown/<角色ID>/<原始相對路徑>` 並保留 SHA-256；角色劇情寫入 `project/story/TODO.md`，主線寫入 `project/mainStory/TODO.md`。不得加入 `main.images`。放入此處只表示仍待處理，不表示圖片已應用或角色素材已完成。
- `project/action-cg-manifest.json`：由 `scripts/build_action_cgs.py` 產生的動作 CG 母檔／輸出同步雜湊，不可手改。
- `project/bgms/`：背景音樂。
- `project/sounds/`：音效。
- `project/maps.js`：圖塊數字到圖塊 ID 的對照。AVG 通常不需要大量改這裡。
- `_docs/event.md`、`_docs/instruction.md`：事件與事件指令說明。
- `_server/table/comment.js`：編輯器表格定義，可看到樓層屬性的實際欄位。
- `_server/MotaAction.g4`：事件編輯器方塊到 JSON 的格式來源。
- `extensions/minigames/*.js`：獨立小遊戲本體。接入規範見 [小遊戲新增與接入指南](minigame-integration.md)。
- `project/plugins.js`：小遊戲載入、事件入口與回寫魔塔狀態的封裝位置。

主線 runtime emitter 是 JavaScript，不是 Python；但動作 CG 在交給 emitter 前有獨立的固定圖片預處理。自然語言語意翻譯由 Agent 寫入 Story IR，不由 runtime emitter 或 floor 反向推導：

```powershell
python scripts/build_action_cgs.py
python scripts/build_action_cgs.py --check
node scripts/generate_main_story.js --check
node scripts/generate_main_story.js
node scripts/manage_story_ir.js
node scripts/manage_story_ir.js --emit-character
```

只有母檔新增或變更時才執行第一個命令；它固定產生 416×286 的 `*_action_cg.png` 與 manifest。第二個命令可單獨驗證圖片同步。主線與角色支線的 IR 由 Agent 建立／更新；一般 emitter 與 `--check` 只能讀取 IR，驗證來源 SHA-256、schema、素材／跳轉註冊、17×13 尺寸與 floor round-trip 且不寫 IR。任何舊有 refresh／bootstrap／反向轉換入口均不得用於劇情更新。`remove_bk.py`、`split_emotion_image.py` 只屬於角色圖片處理，不是文本語意翻譯器。

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

所有新增與更新的首要決策原則都是劇情需求驅動，不限 ZIP 匯入或任何單一功能。必須先由使用者明確需求與權威劇情來源建立 Story IR／scene 的敘事、互動與演出需求，再依需求選擇、生成或暫代素材與實作，最後完成 runtime 接入與驗證。現有素材、floor、資料登錄、檔名、工具便利性與舊實作只能作為實作候選，不能反向決定、增刪或扭曲劇情需求；沒有來源或需求依據的內容不得新增，已有需求也不得因素材或實作不便而省略。

AI 產生內容時，優先產生「可貼進事件 JSON 區」或「可直接存成樓層 JS」的資料。不要假設玩家會寫 JS。

對 AVG 最穩定的做法：

- 主線與角色支線一律先由 Agent 進行「語意翻譯／Story IR 建立」：完整閱讀自然語言來源、上下文與 Git log，將意圖寫入相同 schema 的 Story IR。這裡的「正規化」只表示把不同自然語言表達統一成可驗證語意，不代表由自動化程式完成。完成指令、必要參數、素材與流程驗證後，再由 emitter 確定性轉為事件 JSON。
- 劇情更新是「來源變動 → Agent 語意 Story IR → scene／floor」的單一交易：Agent 先依基準 commit 盤點 `project/mainStory/` 與 `project/story/` 的變動；若本次輸入含已確認完整新來源，可先新增或整檔覆蓋來源，再由 Agent 同步更新 IR 與對應 scene／floor。若來源由本次任務落地，必須和 IR、對應 scene／floor 一起 staging／提交；若來源早已由外部 commit 提交，則只追溯其 path／SHA-256。禁止 source-only、IR-only 或延後補 floor 的 commit。emitter 只讀已驗證 IR，不得用 refresh／bootstrap 自動寫回 IR。
- 自然語言理解只存在 Agent 的語意翻譯／Story IR 建立階段。事件 emitter 不得重新猜測原文語意，也不得為了支援單一劇情指令在 emitter 中增加硬編碼語意；若 Story IR 無法表達某項演出，先更新共用 schema／runtime 能力或停止受影響範圍並落入 question／TODO，不能用 generator 特例取代語意 IR，也不能降級成玩家可見旁白或台詞。
- 每個場景用一個樓層，或每個章節用一個樓層。
- 全專案只有一套標準 AVG 版面，主線與角色支線都使用 `17x13`；兩者只在觸發方式與來源檔案位置不同。`map` 全部填 `0`，只保留一張背景圖和劇情事件。既有 13 格內容保留在左側，右側四格補 `0`。
- 新版 AVG 固定只保留一個普通「當前發言者」人物槽。人物 alpha bbox 的可見內容左右置中於畫面，且可見 bottom 錨定在畫面外的 `portraitBottomY: 440`；人物圖層位於對話框 UI 後方，下半身延伸到對話框後並由 416px 畫面底部裁切。每句有立繪的台詞固定輸出 `showImage(本句人物 code) → dialogue → hideImage(同一 code)`，只隱藏本句實際顯示的圖片，不可預先或事後清空所有可能人物 code。旁白不額外清理人物，因為前一句立繪已在自己的 dialogue 結束時清除。
- 人物以 alpha bbox 的可見內容為對齊基準，所有立繪統一套用全局 `portraitScale: 0.92`。標準取景讓一般全身素材的頭頂約落在畫面上緣 5–10%；alpha bbox 只影響左右置中與底邊對齊，不得依各圖寬高產生不同縮放率，因此素材原有的人物身高差會被保留。生成器不得維護跨句或跨分歧的 active portrait 狀態；若未來要消除同角色連續台詞的閃爍，只能在完整事件生成後，以確定性 post-pass 移除無中介事件且 code／image 相同的相鄰 `hide → show` 配對。
- 主線與角色支線共用一份全局 layout config。已遷移的 1-1 使用單一人物語意槽、全局固定縮放與共用對齊規則；floor 只引用語意槽，不得寫死人物座標、尺寸或角色例外。其他 floor 在完成 runtime／emitter 遷移及遊戲內驗證前，不得宣稱新版面已生效。
- 每個劇本地點都使用獨立背景檔名與精確 mapping。正式背景只替換該地點檔；`scene_street.png`、`scene_mapo_shop.png`、`scene_tournament.png` 等 generic 圖只可作為初始 placeholder 來源，不得因單一地點到件而覆寫。
- 所有故事劇情、章節劇情、場景演出都放在樓層 `eachArrive`，讓每次進入章節都從頭播放。
- `firstArrive` 目前不放故事，也不要放一般章節內容；只保留給未來明確需要「整個存檔只執行一次」的指導規則或初始化功能。
- 選項與分支放在 `choices`、`if`、`switch`、`setValue`。
- 場景轉換用事件指令 `changeFloor`，或地圖點的 `changeFloor` 屬性。
- 預設英雄圖 `project/images/hero.png` 是同尺寸全透明圖，AVG 場景中不顯示地圖主角。
- 獨立小遊戲不要塞進樓層事件或 `project/plugins.js` 大段邏輯；小遊戲本體放 `extensions/minigames/`，由 `project/plugins.js` 提供薄封裝。

