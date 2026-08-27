# Task Questions

- Created: `2026-08-27 21:40:29 +08:00`
- Task: `background-dimension-validator`
- Overall status: `open`
- Long-term TODO: `project/story/TODO.md`

## Questions

### Q1. 綿貫咲耶神社背景尺寸不符

- Classification: `blocking`
- Status: `resolved`
- Source: `project/story-ir/character/watanuki-sakuya.json` floor images
- Affected scope: `watanuki_sakuya_1`～`watanuki_sakuya_4`、`project/images/watanuki_shrine_bg.jpg`
- Temporary handling: 已依使用者本次「修復目前的失敗背景」指示，保留原檔名與內容格式，將既有背景正規化為規範尺寸；未改動權威來源、Story IR 或 floor。
- Decision needed: none for the dimension failure.
- Decision / current direction: 驗證器確認該背景實際為 PNG（檔案副檔名為 `.jpg`）；已將 `project/images/watanuki_shrine_bg.jpg` 調整為 `544×416`，供既有 `canvas: "bg"` 引用使用。
- Remaining work: none for the dimension failure.
- Completion evidence: `project/images/watanuki_shrine_bg.jpg` 現為 `544×416`；`node scripts/manage_story_ir.js` 通過；完整 `node scripts/validate_story.js` 仍受 Q2 的既有 NoiR 來源 SHA-256 漂移阻塞。
- Resolved at: `2026-08-27 21:46:23 +08:00`

### Q2. NoiR 來源與 Story IR SHA-256 不一致

- Classification: `blocking`
- Status: `open`
- Source: `project/story/NoiR.txt`、`project/story-ir/character/noir.json`
- Affected scope: `NoiR` 角色支線的來源 → Story IR → floor 驗證鏈
- Temporary handling: 不修改權威來源，也不以舊 IR 或 floor 反向猜測內容；本次 validator／測試實作可保留，但完整故事驗證不能宣稱通過。
- Decision needed: 依完整、可確認的來源內容更新 `noir` Story IR／floor，或提供完整新來源整檔覆蓋舊來源。
- Decision / current direction: 這是本次任務前已存在的來源雜湊漂移；本次只記錄阻塞，不處理來源內容。
- Remaining work: 完成完整來源核對與對應 IR／floor 原子更新後，重新執行 `node scripts/validate_story.js`。
- Completion evidence: `node scripts/validate_story.js` 報錯 `Story IR is stale for project/story/NoiR.txt`；目前維持 open。
- Resolved at: pending

## Promotion

- Q1 promoted to `project/story/TODO.md` as `watanuki-background-dimension-validator`.
- Q2 promoted to `project/story/TODO.md` as `noir-source-ir-hash-drift`.
