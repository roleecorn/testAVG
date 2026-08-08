# Task Questions

- Created: `2026-08-09 01:09:18 +08:00`
- Task: `bookstore-encounter-layout-prototype`
- Overall status: `open`
- Long-term TODO: `.codex/TODO.md`, `project/story/TODO.md`

## Questions

### Q1. 「書店相遇」對應哪一個事件

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者先稱「書店相遇」，專案內同時存在 `huangmo_1`「書店邂逅」與 `mikage_rinju_1`「書店初遇」。
- Affected scope: 本次要修改的 floor 與角色素材。
- Temporary handling: 在使用者選擇前不修改任一候選 floor。
- Decision needed: 本次試作應套用哪一篇？
- Resolution: 使用者選擇 `huangmo_1`「書店邂逅」。
- Resolved at: `2026-08-09 01:03:00 +08:00`

### Q2. 試作布局的精確像素值

- Classification: `non-blocking`
- Status: `open`
- Source: 使用者提供的縮放參考圖與 `20260809-004949-avg-layout-spec.md` Q1。
- Affected scope: `libs/core.js` 的全局 AVG layout config、`huangmo_1` 的試作畫面，及未來所有場景的遷移。
- Temporary handling: 目前 runtime 使用 bottom gap `8`、`portraitLeft=16`、`portraitRight=16`、對話框 `x=96, y=295, width=352, fixedLines=2` 進行單場景預覽；目標規範已把 `portraitRight` 改為 `0`，本次只更新文件，不修改 runtime 或其他 floor。
- Decision needed: 使用者看過遊戲內效果後，確認或調整人物 bottom gap、左右位置與中央對話框範圍。
- Resolution: 本機 544×416 畫布已完成初步驗證：在 1.25 倍顯示時，`portraitBottomGap=8` 實測為 10 CSS px；人物圖層 `z-index=112`、對話 UI `z-index=140`；左人物、無人物旁白、右人物與兩行長句皆正確。使用者進一步確認水平邊界 gap 不需要太大，並已將目標 `portraitRight` 從 `16` 改為 `0`；目前 runtime 尚未同步。`portraitLeft`、人物最大可見寬度、透明內容錨點與對話框範圍仍待後續視覺試作確認。
- Resolved at: pending

### Q3. 荒漠篇缺少 `project/story` 劇情母檔

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/floors/huangmo_1.js` 與 `project/akiba-event-meta.json` 有「書店邂逅」，但 `project/story/` 沒有對應荒漠篇來源文本。
- Affected scope: 荒漠篇後續劇情更新、對話校對與 floor 重生。
- Temporary handling: 在來源確認前只修改布局與事件顯示指令，保留既有對話字串及完成／回場邏輯。
- Decision needed: 後續需提供或確認荒漠篇的權威來源文本，並建立 `project/story` 母檔。
- Resolution: 使用者確認來源是 commit `7903fa9b762df8518a586d46ed632c0e4b38d10b` 新增的 `角色支線範例.txt`；該檔在 commit `19dc06e9b96afde7e961ea4032533d1a4a17c37b` 原文改名為根目錄 `荒漠支線.txt`。現已原文移至 canonical 路徑 `project/story/荒漠支線.txt`。
- Resolved at: `2026-08-09 01:24:14 +08:00`

### Q4. 歷史母檔與現行 floor 的修字差異

- Classification: `non-blocking`
- Status: `open`
- Source: 恢復後比對 `project/story/荒漠支線.txt` 與 `project/floors/huangmo_1.js`、`huangmo_2.js`；例如母檔為「但就在卻在」，現行 floor 為「但卻在」，另有補句號等差異。
- Affected scope: 荒漠篇權威文字、`huangmo_1`／`huangmo_2` 後續劇情同步。
- Temporary handling: 本次按使用者要求原文恢復歷史母檔，不修改 floor，也不把既有修字擅自回寫母檔。
- Decision needed: 後續應讓 floor 完全回到歷史母檔原文，或確認現行 floor 的修字後把修正版正式回寫 `project/story/荒漠支線.txt`？
- Resolution: pending content synchronization decision
- Resolved at: pending

### Q5. 右側人物大幅被對話框遮住的根本原因

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者觀察 `huangmo_surprised.png` 約一半寬度被對話框遮住，要求判斷圖片尺寸或定位錨點問題。
- Affected scope: 全局右人物槽、角色圖片尺寸／透明 padding、中央對話框寬度與未來所有 AVG floor。
- Temporary handling: 只做圖片透明邊界與 544×416 幾何量測，不修改圖片、layout config 或 floor。
- Decision needed: 遮擋是荒漠單一圖片異常、右槽錨點計算錯誤，或全局布局與素材尺寸規格衝突？
- Resolution: 不是荒漠單一圖片損壞，也不是 `portraitRight` 算式的算術錯誤，而是兩個全局設計問題疊加：目前右側只剩 `448..528` 共 80px 的不被對話框覆蓋區，但新素材可寬達 195px；同時右槽以整張 PNG 畫布右緣定位，未依不透明內容邊界正規化，透明 padding 會把可見人物再向左推。荒漠驚訝圖的 168px 不透明內容因此有 106px（63.1%）落在對話框下；即使改為不透明內容右對齊，仍約有 88px（52.4%）重疊，證明圖片 padding 只是次因，主要是槽位可用寬度與人物最大尺寸缺少共同契約。茱茱、NoiR、御影凛珠與綿貫咲夜等圖也會出現 59.0%～80.6% 的遮擋，並非荒漠特例。
- Resolved at: `2026-08-09 01:34:20 +08:00`

### Q6. 右人物槽的水平 inset

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者明確指示「調整規範，將 `portraitRight` 從 `16` 降到 `0`」。
- Affected scope: canonical AVG layout config、下一次 `huangmo_1` 試作與未來全專案 floor 遷移。
- Temporary handling: 本次只修改規範與追蹤紀錄；`libs/core.js` 仍保留試作值 `16`，直到下一次實作與遊戲內預覽。
- Decision needed: 右人物槽的全局水平 inset 應為多少？
- Resolution: 目標規範固定為 `portraitRight=0`；右側 PNG 畫布貼齊 544px 畫布右緣，不另留槽位 inset。透明 padding 與人物最大寬度仍由後續規則另行處理。
- Resolved at: `2026-08-09 01:51:24 +08:00`

## Promotion

- Q2 沿用 `.codex/TODO.md` 的 AVG layout 定稿項目。
- Q3 已解決；`project/story/TODO.md` 已同步移除來源缺失項目。
- Q4 已匯總到 `project/story/TODO.md`。
- Q5 已找出根因；後續修正決策併入 Q2 的全局 layout 定稿，不建立角色專屬例外。
- Q6 已決定 `portraitRight=0`；runtime 同步工作併入 Q2。
