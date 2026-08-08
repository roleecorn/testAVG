# Task Questions

- Created: `2026-08-09 00:14:10 +08:00`
- Task: `project-principle-audit`
- Overall status: `resolved`
- Long-term TODO: `.codex/TODO.md`

## Capability inventory

- Reuse: `.codex/skills/mota-avg-editor` 作為專案規範根節點。
- Reuse: `dialogue.md`、`images.md` 與 `mota-action-cg` 已定義目前 544×416 的新 AVG 版面。
- Reuse: `project-overview.md` 已明確區分 `project/mainStory/CH1`～`CH6` 主線來源與 `project/story/*.txt` 角色支線來源。
- Reuse: `todo.md` 已定義 placeholder 與疑慮保存流程。
- Missing: 新版 AVG 版面是否追溯套用到既有角色支線的遷移原則。
- Missing: 主線 CG 母檔與 `*_action_cg.png` 執行檔之間的唯一真實來源及同步流程。
- Missing: 多個地點共用 generic 背景時，正式背景到件後的命名與替換策略。

## Questions

### Q1. 新 AVG 版面是否追溯遷移既有角色支線

- Classification: `non-blocking`
- Status: `resolved`
- Source: `dialogue.md`、`images.md`、`mota-action-cg/SKILL.md` 與現有 floors 的結構化盤點。
- Affected scope: 34 個仍使用 `down, offset 8, titlefont 22, textfont 20, lineHeight 30` 的角色支線 floor；兩個仍使用 `[48,50,320,240]` 的 Watanuki action CG；未來任何「更新既有支線」任務。
- Temporary handling: 新增或由主線 generator 重建的內容採目前 544×416 規格；未取得遷移決策前，不批量改寫既有角色支線。
- Decision needed: 新規格只約束新建／本次觸及的 floor，還是要一次遷移所有既有 AVG floor？若採逐步遷移，什麼操作算「觸及」並必須連同版面升級？
- Resolution: 主線與角色支線只有觸發方式及原始文本位置不同，背景、人物、對話框與 CG 使用同一套全局 AVG 版面。現有 34 個舊角色支線 floor 與兩個 Watanuki 舊 action CG 暫不遷移，等待版面完成實際修正與最後定稿；這些差異屬待遷移實作債，不是允許並存的第二套規格。
- Resolved at: `2026-08-09 00:37:08 +08:00`

### Q2. 主線 CG 母檔與 action CG 執行檔的權威關係

- Classification: `non-blocking`
- Status: `resolved`
- Source: `scripts/generate_main_story.js`、`project/mainStory/TODO.md`、`project/images/*_cg.png` 與 `project/images/*_action_cg.png`。
- Affected scope: 六個主線動作 CG、正式 CG 替換、素材註冊、generator 驗證與 TODO 關閉條件。
- Temporary handling: runtime 繼續引用已登錄的 `*_action_cg.png`；正式素材到件前，不假設只替換 TODO 所列的 `*_cg.png` 就會同步到遊戲。
- Decision needed: `*_cg.png` 是否為母檔並由固定工具產生 `*_action_cg.png`，或 `*_action_cg.png` 本身就是唯一正式資產？若保留兩者，需要定義可重複的裁切／輸出腳本與驗證。
- Resolution: `*_cg.png` 是權威母檔；`scripts/build_action_cgs.py` 固定中央裁成 16:11、輸出 416×286 `*_action_cg.png`，並寫入 `project/action-cg-manifest.json` 的母檔／輸出雜湊。衍生檔不得手改，`python scripts/build_action_cgs.py --check` 與 `node scripts/generate_main_story.js --check` 都驗證同步。
- Resolved at: `2026-08-09 00:37:08 +08:00`

### Q3. 共用 generic 背景的正式替換策略

- Classification: `non-blocking`
- Status: `resolved`
- Source: `scripts/generate_main_story.js` 的 `bgByName` 與 `project/mainStory/TODO.md`。
- Affected scope: 咖啡廳、便利商店、河邊、書店A、家庭餐廳、遊戲中心、美術館、醫院、婚禮等目前共用 `scene_street.png`、`scene_mapo_shop.png` 或 `scene_tournament.png` 的地點。
- Temporary handling: 沿用既有 generic fallback，不覆寫共用圖片。
- Decision needed: 正式背景到件時應建立每地點唯一檔名並擴充 mapping，還是允許覆寫共用 generic 圖？若一個來源標記涵蓋多個視覺版本，版本選擇應由章節、scene ID 或更細的指令決定？
- Resolution: 每個地點建立唯一背景檔名，`bgByName` 以完整地點名稱精確 mapping。generic 圖只作各地點 placeholder 的複製來源；正式背景只替換該地點專檔，不得覆寫共用圖。日夜／內外等視覺版本以不同來源名稱與不同檔名表示。
- Resolved at: `2026-08-09 00:37:08 +08:00`

## Promotion

- Q1、Q2、Q3 的原則均已解決並寫入 canonical references。只有「等待全局 AVG 版面定稿後遷移舊角色支線」仍作為實作待辦保留在 `.codex/TODO.md`，不再視為原則疑慮。
