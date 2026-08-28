# Task Questions

- Created: `2026-08-28 21:19:17 +08:00`
- Task: `驗證角色支線 AVG 對話框設定責任邊界與自動鑑察`
- Overall status: `resolved`
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
- Status: `resolved`
- Source: `scripts/story_ir.js`、`scripts/validate_story.js`；本次負向驗證結果
- Affected scope: 共用 Story IR validator／generator 與所有主線、角色支線 AVG floor
- Temporary handling: 已由共用 Story IR validator／generator 執行全局契約檢查，未把 AVG 幾何設定複製回各支線 IR。
- Decision needed: `None`；新增只讀全局檢查，確認 `project/data.js` 的 AVG config、IR 權責邊界與生成 floor 輸出。
- Decision / current direction: `scripts/validate_avg_layout.js` 讀取全部主線／角色支線 IR，並由 `scripts/validate_story.js` 固定執行；`scripts/story_ir.js` 同時在 `validateBundle`、`validateProjectReferences` 與 `bundleToFloors` 套用相同檢查。
- Remaining work: `none`。
- Completion evidence: `scripts/test_story_ir_lifecycle.js` 新增正向與負向案例，涵蓋錯誤全局矩形、IR 散落幾何值、生成 setText 散落幾何值與缺少 setText；`node scripts/validate_avg_layout.js` 掃描全部 105 個 Story IR scene（含 2 個 legacy scene 的記憶體生成檢查）；`node scripts/validate_story.js` 完整通過。
- Resolved at: `2026-08-28 21:58:00 +08:00`

## Promotion

- Q1 resolved in the Dongshan IR/floor transaction; Q2 resolved by the shared AVG layout validator and its negative tests.
