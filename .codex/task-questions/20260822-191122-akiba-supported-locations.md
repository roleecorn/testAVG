# Task Questions

- Created: `2026-08-22 19:11:22 +08:00`
- Task: `akiba-supported-locations`
- Overall status: `open`
- Long-term TODO: `project/story/TODO.md`

## Questions

### Q1. 被淘汰地點的既有事件遷移

- Classification: `blocking`
- Status: `open`
- Source: 使用者指定的 Akiba 支線可點擊地點清單，以及現有 `addAkibaEvent` 入口。
- Affected scope: `project/floors/huangmo_1.js` 與 `project/story-ir/character/huangmo.json`。
- Temporary handling: 已從 Akiba 可點擊地點中移除「古書店」與「公寓」，並將原「帳篷」與「書店A」格改為「派出所」與「馬的膝蓋」。依使用者確認，`juju_1`～`juju_3` 的後續入口已全數改為 `warehouse_district`，`noir_3` 的後續入口已改為 `music_venue`。
- Decision needed: `huangmo_1` 應遷移到哪個支援 location ID？
- Decision / current direction: `2026-08-22：茱茱 1～4 統一倉庫區；NOIR 1～4 統一劇場；荒漠待確認。`
- Remaining work: 取得荒漠的指定地點後，更新其 floor／Story IR 入口並驗證流程。
- Completion evidence: `project/floors/juju_1.js`、`juju_2.js`、`juju_3.js`、`noir_3.js` 與對應 Story IR 已更新；驗證 pending while open。
- Resolved at: `pending while open`

### Q2. 卡總的角色身分與支線接入

- Classification: `blocking`
- Status: `open`
- Source: 使用者指定「馬的膝蓋：卡總 (?)」。
- Affected scope: 卡總的角色 ID、來源文本、Story IR、scene／floor 與 Akiba 事件入口。
- Temporary handling: 「馬的膝蓋」已列為可點擊地點；卡總尚未完成屬正常現象，未建立或接入其事件。
- Decision needed: 卡總完成後，提供正式角色名稱／角色 ID 與可追溯支線來源。
- Decision / current direction: `2026-08-22：卡總尚未完成，屬正常待後續接入。`
- Remaining work: 卡總完成並提供來源後，依來源 → Story IR → floor → Akiba 入口流程接入。
- Completion evidence: `pending while open`
- Resolved at: `pending while open`

### Q3. 已淘汰地點的小遊戲處置

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/plugins.js` 的 `akibaMiniGames` 與 `node scripts/test_akiba_event_manager.js`。
- Affected scope: `used_bookstore`、`housing_complex`、`tent`、`blue_bookstore` 的既有小遊戲定義，以及新 `police_station`、`horses_knee` 的地點互動。
- Temporary handling: `used_bookstore`、`housing_complex` 與 `tent` 的小遊戲入口已停用；書店玩法遷至 `horses_knee`。
- Decision needed: `none`
- Decision / current direction: `2026-08-22：依使用者指示將七靶射擊訓練遷至派出所；原書店A玩法遷至馬的膝蓋。`
- Remaining work: `none`
- Completion evidence: `project/plugins.js`、`extensions/minigames/akibaLocation.js`、小遊戲測試更新；`node scripts/test_akiba_event_manager.js`、`node scripts/test_akiba_location_minigame.js`、`node scripts/test_shooting_range.js`、`node scripts/test_book_stack.js`、`node scripts/test_akiba_flapper.js`、`node scripts/test_western_duel.js`、`node scripts/test_demo_minigames.js` 均通過。
- Resolved at: `2026-08-22 19:28:39 +08:00`

## Promotion

- Q1 → `project/story/TODO.md`：`akiba-retired-location-event-reassignment`
- Q2 → `project/story/TODO.md`：`akiba-horses-knee-kasou-identity`
