# Task Questions

- Created: `2026-08-09 14:02:34 +08:00`
- Task: `處理 Agent／Skill 相關待辦事項`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. Story IR 是否作為納入 Git 的衍生產物

- Classification: `blocking`
- Status: `resolved`
- Source: `.codex/TODO.md` 共用 Story IR 待辦與 `references/text-to-event-json.md`。
- Affected scope: 共用 Story IR schema／validator、`scripts/generate_main_story.js`、角色支線轉換入口、來源變更檢查與 Git 追蹤方式。
- Temporary handling: 可先清理既有 question 狀態與過時 Skill 敘述；在決定 IR 保存方式前，不新增 schema／validator 或改寫生成器。
- Decision needed: Story IR 要納入 Git，並保存來源路徑與雜湊供離線生成器重現／檢查；還是只在執行時暫存，由每次 AI 轉換重新產生？建議納入 Git，放在統一的 `project/story-ir/`，並以來源雜湊阻止過期 IR 生成 floor。
- Resolution: 使用者選擇 A。Story IR 納入 Git，統一保存於 `project/story-ir/main/` 與 `project/story-ir/character/`，並記錄來源 repo-relative 路徑與 SHA-256。主線與角色支線共用 `scripts/story_ir.js`；來源雜湊、schema、素材／跳轉註冊或 floor round-trip 不一致時停止生成。
- Resolved at: `2026-08-09 14:27:19 +08:00`

### Q2. AVG 人物槽與對話框的最終視覺契約

- Classification: `blocking`
- Status: `resolved`
- Source: `.codex/TODO.md`、`20260809-004949-avg-layout-spec.md` Q1、`20260809-010918-bookstore-encounter-layout-prototype.md` Q2／Q5／Q6。
- Affected scope: `project/data.js -> main.styles.avgLayout`、`libs/core.js` fallback、人物資產處理、主線生成器驗證與所有已遷移 AVG floor。
- Temporary handling: 保留現行全局值 `portraitBottomGap=8`、`portraitLeft=16`、`portraitRight=0`、對話框 `x=96, y=295, width=352, fixedLines=2`；不新增角色專屬 offset，不批量改圖。
- Decision needed: 請定案人物最大顯示寬度、透明 padding 的處理方式（資產預先裁透明邊／runtime 依不透明 bbox 錨定／維持整張 PNG 錨定），以及是否接受人物被中央對話框遮住約一半；若不接受，需同步縮小人物或縮窄對話框。建議先將人物透明邊正規化、最大可見寬度設為 `160px`，保留現行對話框矩形與少量重疊，再以遊戲畫面微調。
- Resolution: 使用者選擇 B；人物被對話框遮擋最多接受可見寬度的 25%，過大人物圖可等比例縮小。全局 `portraitMaxVisibleWidth=128`、`portraitMaxDialogueOverlapRatio=0.25`，runtime 依 alpha bbox 對齊可見左右與底邊，並依各槽可用空間取更小的有效上限（目前左約 106.7px、右 128px）；超過才縮小、不放大小圖。其餘全局值維持 `bottomGap=8, left=16, right=0, dialogue=(96,295,352), fixedLines=2`，不得新增角色專屬 offset。
- Resolved at: `2026-08-09 14:27:19 +08:00`

### Q3. 荒漠支線的修字應回寫來源或還原 floor

- Classification: `blocking`
- Status: `resolved`
- Source: `project/story/荒漠支線.txt`、`project/floors/huangmo_1.js`、`project/floors/huangmo_2.js` 與既有 bookstore prototype Q4。
- Affected scope: 荒漠支線權威文本、兩個 floor 與未來 Story IR。
- Temporary handling: 不改劇情文字；保留來源與 floor 現況，其他 Agent／Skill 狀態清理可繼續。
- Decision needed: 要把 floor 既有修字與句末標點正式回寫權威來源（建議），還是讓 floor 完全還原為歷史原文？已知差異包括來源「但就在卻在」對 floor「但卻在」，以及數個句末句號。
- Resolution: 使用者選擇 A。`huangmo_1`／`huangmo_2` 的既有修字與句末標點已正式回寫權威來源 `project/story/荒漠支線.txt`，再建立帶新來源 SHA-256 的共用 Story IR。
- Resolved at: `2026-08-09 14:27:19 +08:00`

## Promotion

- None；三項決策均已實作並關閉。
