# Task Questions

- Created: `2026-08-16 19:59:16 +08:00`
- Task: `character-scene-return-validation`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. Character scene completion can end without a return transition

- Classification: `blocking`
- Status: `resolved`
- Source: `project/floors/lala_1.js`–`lala_4.js`, `okabe_1.js`–`okabe_4.js`, `shirou_1.js`–`shirou_4.js`; `node scripts/manage_story_ir.js`; `node scripts/test_akiba_event_manager.js`
- Affected scope: `scripts/story_ir.js` validation, `scripts/manage_story_ir.js` character-scene validation, character Story IR/floor endings, and the Akiba event lifecycle test suite.
- Temporary handling: Completed. Affected scene endings have been rebuilt from the corrected Story IR.
- Decision needed: None.
- Decision / current direction: Implemented typed `akiba.event.complete` and `akiba.return` nodes, semantic terminal-path validation, and an isolated regression test. Legacy `function.call` lifecycle nodes remain recognized so existing validated scenes remain compatible.
- Remaining work: none.
- Completion evidence: `node --check scripts/story_ir.js`; `node scripts/test_story_ir_lifecycle.js`; `node scripts/manage_story_ir.js --emit-character`; `node scripts/manage_story_ir.js`; `node scripts/test_akiba_event_manager.js`; `node scripts/generate_main_story.js --check`; a final scan confirmed every floor with `completeAkibaEvent()` also contains `returnToAkiba()`.
- Resolved at: `2026-08-16 20:05:00 +08:00`

## Promotion

- None.
