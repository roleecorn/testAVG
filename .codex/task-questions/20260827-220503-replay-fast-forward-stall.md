# Task Questions

- Created: `2026-08-27 22:05:03 +08:00`
- Task: `錄像回放快進偶發卡住診斷`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`

## Questions

### Q1. 快進卡住的實際回放節點尚未確認

- Classification: `non-blocking`
- Status: `open`
- Source: `使用者回報「如果快進有機率卡住」`
- Affected scope: `libs/control.js` 錄像回放速度與 replay action；`libs/events.js`／`libs/maps.js` 的 x24 非同步事件完成回呼
- Temporary handling: `可完成唯讀程式碼盤點與隔離重現；尚未取得瀏覽器操作步驟、錄像檔或卡住時的 replay state 前，不修改 runtime`
- Decision needed: `需要確認卡住發生在切換 x24、特定事件（移動／開門／切樓層／對話選項／動畫）或回放結束前，以及當時 core.status.replay.toReplay、replay.animate、status.event.id、animateFrame.asyncId 的值`
- Decision / current direction: `靜態呼叫鏈已確認 x24 移動回放會同步重入 core.replay；同一次 moveOneStep 又會由 core.trigger 排程第二次回呼。瀏覽器已成功載入本機遊戲，但沒有現成 .h5route 可直接重播，因此尚未取得卡住當下的 runtime state`
- Remaining work: `若要完成修正，需取得使用者對 runtime 變更的明確授權，加入 replay re-entry 防護／單一完成回呼，並以可重播錄像驗證`
- Completion evidence: `libs/control.js:710-713, 760-772, 1804-1808；project/functions.js:1503-1511；libs/events.js:321-325。node --check libs/control.js、libs/events.js、project/functions.js 通過；node scripts/validate_story.js 受既有 project/story/NoiR.txt Story IR stale 阻擋`
- Resolved at: `pending while open`

## Promotion

- `.codex/TODO.md` Open：`錄像回放 x24 快進偶發卡住；需修正 replay 同步／延遲回呼重入並以實際 .h5route 驗證`
