# Task Questions

- Created: `2026-09-01 11:50:44 +08:00`
- Task: `修正神秘香蕉人支線人物立繪未出現`
- Overall status: `open`
- Long-term TODO: `none`

## Questions

### Q1. 支線人物立繪的顯示範圍

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/story/神秘香蕉人.txt`、`project/story-ir/character/mysterious-banana.json`、`scripts/portrait_resolver.js`
- Affected scope: `mysterious_banana_1`～`mysterious_banana_4` 的普通對話立繪生命週期
- Temporary handling: 只為已確認有正式圖片的「梗平」與「神秘香蕉人」系列名稱接入立繪；來源明確標示不使用立繪的台詞維持無立繪
- Decision needed: none
- Decision / current direction: 依既有全局 AVG 立繪規則，於 Story IR 對話加入語意 `portrait`，由 generator 統一輸出 show／hide；神秘香蕉人使用現有六表情，梗平使用既有 `keng_neutral_portrait.png`
- Remaining work: none for this reported issue
- Completion evidence: `project/story-ir/character/mysterious-banana.json` 已為 322 句梗平／神秘香蕉人系列台詞補上 `portrait`；`node scripts/manage_story_ir.js --emit-character` 已重新生成 4 個 floor；`node scripts/validate_story.js` 通過，且 4 個 floor 的立繪引用數為 74／74／133／41
- Resolved at: `2026-09-01 11:57:30 +08:00`

## Promotion

None.
