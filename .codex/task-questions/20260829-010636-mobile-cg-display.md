# Task Questions

- Created: `2026-08-29 01:06:36 +08:00`
- Task: `mobile-cg-display-report`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`

## Questions

### Q1. 手機 CG 回報的實際失效範圍

- Classification: `non-blocking`
- Status: `open`
- Source: `用戶回報：手機環境下 cg不能正常顯示`
- Affected scope: `libs/events.js`、`libs/ui.js`、`libs/control.js`、`styles.css`、所有使用 showImage 顯示 CG 的 floor
- Temporary handling: `所有 CG layout warning 已透過 Story IR／action-CG generator 修正並完成靜態驗證，尚待手機環境重現驗證`
- Decision needed: `仍需確認手機系統／瀏覽器與具體症狀；具體受影響角色已確認為茱茱與藍湘`
- Decision / current direction: `受影響範圍先鎖定茱茱與藍湘；目前全專案 139 個 CG 事件均已符合診斷器的來源裁切／顯示面板檢查，普通 CG 使用中央 16:11 裁切，action CG 使用正式 416×286 生成輸出`
- Remaining work: `仍需以回報的手機系統／瀏覽器，在 juju_3、juju_4、lanxiang_2、lanxiang_4 實際重現並確認顯示完整性；若仍有空白、遮擋或縮放問題，再另行取得 runtime 修改授權`
- Completion evidence: `已新增 scripts/validate_cg_layout.js 並接入 node scripts/validate_story.js；診斷掃描 139 個 CG 事件且 0 errors／0 warnings；所有 74 個角色 scene floors 已由 Story IR 重新驗證／生成，綿貫 action-CG master/output manifest 已同步，node scripts/validate_story.js、node scripts/test_cg_layout.js、python scripts/build_action_cgs.py --check、node --check scripts/validate_cg_layout.js 與 git diff --check 均通過`
- Resolved at: `pending while open`

## Promotion

- `Q1` promoted to `.codex/TODO.md` because it spans runtime rendering, floor event data, and CG assets.
