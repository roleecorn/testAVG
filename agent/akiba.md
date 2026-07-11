# 秋葉原地圖與地點

本文件記錄秋葉原樓層的地點資料、觸發流程，以及之後要調整地點時應該修改的位置。秋葉原是大地圖，角色點擊任意可到達位置後，只有當角色移動結束且目前座標落在地點清單中，才會觸發公共事件。

## 相關檔案

- `project/floors/Akiba.js`：秋葉原樓層本體，包含 `map`、`bgmap`、`fgmap` 與出生點。
- `project/location-mappings.json`：維護座標到地點與店名的 mapping。
- `project/events.js`：公共事件 `Akiba地點互動`。
- `project/plugins.js`：提供地點查詢與觸發工具，例如 `getMappedLocationInfo`、`getLocationTileNumber`、`triggerLocationInteractionAtHero`。
- `project/functions.js`：一般走路結束後呼叫秋葉原地點檢查。
- `libs/control.js`：直接點擊移動結束後呼叫秋葉原地點檢查。

## 圖層原則

- `bgmap` 放道路、地面、水域等底圖。
- `fgmap` 放店家與地點的視覺素材。
- `map` 不放秋葉原店家素材，地點圖塊不應阻擋角色行走。
- `events` 不放秋葉原店家地點事件，避免角色碰到事件層物件而停下，造成觸發時讀到錯誤位置。

目前秋葉原地點視覺物件都應放在前景層；實際店名與座標範圍由 `project/location-mappings.json` 管理。

## 觸發流程

1. 玩家點擊或移動角色。
2. 移動完成後呼叫 `core.plugin.triggerLocationInteractionAtHero()`。
3. Plugin 讀取角色目前的 `floorId`、`x`、`y`。
4. `project/location-mappings.json` 中有對應地點時，插入公共事件 `Akiba地點互動`。
5. 公共事件先執行 `waitAsync`，等待畫面移動與其他非同步事件完成。
6. 公共事件把座標、樓層、素材編號與地點資訊寫入 flag。
7. 目前統一顯示對話：`是XXX啊，該做什麼呢?`
8. 若玩家沒有選擇進入支線事件，公共事件結束後會把角色移回觸發前座標，避免角色停在地點格上時再次點擊同地點無法觸發。

如果座標不在地點清單裡，什麼都不會發生。

## 公共事件保存的資訊

`Akiba地點互動` 會保存以下 flag，之後擴充對話或分支時可直接使用：

- `flag:akiba_last_x`
- `flag:akiba_last_y`
- `flag:akiba_last_floorId`
- `flag:akiba_last_blockId`
- `flag:akiba_last_tileNumber`
- `flag:akiba_last_locationId`
- `flag:akiba_last_placeName`
- `flag:akiba_last_locationInfo`

`akiba_last_placeName` 來自 `project/location-mappings.json` 的 `name`，不要把店名寫在公共事件參數中。

## 如何調整地點

1. 在 `project/floors/Akiba.js` 的 `fgmap` 調整店家或地點素材。
2. 確認同一格的 `map` 保持可通行，不要把店家素材放回 `map` 或 `events`。
3. 在 `project/location-mappings.json` 的 `floors.Akiba.locations` 新增或修改地點。
4. 每個地點至少需要 `id`、`name`，並用 `rects` 或 `cells` 描述可觸發範圍。
5. `rects` 格式為 `[x, y, width, height]`，座標單位是地圖格。
6. `cells` 格式為 `[x, y]`，適合零散或不規則範圍。
7. 不同地點的範圍不要重疊；重疊時只會有一個地點被索引到，後續維護會變得不穩定。

範例：

```json
{
  "id": "example_shop",
  "name": "範例店",
  "rects": [
    [10, 8, 2, 2]
  ]
}
```

如果未來公共事件名稱改變，請同步修改：

```json
{
  "floors": {
    "Akiba": {
      "commonEvent": "Akiba地點互動"
    }
  }
}
```

## 驗證方式

修改事件或樓層後，先檢查語法：

```powershell
node --check project/events.js
node --check project/plugins.js
node --check project/floors/Akiba.js
```

再檢查秋葉原地點狀態：

```powershell
@'
const fs = require('fs');
global.main = { floors: {} };
require('./project/floors/Akiba.js');
const floor = main.floors.Akiba;
const mapping = JSON.parse(fs.readFileSync('project/location-mappings.json', 'utf8'));

function countNonZero(layer) {
  let count = 0;
  for (const row of layer || []) {
    for (const value of row || []) {
      if (value) count++;
    }
  }
  return count;
}

const seen = new Map();
const overlaps = [];
for (const location of mapping.floors.Akiba.locations) {
  const cells = [];
  for (const rect of location.rects || []) {
    for (let dy = 0; dy < rect[3]; dy++) {
      for (let dx = 0; dx < rect[2]; dx++) {
        cells.push([rect[0] + dx, rect[1] + dy]);
      }
    }
  }
  for (const cell of location.cells || []) {
    cells.push(cell);
  }
  for (const cell of cells) {
    const key = cell.join(',');
    if (seen.has(key)) overlaps.push({ cell: key, a: seen.get(key), b: location.id });
    seen.set(key, location.id);
  }
}

console.log({
  events: Object.keys(floor.events || {}).length,
  mapNonZero: countNonZero(floor.map),
  fgNonZero: countNonZero(floor.fgmap),
  locations: mapping.floors.Akiba.locations.length,
  mappedCells: seen.size,
  overlaps
});
'@ | node -
```

目前預期狀態：

- `events` 為 `0`
- `mapNonZero` 為 `0`
- `fgNonZero` 為 `105`
- `locations` 為 `27`
- `mappedCells` 為 `105`
- `overlaps` 為空陣列
