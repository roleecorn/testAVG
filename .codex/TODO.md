# Agent and Skill TODO

保存跨功能的 Agent／Skill 長期未解事項。單次任務疑慮先寫入 `.codex/task-questions/`；只有尚未解決且需要跨任務追蹤的項目才匯總到這裡。

## Open

- `20260809-004949-avg-layout-spec.md` Q1：已在 `huangmo_1`「書店邂逅」接入單一全局 AVG layout config，以 `portraitBottomGap` 控制所有人物 bottom；建立左人物槽－中央窄對話框－右人物槽的下方水平空間配置，人物 z-order 低於對話框。人物槽只定義站位，每句仍清空所有人物並只顯示當前發言者；三人以上重用兩槽。目前試作值為 gap `8`、左右 inset `16`、對話框 `x=96, y=295, width=352, fixedLines=2`。右側遮擋根因已確認：對話框右緣 `448` 到人物槽右緣 `528` 只有 80px，但新角色圖可寬達 195px；且右槽目前錨定整張 PNG 畫布，不透明內容會受透明 padding 影響而向左偏。定稿時必須同時決定人物最大可見寬度／等比例縮放、以不透明邊界或標準化資產作為視覺錨點，以及對話框右緣，不能為荒漠加入角色專屬 offset。完成使用者視覺確認後，再更新 generator 驗證並統一遷移現有主線、34 個舊角色支線 floor 及兩個 Watanuki 舊 action CG。

## Resolved

- `20260808-120000-update-story.md` Q1／Q2：主線與角色支線分別以 `project/mainStory/CH1`～`CH6`、`project/story/*.txt` 為唯一真實來源；當次更新範圍已依基準 commit 規則完成，不存在待提供劇本的持續阻塞。
- `20260809-001410-project-principle-audit.md` Q1：主線與角色支線採同一套全局 AVG 版面，舊支線遷移延後至版面定稿。
- `20260809-001410-project-principle-audit.md` Q2：`*_cg.png` 為母檔，`scripts/build_action_cgs.py` 產生 `*_action_cg.png` 與同步 manifest，generator `--check` 驗證兩者。
- `20260809-001410-project-principle-audit.md` Q3：每個地點使用獨立背景檔名與精確 mapping，generic 背景只作 placeholder 來源。
