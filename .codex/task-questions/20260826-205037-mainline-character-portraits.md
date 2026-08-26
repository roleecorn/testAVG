# Task Questions

- Created: `2026-08-26 20:50:37 +08:00`
- Task: `mainline-character-portraits`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. 主線角色參考圖缺口與名稱不一致

- Classification: `blocking`（僅阻塞受影響角色）
- Status: `open`
- Source: `project/mainStory/CH1`～`CH7`；`主線用角色參考/`
- Affected scope: `梗平`、`表妹` 的角色身份核對、表情生成、`project/images/` 替換與主線接入；惠惠／慧慧.jpg、來島澄／來島橙.png、李嚴／面具廚師.png 的對應已完成。
- Temporary handling: 已從主線權威來源完成角色清單；對缺少參考圖的角色不生成、不替換、不套用相似角色。使用者已明確確認三組名稱不一致的參考圖對應，三人已依確認完成生成與主線接入。
- Decision needed: 仍需取得 `梗平`、`表妹` 的正式參考圖。
- Decision / current direction: 使用者已確認 `慧慧.jpg`→惠惠、`來島橙.png`→來島澄、`面具廚師.png`→李嚴；三人已完成。本 question 仍因梗平／表妹缺圖維持 open。
- Remaining work: 取得兩名缺圖角色的參考圖，完成其生成與接入。
- Completion evidence: 惠惠／來島澄／李嚴：`art/characters/<id>/`、`project/images/ms_portrait_<id>_*.png`、`project/story-ir/main/CH1.json`／`CH3.json`／`CH7.json`、對應 floor；完整驗證待本次任務結束補記。
- Resolved at: pending while open

## Promotion

- Q1 is promoted to `project/mainStory/TODO.md` under `待確認人物`.
