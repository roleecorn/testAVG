# Task Questions

- Created: `2026-08-31 00:44:45 +08:00`
- Task: `立繪更改.zip 立繪替換`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. ZIP 內兩張 RGB 黑底立繪如何接入

- Classification: `non-blocking`
- Status: `resolved`
- Source: `立繪更改.zip`；`ms_portrait_chino_angry.png`、`ms_portrait_ib_angry.png`
- Affected scope: `project/images/` 的兩張既有立繪替換
- Temporary handling: 兩張檔案在處理完成前未覆蓋 runtime 目標；其餘同名 RGBA 立繪可獨立處理。
- Decision needed: RGB 黑底來源是否直接轉 RGBA，或先去背？
- Decision / current direction: 依圖片規範使用 `remove_bk.py` 的 `isnet-anime` CUDA 路徑去背，再按既有目標高度等比例縮放；未使用 CPU fallback。
- Remaining work: none
- Completion evidence: `tmp/character-story-import/立繪更改/20260831-004445/work/transparent/`；輸出 alpha bbox 已存在且 alpha min 為 0；`work/processed-manifest.csv`、`work/asset-usage.md`；最終 `node scripts/validate_story.js`。
- Resolved at: `2026-08-31 00:44:45 +08:00`

## Promotion

None
