# Task Questions

- Created: `2026-08-24 22:54:43 +08:00`
- Task: `建立來源文本與 Story IR 雙向對位驗證`
- Overall status: `resolved`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. 來源文本與 Story IR 存在順序／內容偏移

- Classification: `blocking`
- Status: `resolved`
- Source: `project/mainStory/CH1`～`CH7` 與 `project/story-ir/main/CH1.json`～`CH7.json`
- Affected scope: `scripts/validate_story_alignment.js`、主線 Story IR 語意對位、對應生成 floor 與完整故事驗證
- Temporary handling: `已加入只讀雙向驗證，並依驗證結果修正主線 IR；來源檔案未修改。`
- Decision needed: `逐章修正來源指令／文本與 IR 的順序及內容映射，直到 source→IR 與 IR→source 均無缺漏、額外事件或跑偏。`
- Decision / current direction: `驗證器已接入 validate_story.js，檢查主線 CH1～CH7 的 BGM／停止／恢復、分歧、交流與文本串接；背景與 CG 採共用素材時不以跨章檔名行號誤判。`
- Remaining work: `無；支線不在本次範圍。`
- Completion evidence: `node scripts/test_story_alignment.js、node scripts/validate_story_alignment.js、node scripts/validate_story_source.js、node scripts/generate_main_story.js --check、node scripts/validate_story.js 全部通過。`
- Resolved at: `2026-08-25`

## Promotion

- `Q1` 已提升至 `project/mainStory/TODO.md`。
