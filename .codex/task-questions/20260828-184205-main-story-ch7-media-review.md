# Task Questions

- Created: `2026-08-28 18:42:05 +08:00`
- Task: `主線 CH6-4／CH7 媒體顯示修正`
- Overall status: `resolved`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. 三角立繪是否需要手偶

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者回報「新版的三角立繪沒有手偶」；`project/mainStory/CH1:364-371`
- Affected scope: `project/images/ms_portrait_sankaku_*.png`、`project/story-ir/main/CH1.json`、`project/floors/mapo_1_4.js`
- Temporary handling: 在收到新的可追溯參考前保留既有立繪；本次不受影響的 CH6／CH7 媒體問題照常修正。
- Decision needed: 已由使用者提供根目錄 `三角.png` 確認手偶外觀與需求。
- Decision / current direction: 依來源描述與參考圖，六表情均補上同款兔子手偶；保留既有 runtime 檔名與既有 Story IR／floor 接入。
- Remaining work: 無；保留既有 question 作永久追溯。
- Completion evidence: 根目錄 `三角.png` 與 `主線用角色參考/三角.png` SHA-256 均為 `463DF3B513196689FFBDB06972A5566D62ABEA9777A2F3F106DBEEE72C1A8C0F`；六張 `project/images/ms_portrait_sankaku_*.png` 已更新並目視確認手偶存在；`node scripts/validate_story.js` 通過。
- Resolved at: 2026-08-29

## Promotion

- Q1 promoted to `project/mainStory/TODO.md`。
