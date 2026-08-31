# Task Questions

- Created: `2026-08-31 21:31:17 +08:00`
- Task: `蘭斯支線素材更新`
- Overall status: `open`
- Long-term TODO: `project/story/TODO.md`

## Questions

### Q1. 剩餘五個場景背景

- Classification: `non-blocking`
- Status: `open`
- Source: 使用者提供的 `蘭斯支線/` 資料夾；`project/story/蘭斯支線.txt` 的 lance_2～lance_4 場景需求
- Affected scope: `project/story-ir/character/lance.json`、`project/floors/lance_2.js`～`lance_4.js`、路邊／車站口／小餐館／瑪麗亞之牆／小巷夜景背景
- Temporary handling: 已提供且驗收的六個正式背景照常接入；五個缺圖地點保留既有唯一命名 placeholder，受影響場景可繼續驗證，其餘角色素材不受阻塞。
- Decision needed: 是否提供上述五個地點的正式 `544×416` 背景素材。
- Decision / current direction: 暫不自行生成或套用無關背景，等待正式素材。
- Remaining work: 替換五個 placeholder、由 IR 重新生成對應 floor、完成視覺與遊戲入口驗證。
- Completion evidence: 已建立 `source-audit.md`、`asset-usage.md`，並更新 `project/story/manifest.md`；`node scripts/validate_story.js`、`python scripts/build_action_cgs.py --check`、`python scripts/compress_cgs.py --check` 均通過。
- Resolved at: pending

### Q2. 未使用表情素材

- Classification: `non-blocking`
- Status: `resolved`
- Source: `蘭斯支線/` 中提供但目前 Story IR 沒有對應台詞表情節點的 7 張黑衣／臨也 PNG
- Affected scope: 蘭斯支線素材收錄與後續表情擴充
- Temporary handling: 不把未被劇情需求引用的圖複製到 runtime；原始檔留在使用者輸入資料夾，並在 manifest 標示 `not-applied`。
- Decision needed: 若後續劇情需要，請指定各圖應對應的台詞或演出節點。
- Decision / current direction: 已將 7 張圖分配至 lance_4 實際黑衣／臨也對話節點，並完成 runtime 註冊。
- Remaining work: none for this question。
- Completion evidence: 45 張輸入圖 SHA-256 已逐筆核對；7 張原未使用表情已出現在 `project/story-ir/character/lance.json`、生成 `project/floors/lance_4.js` 並註冊於 `project/data.js`；完整驗證通過。
- Resolved at: `2026-08-31 22:09:06 +08:00`

## Promotion

- `lance-story-placeholder-assets`：五個正式背景仍待補，已更新 `project/story/TODO.md`。
- None for Q2；7 張表情素材已完成接入。Q1 仍保留為剩餘正式背景待補項目。
