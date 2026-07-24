# AGENTS.md

這份文件是 AI 協作入口。撰寫或轉換 AVG 劇情、接入小遊戲時，先從此處判斷要查哪個功能區塊。

若執行環境支援 Codex Skills，優先使用專案內的 `.codex/skills/mota-avg-editor`。該 Skill 已把本文件拆出的功能文件整理為 `references/`，並提供載入順序與任務路由。

## 使用順序

1. 先看 [專案架構與輸出原則](agent/project-overview.md)，確認檔案位置與 AI 產出格式。
2. 新增場景時看 [樓層與場景](agent/floors.md)。
3. 撰寫劇情事件時依需求查閱對話、圖片、Flag、場景流程與音訊文件。
4. 插入或控制背景音樂時看 [BGM 背景音樂](agent/bgm.md)。
5. 將純文字劇本轉成事件時看 [純文字轉事件 JSON](agent/text-to-event-json.md)。
6. 劇本內有 TODO、待補、待確認人物或素材缺口時看 [TODO 與待確認事項](agent/todo.md)，並落成 TODO list 檔案。
7. 新增或調整獨立小遊戲時看 [小遊戲新增與接入指南](agent/minigame-integration.md)。
8. 交付前用 [AI 撰寫檢查清單](agent/checklist.md) 檢查。

## 編碼規則

多數 Markdown 與文字檔使用繁體中文、UTF-8 編碼。不要用 PowerShell 預設解碼讀取 Markdown 或其他文字檔；必須明確指定 UTF-8：

```powershell
Get-Content <path> -Encoding UTF8
```

若中文顯示為亂碼，先改用明確 UTF-8 或 Python 重新確認：

```powershell
python -c "from pathlib import Path; print(Path(r'<path>').read_text(encoding='utf-8'))"
```

不要把 PowerShell 預設解碼造成的亂碼當成可信內容，也不要根據不可讀的亂碼修改檔案。

## 功能區塊

- [專案架構與輸出原則](agent/project-overview.md)
- [樓層與場景](agent/floors.md)
- [對話撰寫](agent/dialogue.md)
- [圖片與立繪](agent/images.md)
- [Flag 與狀態管理](agent/flags.md)
- [場景顯示邏輯](agent/scene-flow.md)
- [BGM 背景音樂](agent/bgm.md)
- [音樂與特效](agent/audio-effects.md)
- [純文字轉事件 JSON](agent/text-to-event-json.md)
- [TODO 與待確認事項](agent/todo.md)
- [小遊戲新增與接入指南](agent/minigame-integration.md)
- [AI 撰寫檢查清單](agent/checklist.md)

## 原始指南

原本集中在 `AI_AVG_EDITOR_GUIDE.md` 的內容已依功能拆分到 `agent/` 目錄；該檔現在保留為轉向入口。

## 更新
劇情可能會在某個時間點後更新，如果我要求更新劇情，只需要考慮以下commit後(不含)的劇情即可
4a42fb1f86600ec35351b75946cedcd3f982cfa7