# Task Questions

- Created: `2026-08-23 22:42:30 +08:00`
- Task: `portrait-source-policy`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. 附圖類型與立繪處理方式

- Classification: `blocking`
- Status: `open`
- Source: 使用者回饋（2026-08-23）；`主線立繪包-20260822T171358Z-1-001` 的主線立繪批次
- Affected scope: `tmp/character-story-import/主線立繪包-20260822T171358Z-1-001/20260823-113854/work/portrait-runtime-manifest.json`、`project/images/ms_portrait_*.png`、對應主線 Story IR／floor
- Temporary handling: 暫停把目前批次宣稱為完成；不直接刪除既有 runtime 圖，也不重寫權威劇情來源。可保留盤點與驗證，待逐張分類後再替換受影響立繪。
- Decision needed: 逐張確認附圖是「原本就是可直接使用的立繪」或「僅供參考、需要重新生成的角色圖」；前者直接沿用原圖並只移除角色外部的綠幕背景，角色衣服、眼睛及其他本體內的綠色必須保留，後者才使用生成流程製作新的立繪。
- Decision / current direction: 使用者已澄清這是對目前成果的錯誤回報，不是對現況的確認。現有批次視為疑似錯誤，必須返工分類；不得把目前的生成結果當成合格交付。去背只處理角色外部背景，不得把衣服、眼睛或其他本體內的綠色變透明。
- Remaining work: 對本次主線批次逐張做原圖／生成來源分類、目視比對與 SHA-256／尺寸／alpha 記錄；重做受影響 runtime PNG、更新 manifest／TODO，並重新通過 `node scripts/validate_story.js`、`node scripts/generate_main_story.js --check` 與圖片 alpha 驗證。
- Completion evidence: pending
- Resolved at: pending

## Promotion

- `Q1` promoted to `project/mainStory/TODO.md` as `main-story-portrait-source-policy`.
