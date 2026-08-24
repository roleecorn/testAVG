# Task Questions

- Created: `2026-08-23 23:01:51 +08:00`
- Task: `portrait-generation-backend`
- Overall status: `resolved`
- Long-term TODO: `project/story/TODO.md`、`project/mainStory/TODO.md`

## Questions

### Q1. ComfyUI 禁用

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者明確指示（2026-08-23）
- Affected scope: 所有支線角色立繪重新生成、主線立繪重新生成、全身像 QA 與圖片接入
- Temporary handling: 已停止使用 ComfyUI；未使用或保留其生成輸出。改回專案既有的 `anime-expression-grid` → 內建 `imagegen` 路徑。
- Decision needed: None for backend selection.
- Decision / current direction: ComfyUI 永久列為本專案角色立繪生成與驗收禁用後端；主線與支線統一使用 `anime-expression-grid` → 內建 `imagegen`，不要求本機生成後端。
- Remaining work: 依統一流程先做全身像校準與 QA；任何半身像立即停止該批次並檢查流程。
- Completion evidence: `anime-expression-grid/SKILL.md` 明定 `imagegen` 為 default raster generation path；`.codex/task-questions/20260823-114200-main-story-portrait-generation.md` 記錄主線已採用同一路徑；ComfyUI `8188` 無 listener。
- Resolved at: `2026-08-23 23:10:00 +08:00`

## Promotion

- `Q1` promoted to `project/story/TODO.md` and `project/mainStory/TODO.md` as a cross-cutting generation blocker.
