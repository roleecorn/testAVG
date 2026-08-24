# Task Questions

- Created: `2026-08-25 01:09:37 +08:00`
- Task: `character Story IR shared-contract migration`
- Overall status: `resolved`
- Long-term TODO: `project/story/TODO.md`（已有 huangmo 歷史停用紀錄）

## Questions

### Q1. `huangmo historical IR scope`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/story/TODO.md:33,54-56`; `project/story-ir/character/huangmo.json`; `scripts/manage_story_ir.js`
- Affected scope: `huangmo_1`／`huangmo_2` 的 generator、floor、Akiba runtime entry
- Temporary handling: 保留 authority source 與歷史 IR，不修改來源、不重新接入 runtime；active character routes 繼續遷移與驗證
- Decision needed: 未來是否重新啟用 huangmo 歷史支線
- Decision / current direction: 依既有 TODO 與目前 runtime 狀態，本次不重新啟用；只有使用者另行要求完整恢復時才處理入口、floor、素材與 lifecycle
- Remaining work: none for this migration; huangmo reactivation remains a separate user-authorized task
- Completion evidence: `project/story`／`project/mainStory` diff is empty; `validate_story.js`, `manage_story_ir.js`, lifecycle／Akiba tests and `git diff --check` passed. `huangmo` remains excluded from `scripts/manage_story_ir.js` as documented.
- Resolved at: `2026-08-25 01:12:00 +08:00`

## Promotion

- `huangmo` 的重新啟用仍屬長期 TODO，已由 `project/story/TODO.md` 記錄；本次不擴大處理。
