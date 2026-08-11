# Task Questions

- Created: `2026-08-11 10:35:43 +08:00`
- Task: `秋葉原各地點小遊戲 Study`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`、`project/AkibaTODO.md`

## Questions

### Q1. `秋葉原地點總數與 canonical reference 不一致`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `.codex/skills/mota-avg-editor/references/akiba.md`、`project/location-mappings.json`
- Affected scope: `各地點小遊戲的涵蓋範圍與後續接入規劃`
- Temporary handling: `Study 以目前可執行的 location-mappings.json 內 22 個地點為準；idle_clock 保留原本主線交流保底用途，不配置一般小遊戲；不替文件所稱但 mapping 不存在的 5 個地點臆造內容。`
- Decision needed: `後續實作前確認應以現有 22 個地點為正式範圍，或另有 5 個待補回的地點；確認後同步修正 canonical reference 的預期數量。`
- Resolution: `本次依實際可執行 mapping 完成 22 個地點（21 個一般小遊戲入口加 idle_clock），並把 akiba.md 預期數量修正為 22。`
- Resolved at: `2026-08-11 11:27:14 +08:00`

### Q2. `既有小遊戲示範入口與 canonical reference 不一致`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `.codex/skills/mota-avg-editor/references/minigame-integration.md`、`project/floors/mapo_1_1.js`、`project/plugins.js`
- Affected scope: `既有 ticTacToe／slot777 的可達入口與驗收路徑`
- Temporary handling: `保留既有 API，不臆造已不存在的起始樓層入口；本次改由 Akiba 地點選單建立正式可達入口。`
- Decision needed: `後續同步修正 canonical reference，移除或更新起始樓層小遊戲機的過時敘述。`
- Resolution: `已更新 minigame-integration.md，保留 demo API 但明載目前沒有樓層呼叫；Akiba 地點選單成為正式入口。`
- Resolved at: `2026-08-11 11:27:14 +08:00`

### Q3. `地點小遊戲的經濟獎勵尚未指定`

- Classification: `non-blocking`
- Status: `open`
- Source: `使用者要求直接製作，但未指定金錢、道具或首次通關獎勵`
- Affected scope: `小遊戲結果回寫與重玩平衡`
- Temporary handling: `本次只保存通關地點與最高分，不發放金錢或道具，避免形成未授權的無限刷資源入口。`
- Decision needed: `後續若需要獎勵，確認首次通關與重玩分別應給予的金錢／道具。`
- Resolution: `pending`
- Resolved at: `pending`

### Q4. `內建瀏覽器疑似無法執行舊版 H5 魔塔頁面`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `http://127.0.0.1:1055/index.html` 的 DOM 快照列出 `<canvas>` 內的「此瀏覽器不支持HTML5」fallback 文字；該文字並非實際渲染狀態。`
- Affected scope: `本次地點小遊戲的實機視覺與完整事件流驗收`
- Temporary handling: `先以 Node 隔離測試覆蓋設定與生命週期，再以實際畫面而非 DOM fallback 文字判斷瀏覽器狀態。`
- Decision needed: `無；內建瀏覽器可正常執行。`
- Resolution: `已由內建瀏覽器進入秋葉原地圖，從公園地點選單啟動「公園清潔隊」，以滑鼠完成 12/12 目標，顯示挑戰成功與 1340 分，並正常返回地圖。`
- Resolved at: `2026-08-11 11:50:36 +08:00`

## Promotion

- `project/AkibaTODO.md`：確認首次通關與重玩應給予的金錢／道具獎勵。
