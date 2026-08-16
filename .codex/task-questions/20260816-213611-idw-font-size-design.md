# Task Questions

- Created: `2026-08-16 21:36:11 +08:00`
- Task: `調整 IDW 大字體演繹`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. `IDW 短句的大字體範圍`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/story/IDW.txt` 的 `【底下屬於IDW的對話都需要判斷是否使用更大的(約2倍)字體，原則上短句子都可以使用】`，以及使用者本次調整要求
- Affected scope: `project/story-ir/character/idw.json`、`project/floors/idw_1.js`～`project/floors/idw_4.js`
- Temporary handling: `只調整 IDW 的演繹字體，不修改權威來源 TXT；沉重回憶、解釋句與省略號維持普通字體`
- Decision needed: `哪些短句應視為高音量或喜劇節奏並放大`
- Decision / current direction: `高音量招呼、短促反應、玩具爭執與找人呼喊使用 textfont 32；來源明確標示超大者使用 40；所有 layout.set 保留 titlefont 22`
- Remaining work: `none`
- Completion evidence: `IDW IR 已有 43 個放大台詞，node scripts/manage_story_ir.js 驗證通過，四個 IDW floor 均 node --check 通過，git diff --check 通過`
- Resolved at: `2026-08-16 21:36:11 +08:00`

## Promotion

None
