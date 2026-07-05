# AGENTS.md

這份文件是 AI 協作入口。撰寫或轉換 AVG 劇情、接入小遊戲時，先從此處判斷要查哪個功能區塊。

## 使用順序

1. 先看 [專案架構與輸出原則](agent/project-overview.md)，確認檔案位置與 AI 產出格式。
2. 新增場景時看 [樓層與場景](agent/floors.md)。
3. 撰寫劇情事件時依需求查閱對話、圖片、Flag、場景流程與音訊文件。
4. 將純文字劇本轉成事件時看 [純文字轉事件 JSON](agent/text-to-event-json.md)。
5. 新增或調整獨立小遊戲時看 [小遊戲新增與接入指南](agent/minigame-integration.md)。
6. 交付前用 [AI 撰寫檢查清單](agent/checklist.md) 檢查。

## 功能區塊

- [專案架構與輸出原則](agent/project-overview.md)
- [樓層與場景](agent/floors.md)
- [對話撰寫](agent/dialogue.md)
- [圖片與立繪](agent/images.md)
- [Flag 與狀態管理](agent/flags.md)
- [場景顯示邏輯](agent/scene-flow.md)
- [音樂與特效](agent/audio-effects.md)
- [純文字轉事件 JSON](agent/text-to-event-json.md)
- [小遊戲新增與接入指南](agent/minigame-integration.md)
- [AI 撰寫檢查清單](agent/checklist.md)

## 原始指南

原本集中在 `AI_AVG_EDITOR_GUIDE.md` 的內容已依功能拆分到 `agent/` 目錄；該檔現在保留為轉向入口。
