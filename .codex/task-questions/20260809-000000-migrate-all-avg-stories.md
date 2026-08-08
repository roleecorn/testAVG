# Task Questions

- Created: `2026-08-09 00:00:00 +08:00`
- Task: `依更新 AVG 規範遷移所有主線與角色劇情`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. `AVG 試作值是否可批量套用`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `.codex/skills/mota-avg-editor/references/images.md`、`.codex/skills/mota-avg-editor/references/dialogue.md`
- Affected scope: `libs/core.js`、`libs/ui.js`、`libs/events.js`、主線生成器、主線與角色劇情 floor
- Temporary handling: `維持所有幾何值集中在共用 layout config；不在 floor 或角色 mapping 寫入個別像素。`
- Decision needed: `本次是否依使用者明確要求「調整目前的所有主線劇情與角色劇情」完成批量遷移？`
- Resolution: `是。使用者本次明確授權批量調整；採 canonical config 的語意值，並保留後續視覺驗收可只修改全域 config 的結構。`
- Resolved at: `2026-08-09 00:00:00 +08:00`

## Promotion

None
