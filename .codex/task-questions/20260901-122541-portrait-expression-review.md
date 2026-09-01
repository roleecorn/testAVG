# Task Questions

- Created: `2026-09-01 12:25:41 +08:00`
- Task: `角色支線立繪表情語意複核`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. 新增立繪的表情選擇

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/story-ir/character/*.json` 本次新增的 dialogue portrait 差異、角色支線權威文本上下文與既有六表情素材
- Affected scope: `idw`、`juju`、`lanxiang`、`okabe`、`ruka`、`shirou`、`mysterious-banana` 的 Story IR 與生成 floor
- Temporary handling: 只調整本次新增立繪的圖片／表情語意；不改權威 TXT、不新增或修改圖片素材。
- Decision needed: 是否依每句台詞的明確情緒，將原本使用的預設立繪改為既有 smile、angry、sad、surprised 或 panic 表情？
- Decision / current direction: 依使用者指示執行逐句語意複核；情緒不明保留 normal，明確情緒使用對應既有素材。
- Remaining work: none
- Completion evidence: 已逐句複核本次新增的 424 個角色支線 portrait；依語意改用既有 smile、angry、sad、surprised、panic／serious 圖片，情緒不明才保留 normal，並校正梗平、支線角色與通用角色的圖片族群；mapping audit 顯示 0 個跨角色素材誤用；`node scripts/manage_story_ir.js --emit-character` 重生 74 個角色場景；`node scripts/validate_story.js` 通過，包含 Story IR、角色場景、CG layout、lifecycle、effect runtime 與 ownership 檢查；未新增或修改圖片素材。
- Resolved at: `2026-09-01 12:35:23 +08:00`

## Promotion

None
