# Task Questions

- Created: `2026-09-01 11:30:25 +08:00`
- Task: `檢查神秘香蕉人圖片與 CG 接入`
- Overall status: `open`
- Long-term TODO: `project/story/TODO.md`

## Questions

### Q1. 神秘香蕉人來源列出的未提供 CG

- Classification: `non-blocking`
- Status: `open`
- Source: `project/story/神秘香蕉人.txt` line 2 與各 CG 出現／消失標記；素材盤點及 `project/story/TODO.md`
- Affected scope: `mysterious_banana_1`～`mysterious_banana_4` 尚未有正式素材的 CG 演出
- Temporary handling: 已接入本次確認存在且語意相符的 6 個 CG；未提供的 CG 保留來源註記，不以不相符圖片代替
- Decision needed: 是否提供「草叢」、「森之妖精與香蕉君對峙」、「無限伊布手套」、「大團圓」及「颯爽的梗平」的正式 CG 素材或明確暫代規格
- Decision / current direction: 暫維持 open；不捏造圖片、不把相似素材誤接為正式 CG
- Remaining work: 取得正式素材或明確暫代規格後，依來源位置接入 Story IR、壓縮清單與 floor
- Completion evidence: 已將現有 6 個 CG 的 `image.show`／`image.hide` 寫入 `project/story-ir/character/mysterious-banana.json`；待正式素材
- Resolved at: pending

## Promotion

- Q1 已促進至 `project/story/TODO.md` 的神秘香蕉人待補素材項目。
