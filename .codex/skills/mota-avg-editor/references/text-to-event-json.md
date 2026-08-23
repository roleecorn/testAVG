# 純文字轉事件 JSON

## 主線與角色支線共用管線

權責硬規則：Story IR 的語意決策與最終採用內容有且僅能由 Agent 依語意確認；權威來源檔案內容有且僅能由真實使用者修改或提供。原始劇情檔案修改不超過 100 行時，禁止自動生成 Story IR；超過 100 行時，才可產生待核對的 Story IR 草稿。草稿必須逐行對照原始文章後才能採用；自動化程式不得直接覆寫已確認的 IR。

三者關係固定為：`真實使用者元件／權威來源 → Agent 語意 Story IR → 只讀 validator → emitter／generator → scene／floor`。只有 Story IR 草稿的自動生成受「原始劇情檔修改超過 100 行」門檻限制；scene／floor 的 emitter／generator 仍依已驗證 IR 正常產生。每次自動生成 Story IR 草稿後，必須逐行核對草稿與原始文章的對應關係並保存證據。

主線與角色支線只允許在來源位置與觸發方式上不同，不得使用不同的文本理解或事件生成契約。下列順序是所有新增與更新共用的首要決策順序，不得因現有素材、floor、資料登錄、工具便利性或 ZIP 內容而顛倒或省略：

1. 建立或讀取自然語言來源；主線以 `project/mainStory/CH1`～`CH7`、角色支線以 `project/story/*.txt` 為唯一真實來源。Agent 不得編修來源內容，但可從已確認、可追溯的完整外部輸入新增來源檔，或以完整新版本整檔覆蓋舊來源；不得自行合併局部修訂。
2. 由 Agent 進行語意翻譯／Story IR 建立：完整閱讀原文、劇情上下文與 Git log，把人物立繪、背景、道具、CG、流程與互動意圖寫入 draft Story IR，再依這些需求選擇或製作素材。這裡的「正規化」只表示把不同自然語言表達統一成可驗證語意，不代表自動化程式可以代替理解；只有文件明訂的 DSL 格式差異，才可由固定 parser 輔助辨識。
3. 在產生任何引擎事件前，將 draft Story IR 的所有視覺需求解析為明確且存在的 runtime 圖片，再驗證 schema、必要參數、場景流程及 `project/images/ → project/data.js -> main.images → Story IR scene`：images 中每張圖都要登錄，data 中每個圖片登錄都要被 scene 使用。遇到未被 IR schema 或 runtime 表達的 `【...】` 演出／AI 指令時，Agent 必須保留原文、建立 unresolved 語意並停止受影響範圍；不得靠 generator 特例硬編解讀。只有完成語意決策或明確記錄 blocker 後，才可進行驗證與 emitter 輸出。
4. 只從已驗證的 Story IR 確定性產生 floor 與引擎事件 JSON。事件生成階段不得重新解讀自然語言，也不得直接讀取原文並猜測事件。

禁止把未辨識的製作指令降級成旁白、台詞或其他玩家可見文字。主線生成器與角色支線轉換流程必須使用同一份 Story IR schema、同一組語意驗證與同一組事件映射；不得因其中一條流程由 AI 執行，就省略中間產物或驗證。

Story IR 必須納入 Git，統一放在 `project/story-ir/main/` 與 `project/story-ir/character/`。每份 IR 都要保存權威來源的 repo-relative 路徑與 SHA-256；來源雜湊不符時禁止產生 floor。Story IR 是 Agent 建立的語意翻譯文件，不是由 floor／engine event 反推的衍生產物；不得反向覆蓋來源文本。

## Story IR 建立權責

Story IR 的建立與更新由 Agent 負責。原始劇情檔案修改不超過 100 行時，Agent 必須自行完成語意建立／更新，不得使用自動生成；超過 100 行時，自動化程式可產生草稿，但不得覆寫已確認 IR，且 Agent 必須逐行核對原文後採用。Repository 不得保留來源／floor／event 反向寫入 Story IR 的 executable path。

現存 Story IR 不因這項規則自動重建或修正。若單一檔案過大導致 Agent 閱讀或更新成本過高，可由 Agent 按 scene／chapter 語意邊界拆分，保留 scene identity、來源 SHA-256、引用與 Git 追溯；不得用自動化程式批量拆分。

## Story IR 與 scene／floor 原子性契約

Story IR 不是可獨立交付的中間成果。任何 `project/story-ir/main/*.json` 或 `project/story-ir/character/*.json` 的新增、修改、刪除，都必須在同一個內容 commit 中帶有對應 scene／floor 的新增、修改、刪除；不得建立或接受 IR-only commit。

- 主線：Agent 依完整來源與 Git log 建立／更新 IR，之後由只讀驗證與確定性 emitter 在同一工作交易中產生對應主線 floor。
- 角色支線：權威 `project/story/*.txt` 可由已驗收 ZIP／DOCX／TXT 等完整來源新增或整檔覆蓋，但 Agent 不得改寫其內容；之後由 Agent 同步更新對應角色 IR，再由只讀驗證與確定性 emitter 產生對應 floor。
- 「對應」是指 IR 中所有受影響 scene 的實際 floor 檔，不是只更新一個 manifest、索引或驗證檔。若新增 scene，必須新增可觸發的 floor；若刪除 scene，必須同步移除或改寫其入口與 floor。
- 若 IR 改動後 emitter 產生的 scene／floor 沒有任何對應 diff，代表該 IR 改動不能單獨成立：不要提交 IR，應還原不必要的 IR 變更或停止並記錄疑慮。
- 若因來源衝突、素材缺失或未解析指令而無法更新 scene／floor，受影響分支必須停在來源／疑慮階段，不得先落地 IR。

提交前必須在 staged diff 中同時看到本次新增／整檔覆蓋的來源文本（若有）、受影響 Story IR、對應 scene／floor，以及必要的事件入口／素材註冊；若來源變動早已由外部 commit 提交，則以 source path／SHA-256 追溯，不重複 staging。這些檔案屬於同一角色或同一主線更新交易。

## 共用 Story IR（強制）

最低結構如下；實作可以增加欄位，但不得讓主線與角色支線各自定義不相容版本：

```json
{
  "storyIrVersion": 1,
  "source": {
    "kind": "main",
    "files": [
      {
        "path": "project/mainStory/CH1",
        "sha256": "<64 lowercase hex digits>"
      }
    ]
  },
  "scenes": [
    {
      "id": "scene_intro",
      "floor": {
        "floorId": "scene_intro",
        "title": "序章"
      },
      "events": [
        {
          "kind": "bgm.play",
          "name": "opening.mp3",
          "keep": true
        },
        {
          "kind": "narration",
          "text": "雨停了。"
        },
        {
          "kind": "dialogue",
          "speaker": "表妹",
          "text": "所以大家到底去哪裡了？"
        },
        {
          "kind": "bgm.pause"
        },
        {
          "kind": "sound.play",
          "name": "heartbeat.mp3"
        }
      ]
    }
  ]
}
```

`source.kind` 只能描述來源類型，例如 `main` 或 `character`，不能改變 `scenes[].events[]` 的語意。bundle 的來源路徑、SHA-256 與 scene ID 是最低追溯契約；正規化器能精確保留原句或行號時，可另外加入 `sourceText`／來源位置，但 emitter 不得利用追溯欄位重新猜測事件。

共用核心節點至少包含：

| `kind` | 必要欄位 | 說明 |
| --- | --- | --- |
| `narration` | `text` | 玩家可見旁白 |
| `dialogue` | `speaker`, `text` | 角色台詞；`portrait` 可選 |
| `layout.set` | `value` | 共用對話框樣式與 AVG 版面 |
| `bgm.play` | `name` | 播放背景音樂；`keep` 可選，若存在須在正規化階段解析完成 |
| `bgm.pause` | 無 | 暫停目前 BGM |
| `bgm.resume` | 無 | 恢復 BGM |
| `sound.play` | `name` | 播放音效；`stop`、`pitch`、`sync` 可選 |
| `sound.stop` | 無 | 停止音效 |
| `background.show` | `code`, `image` | 顯示或切換背景 |
| `image.show` | `code`, `image`, `role` | 顯示立繪、CG 或 GIF；位置已在正規化層解析成語意槽位或明確座標 |
| `image.hide` | `code` | 隱藏指定圖片層 |
| `wait` | `time` | 等待；`noSkip` 可選 |
| `choice` | `prompt`, `options` | 選項與分支 |
| `goto` | `floorId` | 場景或流程跳轉 |
| `comment` | `text` | 明確允許的非玩家可見製作備註 |
| `function.call` | `function` | 既有引擎函式事件；必須是明確程式碼字串，不得由 emitter 猜測 |
| `transition.video` | 無 | 播放轉場影片 |
| `unresolved.directive` | `text`, `reason` | 尚未解析的製作指令；此節點必須讓驗證失敗，禁止輸出 floor |

未知 `kind`、缺少必要欄位、無法解析的素材名稱、未登錄或不存在的圖片／BGM／音效、失效跳轉、來源 SHA-256 不符與任何 `unresolved.directive` 都必須讓共用驗證失敗。相同 Story IR 無論來自主線或角色支線，都必須產生語意等價的引擎事件。

音訊意圖的共用正規化與映射如下：

| 自然語言意圖範例 | Story IR | 引擎事件 |
| --- | --- | --- |
| `使用BGM：opening.mp3`、`播放背景音樂 opening.mp3` | `{"kind":"bgm.play","name":"opening.mp3","keep":true}` | `{"type":"playBgm","name":"opening.mp3","keep":true}` |
| `BGM暫停`、`暫停背景音樂` | `{"kind":"bgm.pause"}` | `{"type":"pauseBgm"}` |
| `恢復BGM`、`繼續背景音樂` | `{"kind":"bgm.resume"}` | `{"type":"resumeBgm"}` |
| `播放音效：heartbeat.mp3`、`使用 heartbeat 音效` | `{"kind":"sound.play","name":"heartbeat.mp3"}` | `{"type":"playSound","name":"heartbeat.mp3"}` |
| `停止音效` | `{"kind":"sound.stop"}` | `{"type":"stopSound"}` |

這些例句描述語意，不是只認固定字面的 parser 規則。若原文只有「使用BGM」而未指定曲目，正規化層必須依完整篇劇情與 [BGM 背景音樂](bgm.md) 選定並填入已登錄曲目，才可通過驗證。若「播放音效」沒有檔名，只有在上下文能唯一對應到已登錄音效時才可補值；否則視為缺少必要參數，禁止生成空白 `playSound` 或把原句顯示給玩家。

## 主線來源的語意翻譯／Story IR 建立規則

主線來源是 `project/mainStory/CH1`～`CH7`。Agent 負責語意翻譯與 Story IR 建立；JavaScript emitter 只負責從已驗證 IR 產生 runtime floor，不是文本理解器。Python 只負責在 emitter 之前，把權威 `*_cg.png` 母檔固定衍生為 runtime action CG。母檔有變動時依序執行，未變動時至少執行兩個 `--check`：

```powershell
python scripts/build_action_cgs.py
python scripts/build_action_cgs.py --check
node scripts/validate_story_source.js
node scripts/generate_main_story.js --check
node scripts/manage_story_ir.js
node scripts/validate_story.js
```

一般 `node scripts/generate_main_story.js` 只讀 IR 並確定性重生 floor；`--check` 驗證 schema、素材／跳轉註冊及 floor round-trip，不讀權威來源。來源雜湊由 `validate_story_source.js` 獨立驗證，完整交易以 `validate_story.js` 為完成條件。角色支線的 `project/story-ir/character/*.json` 由 Agent 依權威 TXT 與 Git log 做語意更新；IR 變更若沒有同批 floor diff，不得提交。

主線 Story IR 建立階段由 Agent 負責理解來源、辨識格式並產生共用 Story IR，不得直接產生引擎事件，也不得潤稿或改寫台詞。這裡的「正規化」是語意翻譯，不是自動化：

閱讀到成對全形括號 `【...】` 的文字時，第一判定一律優先視為場景演繹／製作方式，而不是旁白。先依完整劇情上下文辨識它代表的背景切換、CG／GIF、立繪、角色動作、鏡頭、轉場、流程或其他演出；已支援的演繹方式轉成對應 Story IR 節點，不得先去掉括號後直接輸出成玩家可見文字。若語意不明或尚未支援，必須保留原文建立 `unresolved.directive`、讓驗證失敗並記錄 TODO；只有來源明確標示該內容本來就是玩家可見的敘述時，才可在保留原文的前提下轉成 `narration`。

### `【】` 演繹完成稽核

每次新增故事、調整故事或重新生成既有故事時，完成前都必須逐一檢查權威來源中的每個 `【...】` occurrence，不得只抽查已知的 CG／背景／字體標記：

1. 為每個標記保留可追溯的來源位置與原文，判定它要求的演出類型，並核對對應的 Story IR 節點、素材／註冊、事件順序與實際 scene／floor。
2. 只有當實作確實滿足該描述時才標記為已滿足；單純把標記留成非玩家可見 `comment` 不算完成，除非稽核明確證明它只是已完成演出的來源註記且不要求額外 runtime 行為。
3. 若標記與既有劇情、另一個演出標記、素材狀態、事件流程或使用者要求衝突，必須把原文、衝突對象、受影響 scene／floor、暫時處理與決策需求寫入對應的 `project/mainStory/TODO.md` 或 `project/story/TODO.md`；衝突範圍停止，不得猜測、靜默取捨或宣稱故事完成。
4. 若標記語意不明、未支援、缺少必要素材或無法證明已接入，依同一 TODO 規則記錄為未解決，並保留 `unresolved.directive` 使驗證失敗；不得降級成玩家可見旁白／台詞，也不得只因 floor 能生成就視為已滿足。
5. 交付時要能列出稽核結果：已滿足標記的 IR／floor 證據，以及所有 conflict／unresolved 標記的 TODO 路徑與阻塞範圍。任一受影響標記沒有其中一種證據，就不能宣稱該故事完成或調整完成。

### 主線行數位址素材改名閘門

所有主線素材若採用 `CH<N>_L<N>` 命名，`N` 是該素材在完整權威主線 `project/mainStory/CH1`～`CH7` 中首次出現所在章節與實體行號；這裡的「首次出現」是全主線首次出現，不是該章節內首次出現。它不是段落內索引、scene 序號、每次重複出現的行號或舊版本行號。後續完全相同的素材指令（包含跨章節重複）必須重用這個首次出現檔案，不得建立另一個按後續行號命名的素材。更新主線來源時，先將新舊完整來源逐行比對：

1. 若來源變動未改變任何素材的首次出現行號，維持既有素材檔名即可；後續重複出現仍重用首次出現檔案。
2. 若來源變動導致首次出現行號改變，必須在 Agent 更新 Story IR 或重建 floor 前，依已確認的新首次出現行號重新命名受影響 `CH<N>_L<N>` 素材（保留其正確副檔名），並同步更新 `project/data.js` 登錄與所有 emitter／測試 mapping。
3. 僅能在舊素材的首次來源指令、以及新位置的同一條首次來源指令可完整核對時改名；不得只按文字相似度、相鄰行或 Agent 猜測移動。無法證明對應、首次指令遭刪除、出現歧義指令，或來源尚未定稿時，停止受影響素材分支並建立 question／TODO。
4. 改名後必須驗證每個 `CH<N>_L<N>` 都指向完整主線中實際首次素材指令、每個後續相同素材指令（包含跨章節）都重用該檔案，且完成 `project/images/ → project/data.js -> main.images → Story IR → floor` 引用鏈檢查；不允許用舊首次行號繼續生成或提交。

1. 每個 CH 檔在第一個 `章-節` 標題前的格式說明不進入事件。
2. `【背景 ：名稱】`、`【背景：名稱】` 等空白差異可正規化成同一指令；正文、標點與用字保持原樣。
3. `[人名：內容]` 必須先辨識為簡訊，再處理一般 `[敘述]`。簡訊輸出為 `"\t[人名]（手機）內容"`，不能去掉中括號後誤當旁白。冒號前必須是已知角色或不含敘事標點的短標籤；像 `[於是梗平轉身……：哈……]` 這種長敘事仍是旁白，不可誤建成超長發言者。
4. `人名：{內容}` 也視為簡訊；`人名：內容` 是一般對話；`人名：(內容)` 保留為角色內心話。
5. `[敘述]` 去掉外層中括號後輸出成旁白，不加發言者。
6. 不得在生成器中把梗平的「我／我們」自動改成「在下／我等」；`project/mainStory` 文本是內容真實來源，floor 必須逐字遵從來源。
7. 所有 `【...】` 預設先視為演出效果或對 AI 的製作指令，必須先於普通文字處理。Agent 先依完整上下文將已理解的指令寫成 Story IR 節點；若語意或 runtime 能力仍不足，轉成 `unresolved.directive`，讓 Story IR 驗證失敗並寫入主線 TODO；任何情況都不得由 emitter 特例解讀、改成玩家可見文字或逕自輸出未驗證 floor。
8. `【劇情推進】`、`【推進劇情】`、`【接2-3】`、`【接續2-3】` 等同義流程標記要正規化為同一種 Story IR 控制流程。
9. CG／GIF 對照表要以目前來源文字為準；來源更名時可保留歷史別名，但 `--check` 必須確認所有已登錄的主線動作 CG 都仍有實際輸出，避免素材存在卻因標記改名而靜默退回 placeholder。
10. 背景名稱以完整名稱精確查表；每個地點映射到唯一背景檔。遇到未登錄名稱必須失敗並補 mapping，不可靜默退回 generic 圖。
11. 明確音訊 DSL 支援 `使用BGM`／`播放BGM`（無名稱時使用 Agent 在完整場景語意翻譯後選定的場景 BGM）、`使用BGM：<已登錄檔名或別名>`、`BGM暫停`、`恢復BGM`、`播放音效：<已登錄檔名或別名>` 與 `停止音效`。Agent 將 BGM 與音效分別翻譯成 `bgm.*` 與 `sound.*`，不可共用一種 audio 節點；只有「播放音效」而無可唯一解析名稱時必須失敗。
12. 主線來源更新若改變素材首次出現的行號，先通過「主線行數位址素材改名閘門」：所有受影響 `CH<N>_L<N>` 都已依新首次實體行號改名，且所有後續相同素材都重用首次檔案並完成引用鏈驗證，才可重新產生 IR／floor。

新版主線與支線必須由同一份全局 AVG layout config 與同一個 Story IR emitter 產生「單一當前發言者－下方對話框」配置。544×416 畫布的下方對話框基準為 `x=16, y=295, width=512, fixedLines=2`，不可退回舊的 `x=96, width=352` 窄框。runtime 以 alpha bbox 將人物可見內容左右置中，滿足 `visibleCenterX === viewportWidth / 2` 與 `visibleBottom === portraitBottomY === 440`；所有立繪套用同一個全局 `portraitScale: 0.92`，人物下半身由 416px viewport 裁切，不得根據個別圖片寬高或 alpha bbox 計算各自縮放率。每句普通立繪台詞固定產生 `image.show(本句 code) → dialogue → image.hide(同一 code)`；hide 在該句結束後發生，不得清除本句未顯示的 code，也不得用跨句或跨分歧 active state 推算生命週期。分歧 option 必須各自遞迴套用同一規則。未來若加入最佳化，只能在完整事件生成後移除無中介事件且 code／image 相同的相鄰 `hide → show` 配對。

字體大小演繹若需要放大或縮小，只能調整對話內文的 `textfont`；必須保留當前全局或場景既有的 `titlefont`，不得跟著內文倍率改動角色名稱標題。`layout.set` 的字體變更事件應明確保留原 `titlefont` 值，只替換 `textfont`。

固定一秒動作 CG 必須交給 `mota-action-cg` 契約：`*_cg.png` 為母檔，`scripts/build_action_cgs.py` 產生固定 416×286 的 `*_action_cg.png`；事件使用 `sloc: [0, 0, 416, 286]`、`loc: [112, 50, 320, 220]`，順序為 `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`。一般持續劇情 CG 使用同一個中央面板，但不可誤套一秒自動隱藏。

## Story IR 到事件 JSON

只有通過共用驗證的 Story IR 才能轉成事件陣列。所有故事劇情、章節劇情、場景演出都應放進樓層的 `eachArrive`。`firstArrive` 目前不放故事，只保留給未來明確需要整個存檔只執行一次的指導規則或初始化功能。

文字稿中的 `旁白:` 是敘述標記，不是發言者。轉成 scene / event JSON 時要省略發言對象，輸出成普通文字字串；不要寫成 `"\t[旁白]正文"`。

主線或支線劇本中若遇到不確定身分、正式名稱、角色 ID、立繪對應、或是否應該顯示圖片的人物，先不要自行猜測。用便於搜尋的顯示文字 `不知道是誰的<劇本中出現的名稱>` 暫代，例如 `不知道是誰的松`，並同步記錄到 TODO list 檔案。等同一批未知人物整理完後，再統一詢問使用者；使用者確認後，才統一替換文字、角色 ID 與出現圖片。TODO list 規則見 [TODO 與待確認事項](todo.md)。

轉換角色 ZIP 支線時，若 draft Story IR 需要 CG、GIF、背景、道具或角色圖，必須先從同一角色的 ZIP 圖片依檔名與劇情上下文尋找直接素材，或以已記錄來源路徑與 SHA-256 的圖片生成適合的 runtime 素材。若仍缺正式圖片，複製另一張合適圖片作為暫時替代，使用可搜尋檔名完成 `project/images/ → main.images → Story IR scene → floor`，並在 `project/story/TODO.md` 記錄 copied source、預期正式內容、受影響 scene、替換條件與驗證證據；placeholder 讓 scene 可玩，但不代表正式素材完成。反之，ZIP 中未被任何 IR scene 需要的額外來源圖應原樣放入根層 `unknown/`，並在 `project/story/TODO.md` 標示待辦，不得進入 `project/images` 或 `main.images`。

劇本中的 `【CG：...】`、`【GIF ...】` 是演出指令，不是玩家可見文字。轉換時必須用 `showImage` 或對應媒體事件顯示已完成來源配對、生成與登錄的實際素材，不要輸出成 `【CG：...】`、`【GIF：...】`、`\t[CG]...`、`\t[GIF]...` 這類文字描述。

劇本中的 `【背景：...】` 同樣是演出指令。轉換時應切換樓層背景或用 `showImage` 顯示背景素材，不要再把 `【背景：...】` 當成對話文字輸出給玩家。

角色支線劇情的輸入應是一個 `.txt` 檔，並且可以從檔案名稱確認支線持有者。先完整閱讀來源並建立標示逐句人物／情緒／CG 的 draft Story IR，再確認既有正式角色圖或同角色 ZIP 基準圖能否滿足需求；缺正式圖時先用其他合適圖片作暫時替代並寫入 `project/story/TODO.md`，不可留下缺檔引用。需要新表情時，先在 intake 用 `remove_bk.py` 將來源圖去背為透明 PNG，再用 `split_emotion_image.py` 分割六張候選表情；不要因為原圖看起來已經乾淨、可直接分割、或只差少量裁切就跳過去背。分割輸出預設保留到 `512x512` 上限，且前景碰觸每格安全邊界時必須失敗；只有實際台詞情緒使用的表情才移入 `project/images/`、登錄並寫入 validated Story IR。劇本文字若用 `???`、`神秘人`、`神祕人` 等名稱刻意隱藏發言者，預設以支線持有者本人選圖，但保留原本顯示名稱。

新角色表情圖的 2x3 固定格順是「喜、怒 / 哀、驚訝 / 慌亂、無表情」，輸出檔名依序為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`。判斷不出情緒時，新角色優先使用 `角色_normal.png`；若該角色是舊資源且沒有 `normal`，再使用既有預設圖。

角色支線的事件 ID、樓層 ID、檔名採用 `角色英文名_章節序號`。若角色已知，必須使用正式角色 ID，例如荒漠使用 `huangmo_1`、`huangmo_2`；不要保留 `mystery_girl`、`unknown` 這類產線中間暫名。只有完整劇情處理後仍無法對應到既有角色時，才可暫用未知命名，並在角色確認後改回正式命名。

角色支線章節不一定會寫成 `好感度1`、`好感度2`、`好感度3`；若章節已寫明標題，將該章節標題視為該段劇情名稱，並用於事件 `title` / 樓層 `title` / meta `activeEvents[].title` / `addAkibaEvent({ title })` 的可讀名稱。若章節沒有命名，或名稱只是 `好感度1`、`好感度2`、`好感度3` 這類序號，AI 可以依劇情內容自行補一個短名，約束為 7 個中文字以下。可讀 `title` 不要保留 `好感度1：`、`好感度2：` 這類序號前綴。

主線與角色支線文本即使沒有明寫 BGM 指令，也要由 Agent 依完整劇情語意選擇合適 BGM；選曲必須放在閱讀並完成 Story IR 語意翻譯後的最後一步，並在 Story IR 中解析為明確的 `bgm.play.name`。可用曲目與選曲規則見 [BGM 背景音樂](bgm.md)。一般日常、餐廳、酒會、書店、害羞邂逅、普通閒聊用 `bossa_casual_shop.mp3`；溫柔收尾用 `next_to_you_emotional.mp3`；只有完整篇真的帶有失憶、異常現象、不可思議線索或真相調查時，才用 `spacetime_mystery.mp3` 或 `twists_suspense.mp3`；調查與危機用 `dark_alleys_tension.ogg`；決戰或動作高潮用 `battle_theme_a.mp3`。若劇本文本明確指定曲目，以劇本指定為優先，但仍需確認該 BGM 已登錄在 `project/data.js -> main.bgms`。

角色支線文本若寫了 `場地:`，先用 `project/location-mappings.json` 查找同名或語意最接近的秋葉原地點，並把事件 meta 的 `locations` 掛到該地點 ID。若沒有完全同名地點，不要因此拒絕改動；應自動選擇最接近的既有地點，例如「雜貨店」可對應便利店。若找不到合理近似地點，使用一個既有地點作為隨機 fallback，並在交付說明中明確寫出選用的地點 ID 與原因。

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    "雨停了。",
    {"type": "showImage", "code": 11, "image": "suou_sad_portrait.png", "loc": [260, 185], "opacity": 1, "time": 200},
    "\t[表妹]所以大家到底去哪裡了？",
    {
        "type": "choices",
        "text": "\t[表妹]要相信梗平的直覺嗎？",
        "choices": [
            {
                "text": "相信",
                "action": [
                    {"type": "setValue", "name": "flag:trust_suou", "operator": "+=", "value": "1"}
                ]
            },
            {
                "text": "還不能",
                "action": [
                    {"type": "setValue", "name": "flag:trust_suou", "operator": "-=", "value": "1"}
                ]
            }
        ]
    },
    {"type": "playTransitionVideo"},
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 0}
]
```

上例的 `[260, 185]` 是現行事件格式的歷史座標，只用來保持 JSON 範例可執行；它不是新版 layout 參數。layout config 實作後，生成器必須以單一當前發言者語意槽取代，人物對齊由 alpha bbox 計算，縮放則一律取全局 `portraitScale`。

