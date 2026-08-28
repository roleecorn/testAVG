# Task Questions

- Created: `2026-08-28 18:42:05 +08:00`
- Task: `主線 CH6-4／CH7 媒體顯示修正`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. 三角立繪是否需要手偶

- Classification: `non-blocking`
- Status: `open`
- Source: 使用者回報「新版的三角立繪沒有手偶」；`project/mainStory/CH1:364-371`
- Affected scope: `project/images/ms_portrait_sankaku_*.png`、`project/story-ir/main/CH1.json`、`project/floors/mapo_1_4.js`
- Temporary handling: 暫不改動既有三角立繪與 CH1 演出；本次不受影響的 CH6／CH7 媒體問題照常修正。
- Decision needed: 請確認新版三角六表情立繪是否必須依來源描述補上手偶；若需要，需提供或確認可追溯的角色參考／修改素材。
- Decision / current direction: 目前保留現有立繪，因來源描述與現有圖像內容不一致，未猜測補畫手偶。
- Remaining work: 取得確認後，若需要則更新三角表情素材及其使用鏈，並完成遊戲內驗證。
- Completion evidence: `project/images/ms_portrait_sankaku_normal.png` 等現有六張圖已目視確認未見手偶；待確認，暫無完成證據。
- Resolved at: pending

## Promotion

- Q1 promoted to `project/mainStory/TODO.md`。
