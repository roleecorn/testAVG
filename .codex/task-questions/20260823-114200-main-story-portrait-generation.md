# Task Questions

- Created: `2026-08-23 11:42:00 +08:00`
- Task: `main-story-portrait-generation`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. 生成後端選擇

- Classification: `non-blocking`
- Status: `resolved`
- Source: `game-character-art`；本機檢查 `nvidia-smi`、監聽埠 `8188`／`7860`
- Affected scope: 六格表情母圖生成、拆分後的主線立繪接入與後續 Story IR／floor 更新
- Temporary handling: 已完成 ZIP 新鮮解壓、SHA-256、圖片格式／尺寸／alpha 盤點與主線缺口矩陣；依使用者明確指示改用 `imagegen` 內建生成，不使用 GPU／ComfyUI。
- Decision needed: None for this execution path.
- Decision / current direction: 使用專案 `anime-expression-grid` 依賴的 `imagegen` 內建工具，生成透明背景六格母圖；不啟動或使用本機生成後端。
- Remaining work: None for the confirmed-sample scope.
- Completion evidence: `tmp/character-story-import/主線立繪包-20260822T171358Z-1-001/20260823-113854/work/portrait-runtime-manifest.json`、`node scripts/generate_main_story.js --check`、276 張 RGBA alpha 驗證結果。
- Resolved at: `2026-08-23 12:25:00 +08:00`

### Q2. 九個角色／名稱配對未確認

- Classification: `blocking`
- Status: `open`
- Source: 主線 Story IR 發言者與 ZIP 樣本盤點
- Affected scope: `來島澄`、`店員`、`惠惠`、`李嚴`、`路人`、`路人A`、`路人B`、`不知道是誰的？`、`？？？` 的六格生成與 scene 接入
- Temporary handling: 其他已確認角色可在 Q1 解決後繼續；不把 `來島橙.png` 自動視為 `來島澄`、`慧慧.jpg` 自動視為 `惠惠`，也不把 `書店店員.png` 自動視為 `店員`。
- Decision needed: 確認上述九個名稱的正式角色／ZIP 樣本對應，以及未知／路人角色是否應顯示立繪。
- Decision / current direction: 暫停這三個角色的生成與接入。
- Remaining work: 取得確認後更新 mapping、生成或維持無立繪，並完成對應 scene/floor 驗證。
- Completion evidence: `work/portrait-gap-matrix.json`、`work/image-properties.json`；目前未有角色身分確認證據。
- Resolved at: pending

## Promotion

- `Q1` 已提升至 `project/mainStory/TODO.md` 的 `main-story-portrait-expression-generation`。
- `Q2` 已提升至 `project/mainStory/TODO.md` 的待確認人物項目。
