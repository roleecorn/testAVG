# Task Questions

- Created: `2026-08-09 22:25:59 +08:00`
- Task: `location-backgrounds`
- Overall status: `resolved`
- Long-term TODO: `project/mainStory/*TODO.md`

## Questions

### Q1. Background art direction for all placeholder locations

- Classification: `non-blocking`
- Status: `resolved`
- Source: `使用者請求「協助繪製地點background圖片，並替換原本的佔用圖」`
- Affected scope: `project/images/ms_bg_*.png`
- Temporary handling: `本次工作已限縮為修正文檔，未產生或替換背景素材。`
- Decision needed: `none`
- Resolution: `使用者改為要求修正文檔；畫風與個別地點設定不再是本次任務的問題。`
- Resolved at: `2026-08-09 22:25:59 +08:00`

### Q2. 正式地點背景的畫面比例

- Classification: `resolved`
- Status: `resolved`
- Source: `使用者釐清：背景應涵蓋整個畫面。`
- Affected scope: `後續所有正式地點背景的生成、裁切與接入規格`
- Temporary handling: `停止以錯誤的 416×416 佔位檔推斷生成尺寸；正式背景應以遊戲 AVG 畫布 544×416（17:13）為構圖比例。`
- Decision needed: `none`
- Resolution: `背景是完整畫面，而非左側舊舞台區；應使用 17:13。任何 416×416 地點背景或 placeholder 都是錯誤，必須納入檢查與替換範圍。`
- Resolved at: `2026-08-09 22:25:59 +08:00`

## Promotion

- None
