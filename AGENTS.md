# AGENTS.md

這份文件是所有 AI Agent 的專案入口，只保留路由、優先序與不可違反的全域規則。功能實作規範的唯一真實來源是 `.codex/skills/mota-avg-editor/references/`；不得在其他目錄維護平行副本。

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
- 任務結束時永久保留 question file。尚未解決的領域問題匯總到最接近的 `project/*TODO.md`；跨功能 Agent／Skill 問題匯總到 `.codex/TODO.md`。

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

- 使用單一 ZIP 匯入多位角色時，逐角色完成 A 至 G；每位角色通過 G 後立即建立一個內容 commit，不得跨角色混合。
- 角色內容 commit 必須包含該角色的 `project/story/` 真實來源文本，以及其 floor、素材、事件入口和共用檔案中只屬於該角色的行。
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

## 更新
劇情可能會在某個時間點後更新；如果我要求更新劇情，只需要考慮以下 commit 後（不含）的劇情即可：

b25279bf2dbfec150710749a98d99ffcb2383534

每次更新劇情一律建立兩個 commit：第一個 commit 提交實際劇情更新；第二個 commit 僅更新本節的基準 commit，將第一個 commit 的完整雜湊寫入上方。完成第二個 commit 後，下一次更新以該雜湊為新的起點。
