# Task Questions

- Created: `2026-08-24 21:07:15 +08:00`
- Task: `CH1~CH7 全形括號指令與 Story IR 忠實度稽核`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`、`.codex/TODO.md`

## Questions

### Q1. CH2 2-1 的 IR 歸屬

- Classification: `blocking`
- Status: `resolved`
- Source: `project/mainStory/CH2:12-110`
- Affected scope: `project/story-ir/main/CH1.json`、`project/story-ir/main/CH2.json`、`mapo_1_5` → `mapo_1_6` → `main_ch2_2` 的生成流程
- Temporary handling: 已將受影響分支維持在 IR 修正期間，未修改權威來源
- Decision needed: none
- Decision / current direction: 已將 CH2:12-110 的 2-1 scene `mapo_1_6` 從 CH1 IR 移至 CH2 IR 的第一個 scene；CH1 最後 scene `mapo_1_5` 的 `goto mapo_1_6` 保留，2-1 結尾的 `goto main_ch2_2` 保留
- Remaining work: none
- Completion evidence: `node scripts/validate_story_source.js`、`node scripts/generate_main_story.js --check`、`node scripts/validate_story.js` 均通過；生成後確認 CH1 最後 scene 為 `mapo_1_5`、CH1 goto `mapo_1_6`、CH2 第一 scene 為 `mapo_1_6`、2-1 後續 goto `main_ch2_2`
- Resolved at: `2026-08-24 21:40:03 +08:00`

### Q2. BGM 指令的缺漏與錯位

- Classification: `blocking`
- Status: `open`
- Source: `project/mainStory/CH3:404`、`CH5:84`、`CH6:384`、`CH7:488,632,638,700,724,971,1029,1058,1096,1135,1170,1290,1315`
- Affected scope: `project/story-ir/main/CH3.json`、`CH5.json`、`CH6.json`、`CH7.json` 及其生成 floor
- Temporary handling: 不把 TODO 或其他位置的同名 BGM 視為已完成；暫停 BGM 受影響段落的交付
- Decision needed: 確認每個來源 BGM 名稱的正式資產／映射，並將播放事件放在來源指令的正確作用位置
- Decision / current direction: 已完成可由正式資產與來源順序直接確認的 CH3 `BGMKIRAKIRA`、CH5 `BGMKanu`、CH6 第二次 `BGMED1`，以及 CH7 多處 `BGMBOOM`、`BGMTANK`、`BGMMeikyoshisui`、`BGMKyoheiTranslation`、`BGMBOINBOIN`、`BGMGintama`、`BGMKanu`、`BGMKIRAKIRA`、`BGMED2`；仍有 CH7:632、1058 等來源位置需要進一步逐段對齊
- Remaining work: 完成剩餘 CH7 BGM 的來源位置對齊、更新 IR、重新生成並驗證
- Completion evidence: `project/story-ir/main/CH3.json`、`CH5.json`、`CH6.json`、`CH7.json` 與對應 floor 已更新；`node scripts/validate_story.js` 通過
- Resolved at: pending

### Q3. BGM停止的作用範圍

- Classification: `blocking`
- Status: `resolved`
- Source: `project/mainStory/CH2:307`、`project/mainStory/CH7:472,584,621,962,1085,1280`
- Affected scope: 對應 IR 中的 `bgm.pause`／`bgm.resume` 節點與生成 floor
- Temporary handling: 暫不接受 `until: "background"` 加上立即 resume 作為 `【BGM停止】` 的等價實作
- Decision needed: 依 canonical BGM 語意，確認這些 `【BGM停止】` 是否都應轉為 `bgm.pause` 並持續到下一個明確 BGM play
- Decision / current direction: CH2:307、CH7:472、584、621、962、1085、1280 均已整理為持續到下一個明確 BGM play 的 `until: "play"` 語意，並移除受影響的背景後 resume
- Remaining work: none
- Completion evidence: `project/story-ir/main/CH2.json`、`CH7.json` 及 `project/floors/main_ch7_3.js`、`main_ch7_4.js`、`main_ch7_5.js` 已更新；`node scripts/validate_story.js` 與 `node scripts/generate_main_story.js --check` 均通過
- Resolved at: `2026-08-24 21:32:00 +08:00`

### Q4. 其他演出指令仍是 TODO 或未落地

- Classification: `non-blocking`
- Status: `open`
- Source: `project/mainStory/CH4:29,212`、`project/mainStory/CH7:468,569-570,606,826,986,1163`
- Affected scope: 對應 scene 的 portrait、文字 layout、記憶濾鏡、標題返回與其他 presentation nodes
- Temporary handling: 保留來源與現有 IR，不自行猜測未定稿的素材或演出規格
- Decision needed: 確認哪些 TODO 是待製作、哪些需改為實際 IR 指令
- Decision / current direction: CH4 `【下八句不使用立繪】`、CH7 多個「下幾句不使用立繪」已完成並保留 TODO；CH4 `【人物交流時間】`、CH7:986 的刪除線／換行／大字 headline、`【返回標題畫面】` 仍未完成。CH7:569-570 的回憶過場已有 IR `function.call` 色調實作，不再列為缺口。結尾動畫與製作名單依來源明示暫時忽略。
- Remaining work: 依確認結果補齊仍未完成的 IR／演出，或將明確延後項目保留為可追溯 TODO
- Completion evidence: `project/story-ir/main/CH4.json`、`CH7.json` 與對應 floor 已更新；`node scripts/validate_story.js` 通過
- Resolved at: pending

## Promotion

尚未解決的 BGM 映射／作用範圍與演出指令問題，應在修正交易完成前持續保留於長期 TODO；CH2 2-1 的章節歸屬已完成修正。
