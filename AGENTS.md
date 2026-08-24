# AGENTS.md

這份文件是所有 AI Agent 的專案入口，只保留路由、優先序與不可違反的全域規則。功能實作規範的唯一真實來源是 `.codex/skills/mota-avg-editor/references/`；不得在其他目錄維護平行副本。

## Agent 直接修改範圍

除非使用者當次明確授意，Agent 只能直接修改以下範圍：

- `project/story-ir/` 內由 Agent 維護的 Story IR。
- 既有生成器、emitter、validator 與其必要測試／工具。
- 規範、reference、README、TODO、question、manifest、驗證紀錄等文件與 metadata。

Agent 不得直接修改 runtime、引擎、插件、共用註冊、素材或手寫的 scene／floor／event 輸出。若已驗證的 IR 與生成器產生衍生檔案，該衍生檔案的變更屬於「使用生成器」的結果，不視為 Agent 直接修改；流程仍必須遵守 IR → validator → generator → scene／floor 的單向鏈。若需求需要直接修改上述受限範圍，必須先取得使用者當次明確授權。

## 最高權限：IR 與權威來源的修改權責

以下兩條規則高於本文件其他段落、任何 Skill、reference、TODO、範例與歷史資料：

1. `project/story-ir/` 內的 IR 檔案，其語意決策與最終採用內容有且僅能由 Agent 依完整權威來源、劇情上下文與 Git log 確認與修改。原始劇情檔案修改不超過 100 行時，禁止使用自動化工具生成 Story IR；超過 100 行時，才可產生 Story IR 草稿，但不得由工具直接覆寫已確認的 IR，且 Agent 必須在採用前逐行核對草稿與原始文章的對應關係。
2. `project/mainStory/` 與 `project/story/` 內的權威來源檔案內容，有且僅能由真實使用者修改或提供。Agent 只能將使用者提供的完整內容原樣落地，不得自行創作、改字、合併局部修訂、潤稿、格式化或反向改寫。

自動化程式只可以讀取與驗證 IR／來源，或從已驗證 IR 確定性產生衍生的 scene／floor／engine event；不得跨越上述權責邊界。

## 元件、Story IR 與 scene／floor 的關係

三者固定遵循以下單向流程，不得反向操作：

```text
真實使用者提供／修改的元件與權威來源
        ↓
Agent 依語意建立／修改 Story IR
        ↓
只讀 validator
        ↓
emitter／generator
        ↓
scene／floor
```

- 元件與權威來源是使用者掌握的內容；Agent 不得自行改寫、重組或依 IR／scene 反向修正。
- Story IR 是 Agent 的語意翻譯文件；只有 Agent 能依完整來源、上下文與 Git log 修改。
- scene／floor 是 Story IR 的衍生實作；不得直接手動修改。需要調整時，必須先修改 IR，再由既有 emitter／generator 重新產生。
- validator 只能讀取與檢查；generator 只能從已驗證 IR 產生 scene／floor／engine event，不能建立或修改元件、來源或 IR。
- 所有劇情相關任務的完成條件為 `node scripts/validate_story.js` 成功；此命令依 `project/story-ownership.json` 強制檢查來源權責、IR／floor 原子性、可重現輸出、素材與 runtime 入口。

## 最高專案硬規則：劇情來源內容不得由 Agent 編修

以下規則是僅次於使用者當次明確指示的最高專案規則，高於本文件其他段落、任何 Skill、reference、TODO、範例與歷史資料：

- `project/mainStory/` 與 `project/story/` 是權威劇情來源資料夾。Agent **禁止編修來源內容**：不得自行改字、補寫、刪句、潤稿、修正錯字、重排段落、格式化、局部 patch，或依 Story IR、scene／floor、TODO 與 Agent 判斷反向改寫來源。
- Agent 允許的來源檔案操作只有兩種：新增完整來源檔，以及以已確認的完整新來源整檔覆蓋舊來源。內容必須逐字來自使用者提供、ZIP／DOCX 等輸入經規定流程提取並驗收的文本，或其他可追溯外部來源；不得在落地前後由 Agent 改寫。
- 整檔覆蓋不是內容修正授權。若只取得局部修訂指示、無法確認完整新版本、角色歸屬不明或來源有衝突，Agent 必須停止來源落地並建立 question／TODO，不得把局部差異自行合併進舊稿。
- 除上述新增與整檔覆蓋外，Agent 禁止刪除、搬移或重新命名來源檔。允許落地的來源檔必須保存來源路徑與 SHA-256，並依任務流程與對應 Story IR、scene／floor 一起 staging／提交。
- 上述來源保護針對 `project/story/*.txt` 等劇情內容。`project/story/manifest.md` 是角色原始資源的追溯 metadata，`project/story/TODO.md` 是待辦 metadata，兩者不是劇情來源；Agent 可依 canonical 流程更新，但不得用其內容反向編修、補寫或取代任何來源 TXT。
- 「更新劇情」不代表 Agent 撰寫或修正來源文本；它代表依本文件記錄的上一個劇情更新基準 commit，檢查兩個來源資料夾的變動，再更新對應中間產物與 scene／floor。若本次輸入是 ZIP 等新來源，則先依上述規則新增或整檔覆蓋來源，再進入相同更新流程。

## Story IR 語意文件硬規則

`project/story-ir/main/*.json` 與 `project/story-ir/character/*.json` 是由 Agent 依完整權威來源、劇情上下文與 Git log 語意翻譯建立的文件，不是由 floor、engine event 或其他衍生產物反推的資料，也不是單純的自動化生成輸出。

- Agent 必須先完整理解來源，再直接建立或更新 Story IR；Story IR 必須表達敘事、角色、演出、互動、流程與未解決指令的語意意圖，並保留來源位置與追溯資訊。
- 任何自動化程式不得直接覆寫、重排、拆分、合併或刪除已確認的 Story IR。原始劇情檔案修改不超過 100 行時，禁止使用自動化工具生成 Story IR；超過 100 行時，可產生待 Agent 逐行核對的 Story IR 草稿。程式仍只能讀取 IR、執行 schema／素材／流程驗證，或從已驗證 IR 確定性輸出 scene／floor。
- Repository 不得保留任何由來源或衍生事件自動建立、覆寫或重建 Story IR 的入口；emitter 只能讀取既有 IR，並由 architecture validator 強制檢查這項邊界。
- 現存 Story IR 不因本規則自動重寫或補正。若單一 IR 檔過大造成 Agent 閱讀或更新成本過高，可由 Agent 依語意 scene／chapter 邊界拆分，保留來源 SHA-256、scene identity、引用與 Git 追溯；不得以自動化程式批量拆分。
- Story IR 的新增、修改或刪除仍必須與對應 scene／floor 在同一內容交易中驗證與提交；驗證器不得因能生成 floor 就反向替 Story IR 作決策。

## 所有新增／更新流程的首要決策原則：劇情需求驅動

本專案所有新增與更新流程，不限 ZIP、主線、角色支線、scene／floor、圖片、BGM、音效、狀態、Akiba 或小遊戲接入，首要決策原則一律是忠實滿足劇情需求。固定決策方向為：`使用者明確需求與權威劇情來源 → Story IR／scene 所需敘事、互動與演出 → 素材與實作的選擇、製作或暫代 → runtime 登錄、接入與驗證`。

- 必須先理解需求並建立對應 Story IR／scene 需求，才可決定使用哪些既有素材、生成哪些新素材、修改哪些 floor／入口或採用哪些實作方式。
- 現有圖片、BGM、樓層、檔名、已登錄資料、工具便利性、ZIP 內剛好存在的檔案或既有錯誤實作，都不得反向增刪、扭曲或取代劇情需求。
- 缺少正式素材時，依 canonical reference 使用可追溯暫代品並建立 TODO；多餘而無劇情用途的來源素材必須隔離並標示待辦。兩者都不得成為改寫劇情需求的理由。
- 所有交付與驗證都必須能由實作／素材反向追溯到 Story IR／scene，再追溯到使用者需求或權威來源；無需求依據的新增，以及有需求卻未實作的省略，均不得視為完成。

## 權威順序與根節點

規則衝突時依序採用：

1. 使用者當次明確指示。
2. 本 `AGENTS.md` 的全域硬規則。
3. 當次任務的根 Skill。
4. 根 Skill 向下導向的子 Skill 固定契約。
5. 功能 reference。
6. TODO、範例與歷史資料。

一般 Mota 劇情、事件、素材或小遊戲任務以 `.codex/skills/mota-avg-editor` 為根 Skill。使用者明確指定其他 Skill 時可直接使用；未明確指定的專用 Skill 必須由根 Skill 向下導向，不得回指祖先形成循環。若環境不支援 Codex Skills，直接依下列功能入口讀取相同的 canonical references。

## 功能入口

- [專案架構與輸出原則](.codex/skills/mota-avg-editor/references/project-overview.md)
- [樓層與場景](.codex/skills/mota-avg-editor/references/floors.md)
- [對話撰寫](.codex/skills/mota-avg-editor/references/dialogue.md)
- [圖片與立繪](.codex/skills/mota-avg-editor/references/images.md)
- [角色立繪基礎畫風](.codex/skills/mota-avg-editor/references/character-art-style.md)
- [Flag 與狀態管理](.codex/skills/mota-avg-editor/references/flags.md)
- [場景顯示邏輯](.codex/skills/mota-avg-editor/references/scene-flow.md)
- [BGM 背景音樂](.codex/skills/mota-avg-editor/references/bgm.md)
- [音樂與特效](.codex/skills/mota-avg-editor/references/audio-effects.md)
- [純文字轉事件 JSON](.codex/skills/mota-avg-editor/references/text-to-event-json.md)
- [角色劇情 ZIP 任務拆分](.codex/skills/mota-avg-editor/references/archive-story-task-splitting.md)
- [TODO 與待確認事項](.codex/skills/mota-avg-editor/references/todo.md)
- [小遊戲新增與接入](.codex/skills/mota-avg-editor/references/minigame-integration.md)
- [秋葉原地圖與地點](.codex/skills/mota-avg-editor/references/akiba.md)
- [Akiba 事件管理](.codex/skills/mota-avg-editor/references/akiba-event-manager.md)
- [交付檢查清單](.codex/skills/mota-avg-editor/references/checklist.md)

## Skill 新增、更新與串接規則

- 新增或更新任何專案 Skill 前，必須先盤點 `.codex/skills/` 內既有 Skill、`references/`、`scripts/`、`assets/` 及本文件的任務路由，先寫出這次要重用的既有能力與真正缺少的能力。既有能力已能完成需求時，必須重用，不得另建同功能 Skill 或複製一份平行規範。
- 只有需求本身形成可獨立觸發、可重複使用且既有 Skill 無法承擔的新能力時，才新增 Skill。若新需求只是特殊輸入的前置拆分或多個既有能力的串接，應新增精簡的編排 reference／路由，並重用下游 Skill，不得把整套特殊流程塞進通用 Skill。
- 只有既有 Skill 自身的能力契約、觸發條件或共用規則確實改變時，才修改該 Skill。單一任務的特殊步驟不得直接改寫通用 Skill；需要修改時，先檢查所有入口與引用者，採最小範圍變更，並確認 `agents/openai.yaml` 是否仍與 `SKILL.md` 一致。
- 每個可執行的專案 Skill 必須具有 `Inputs`、`Outputs`、`Dependencies`、`Blocking Conditions`、`Non-blocking Questions`、`Handoff`、`Validation` 介面。編排流程必須原子化拆分；每個子任務只負責一種產物，並指向實際負責的既有 Skill／reference。
- Skill 新增或更新完成後，必須執行 `node scripts/validate_agent_skill_routes.js`。此驗證器會自動發現現有與將來新增的專案 Skill，檢查統一介面、向下依賴、連結、canonical 文件、遷移與 questions／TODO；不得只驗證 Markdown 格式或單一 Skill 本身可載入。

## 疑慮落檔

- 任務中只要出現疑慮，就必須建立 `.codex/task-questions/YYYYMMDD-HHmmss-<task>.md`，使用 `Asia/Taipei` 日期與時間，格式依 `.codex/task-questions/TEMPLATE.md`。不得只在對話中提出疑慮。
- 阻塞疑慮停止受影響的範圍；非阻塞疑慮落檔後可在既有授權內繼續。角色身分未確認對整批任務屬非阻塞，但該角色的表情生成、圖片接入與 scene／floor 接入必須局部暫停，其他角色可繼續。
- 使用者已作出決定、規格已定稿、決定延後、等待外部輸入或「暫不處理」都不是疑慮已解決的理由；只要仍有實作、遷移、素材、驗證或外部輸入未完成，question 與對應 TODO 必須保持 `open`。只有受影響工作已完成，且 question 內記錄了可核對的檔案／驗證證據時，才可標為 `resolved`。
- 任務結束時永久保留 question file。尚未解決的領域問題匯總到最接近的 `project/*TODO.md`；跨功能 Agent／Skill 問題匯總到 `.codex/TODO.md`。記錄決定後仍未完成的工作同樣屬於未解問題，必須保留為 Open TODO，不得移入 Resolved。

## 編碼規則

多數 Markdown 與文字檔使用繁體中文、UTF-8 編碼。不要用 PowerShell 預設解碼讀取 Markdown 或其他文字檔；必須明確指定 UTF-8：

```powershell
Get-Content <path> -Encoding UTF8
```

若中文顯示為亂碼，先改用明確 UTF-8 或 Python 重新確認：

```powershell
python -c "from pathlib import Path; print(Path(r'<path>').read_text(encoding='utf-8'))"
```

不要把 PowerShell 預設解碼造成的亂碼當成可信內容，也不要根據不可讀的亂碼修改檔案。

## Git 規範

- 除非使用者主動要求，禁止執行 `git add` 或其他會改變 staged/index 狀態的操作。
- 使用者要求檢查、檢驗、review、或詢問「改了什麼」時，預設先看 `git diff --cached`，而不是只看 `git diff`。
- 在本專案中，`git diff --cached` 代表使用者已看過、但仍有疑問或需要 AI 檢查的內容；檢查時要把它視為主要對象。
- 若需要同時判斷未 staged 的新變動，可以再補看 `git diff` 與 `git status --short`，但不能因此忽略 `git diff --cached`。

### 角色劇情 ZIP 的強制提交流程

- 每次處理 ZIP 都必須從使用者指定的原始壓縮檔重新開始：先記錄 ZIP 的 SHA-256，再建立全新且已確認為空的 `tmp/character-story-import/<壓縮檔基名>/<run-id>/`，將本次原始內容重新解壓到其 `raw/`，並只在同次執行的 `work/` 產生 manifest、文字提取、draft IR 與其他中間產物。禁止沿用、複製或信任任何舊 `tmp`、先前解壓目錄、manifest、提取文字、圖片盤點、角色判定或 draft IR；即使 ZIP 路徑與檔名相同，每次重跑仍必須重新解壓與重新盤點。ZIP 自帶的同名中間產物也只算原始輸入，不算本次驗收證據。
- 本次新鮮解壓完成後，必須在落地或實作前逐份確認文字是否相對目前 `project/story/` 為 `new`、`updated`、`identical` 或 `conflict`，並逐張確認圖片相對目前 repository/runtime 素材為 `new`、`identical-existing`、`changed-existing` 或 `unresolved`。文字判定必須保存新舊 SHA-256 並檢查完整內容差異；圖片判定必須保存實際格式、尺寸、SHA-256 並目視核對內容，不得只靠檔名、副檔名或檔案數量。`conflict`／`unresolved` 必須停止受影響分支並落檔，不得把未確認項目當作新增或更新。
- 每位角色都必須在 `project/story/manifest.md` 擁有獨立區段。每個原始資源逐筆記錄原始 ZIP／run、原始相對路徑、SHA-256、資源種類、差異狀態、使用方式、最後命名／路徑、對應來源 TXT 或 scene 與驗證證據；`work/script-manifest.md` 與 `work/asset-usage.md` 只是本次工作產物，通過 G 前必須把該角色的最終紀錄合併進永久 manifest。重新命名、替換或停用時保留舊紀錄並標示 `superseded`，不得刪除或覆寫來源血緣。無可追溯證據的既有角色只能標為 `needs-backfill`，不得猜測回填。
- 使用單一 ZIP 匯入多位角色時，逐角色完成 A 至 G；每位角色通過 G 後立即建立一個內容 commit，不得跨角色混合。
- 角色內容 commit 必須包含該角色依最高規則新增或整檔覆蓋的 `project/story/` 真實來源文本、`project/story/manifest.md` 中只屬於該角色的資源紀錄、對應 `project/story-ir/`、其 scene／floor、素材、事件入口和共用檔案中只屬於該角色的行。若來源變動早已由外部 commit 提交，本次不得重複 staging，但仍須以來源路徑與 SHA-256 追溯。Story IR 絕不是獨立交付物：任何 IR 新增、修改或刪除，都必須在同一個角色 commit 中帶有對應 scene／floor 的新增、修改或刪除；不得建立 IR-only commit。
- 所有角色完成後，再建立只更新本文件基準雜湊的最後 commit。完整分階段、覆蓋與 staging 規則見 [角色劇情 ZIP 任務拆分](.codex/skills/mota-avg-editor/references/archive-story-task-splitting.md)。
- 若未能完成上述逐角色 staging 或驗證，不得宣稱已完成提交；應保留變更並回報阻塞原因。

## Luna 執行限制

本節只適用於使用 Luna 的執行者；Terra 或使用者明確授權時不受本節限制。

- Luna 只可處理使用者已明確指定檔案或場景的局部劇情、對話與事件修改；不得自行把 TODO、commit 訊息或劇本註記視為刪除、改寫或擴大工作範圍的授權。
- 禁止自行刪除或移動劇情、樓層、角色支線、圖片、BGM 或其他素材；即使 TODO 寫有「移除」也必須取得使用者當次明確指示。
- 禁止修改 `scripts/`、`extensions/`、`project/plugins.js`、`project/functions.js`、`project/data.js`、`project/akiba-event-meta.json`；需要碰到這些共用或註冊檔時，停止並請使用者改用 Terra 或明確授權。
- 禁止執行可能批量覆寫樓層、劇本或素材的生成器與重建工具。若局部修改後的 diff 出現未指定的場景、資產或共用檔案，立即停止，不可自行收斂或提交。
- 若需求包含跨章節重生、既有事件接入保留、支線移除、素材註冊、Git 歷史判讀或多個 commit 的協調，一律建議使用 Terra；Luna 僅可先做唯讀盤點並回報需要的明確指示。

## 原始指南

`AI_AVG_EDITOR_GUIDE.md` 僅保留為轉向本文件與 canonical references 的相容入口。

## 劇情更新定義與提交流程

「更新劇情」只處理 `project/mainStory/` 與 `project/story/` 在下方基準 commit 之後（不含）的來源變動；Agent 不得編修來源內容。流程固定為：盤點來源變動 → 驗證並更新 Story IR → 同步更新對應 scene／floor 與必要入口 → 驗證可觸發流程。若任務本身提供 ZIP／DOCX／完整 TXT 等新來源，可先依最高規則新增或整檔覆蓋來源檔。

若本次有來源變動但無法同步產生對應 IR 與 scene／floor，必須停止受影響分支，不得先提交 IR，也不得把未完成交易的來源檔案單獨提交。

劇情更新完成後一律建立兩個 commit：第一個內容 commit 提交本次依規則新增／整檔覆蓋的來源（若有）、IR、scene／floor、必要入口／註冊、TODO、驗證紀錄與其他必要修正；第二個 commit 僅更新本節的基準 commit，將第一個 commit 的完整雜湊寫入下方。完成第二個 commit 後，下一次更新以該雜湊為新的起點。

目前基準 commit：

1739e62c55ab4b46eb1cd700cf73d18c96d4877e

所有劇情更新的內容 commit 都必須遵守來源變動 → Story IR → scene／floor 的原子性：只要 Story IR 有變更，就必須同一 commit 更新對應 scene／floor；Agent 不得反向編修來源。若來源是本次由 Agent 依規則新增或整檔覆蓋，也必須納入同一內容 commit，不得建立 source-only 或 IR-only commit。
