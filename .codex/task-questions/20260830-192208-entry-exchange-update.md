# Task Questions

- Created: `2026-08-30 19:22:08 +08:00`
- Task: `entry-exchange-update`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. patch 上下文誤套是否影響交流節點

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者需求「移除兔子之家的RC入口；所有的交流回合次數從2改為6」與 `apply_patch` 操作
- Affected scope: `project/story-ir/main/CH1.json`～`CH5.json`、`project/plugins.js`、`project/floors/`、`scripts/test_akiba_event_manager.js`
- Temporary handling: 停止後續生成與提交，先以 diff 逐檔確認誤套位置已撤回，再重新套用精確上下文。
- Decision needed: 確認所有 `targetCount` 是否只落在五個 `character.exchange` 節點。
- Decision / current direction: 已確認五個主線交流節點均為 `targetCount: 6`；RC Voice 僅移除兔子之家選單入口，其他 RC Voice API／劇情入口保留。
- Remaining work: none
- Completion evidence: `node scripts/test_akiba_event_manager.js` 通過；`node --check project/plugins.js` 通過；主線 floor 已由 `node scripts/generate_main_story.js` 重生；`node scripts/validate_story.js` 與 `node scripts/generate_main_story.js --check` 通過。
- Resolved at: `2026-08-30 19:22:08 +08:00`

## Promotion

None
