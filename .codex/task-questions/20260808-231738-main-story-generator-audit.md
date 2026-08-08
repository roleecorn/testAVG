# Task Questions

- Created: `2026-08-08 23:17:38 +08:00`
- Task: `main-story-generator-audit`
- Overall status: `resolved`
- Long-term TODO: `not needed`

## Capability inventory

- Reuse: `.codex/skills/mota-avg-editor` 作為根路由；沿用 `floors.md`、`dialogue.md`、`images.md`、`scene-flow.md`、`text-to-event-json.md` 與 `checklist.md`。
- Reuse: `.codex/skills/mota-action-cg` 負責固定一秒、16:11 可見面板的動作 CG 契約。
- Reuse: `scripts/generate_main_story.js` 作為現有主線生成入口，不另建平行 Python 生成器。
- Reuse: `project/mainStory/CH1`～`CH6` 的既有格式說明與劇情來源。
- Missing: 17×13／544×416 畫布常數與生成後尺寸驗證。
- Missing: 生成前的明確預處理契約，區分 `[人名：內容]` 簡訊、`[敘述]` 旁白、一般對話、內心話與製作指令。
- Missing: 544×416 下的一般 CG、固定一秒動作 CG、背景、立繪及對話框各自定位規則。
- Missing: 防止生成器回退地圖尺寸或重新顯示製作指令的可重複驗證。

## Questions

### Q1. 416×416 一般劇情 CG 在 544×416 畫布中的水平位置

- Classification: `blocking`
- Status: `resolved`
- Source: 使用者要求重新檢查 CG 位置；`.codex/statusbar-17x13-implementation-plan.md` 只明確規定背景保留 `(0,0)`，未決定一般全幅 CG。
- Affected scope: `scripts/generate_main_story.js` 的 `【CG：...】`／GIF 轉換、`images.md`、`scene-flow.md`、`text-to-event-json.md`。
- Temporary handling: 已由使用者提供實際畫面參考，改以截圖量測結果定案，不再沿用「416×416 全幅 CG」假設。
- Decision needed: 一般 416×416 劇情 CG 要保持左側舞台 `x=0`，或在 544 寬畫布水平置中為 `x=64`？
- Resolution: 兩者皆不採用。截圖中的中央 CG 白框換算為邏輯座標約 `x: 112, y: 50, width: 320, height: 220`；一般持續 CG 與固定一秒動作 CG 共用 `loc: [112, 50, 320, 220]`。來源以 `sloc` 裁成 16:11，416×312 來源使用 `[0,13,416,286]`；416×416 場景背景仍維持 `[0,0]`。
- Resolved at: `2026-08-08 23:52:00 +08:00`

### Q2. 使用者所稱 Python 檔的實際對象

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者提到「python 檔案」；專案盤點結果。
- Affected scope: 主線生成與預處理入口。
- Temporary handling: 專案唯一主線生成器是 `scripts/generate_main_story.js`；`remove_bk.py` 與 `split_emotion_image.py` 只處理角色圖片，與本次地圖／對話／CG 生成無關。
- Decision needed: 是否應另建 Python 生成器？
- Resolution: 不另建平行實作，直接更新現有 JavaScript 生成器與 canonical Markdown。
- Resolved at: `2026-08-08 23:17:38 +08:00`

### Q3. 對話框與立繪是否跟隨 544 寬畫面重排

- Classification: `non-blocking`
- Status: `resolved`
- Source: 使用者要求檢查對話框位置；既有 17×13 計畫與 canonical references。
- Affected scope: `setTextEvent()`、角色 `showImage` x/y、`dialogue.md`、`images.md`。
- Temporary handling: 已依使用者提供的實際畫面，量測後再用 `libs/ui.js` 的公式核對。
- Decision needed: 若要把立繪或對話內容改為 544 寬重新置中，需提供新的視覺基準；否則採上述相容方案。
- Resolution: `setText` 使用 `position: down`、`offset: 0`、`titlefont: 22`、`textfont: 16`、`lineHeight: 22`；配合 `fixedLines: 2`，對話框範圍為 `x:13, y:295, width:518, height:116`。人物維持左 `[28,"textTop"]`、右 `[260,"textTop"]`，與截圖中人物壓在對話框前方的構圖一致。
- Resolved at: `2026-08-08 23:52:00 +08:00`

## Promotion

All layout questions were resolved from the user-provided screenshot and engine coordinate formulas; no promotion is required.
