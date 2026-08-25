# Task Questions

- Created: `2026-08-26 00:29:47 +08:00`
- Task: `處理新的 juju 2×3 表情圖`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. 原圖寬度多 1 像素

- Classification: `non-blocking`
- Status: `resolved`
- Source: `1787671784351.jpg`；尺寸檢查結果 `843×1264`
- Affected scope: `split_emotion_image.py` 的 2×3 分割前置處理
- Temporary handling: `保留原始 JPG 不動，在暫存副本裁掉最右側與最底部各 1 像素，使副本成為 842×1263 後再依既有流程分割與去背`
- Decision needed: `是否接受為符合 2×3 格線而裁掉右側與底部各 1 像素`
- Decision / current direction: `依使用者已確認其為 2×3 表情表，採用最小且可逆的暫存裁切；不修改原始 JPG`
- Remaining work: `none`
- Completion evidence: `project/images/juju_{smile,angry,sad,surprised,panic,normal}.png` 已完成；六張均為 RGBA 且左上角 alpha=0；`node scripts/validate_story.js` 通過
- Resolved at: `2026-08-26 00:32:29 +08:00`

## Promotion

None
