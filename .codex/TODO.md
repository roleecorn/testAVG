# Agent and Skill TODO

保存跨功能的 Agent／Skill 長期未解事項。單次任務疑慮先寫入 `.codex/task-questions/`；只有尚未解決且需要跨任務追蹤的項目才匯總到這裡。

## Open

- 全局 AVG 版面完成實際修正與最後定稿後，統一遷移 34 個舊角色支線 floor 及兩個 Watanuki 舊 action CG；主線／支線不得長期維持兩套版面。本次依使用者指示只更新規範，不進行追溯修改。

## Resolved

- `20260808-120000-update-story.md` Q1／Q2：主線與角色支線分別以 `project/mainStory/CH1`～`CH6`、`project/story/*.txt` 為唯一真實來源；當次更新範圍已依基準 commit 規則完成，不存在待提供劇本的持續阻塞。
- `20260809-001410-project-principle-audit.md` Q1：主線與角色支線採同一套全局 AVG 版面，舊支線遷移延後至版面定稿。
- `20260809-001410-project-principle-audit.md` Q2：`*_cg.png` 為母檔，`scripts/build_action_cgs.py` 產生 `*_action_cg.png` 與同步 manifest，generator `--check` 驗證兩者。
- `20260809-001410-project-principle-audit.md` Q3：每個地點使用獨立背景檔名與精確 mapping，generic 背景只作 placeholder 來源。
