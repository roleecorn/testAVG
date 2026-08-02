# Task Questions

- Created: `2026-08-02 23:41:42 +08:00`
- Task: `statusbar-17x13-implementation`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. Akiba 驗收基準與目前來源不符

- Classification: `non-blocking`
- Status: `resolved`
- Source: `.codex/statusbar-17x13-implementation-plan.md` §4、§5-D、§5-G
- Affected scope: `project/floors/Akiba.js` 的靜態驗證
- Temporary handling: 已保留原有 13 欄、座標鍵與所有既有非零圖層格；右側僅新增零值格。
- Decision needed: 是否必須把既有 Akiba 資料改成計畫中寫的「fgNonZero 105、地點 27、mapped cells 105」？
- Resolution: `不必。本次改造前後 Akiba map/fgmap 非零格數相同；目前來源的 fgmap 非零格數為 91，而 location-mappings 使用 floors.Akiba.locations 陣列（22 個地點、92 個矩形／cell 覆蓋格），不是計畫所述的 cells 物件結構。依「不修改 Akiba 座標或 mapping」決策，以改造前資料為正確基準。`
- Resolved at: `2026-08-02 23:41:42 +08:00`

## Promotion

None
