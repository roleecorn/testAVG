# Task Questions

- Created: `2026-07-30 23:50:06 +08:00`
- Task: `整理 Agent 規範與 Skill 樹狀調用`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. 權威來源與非 Skill Agent

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 1～3
- Affected scope: `AGENTS.md`、`agent/*.md`、`mota-avg-editor/references/`
- Temporary handling: 在遷移完成前不得刪除沒有 canonical 對應的文件。
- Decision needed: 是否支援只讀 `AGENTS.md` 的 Agent，以及功能規範唯一來源。
- Resolution: 繼續支援非 Skill Agent；`AGENTS.md` 只保留入口與硬規則；功能規範唯一來源為 `.codex/skills/mota-avg-editor/references/`；刪除的 `agent/*.md` 必須逐檔留下遷移對應。
- Resolved at: `2026-07-30`

### Q2. Skill 調用拓撲

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 4、10、11、23、25
- Affected scope: 三個專案 Skill 與共享 references
- Temporary handling: 未建立無循環介面前不得再新增反向依賴。
- Decision needed: Skill 是單一協調者還是樹狀導向，以及哪些 Skill 可作為根。
- Resolution: 每次任務只有一個根，依賴只能向下；一般專案任務以 `mota-avg-editor` 為根。`anime-expression-grid` 可被根 Skill 導向，也可由使用者直接指定；`mota-action-cg` 預設只作為 `mota-avg-editor` 子 Skill。共享 reference 可被多個 Skill 引用，但單次執行不得成環。
- Resolved at: `2026-07-30`

### Q3. 疑慮落檔與阻塞層級

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 5、12、13、19～21
- Affected scope: 所有 Agent 任務
- Temporary handling: 所有疑慮先寫入 timestamped task question file。
- Decision needed: 疑慮保存位置、生命週期與阻塞定義。
- Resolution: 每個有疑慮的任務建立 `.codex/task-questions/YYYYMMDD-HHmmss-<task>.md` 並永久保留；未解項目再匯總到領域 TODO 或 `.codex/TODO.md`。角色身分對整批任務非阻塞，但對該角色 D／E／F 分支局部阻塞；其他阻塞分類依規則停止。
- Resolved at: `2026-07-30`

### Q4. ZIP 原子化與提交

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 8、18、30
- Affected scope: 角色劇情 ZIP A～G 與本次重構 commits
- Temporary handling: 每個階段驗收，角色通過 G 前不得提交內容。
- Decision needed: 原子階段是否各自 commit，以及本次是否可 staging／commit。
- Resolution: ZIP 維持每角色一個內容 commit；使用者已授權本次 Agent／Skill 重構執行 `git add` 與三個原子 commit，不 push；先前手動 commit `080aeeab` 不處理。
- Resolved at: `2026-07-30`

### Q5. Akiba 歷史 plan

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 7、15
- Affected scope: `akiba.md`、`akiba-event-manager-plan.md`
- Temporary handling: 以現行程式與測試為準，不沿用規劃語氣。
- Decision needed: 歷史 plan 要封存、合併或改寫。
- Resolution: 地圖規則保留在 `akiba.md`；事件狀態、API、遷移與驗證改寫為 `akiba-event-manager.md` 現行規格，刪除過時規劃內容。
- Resolved at: `2026-07-30`

### Q6. CG 圖片生成邊界

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 24
- Affected scope: `mota-action-cg`
- Temporary handling: 未要求生成時只接入既有素材。
- Decision needed: 行為 CG Skill 是否自動生成缺少的圖片。
- Resolution: 接入是核心；只有使用者同時要求生成圖片時才向下使用 `imagegen`。
- Resolved at: `2026-07-30`

### Q7. 驗證器與整理範圍

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者 grilling 回覆 9、16、17、26～30
- Affected scope: project-local Skills、references、`AGENTS.md`、驗證腳本
- Temporary handling: 不修改任何全域 Skill。
- Decision needed: 驗證內容、介面章節、references 結構與修改範圍。
- Resolution: references 保持平面；每個專案 Skill 統一七個介面章節；新增無第三方依賴的路由驗證器，錯誤與警告分級；只整理專案內檔案，不修改全域 Skills。
- Resolved at: `2026-07-30`

## Promotion

None
