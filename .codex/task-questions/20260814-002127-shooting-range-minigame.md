# Task Questions

- Created: `2026-08-14 00:21:27 +08:00`
- Task: `新增警察局打靶小遊戲`
- Overall status: `resolved`
- Long-term TODO: `project/AkibaTODO.md`

## Questions

### Q1. `警察局地點尚未存在`

- Classification: `blocking`
- Status: `resolved`
- Source: `使用者指定小遊戲地點為警察局，但 project/location-mappings.json 的 Akiba 22 個地點中沒有警察局，地圖也沒有可追溯的警察局座標或素材`
- Affected scope: `project/location-mappings.json、project/floors/Akiba.js 與遊戲內可觸發入口`
- Temporary handling: `不新增或改名地圖地點；將 shootingRange 作為倉庫區第二款玩法，保留原本倉庫裝箱並使用獨立進度 key`
- Decision needed: `警察局應新增在哪些 Akiba 座標／範圍，並使用哪個既有或新地點圖塊？`
- Resolution: `依使用者指示先掛載在既有 warehouse_district；警察局地點建立後再遷移`
- Resolved at: `2026-08-14 00:37:02 +08:00`

### Q2. `七靶的通關與節奏預設`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `使用者指定前排四靶、後排三靶、短暫升起與射擊間隔，但未指定升起秒數、冷卻秒數及通關門檻`
- Affected scope: `extensions/minigames/shootingRange.js 與 project/plugins.js 的預設 options`
- Temporary handling: `採可調參數實作，預設每靶升起 1200ms、兩次有效射擊至少間隔 450ms，七靶各出現一次且全數命中才通關`
- Decision needed: `是否需要調整預設節奏或把通關門檻改為非全中？`
- Resolution: `採最貼近「總共七個」的全中制可調預設；後續可只改 options 收斂，不影響小遊戲架構`
- Resolved at: `2026-08-14 00:21:27 +08:00`

## Promotion

- `project/AkibaTODO.md`：保留未來建立警察局後，將打靶玩法由倉庫區遷移至警察局的後續事項。
