# Task Questions

- Created: `2026-08-28 23:24:33 +08:00`
- Task: `柏崎星奈素材名稱更新`
- Overall status: `open`
- Long-term TODO: `project/story/TODO.md`

## Questions

### Q1. 新版六表情基準圖尺寸不符合安全分割契約

- Classification: `blocking`
- Status: `open`
- Source: `tmp/character-story-import/15.柏崎星奈-20260828T151529Z-1-001/20260828-231717/raw/15.柏崎星奈/圖檔/柏崎星奈.jpg`
- Affected scope: `柏崎星奈` 六表情基準圖、`project/images/sena_{smile,angry,sad,surprised,panic,normal}.png` 的更新
- Temporary handling: `CG 素材更新可繼續；保留目前已驗證的四張 sena 表情 runtime 素材。新基準圖原樣隔離於 unknown，不放入 project/images/，也不註冊至 data.js。`
- Decision needed: `請提供可由安全分割器處理的完整 2×3 六表情圖；目前檔案為 842×1264，非 2 與 3 可整除尺寸，split_emotion_image.py 已拒絕。`
- Decision / current direction: `待補正尺寸或提供新的完整表情圖；不得自行裁切、補像素或用固定三等分替代。`
- Remaining work: `重新執行 split_emotion_image.py，再逐張以 CUDA remove_bk.py 去背，依實際 Story IR 引用更新 project/images 與 manifest；若新增 angry／sad 未被 IR 使用，仍不得僅因圖檔存在而註冊。`
- Completion evidence: `split_emotion_image.py 回報 ValueError: Image size must be divisible into a 2x3 grid, got 842x1264.`
- Resolved at: `pending`

## Promotion

- `Q1` 已匯總至 `project/story/TODO.md` 的 `sena-portrait-grid-update`。
