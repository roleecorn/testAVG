# Task Questions

- Created: `2026-08-27 00:47:50 +08:00`
- Task: `mainline-portrait-validation`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`

## Questions

### Q1. 既有 CH1／CH2 來源與 Story IR 對位錯誤

- Classification: `non-blocking`
- Status: `open`
- Source: `node scripts/validate_story.js`
- Affected scope: 完整主線驗證的來源↔IR 對位檢查；本次惠惠／來島澄／李嚴的資產、IR portrait 與 floor 生成不受影響。
- Temporary handling: 不修改 `project/mainStory/` 權威來源，也不為了通過驗證改寫與本次任務無關的劇情語意；已改用 `validate_story_source.js`、`generate_main_story.js --check`、JSON／PNG 與 mapping 專項檢查。
- Decision needed: 由後續劇情維護任務確認 CH1 offset 786 與 CH2 offset 2404 的完整來源／IR 語意差異。
- Decision / current direction: 本次只記錄既有錯誤；目前完整驗證會在 CH1／CH2 對位檢查失敗，不能宣稱 `validate_story.js` 全部通過。
- Remaining work: 另行核對並在不修改權威來源的前提下更新對應 Story IR 與衍生 floor。
- Completion evidence: `node scripts/generate_main_story.js --check` 通過；本次三角色專項檢查通過；`node scripts/validate_story.js` 仍因上述兩個既有對位錯誤失敗。
- Resolved at: pending while open

## Promotion

- Q1 promoted to `.codex/TODO.md`.
