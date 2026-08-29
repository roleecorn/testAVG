# AVG 進場背景稽核

- 日期：2026-08-29（Asia/Taipei）
- 問題：角色支線進場時，預設石磚先於劇情背景短暫出現。
- 原因：引擎先載入並繪製 floor map，再執行 `eachArrive`。只在 `eachArrive` 使用 `showImage` 顯示背景，無法覆蓋兩者之間的第一幀。

## 全角色支線盤點

- 盤點範圍：`project/story-ir/character/*.json` 全部 76 個 scene。
- 原始同型問題：4 個，全部位於 `kelukai_1`～`kelukai_4`；其 `floor.images` 為空，背景只存在於 scene events 的 `background.show`。
- 其他角色支線：72 個 scene 均已有 `canvas: "bg"`、`x: 0`、`y: 0` 的 floor-level 初始背景，未發現同型缺陷。
- 修正後：76／76 個角色 scene 均具有進場預載背景。

## 修正與驗收

- `kelukai_1` 預載 `ms_bg_street.png`。
- `kelukai_2`～`kelukai_4` 預載 `ms_bg_police_station.png`。
- `validateBundle()` 與 `validateGeneratedAvgLayout()` 現在都會拒絕缺少 `(canvas:bg, x:0, y:0)` 初始背景的 AVG scene。
- `scripts/validate_avg_layout.js` 是 `scripts/validate_story.js` 的固定步驟，因此此檢驗已成為全專案 Story 驗收的一部分。
- 架構 validator 讀取舊 HEAD 作交易差異基準時可使用明確的 legacy 選項；目前工作樹、生成輸出與日後交付仍一律套用嚴格檢查，不能以此選項繞過驗收。

## 驗證結果

- `node scripts/test_story_ir_lifecycle.js`：通過，缺少進場背景的 IR 與生成 floor 都會被拒絕。
- `node scripts/validate_story.js`：通過，105 個生成 AVG floor 的預載進場背景均合格。
- `node scripts/validate_agent_skill_routes.js`：0 errors。
- `git diff --check`：通過。
