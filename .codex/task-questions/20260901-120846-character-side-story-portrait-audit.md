# Task Questions

- Created: `2026-09-01 12:08:46 +08:00`
- Task: `角色支線立繪缺失全面盤點`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. 角色支線普通對話的立繪接入範圍

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/story-ir/character/*.json` 全量盤點與 `scripts/portrait_resolver.js`
- Affected scope: `idw`、`juju`、`lanxiang`、`okabe`、`ruka`、`shirou` 的 Story IR 與其生成 floor
- Temporary handling: 只處理已有正式立繪素材或 resolver 明確映射、且對話目前缺少 `portrait` 的角色；來源明確指定不使用立繪、泛用未知身分與沒有正式素材者維持空白。
- Decision needed: 是否將上述已確認角色的缺失立繪補回 Story IR，並由 emitter 重生對應 floor？
- Decision / current direction: 依使用者「一併修正」指示執行；不新增或修改圖片素材。
- Remaining work: none
- Completion evidence: `project/story-ir/character/idw.json`、`juju.json`、`lanxiang.json`、`okabe.json`、`ruka.json`、`shirou.json` 已補回 102 句確認角色的 `portrait`；全量 resolver 稽核只剩神秘香蕉人 5 句，均為來源明確指定不使用立繪的台詞；`node scripts/manage_story_ir.js --emit-character` 重生 74 個角色場景；`node scripts/validate_story.js` 通過，包含 Story IR、74 個角色場景、CG layout、lifecycle、effect runtime 與 ownership 檢查；未新增或修改圖片素材。
- Resolved at: `2026-09-01 12:18:05 +08:00`

## Promotion

None
