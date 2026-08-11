# Akiba 事件管理

本文件描述已實作的 Akiba 地點事件狀態與 API。地圖格、地點 ID 與互動入口由 [Akiba 地圖規則](akiba.md) 定義；本文件不保存歷史規劃或尚未實作的構想。

## 權威檔案

- `project/akiba-event-meta.json`：事件 meta 版本與初始啟用事件。
- `project/plugins.js` 的 `akibaEventManager`：狀態初始化、事件生命週期、角色交換與返回流程。
- `project/events.js` 的 Akiba 公共事件：保存地點資料並呼叫地點事件選單。
- `scripts/test_akiba_event_manager.js`：狀態遷移與交換流程的隔離測試。

## Meta 契約

根物件包含整數 `version` 與 `activeEvents` 陣列。每個事件至少需要：

- `id`：穩定且唯一的事件 ID。
- `floorId`：事件場景樓層；樓層不存在時不應進入有效狀態。
- `locations`：至少一個、不重複的地點 ID；必須對應 [Akiba 地圖規則](akiba.md)。

選用欄位：

- `title`：選單顯示名稱；未提供時使用 `id`。
- `once`：是否完成後永久排除；預設為 `true`。

載入失敗時管理器退回空事件集合；無效事件由正規化流程排除，不得直接寫入有效狀態。

## 儲存狀態

主要 flags：

- `akiba_event_state_initialized`、`akiba_event_state_version`
- `akiba_active_events`、`akiba_completed_events`
- `akiba_selected_event_id`
- `akiba_return_floorId`、`akiba_return_x`、`akiba_return_y`、`akiba_return_direction`
- `akiba_restore_floorId`、`akiba_restore_x`、`akiba_restore_y`、`akiba_restore_direction`
- `mainline_exchange_active`、`mainline_exchange_count`
- `mainline_exchange_target`、`mainline_exchange_destination`

事件 ID 陣列必須去重；完成同一事件多次不得重複推進角色交換計數。

## 初始化與版本遷移

`initAkibaEventState()` 在新存檔載入 meta 的初始事件並建立空的完成清單。

當 meta `version` 改變時：

1. 保留已完成事件。
2. 保留仍有效且場景存在的啟用事件。
3. 移除已完成的一次性事件與已失效事件。
4. 合併新版新增、且尚未完成或啟用的初始事件。
5. 寫回新版本號。

相同版本重複初始化不得改寫現有狀態。

## 公開 API

- `getAkibaEventMeta()`：同步載入並快取事件 meta。
- `initAkibaEventState()`：初始化或遷移事件狀態。
- `getActiveAkibaEventsAtLocation(locationId)`：取得目前地點的啟用事件。
- `selectAkibaEvent(eventId)`：保存返回位置、選取事件並切換至事件樓層。
- `completeAkibaEvent(eventId)`：完成有效事件；移出啟用清單、加入完成清單，必要時推進角色交換。
- `addAkibaEvent(eventData)`：正規化後加入事件；拒絕重複啟用，且不重加已完成的一次性事件。
- `beginCharacterExchange(destination, targetCount)`：開始角色交換，保存回復位置並前往 Akiba；目標事件數預設為 2。
- `advanceCharacterExchangeWithIdleClock()`：處理閒置時鐘入口的一次交換推進。
- `isCharacterExchangeComplete()`：判斷目前交換計數是否達標。
- `returnToMainlineAfterCharacterExchange()`：清理交換狀態並返回主線。
- `returnToAkiba()`：未達目標時回到保存的 Akiba 地點；達標時返回主線。
- `showAkibaLocationEventChoices()`：依目前地點建立事件選單；沒有事件或離開時恢復互動前位置。
- `getAkibaMiniGameDefinitions(locationId)`：取得地點的全部小遊戲；電子遊樂場與劇場目前各有兩款。
- `getAkibaMiniGameDefinition(locationId)`：取得地點對應的小遊戲標題、game ID 與選項；`idle_clock` 回傳空值。
- `startAkibaLocationMiniGame(locationId, gameId)`：暫停事件流、啟動指定地點小遊戲、保存結果與最高分，再恢復互動前位置；`gameId` 省略時相容舊入口並選第一款。

## 事件與角色交換流程

一般事件以 `selectAkibaEvent()` 進入場景，以 `completeAkibaEvent()` 完成，再呼叫 `returnToAkiba()` 決定返回 Akiba 或主線。

角色交換期間只有「當時確實處於啟用狀態」的事件首次完成時才增加計數。目標未達成時恢復 Akiba 互動位置；達成後清除交換中的目標／目的地狀態並返回主線。交換以外的地點互動不增加交換計數。

特殊的閒置時鐘入口依相同回復位置契約運作：未達目標時回到原地，達標時繼續主線。

一般地點選單依序包含目前可用的角色事件、該地點的每一款小遊戲與「離開」。即使沒有角色事件，只要該地點有小遊戲，也必須顯示選單，不能直接顯示地點文字後返回。電子遊樂場依序列出「777 拉霸」與「電波飛鳥」；劇場依序列出「舞台打拍」與「正午對決」。小遊戲完成、失敗或取消都不算角色事件完成，不增加人物交流回合，並使用獨立的 `akiba_minigame_*` flags；同一地點的第二款遊戲以 `locationId:gameId` 保存獨立通關與最高分。

## 場景契約

- 事件場景必須使用 meta 中完全相同的 `id` 呼叫完成 API。
- 事件場景不得自行直接改寫 `akiba_active_events` 或 `akiba_completed_events`。
- Akiba 地點只負責取得 `locationId` 並呼叫管理器，不得複製事件狀態機。
- 新增或更新角色事件時，同一個角色內容 commit 必須包含劇情文本、對應 Story IR、所有對應 scene／floor、圖片、入口與其 meta 行。Story IR 不得單獨提交；若 IR 有變更而沒有對應 scene／floor diff，該角色內容尚未完成。

## 驗證

1. `project/akiba-event-meta.json` 可被 JSON parser 讀取，所有 `id` 唯一，所有 `locations` 與 `floorId` 存在。
2. 執行 `node scripts/test_akiba_event_manager.js`。
3. 執行 `node scripts/test_akiba_location_minigame.js`。
4. 執行 `node scripts/test_western_duel.js`。
5. 新存檔、舊版本存檔、事件重複完成、交換目標預設值、未達標返回、達標續行、交換外互動、一般地點小遊戲覆蓋與結果狀態隔離都必須通過。
6. 實際遊戲中從 Akiba 地點進入事件與小遊戲，完成後確認選單、位置與主線返回狀態正確。
