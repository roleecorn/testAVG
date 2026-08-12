# Task Questions

- Created: `2026-08-12 19:33:54 +08:00`
- Task: `新增書店疊書小遊戲`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. `書店接入範圍`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `使用者要求新增「書店小遊戲」，但 Akiba 現有 used_bookstore 與 blue_bookstore 兩個書店地點`
- Affected scope: `project/plugins.js 的地點小遊戲清單與各地點進度 key`
- Temporary handling: `保留兩間書店原有玩法，將同一款疊書挑戰作為第二選項接入兩處，並使用各自獨立的進度 key`
- Decision needed: `疊書挑戰應只接入其中一間書店，或兩間書店皆可遊玩？`
- Resolution: `依「書店小遊戲」的一般稱呼採兩間書店皆可遊玩；此變更可在後續指定地點時局部收斂，不阻塞實作`
- Resolved at: `2026-08-12 19:33:54 +08:00`

## Promotion

None
