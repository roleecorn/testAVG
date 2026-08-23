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

### Q2. `東山 Story IR 情緒決策表尚未修復`

- Classification: `non-blocking`
- Status: `open`
- Source: commit review of `9b18029ea56fca9f2845e137cba059cf256341df`
- Affected scope: 東山各句在 source → Story IR 階段選定的 `smile`／`angry`／`sad`／`surprised`／`panic` 表情。
- Temporary handling: 依使用者決定，本次只修正立繪生命週期並移除 `portraitFor`；目前東山仍沿用既有 `normal` 結果。
- Decision needed: 後續修復 `scripts/main_story_portrait_decisions.js` 的資料結構與 expression mapping，並重新產生、驗證東山 Story IR／floor。
- Decision / current direction: 延後到後續獨立任務處理，不在本次修改情緒內容。
- Remaining work: 修復決策表、禁止缺少決策時靜默 fallback、確認六種表情在實際台詞中的使用證據。
- Completion evidence: `<pending>`
- Resolved at: `<pending>`

### Q3. `非 huangmo 角色支線 floor 共用 emitter 遷移`

- Classification: `resolved`
- Status: `resolved`
- Source: `node scripts/manage_story_ir.js --emit-character`
- Affected scope: 排除 `huangmo_1`、`huangmo_2` 後的 14 位角色、共 56 個支線 floor，套用逐句 `show → dialogue → hide` 共用 emitter。
- Temporary handling: 無。
- Decision needed: 無；使用者已明確把 `huangmo_1/2` 移出本次遷移範圍。
- Decision / current direction: 原 58 個 floor 的前 17 個包含 16 個非 huangmo floor 與 `huangmo_1`；排除兩個 huangmo floor 後，中斷點後實際需補寫 40 個。56 個非 huangmo floor 已全部重建。
- Remaining work: 無。
- Completion evidence: `node scripts/manage_story_ir.js --emit-character --exclude-character=huangmo` 輸出 `Emitted 56 character scenes`；其後 `node scripts/manage_story_ir.js --exclude-character=huangmo` 輸出 `Validated 56 character scenes`；`git diff -- project/floors/huangmo_1.js project/floors/huangmo_2.js` 為空。
- Resolved at: `2026-08-23 11:31:05 +08:00`

## Promotion

- Q1／Q2 已匯總至 `.codex/TODO.md` 的 Open 區段；Q3 已完成並移至 Resolved。
