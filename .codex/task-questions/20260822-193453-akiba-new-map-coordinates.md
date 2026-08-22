# Task Questions

- Created: `2026-08-22 19:34:53 +08:00`
- Task: `akiba-new-map-coordinates`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. 新版地圖的未辨識店面對應

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者要求依 `project/images/akiba_bg.png` 的新版地圖，為每個一般地點設定 2×2 觸發範圍。
- Affected scope: `project/location-mappings.json` 的全部一般 location `rects`，以及使用這些 location ID 的支線入口。
- Temporary handling: 使用者已確認 `[8,1]` 女僕咖啡廳、`[11,1]` 馬的膝蓋、`[13,1]`／`[14,0]` 為同一間旅館、`[1,3]` 大眾浴場、`[4,5]` 劇場、`[9,4]` 收購所、`[12,4]` 家庭餐廳、`[8,6]` 裝飾物、`[14,7]` 車站、`[3,10]` 兔子之家、`[12,11]` 派出所；其餘地點依新版圖示辨識完成。
- Decision needed: `none`
- Decision / current direction: `2026-08-22：所有一般地點使用單一 2×2 範圍；旅館使用 [13,0,2,2]；時鐘依使用者指示移至 (16,12)。`
- Remaining work: `none`
- Completion evidence: `project/location-mappings.json`、`project/floors/Akiba.js`、`akiba.md`；19 個一般地點共 76 格、無越界或重疊，`idle_clock` 為 `(16,12)`，時鐘圖示位置 `(512,384)`；`node scripts/test_akiba_event_manager.js` 與 `node scripts/test_akiba_location_minigame.js` 通過。
- Resolved at: `2026-08-22 19:49:58 +08:00`

## Promotion

None
