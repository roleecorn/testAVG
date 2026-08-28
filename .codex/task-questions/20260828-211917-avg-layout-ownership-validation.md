# Task Questions

- Created: `2026-08-28 21:19:17 +08:00`
- Task: `驗證角色支線 AVG 對話框設定責任邊界與自動鑑察`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`

## Questions

### Q1. 東山 IR 是否錯把全局 AVG layout 寫成場景 layout？

- Classification: `non-blocking`
- Status: `resolved`
- Source: `對話框沒有按照正規的AVG格式來生成`；`project/story-ir/character/dongshan.json`；`scripts/story_ir.js`；`project/data.js`
- Affected scope: `Story IR schema`、`scripts/story_ir.js` 的 emitter／validator、角色支線與主線 AVG 對話框輸出
- Temporary handling: 先只調整 Agent-owned Story IR，再由既有 generator 重新產生三個東山 floor；沒有直接修改 runtime 或手寫 floor。
- Decision needed: `None`；全局 AVG 設定由 generator／runtime 共用設定提供，IR 只保存單句 `textfont` 特效。
- Decision / current direction: 使用者已確認 AVG 設定應位於生成器。已從東山 IR 移除 12 個完整 `layout.set` 節點，將 6 個「下一句使用大字」轉為對應 dialogue 的 `presentation.textfont: 24`，讓 generator 在每個 scene 開頭注入共用 `setText`。
- Remaining work: `none` for the identified Dongshan IR issue。
- Completion evidence: `project/story-ir/character/dongshan.json` 不再含 `layout.set`；`project/floors/dongshan_1.js`、`dongshan_2.js`、`dongshan_3.js` 的 `eachArrive[0]` 均為 generator 的標準 AVG `setText`，大字只輸出為單句 `textfont: 24`；`node scripts/manage_story_ir.js --emit-character`、`node scripts/manage_story_ir.js`、三個 `node --check`、`node scripts/validate_story.js` 與 `git diff --check` 均通過。
- Resolved at: `2026-08-28 21:30:41 +08:00`

### Q2. 是否需要新增 AVG layout 專用自動鑑察？

- Classification: `non-blocking`
- Status: `open`
- Source: `scripts/story_ir.js`、`scripts/validate_story.js`；本次負向驗證結果
- Affected scope: 共用 Story IR validator／generator 與所有主線、角色支線 AVG floor
- Temporary handling: 目前依既有 generator 產出並以完整故事驗證確認；不把一般 Story IR 通過誤稱為 AVG layout contract 已被檢查。
- Decision needed: 是否補一項只讀檢查，確認全局 generator AVG config 存在，且 IR 不含全局幾何／普通立繪位置欄位，同時測試缺少初始標準 layout 時的輸出？
- Decision / current direction: 已確認目前沒有這項專用鑑察；本輪不擴大修改 validator。
- Remaining work: 補 validator 與負向測試，並重新執行完整故事驗證。
- Completion evidence: 記憶體內刪除東山全部 `layout.set` 或 `fixedLines` 後 `validateBundle` 仍通過；`node scripts/validate_story.js` 僅能證明現有故事交易與生成 floor 一致。
- Resolved at: `<pending>`

## Promotion

- Q1 resolved in the Dongshan IR/floor transaction; Q2 remains promoted to `.codex/TODO.md` for cross-functional validator follow-up.
