# 單一壓縮檔的角色劇情任務拆分流程

本文件不是一般的角色圖片匯入規範，也不直接規定劇情或立繪的實作細節。它是**輸入只有一個壓縮檔**時的編排介面：先把不透明的 ZIP 拆成可驗收的小任務與明確產物，再依產物串接既有的圖片、劇本轉事件與場景流程。ZIP 任務的完成定義是把劇本更新成可觸發、可遊玩的 scene／floor，不是把原始檔案放入 `project/` 或只建立追溯資料。

匯入前先閱讀 [角色支線 ZIP 匯入實務閘門](character-story-import-lessons.md)，特別是來源完整覆蓋、DOCX／encoding 正規化、檔名與劇情交叉配對、CG／立繪參考分流及背景完整縮放規則。

適用例：使用者只提供 `drive-download-20260729T131245Z-1-001.zip`，並說明其中有角色個人劇情和角色圖基準。

## 目錄

- [總則](#總則)
- [任務依賴圖](#任務依賴圖)
- [Skill 重用與責任對照](#skill-重用與責任對照)
- [A. 重新解壓與內容盤點](#a-重新解壓與內容盤點)
- [B. 劇本文字提取與更新判定](#b-劇本文字提取與更新判定)
- [C. 閱讀來源、確認角色並建立 draft Story IR](#c-閱讀來源確認角色並建立-draft-story-ir)
- [D. 依 Story IR 配對來源圖片與生成素材](#d-依-story-ir-配對來源圖片與生成素材)
- [E. 遊戲圖片接入](#e-遊戲圖片接入)
- [F. 完成 validated Story IR、事件與場景](#f-完成-validated-story-ir事件與場景)
- [G. 圖片閉環與整合驗收](#g-圖片閉環與整合驗收)

## 總則

- 協調者只負責派發、驗收與交接；每個子任務只處理自己的輸入與輸出，不可越過驗收關卡直接修改 `project/`。
- 每次執行都必須以原始 ZIP 的 SHA-256 與新的 `run-id` 建立全新、已驗證為空的 `tmp/character-story-import/<壓縮檔基名>/<run-id>/`。原始內容只重新解壓到該次的 `raw/`，本次生成的 manifest、提取文字、draft IR 與其他中間產物只寫到該次的 `work/`；後文未特別註明的 intake 產物均指 `work/` 內的本次產物。劇情樓層、圖片註冊與既有素材的改動必須留到對應子任務被核准後。
- 禁止讀取、沿用、複製或信任舊 `tmp`、先前解壓內容、manifest、提取文字、圖片盤點、角色判定、asset usage 或 draft IR。即使原始 ZIP 的路徑、檔名或 SHA-256 與前次相同，也必須重新解壓並由 `raw/` 重做 A 至 G；ZIP 內自帶的 `intake-manifest.md`、`text/`、`draft-ir/` 等同名檔案只是 `raw/` 輸入，不是本次產物或驗收證據。
- 新鮮解壓後必須分別回答兩個問題：每份劇本文字相對目前權威來源是否為新增、更新、相同或衝突；每張圖片相對目前 repository/runtime 素材是否為新增、既有相同、既有變更或未解。這兩種「差異狀態」與後續 scene 用途是不同欄位，均不得省略。
- 壓縮檔內有多份劇本、圖片或未知檔案時，保留所有原始檔，各自建立產物；不得自行合併、刪除、猜測角色身分或挑選「看起來最像」的版本。ZIP 內每一張圖片都必須有可追溯狀態：由 scene 直接使用、作為 scene 圖片的生成來源，或原樣放入 repo 根層 `unknown/` 並建立待辦。`unknown/` 只標示尚未應用，不是完成狀態；不得把未引用圖片放進 `project/images/` 當素材倉庫。
- 每個子任務完成時都要回傳產物路徑、判定結果與未解事項。未解事項交給 TODO，不可用假設補齊。
- 角色身分疑慮不阻塞同批其他角色的 A 至 G；但該角色只能完成本次 run 的解壓、文本提取、盤點及 questions／TODO，禁止把來源落地到 `project/story/`，C 只能保留未落地的閱讀／draft 證據，D、E、F 必須局部暫停到身分確認。

## 任務依賴圖

```text
ZIP
 └─ A. 全新解壓、盤點與圖片差異判定
      ├─ B. 劇本文字提取與更新判定 ─ C. 閱讀來源並建立 draft Story IR ─┐
      └─ 圖片清單／原圖 ─────────────────────────────────────┴─ D. 圖片配對／生成
                                                                  └─ E. 遊戲圖片接入
                                                                       └─ F. validated IR／scene／floor／入口
                                                                            └─ G. 圖片閉環與整合驗收
```

`B` 必須在 `A` 驗收後先完成；`C` 必須完整閱讀 `B` 的單一角色來源後才建立 draft Story IR 視覺需求；`D` 只能依 `C` 的需求配對或生成圖片；`E` 只接入 `D` 已建立用途的 runtime 圖；`F` 才將全部已解析素材寫入 validated Story IR、scene／floor 與入口；`G` 最後逐張核對來源圖片與新增 runtime 圖。禁止把圖片接入提前到 `C` 之前。

這個 A 至 G 順序是全專案「劇情需求驅動」首要決策原則在角色劇情 ZIP 的具體套用，不是該原則的適用範圍；其他所有新增與更新同樣必須先確立需求，再選擇素材與實作。

## Skill 重用與責任對照

本流程只負責編排與交接，不重新實作既有 Skill。開始前先盤點以下既有能力；每個階段只能產生自己的原子產物，通過驗收後才交給下一個接收者。

| 階段 | 單一責任 | 必須重用的既有能力 | 驗收後交接 |
| --- | --- | --- | --- |
| A | 從原始 ZIP 全新解壓、建立完整檔案清單並判定每張圖片是否新增／相同／變更／未解 | 本流程的 A 契約 | 本次 run 證據交所有階段；劇本候選交 B；圖片檔名與原圖都保留到 D |
| B | 每份劇本提取為 UTF-8 TXT，判定相對權威來源為新增／更新／相同／衝突，再依規則落地 | [專案架構與輸出原則](project-overview.md) | 已驗收來源文本及文字差異證據先交 C |
| C | 完整閱讀單一角色來源、確認身分並建立含視覺需求的 draft Story IR | [純文字轉事件 JSON](text-to-event-json.md) | draft IR、角色結論與逐 scene 視覺需求交 D |
| D | 依 draft IR 從 ZIP 圖片配對直接素材或生成來源，未配對圖隔離至根層 `unknown/` | [圖片與立繪](images.md)、`anime-expression-grid`、`imagegen`、`mota-action-cg` | 每張來源圖的直接／生成／待辦狀態與核准 runtime 輸出交 E |
| E | 只把已有 scene 用途的 runtime 圖去背、切圖、驗圖、命名並接入遊戲 | [圖片與立繪](images.md) | 完成 `project/images/ → main.images → scene` 的圖片清單交 F |
| F | 將素材解析進 validated Story IR，確定性產生 scene／floor 與入口 | [純文字轉事件 JSON](text-to-event-json.md)、[樓層與場景](floors.md)、[對話撰寫](dialogue.md)、[場景顯示邏輯](scene-flow.md)，並依劇情載入 BGM／音效規則 | 完整來源→IR→素材→floor 交易交 G |
| G | 驗證來源圖分類、永久資源 manifest，以及 `project/images/ → main.images → scene` 三層閉環 | [圖片與立繪](images.md)、[AI 撰寫檢查清單](checklist.md) | 完整角色產物、manifest 紀錄與未應用圖片 TODO 交版本控制流程 |

若表格中的既有能力已能完成需求，必須直接重用，不得新增同功能 Skill、複製平行規範或把下游實作細節搬進本文件。只有某項能力可獨立觸發、會重複使用，且現有 Skill／reference 確實無法承擔時，才評估新增 Skill；單純的 ZIP 前置拆分或跨能力串接不構成新增通用 Skill 的理由。

## A. 重新解壓與內容盤點

**輸入：** 使用者本次指定的原始 ZIP；不得以任何已解壓目錄代替。

**工作：** 先計算原始 ZIP 的 SHA-256，建立不與任何先前執行共用的 `run-id`，並確認 `tmp/character-story-import/<壓縮檔基名>/<run-id>/raw/` 在解壓前不存在或為空。以 Unicode／繁體中文檔名安全地將原始 ZIP 重新解壓到該 `raw/`；不得從舊解壓目錄複製內容，也不得從舊 manifest 還原清單。PowerShell 使用 `-LiteralPath`；若目標非空、解壓後檔名亂碼或無法證明來源是本次 ZIP，停止並建立 question，不能清空後假裝是全新執行，也不能依亂碼判斷角色。

解壓完成後逐檔從 `raw/` 重算 SHA-256 與類型。每張圖片都必須讀取實際格式與像素尺寸，並以 SHA-256、目前 repository/runtime 候選路徑及目視內容比較判定本次差異；不得只看檔名、副檔名或檔案數量。圖片差異狀態固定為：

- `new`：未找到位元相同或可確認為同一邏輯目標的既有素材。
- `identical-existing`：與既有檔位元相同，或已目視確認只是同內容重複檔；記錄既有路徑與 SHA-256，不得重複宣稱新增。
- `changed-existing`：可確認對應既有邏輯目標，但檔案或目視內容不同；記錄候選覆蓋目標與差異，尚未取得完整覆蓋依據前不得覆蓋。
- `unresolved`：無法判斷是新圖、重複圖或既有圖的新版本；建立 question 並停止該圖片及受影響角色分支。

**輸出契約：**

- `raw/`：只含本次由指定原始 ZIP 重新解壓且未改動的內容；不得混入本次生成產物。
- `run-manifest.md`：原始 ZIP 路徑與 SHA-256、`run-id`、Asia/Taipei 開始時間、`raw/` 解壓前為空的證據、解壓工具、解壓後檔案數，以及「未使用任何先前 run 產物」的確認。
- `intake-manifest.md`：列出每個檔案的 `raw/` 相對路徑、副檔名、實際類型、SHA-256、用途初判（劇本／圖片／未知）、所屬角色與是否可讀。圖片另列像素尺寸、差異狀態 `new`／`identical-existing`／`changed-existing`／`unresolved`、比較過的既有路徑、既有 SHA-256 與目視結論；其 scene 用途在 A 階段只能標記為 `pending`，到 G 階段必須回填為 `direct`（最終 scene 直接引用）、`generated-source`（記錄生成輸出及其 scene 引用）或 `unknown-todo`（記錄根層 `unknown/` 路徑與 open TODO），不得留白。差異狀態與 scene 用途不得互相取代；`unknown-todo` 不算圖片已應用。
- `intake-questions.md`：檔名亂碼、未知格式、重複檔案或缺少角色名等阻塞事項；沒有問題時仍建立空清單。

**驗收／下一步：** `run-manifest.md` 證明本次全新解壓，檔名可讀、盤點完整且每張圖片已有差異狀態後，才將 Word 類檔案交給 `B`；圖片檔名與圖片本體都留在本次 `raw/`，等 `C` 只依完整來源建立 draft Story IR 後才交給 `D`。若 ZIP 無法解壓、目標不是全新空目錄，或任一圖片為 `unresolved`，流程停在本步的受影響範圍。

## B. 劇本文字提取與更新判定

**輸入：** `A` 的每份 Word 類劇本；不得輸入圖片或自行挑選的段落。

**工作：** 每份 `.docx` 只從本次 `raw/` 提取內容文字，在本次 `work/text/` 產生同名 UTF-8（無 BOM）`.txt`。依 `word/document.xml` 的段落順序保留段落、換行和定位字元；不保留字型、排版、頁首頁尾、圖片、註解或修訂。`.doc`、PDF 或無法辨識的文件不得硬讀，改列為待轉檔。禁止使用先前 run 的提取文字，即使其 SHA-256 看似相同。

提取後，以完整 UTF-8 內容直接比較目前 `project/story/` 的候選權威來源，不得先做空白正規化、局部合併或 Agent 修訂。每份劇本的文字差異狀態固定為：

- `new`：角色與來源檔目標已確認，且目前沒有對應權威來源檔。
- `updated`：覆蓋目標與版本完整性都已確認，且新舊完整內容不同；記錄舊、新 SHA-256 與完整 diff 證據。
- `identical`：新提取文字與目前權威來源完整內容位元相同；不得把它宣稱為文字更新或重寫來源檔。
- `conflict`：角色、覆蓋目標、版本完整性、多版本關係或內容歸屬任一項無法確認；停止來源落地，僅允許 `C` 為解決身分與版本問題而閱讀並保留未落地證據，禁止進入 D 至 G，並建立 question／TODO。只有疑問解決且狀態重判為 `new`／`updated`／`identical` 後才可續行。

**輸出契約：**

- `text/<原檔基名>.txt`，一份原始劇本對應一份文字檔。
- `script-manifest.md`：原檔與本次文字檔配對、文字提取狀態、章節／版本是否可判定、候選 `project/story/` 目標、文字差異狀態 `new`／`updated`／`identical`／`conflict`、新舊 SHA-256，以及 `updated` 時的完整差異證據位置。每列同時產生可合併到 `project/story/manifest.md` 的 `script`／`authoritative-source` 永久紀錄，不得只停留在本次 `work/`。
- `script-questions.md`：無法轉檔、疑似重複版或章節順序不明等事項。

**角色劇情真實來源落地：** `project/story/` 內的角色劇情文本是角色劇情內容與章節結構的唯一真實來源（source of truth），不是僅供追溯而保留的原始附件；scene／floor 只是依文本轉換出的遊戲實作。只要本步將檔案分類為角色劇情，必須在交給 `F` 前將已驗收的 UTF-8 純文字版本以完整檔案落地到 `project/story/`。新角色可新增檔案；既有角色只有在 `C` 已確認身分且本次輸入是完整新版本時，才可以整檔覆蓋原來源。Agent 不得局部 patch、合併零散修訂、潤稿、補寫、修錯字、格式化、刪除、搬移或重新命名來源；DOCX／PDF 提取也只能依原文順序確定性轉成無 BOM TXT，不得改寫內容。角色身分、版本完整性或覆蓋目標未確認時，文字差異狀態必須為 `conflict`，提取文字只能留在本次 `work/`，禁止新增或覆蓋任何權威來源，並記錄 questions／TODO。

**驗收／下一步：** 用明確 UTF-8 抽讀，確認中文、角色名、標點和段落順序正常，並確認每份劇本已有文字差異狀態。`new`／`updated` 才構成來源新增或更新；`identical` 不修改權威來源但仍可讓已確認的圖片變更繼續；`conflict` 停止受影響角色。其餘文字檔一律先交給 `C` 完整閱讀並建立 draft Story IR；若有多份，不可在此步合併。

## C. 閱讀來源、確認角色並建立 draft Story IR

**輸入：** `B` 的單一已驗收角色來源及既有 Story IR／floor 對應。此階段不讀取 ZIP 圖片或檔名，避免由現有素材反向塑造 Story IR；圖片仍只存在於原始 ZIP／intake，不得先複製到 `project/images/`。

**工作：** 完整閱讀該角色全部來源，確認支線持有者、既有／新增角色、章節、scene、發言者、情緒、背景、道具、動作與 CG 演出。依理解建立 draft Story IR；每個需要圖片的節點都要先標出角色與 `portrait`、`background`、`prop`、`cg` 等角色，不得因手邊已有某張圖片才反向增加演出。尚未配到 runtime 圖的需求以會讓驗證失敗的 `unresolved.directive` 保留在 draft，不能直接寫入 floor。

若劇本角色名、正式 ID 或既有 `project/story/`／floor 對應可確認為專案已有角色，將本案標記為「既有角色劇情修改」，不得建立新的角色 ID 或平行支線。若角色身分無法確認，記錄 question 並停止此角色後續圖片生成、IR 落地與 scene／floor 接入；同批其他角色可繼續。

**輸出契約：**

- `draft-ir/<角色ID>.json`：留在 intake 的候選 Story IR，逐 scene 保存來源順序及全部視覺需求；尚未解決的圖片需求必須可搜尋且驗證失敗。
- `character-resolution.md`：支線持有者、角色 ID、既有／新增角色判定與依據。
- `visual-requirements.md`：每個 draft IR scene／事件需要的角色立繪、背景、道具與 CG，並附來源位置；不得填入尚未判定用途的圖片。
- `character-questions.md`：身分、章節、演出或視覺需求無法確定的問題。

**驗收／下一步：** 只有完整來源都已映射到 draft IR，且每個視覺需求都明確標出後，才將 draft IR、圖片清單與需求交給 `D`。Checked-in `project/story-ir/` 必須留到 `F` 與 floor 同步落地。

## D. 依 Story IR 配對來源圖片與生成素材

**輸入：** `C` 的 draft Story IR、`visual-requirements.md`，以及 `A` 中屬於該角色的每張 ZIP 圖片、SHA-256、實際格式、尺寸與圖片差異狀態。

**工作：** 逐一處理 draft IR 視覺需求，先用來源圖片檔名尋找候選，再用圖片內容與劇情上下文確認用途。不得只憑檔名猜測，也不得因某張圖已存在就反向修改故事需求。每張來源圖只能得到下列結果之一：

- `direct`：圖片本身適合作為指定 Story IR 事件的 runtime 圖，記錄目標 scene／事件與預定 `project/images` 檔名。
- `generated-source`：圖片作為角色立繪、表情、背景、CG 或道具圖的生成參考，記錄生成工作、所有輸出及其目標 Story IR 事件。角色六表情表必須使用 `anime-expression-grid` 與 `imagegen`；固定一秒動作 CG 交給 `mota-action-cg`。
- `unknown-todo`：回讀完整來源與 draft IR 後，該來源圖仍沒有 scene 用途也不是生成來源。將原圖不變地複製到 repo 根層 `unknown/<角色ID>/<原始相對路徑>`，記錄 SHA-256 並建立 question／TODO；不得放入 `project/images/` 或登錄 `main.images`。此狀態只表示待辦，不算已應用。

上述是 scene 用途分類，不會覆蓋 A 的圖片差異狀態。`identical-existing` 優先引用既有檔，不得再複製並宣稱新增；`changed-existing` 必須確認邏輯目標與完整覆蓋授權後才能替換；`new` 也必須有 Story IR 用途才能進入 runtime；`unresolved` 不得進入本階段。

角色基準圖只有在 draft IR 確認該角色需要立繪時才生成 2 欄 × 3 列表情表，格序固定為喜／怒、哀／驚訝、慌亂／無表情。其他圖片同樣優先服務 draft IR 已存在的背景、道具或 CG 需求。若來源圖片比需求多，先回查是否漏標演出；仍無法配對就使用 `unknown-todo`，不能標為「已完成」。反過來，若 draft IR 明確需要圖片卻沒有任何可用直接素材或生成來源，複製另一張合適圖片作為可搜尋的暫時替代，記錄 copied source、預期正式內容與目標 scene，並在 `project/story/TODO.md` 建立 Open 待補素材；不得用 `unknown/` 掩蓋 IR 缺素材。

**輸出契約：**

- `asset-usage.md`：每張來源圖的相對路徑、SHA-256、實際格式、尺寸、圖片差異狀態、比較過的既有路徑、角色、`direct`／`generated-source`／`unknown-todo`、目標 scene／事件、runtime 輸出或根層 `unknown/` 路徑，以及生成血緣／TODO；另列每個 IR 缺圖 placeholder 的 copied source、暫時檔名、目標 scene 與 `project/story/TODO.md` 項目。每列同時產生可合併到 `project/story/manifest.md` 的永久紀錄資料，不得只停留在本次 `work/`。
- `art/<角色ID>_expression_sheet.png` 與 `expression-validation.md`（需要角色表情時）。
- 其他核准生成輸出與各自的驗收結果。

**驗收／下一步：** `asset-usage.md` 不得有空白或 `pending`。`direct`／`generated-source` 必須有 draft IR scene 目標；`unknown-todo` 必須有根層隔離路徑與 `project/story/TODO.md` Open 項目，並在交付中明確列為未應用；每個 IR 缺圖需求必須已有 placeholder 與 TODO。這些已有用途的 runtime 輸出交給 `E`。

## E. 遊戲圖片接入

**輸入：** `D` 已核准且在 `asset-usage.md` 中具有 Story IR 目標的直接素材、生成輸出與缺圖 placeholder。

**工作：** 依既有 [圖片與立繪](images.md) 流程處理 runtime 素材。表情表先在 intake 用 `remove_bk.py` 去背，再用 `split_emotion_image.py` 切成六張並檢查透明背景與格序；只有 draft Story IR 實際使用的表情才移入 `project/images/`。其他直接／生成素材與 placeholder 同樣依用途驗圖與命名。每張進入 `project/images/` 的圖片都必須同批登錄 `project/data.js -> main.images`，而每個新增 `main.images` 項目都必須已有明確 draft Story IR scene 目標；placeholder 另須有 `project/story/TODO.md` Open 項目。作為生成來源但不直接顯示的原圖留在原始 ZIP／intake；未配對來源圖只進根層 `unknown/`，兩者都不得混入 runtime 圖片目錄。

**輸出契約：** 本角色實際需要的 `<角色ID>_{smile,angry,sad,surprised,panic,normal}.png`、CG／背景／道具等 runtime 圖，以及逐檔 `project/images` 路徑、`main.images` 登錄與 Story IR scene 目標的三欄對照證明。

**驗收／下一步：** 每張新增 `project/images/` 圖片都必須存在、格式正確且已登錄；每個新增 `main.images` 項目都必須能反查到 draft Story IR scene。圖片未登錄或登錄未指定 scene 都是錯誤，不得交給 `F`。

## F. 完成 validated Story IR、事件與場景

**輸入：** `B` 的單一已驗收 `.txt`、`C` 的 draft Story IR／角色結論、`D` 的 `asset-usage.md`，以及 `E` 已登錄的 runtime 圖片清單。

**工作：** 將 draft Story IR 的所有視覺需求解析成 `E` 的明確 runtime 圖片，確認每個人物、背景、道具與 CG 節點都有正式素材或已記錄於 `project/story/TODO.md` 的 placeholder 後，依 [純文字轉事件 JSON](text-to-event-json.md)、[樓層與場景](floors.md) 與 [圖片與立繪](images.md) 驗證 Story IR 並確定性建立場景。劇本來源不明、章節順序未確認、角色身分未確認或仍有未解析 `unresolved.directive` 時，不得自行補劇情、猜選角色或輸出 floor。

若 `C` 判定為既有角色，`F` 開始前必須以 B 已驗收的完整新 TXT 整檔覆蓋該角色 `project/story/` 真實來源文本，再比較新舊稿的章節、台詞、選項、演出與素材差異，修改原有 scene／floor。Agent 只能原樣落地完整來源，不得自行修正或合併來源內容。scene／floor 與文本有劇情內容差異時，必須以 `project/story/` 文本為準；不得反向以現有 scene／floor 覆寫、補改或取代文本。只有新稿明確增加章節時才可增加對應 floor；不得因為 ZIP 來源不同就另建一套新角色樓層。

`F` 的完成條件不是「產生一份 IR」或「新增幾個 floor 檔」，而是完成來源文本 → draft Story IR 視覺需求 → 已解析素材 → validated Story IR → scene／floor → 事件入口的整條更新鏈：

- 逐章／逐 scene 對照 ZIP 劇本，確認台詞、旁白、選項、分歧、演出與流程標記都已落入對應 Story IR 與 floor。
- 逐一確認 `asset-usage.md` 的 runtime 輸出已填入對應 Story IR 圖片節點，且每個新增圖片節點都能反查來源圖或既有正式素材。
- 新角色建立完整可觸發支線；既有角色修改原有支線，除非新稿明確新增章節，不得因 ZIP 來源另建平行支線。
- 任何 Story IR 新增、修改或刪除都必須同時造成對應 scene／floor 的新增、修改或刪除；IR-only 變更不得進入 G，也不得提交。
- 若場景、素材或事件入口尚未能同步更新，停止該角色，不得把未完成的 IR 當作暫存完成品；疑慮依 `AGENTS.md` 落檔並交由 G 回報。

**輸出契約：** Validated Story IR、場景／事件變更、每段劇本的來源文字檔路徑、來源到 IR、來源圖片到 runtime 圖再到 scene／floor 的對照證據、可觸發入口，以及 TODO 清單中所有未解問題。

## G. 圖片閉環與整合驗收

**輸入：** `A` 至 `F` 的產物與 TODO。

**工作：** 先驗證 `run-manifest.md` 能證明本次工作直接來自指定原始 ZIP 的 SHA-256、全新空白 run 目錄與本次重新解壓，且沒有引用任何舊 `tmp` 產物。再逐一檢查產物鏈是否完整，確認每份 `.txt`、draft／validated Story IR、角色判定、生成產物、圖片註冊與場景修改皆能追溯至本次 `raw/` 中的原始檔。逐份核對 `script-manifest.md` 的文字差異狀態，逐張比對 `intake-manifest.md` 與 `asset-usage.md` 的圖片差異狀態及 scene 用途，然後執行三層檢查：

- 來源圖片分類：每張 ZIP 圖片必須是 scene 直接使用、被 scene 使用之生成圖的來源，或根層 `unknown/` 中附 open TODO 的未應用圖片。只有前兩者算已應用；`unknown/` 只保存待辦與追溯。
- 文字更新判定：每份劇本必須有 `new`／`updated`／`identical`／`conflict` 狀態、新舊 SHA-256 與必要 diff；只有 `new`／`updated` 可宣稱文字有新增或更新，`identical` 不得重寫來源，`conflict` 不得通過 G。
- 圖片新增判定：每張圖片必須有 `new`／`identical-existing`／`changed-existing`／`unresolved` 狀態及格式、尺寸、SHA-256、候選既有路徑與目視證據；只有 `new` 可宣稱新增，`identical-existing` 不得重複匯入，`changed-existing` 必須有已確認的替換目標與授權，`unresolved` 不得通過 G。
- Images 到 data：`project/images/` 中每張圖片都必須存在於 `project/data.js -> main.images`，不得有未登錄 runtime 圖。
- Data 到 scene：`main.images` 中每個圖片項目都必須至少被一個 validated Story IR scene 與對應 floor 使用，不得只有登錄而沒有 scene 引用。
- 永久 manifest：將本角色每筆最終 `script-manifest.md` 與 `asset-usage.md` 紀錄合併到 `project/story/manifest.md` 的同角色區段，核對原始 ZIP／run、原始路徑與 SHA-256、使用方式、最後命名／路徑、來源 TXT 或 scene 與證據。重新命名或替換時將舊紀錄標成 `superseded` 後新增紀錄；不得刪除歷史血緣，也不得猜測回填 `needs-backfill`。

若 draft Story IR 明確需要圖片但沒有正式素材，必須已有另一張圖片的暫時替代、完整 `project/images/ → main.images → scene` 鏈及 `project/story/TODO.md` Open 項目；若只是額外來源圖暫無用途，放入根層 `unknown/` 並在同一 TODO 檔保留待辦。兩者都可讓可玩 scene 繼續，但不得宣稱正式素材已完成或 unknown 圖已應用。另須確認每個受影響 scene 同時存在於 Story IR 與 floor，且事件入口可實際選取；不可只驗證 IR schema 或檔案存在。最後依 [AI 撰寫檢查清單](checklist.md) 驗收。

**輸出契約：** 最終交付清單：原始 ZIP 路徑與 SHA-256、本次 `run-id`、全新解壓證據、解壓清單、每份文字的 `new`／`updated`／`identical` 狀態與新舊 SHA-256／diff、每張來源圖片的格式、尺寸、SHA-256、`new`／`identical-existing`／`changed-existing` 差異狀態及直接／生成／`unknown-todo` scene 用途、`project/story/manifest.md` 中本角色的永久資源紀錄與最後命名、根層 `unknown/` 路徑與 open TODO、每張 `project/images` 圖片的 `main.images` 登錄及 scene 引用、本次新增或整檔覆蓋的 `project/story/` 正式故事 TXT 及其來源路徑／SHA-256、文字提取產物、角色判定、生成產物、validated Story IR、對應 scene／floor、可觸發事件入口與場景變更。任何 `conflict` 或 `unresolved` 都必須列為未通過而非包裝成完成。

**版本控制：** 每位角色完成 `G` 的整合驗收後，必須立刻為該角色的完整變更建立一次獨立 Git commit。該 commit 必須同時包含本次新增或整檔覆蓋的 `project/story/` 真實故事 TXT、`project/story/manifest.md` 中只屬於本角色的紀錄、受影響 `project/story-ir/`、所有對應 scene／floor、被 scene 實際引用的 runtime 素材、事件入口、共用註冊檔中只屬於該角色的行、該角色根層 `unknown/` 待辦圖片，以及必要 TODO／流程變更。`unknown/` 圖片不得加入 `main.images`；只作為生成來源且未被 runtime 直接使用的原始 ZIP 圖也不得放入 `project/images/`。Story IR 不得獨自提交，也不得把 scene／floor 延後到另一個 commit。不可把多位角色混在同一個 commit；若 ZIP 含多位角色，必須依角色重複 A 至 G，並在每位角色完成後各自 commit。提交前先確認 `git diff --cached --name-only`、`git diff --cached`、`asset-usage.md` 與 `project/story/manifest.md` 同時證明來源、原始資源使用方法與最後命名、IR、對應 scene／floor、`project/images → main.images → scene` 鏈及 `unknown/` TODO；共用檔案不得整檔加入。提交後立即用 `git show --stat --name-only <commit>` 複核，確認沒有跨角色、source-only、IR-only、缺漏 manifest、未分類來源圖、未登錄 images 圖、無 scene 使用的 data 登錄或無關檔案。所有角色 commit 完成後，才可建立最後一個只更新 `AGENTS.md` 本節基準雜湊的 commit，將最後一個角色內容 commit 的完整雜湊寫入；該基準 commit 不得混入任何劇情、圖片、註冊或 TODO 變更。
