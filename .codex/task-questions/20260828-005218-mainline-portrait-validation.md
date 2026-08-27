# Task Questions

- Created: `2026-08-28 00:52:18 +08:00`
- Task: `mainline-portrait-update-validation`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`

## Questions

### Q1. 既有 NoiR Story IR SHA-256 過期

- Classification: `blocking`（僅阻塞完整全專案故事驗證）
- Status: `open`
- Source: `node scripts/validate_story.js`、`node scripts/validate_story_source.js`
- Affected scope: `project/story/NoiR.txt`、`project/story-ir/character/noir.json` 及其支線驗證；不涉及本次表妹主線立繪替換。
- Temporary handling: 本次不修改 NoiR 權威來源、IR 或 floor；主線專項生成器檢查與圖片 alpha／引用檢查可繼續，完整 `validate_story.js` 結果保留為 blocked。
- Decision needed: 需另案依完整來源核對 `NoiR.txt` 與 `noir.json` 的來源 SHA-256，並按 `project/story/` → Story IR → floor 原子流程修復。
- Decision / current direction: 本次素材交易與 NoiR 無關，維持 open，沿用既有 `.codex/TODO.md` 的 `20260827-234300-portrait-update.md` Q3 追蹤。
- Remaining work: 完成 NoiR 來源／IR／floor 核對後重新執行完整故事驗證。
- Completion evidence: 本次 `node scripts/generate_main_story.js --check` 通過（29 個主線 floor）；兩個完整驗證命令均在 `project/story/NoiR.txt` stale SHA-256 處停止。
- Resolved at: pending while open

## Promotion

- Q1 is already promoted to `.codex/TODO.md` under the existing `20260827-234300-portrait-update.md` entry.
