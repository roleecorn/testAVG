# Task Questions

- Created: `2026-08-23 02:30:00 +08:00`
- Task: `主線與支線共用角色生成邏輯測試（東山）`
- Overall status: `open`
- Long-term TODO: `none`

## Questions

### Q1. `timeline.json 無法覆寫`

- Classification: `non-blocking`
- Status: `open`
- Source: `node scripts/generate_main_story.js --refresh-ir`
- Affected scope: `project/timeline.json` 自動更新
- Temporary handling: 主線 Story IR、floor、角色圖片與註冊已完成；未覆寫 timeline.json。
- Decision needed: 確認 `project/timeline.json` 的檔案鎖定／ACL 後，再補跑 generator 的 timeline 更新步驟。
- Decision / current direction: 保留現況，等待外部檔案權限或鎖定狀態解除。
- Remaining work: 重新執行 timeline 更新並確認內容與主線生成結果一致。
- Completion evidence: `node scripts/generate_main_story.js --check`、`node scripts/manage_story_ir.js` 已通過；`project/timeline.json` 寫入仍回報 `EPERM`。
- Resolved at: `<pending>`

## Promotion

None
