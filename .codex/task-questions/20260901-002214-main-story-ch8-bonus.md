# Task Questions

- Created: `2026-09-01 00:22:14 +08:00`
- Task: `更新主線劇情至 ae5942a1，接入 CH8 bonus 並排除時間軸`
- Overall status: `resolved`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. CH8 結尾「真的沒了」演出

- Classification: `blocking`
- Status: `resolved`
- Source: `project/mainStory/CH8.txt` 最後一段：`【顯示一張全黑image，跳出白色大字寫著"真的沒了"】<這句要確認>`
- Affected scope: `project/story-ir/main/bonus/CH8.json`、CH8 bonus floor、CH7 的 CH8 解鎖入口、主線完整驗證
- Temporary handling: 已完成 CH8 來源與 DLC 素材盤點；在確認前未將 CH8 加入 `project/timeline.json`。
- Decision needed: None；使用者已確認顯示黑底白字「真的沒了」，文字顯示後等待 1 秒再返回標題畫面。
- Decision / current direction: 以 `lance_black_curtain.png` 顯示全黑畫面，使用 40px 白色 AVG 大字顯示「真的沒了」，接續 `wait 1000ms`（`noSkip: true`）後返回標題。
- Remaining work: None for this question；CH8 bonus、CH7 解鎖入口、素材註冊與完整驗證均已完成，且 CH8 未加入時間軸。
- Completion evidence: `project/story-ir/main/bonus/CH8.json`、`project/floors/main_ch8_bonus.js`、`project/data.js`；`node scripts/validate_story.js`、`node scripts/generate_main_story.js --check`、`git diff --check` 均通過。
- Resolved at: `2026-09-01`（使用者確認後完成）

## Promotion

- `Q1` promoted to `project/mainStory/TODO.md`。
