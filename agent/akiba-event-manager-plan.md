# Akiba 地點-事件管理機制規劃

本文件規劃從 `Akiba` 作為起點的「地點-事件管理機制」。目標是讓秋葉原大地圖不只知道角色站在哪個地點，也能知道該地點目前有哪些可觸發事件，並在玩家選擇事件後切換到對應的劇情 scene/floor。

## 需求摘要

1. 從一個 meta 檔案讀取初始狀態下可以被觸發的事件。
2. 每個事件定義它可以被觸發的地點，且地點可以多選。
3. 秋葉原公共事件知道當前地點有哪些可觸發事件，並以選項列表顯示。
4. 一個事件結束後，該事件會從可觸發列表移除，並新增該事件的後續事件。
5. 每一個事件都是一個 scene/floor。
6. 劇情文字遵守 `agent/dialogue.md`：普通台詞使用 `"\t[角色]正文"`，AVG 對話框固定走下方文字框，不在每句台詞加 `\b[...]`。

## 現有基礎

目前 Akiba 已具備地點觸發的基礎：

- `project/floors/Akiba.js`：秋葉原大地圖，地點視覺物件放在 `fgmap`。
- `project/location-mappings.json`：座標到地點的 mapping。
- `project/plugins.js`：提供 `getMappedLocationInfo`、`getLocationInfo`、`triggerLocationInteractionAtHero`。
- `project/events.js`：公共事件 `Akiba地點互動`，目前只保存當前地點資訊並顯示一句提示。

新增機制應延伸上述流程，不改變 Akiba 的圖層原則：地點不放進 `map` 或 `events`，仍由移動結束後檢查座標來觸發公共事件。

## 新增檔案

建議新增：

- `project/akiba-event-meta.json`：事件 meta，維護初始事件、事件可觸發地點清單、後續事件、選項顯示文字與目標 scene/floor。
- `agent/akiba-event-manager-plan.md`：本規劃文件。

後續實作可能修改：

- `project/plugins.js`：新增事件 meta 載入、事件池初始化、查詢地點事件、完成事件與插入後續事件等工具。
- `project/events.js`：擴充公共事件 `Akiba地點互動`，把可觸發事件轉成 `choices`。
- `project/data.js`：加入每個事件 scene/floor 的 `floorId`。
- `project/floors/*.js`：每個事件一個樓層。

## Meta 檔案格式

建議格式如下：

```json
{
  "version": 1,
  "activeEvents": [
    {
      "id": "mystery_girl_1",
      "title": "好感度1：書店邂逅",
      "locations": ["blue_bookstore", "used_bookstore"],
      "floorId": "mystery_girl_1",
      "once": true
    }
  ]
}
```

欄位說明：

- `version`：meta 格式版本，方便未來升級。
- `activeEvents`：新存檔或第一次初始化時可觸發的事件資料陣列。meta 只放初始當下可觸發事件，不放尚未出現的後續事件。
- `id`：穩定事件 ID，用於完成、去重與存檔狀態。
- `title`：在 Akiba 公共事件選項中顯示的文字。
- `locations`：可觸發此事件的地點 ID 陣列，需對應 `project/location-mappings.json` 的 location `id`。這是多選欄位，同一個事件可以配置在多個地點；玩家站在任一符合地點時都應看到此事件。
- `floorId`：事件對應的 scene/floor。每個事件都是一個樓層。
- `once`：預設 `true`。完成後移出可觸發列表，並標記已完成。

後續事件不寫在 meta 中，而是由被觸發的 scene/floor 在結尾用 `core.plugin.addAkibaEvent(eventData)` 插入。

## 多地點觸發規則

`locations` 一律視為陣列，不提供單一字串格式。即使事件只會在一個地點觸發，也寫成：

```json
"locations": ["restaurant"]
```

多地點事件則寫成：

```json
"locations": ["blue_bookstore", "used_bookstore"]
```

查詢時採用「目前地點是否包含在事件的 `locations` 中」作為判斷。只要 `flag:akiba_last_locationId` 命中陣列中的任一地點，該事件就會出現在選項列表中。事件完成後，無論它是在哪個地點觸發，都會從整體 active list 移除，不會只移除其中一個地點。

## 狀態設計

事件狀態存放在存檔 flag 中，避免跨存檔互相影響。

建議使用以下 flags：

- `flag:akiba_event_state_initialized`：是否已初始化事件池。
- `flag:akiba_event_state_version`：事件池狀態版本；資料格式調整時用來重建 active list，避免舊存檔沿用錯誤結構。
- `flag:akiba_active_events`：目前可觸發事件資料陣列，每筆包含 `id`、`title`、`locations`、`floorId`、`once`。
- `flag:akiba_completed_events`：已完成事件 ID 陣列。
- `flag:akiba_selected_event_id`：玩家剛選擇的事件 ID。
- `flag:akiba_return_floorId`：事件結束後要回到的地圖，預設 `Akiba`。
- `flag:akiba_return_x`、`flag:akiba_return_y`、`flag:akiba_return_direction`：事件結束後回到 Akiba 的位置與朝向。

`flag:akiba_active_events` 與 `flag:akiba_completed_events` 建議由 plugin 以陣列讀寫，不在事件 JSON 中手動拼接字串。

## Plugin API 規劃

在 `project/plugins.js` 新增一組 Akiba 事件管理工具：

```js
core.plugin.getAkibaEventMeta()
core.plugin.initAkibaEventState()
core.plugin.getActiveAkibaEventsAtLocation(locationId)
core.plugin.selectAkibaEvent(eventId)
core.plugin.completeAkibaEvent(eventId)
core.plugin.addAkibaEvent(eventData)
core.plugin.returnToAkiba()
```

行為規劃：

- `getAkibaEventMeta()`：同步讀取 `project/akiba-event-meta.json`，並快取結果。
- `initAkibaEventState()`：若尚未初始化，將 meta 的 `activeEvents` 寫入 `flag:akiba_active_events`，`flag:akiba_completed_events` 設為空陣列。
- `getActiveAkibaEventsAtLocation(locationId)`：從 active list 中篩選 `locations` 包含目前 location 的事件，回傳包含 `id`、`title`、`floorId` 的陣列。
- `selectAkibaEvent(eventId)`：保存 selected event 與返回 Akiba 所需座標，再切換到該事件的 `floorId`。
- `completeAkibaEvent(eventId)`：把事件從 active list 移除，加入 completed list。此函式不會自動新增後續事件。
- `addAkibaEvent(eventData)`：將一筆新的事件資料加入 active list；若同 ID 已 active，或已 completed 且 `once` 不是 `false`，則不重複加入。
- `returnToAkiba()`：使用保存的返回資訊切回 Akiba。

## Akiba 公共事件流程

`Akiba地點互動` 擴充後的流程：

1. 保留現有 `waitAsync`。
2. 保留現有座標、樓層、素材編號與地點資訊 flag。
3. 呼叫 `core.plugin.initAkibaEventState()`。
4. 呼叫 `core.plugin.getActiveAkibaEventsAtLocation(flag:akiba_last_locationId)`。
5. 如果目前地點沒有可觸發事件：
   - 顯示 `"是${flag:akiba_last_placeName}啊，該做什麼呢?"`
   - 可先只提供「離開」或直接結束。
6. 如果目前地點有可觸發事件：
   - 顯示選項列表。
   - 每個事件選項呼叫 `core.plugin.selectAkibaEvent(eventId)`。
   - 最後附上一個「離開」選項。

選項顯示建議：

```js
{
  "type": "choices",
  "text": "是${flag:akiba_last_placeName}啊，該做什麼呢?",
  "choices": [
    {
      "text": "好感度1：書店邂逅",
      "action": [
        {
          "type": "function",
          "function": "function () { core.plugin.selectAkibaEvent('mystery_girl_1'); }"
        }
      ]
    },
    {
      "text": "離開",
      "action": [
        { "type": "exit" }
      ]
    }
  ]
}
```

實作時可由 plugin 產生 choices，避免公共事件中手寫每個事件選項。

## Scene/Floor 規劃

每個事件都是一個 scene/floor，檔案放在 `project/floors/`。

命名建議：

- 好感度劇情的事件 ID、樓層 ID、檔名一律使用 `角色英文名_好感度數字`。
- 例如目前角色尚未正式命名，先用 `mystery_girl_1`、`mystery_girl_2`。
- 事件 ID：`mystery_girl_1`
- 樓層 ID：`mystery_girl_1`
- 檔案：`project/floors/mystery_girl_1.js`

事件樓層規則：

- `floorId`、檔名、`main.floors.<floorId>` 三者一致。
- `firstArrive` 保持空陣列。
- 劇情全部寫在 `eachArrive`。
- 開頭先設定 `setText`，使用下方 AVG 文字框。
- 普通台詞使用 `"\t[角色]正文"`。
- 旁白是敘述標記，不是發言者；轉成 scene/event JSON 時直接寫正文，不要輸出成 `"\t[旁白]正文"`。
- 範例劇本中的無角色敘述，例如「梗平伸出了手...」，轉成旁白。
- 劇情結束前呼叫 `core.plugin.completeAkibaEvent(eventId)`。
- 完成後切回 Akiba，可用 `core.plugin.returnToAkiba()` 或事件指令 `changeFloor` 搭配保存座標。

範例事件「好感度1：書店」可轉為：

```js
[
  {
    "type": "setText",
    "position": "down",
    "offset": 8,
    "align": "left",
    "bold": true,
    "background": "winskin.png",
    "title": [255, 225, 80, 1],
    "text": [255, 255, 255, 1],
    "titlefont": 22,
    "textfont": 20,
    "lineHeight": 30,
    "time": 10,
    "letterSpacing": 0,
    "animateTime": 120
  },
  "\t[梗平]每個月發行的親熱天堂，就算來了秋葉原還是得買的♪",
  "\t[梗平]找到了!就剩下最後一本了!",
  "梗平伸出了手，但卻在半空中與另外一隻手碰觸了。",
  "\t[???]咦?",
  "\t[梗平]在書店與美少女邂逅...真是美妙的展開，咦不過是黃書...",
  "梗平回過神來才發現，那個少女已經紅著臉逃跑了。",
  "\t[梗平]...不必逃得這麼快吧(垂頭喪氣)",
  {
    "type": "function",
    "function": "function () { core.plugin.completeAkibaEvent('mystery_girl_1'); }"
  },
  {
    "type": "function",
    "function": "function () { core.plugin.addAkibaEvent({ id: 'mystery_girl_2', title: '好感度2：家庭餐廳再會', locations: ['restaurant'], floorId: 'mystery_girl_2', once: true }); }"
  },
  {
    "type": "function",
    "function": "function () { core.plugin.returnToAkiba(); }"
  }
]
```

## 後續事件解鎖範例

初始狀態：

```json
"activeEvents": [
  {
    "id": "mystery_girl_1",
    "title": "好感度1：書店邂逅",
    "locations": ["blue_bookstore", "used_bookstore"],
    "floorId": "mystery_girl_1",
    "once": true
  }
]
```

玩家在 `blue_bookstore` 或 `used_bookstore` 觸發並完成 `mystery_girl_1` 後：

1. `mystery_girl_1` 從 `flag:akiba_active_events` 移除。
2. `mystery_girl_1` 加入 `flag:akiba_completed_events`。
3. `mystery_girl_1` 的結尾呼叫 `core.plugin.addAkibaEvent(...)`，把 `mystery_girl_2` 加入 `flag:akiba_active_events`。
4. 玩家回到 Akiba。
5. 之後玩家到 `restaurant` 時，公共事件選項中出現「好感度2：家庭餐廳再會」。

## 實作階段

### 第一階段：資料與 API

1. 新增 `project/akiba-event-meta.json`。
2. 在 `project/plugins.js` 實作 meta 載入與事件狀態 API。
3. 加入基本防呆：
   - active event 不重複。
   - completed event 不重複。
   - 已 completed 的一次性事件不再被 `addAkibaEvent` 加回 active。
   - event data 缺少 `id`、`floorId` 或有效 `locations` 時輸出 console warning，不中斷遊戲。

### 第二階段：公共事件選項

1. 擴充 `Akiba地點互動`。
2. 依 `akiba_last_locationId` 查詢 `locations` 包含該地點的可觸發事件。
3. 有事件時顯示選項列表。
4. 沒事件時維持目前簡單提示。

### 第三階段：事件樓層

1. 新增範例事件樓層 `mystery_girl_1`。
2. 新增後續事件樓層 `mystery_girl_2`。
3. 將樓層 ID 加入 `project/data.js -> main.floorIds`。
4. 確認每個事件樓層結尾都會完成事件、依劇情需要插入後續事件，並返回 Akiba。

### 第四階段：驗證

1. 語法檢查：

```powershell
node --check project/plugins.js
node --check project/events.js
node --check project/floors/Akiba.js
node --check project/floors/mystery_girl_1.js
node --check project/floors/mystery_girl_2.js
```

2. Meta 檢查：
   - `activeEvents` 是陣列。
   - 每個 event 都有 `id`。
   - 每個 event 的 `floorId` 都存在於 `main.floorIds`。
   - 每個 event 的 `locations` 都是陣列，且至少包含一個地點。
   - 每個 `locations` 內的 location 都存在於 `project/location-mappings.json`。

3. 遊戲內流程檢查：
   - 新存檔進入 Akiba，書店地點能看到「好感度1：書店邂逅」。
   - 完成好感度1後，書店不再顯示該事件。
   - 完成好感度1後，餐廳地點顯示「好感度2：家庭餐廳再會」。
   - 完成好感度2後，餐廳不再顯示該事件。

## 需要留意的決策

- 「好感度1 場地: 書店」目前 Akiba 有 `blue_bookstore` 與 `used_bookstore` 兩個書店地點。若要精準指定其中一間，需要在 meta 的 `locations` 中只保留對應地點。
- 事件結束後是否回到觸發座標，建議先回到原座標與原朝向，避免玩家突然被送到 Akiba 固定入口。
- 若未來同一地點同時有很多事件，選項排序可以先依 `flag:akiba_active_events` 的順序；需要角色支線優先級時，再在事件資料增加 `priority`。
- 若未來事件需要條件，例如好感度、時間、道具，可在事件資料增加 `condition`，但第一版先只處理 active/completed/add，保持可控。
