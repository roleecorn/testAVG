# AGENTS.md

這份文件是 AI 協作入口。撰寫或轉換 AVG 劇情、接入小遊戲時，先從此處判斷要查哪個功能區塊。

若執行環境支援 Codex Skills，優先使用專案內的 `.codex/skills/mota-avg-editor`。該 Skill 已把本文件拆出的功能文件整理為 `references/`，並提供載入順序與任務路由。

## 使用順序

1. 先看 [專案架構與輸出原則](agent/project-overview.md)，確認檔案位置與 AI 產出格式。
2. 新增場景時看 [樓層與場景](agent/floors.md)。
3. 撰寫劇情事件時依需求查閱對話、圖片、Flag、場景流程與音訊文件。
4. 插入或控制背景音樂時看 [BGM 背景音樂](agent/bgm.md)。
5. 將純文字劇本轉成事件時看 [純文字轉事件 JSON](agent/text-to-event-json.md)。
6. 使用者只提供一個 Google Drive ZIP，且其中可能同時有角色劇本與角色圖基準時，先看 [角色劇情壓縮檔任務拆分流程](agent/角色劇情壓縮檔任務拆分流程.md)，依子任務產物串接既有流程。
7. 劇本內有 TODO、待補、待確認人物或素材缺口時看 [TODO 與待確認事項](agent/todo.md)，並落成 TODO list 檔案。
8. 新增或調整獨立小遊戲時看 [小遊戲新增與接入指南](agent/minigame-integration.md)。
9. 交付前用 [AI 撰寫檢查清單](agent/checklist.md) 檢查。

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

## Git 規範

- 除非使用者主動要求，禁止執行 `git add` 或其他會改變 staged/index 狀態的操作。
- 使用者要求檢查、檢驗、review、或詢問「改了什麼」時，預設先看 `git diff --cached`，而不是只看 `git diff`。
- 在本專案中，`git diff --cached` 代表使用者已看過、但仍有疑問或需要 AI 檢查的內容；檢查時要把它視為主要對象。
- 若需要同時判斷未 staged 的新變動，可以再補看 `git diff` 與 `git status --short`，但不能因此忽略 `git diff --cached`。

### 角色劇情 ZIP 的強制提交流程

- 使用單一 ZIP 匯入多位角色時，先建立角色範圍清單，再逐角色完成 A 至 G；任何角色完成 G 後立即提交，不得等全部角色完成才一次提交。
- 每位角色的劇情樓層、角色立繪、該角色需要的背景／CG、事件入口，以及共用註冊檔中屬於該角色的行，必須放在該角色自己的 commit；一個角色 commit 不得含有另一角色的樓層、立繪、劇情或入口。
- 只要檔案在 A／B 階段被分類為角色劇情，無論來源是 ZIP 內 TXT、DOCX、PDF 或其他可提取格式，在新增或轉換任何 `project/` 劇情內容前，必須先將其 UTF-8 純文字版本放到 `project/story/`；`tmp/` 只存解壓／提取中間產物，不是故事根本來源。
- `project/story/` 是角色劇情的正式來源目錄。TXT 來源保留原檔名；DOCX、PDF 或其他來源必須先提取為 UTF-8（無 BOM）TXT 再放入。若正式目錄已有同名檔案，不得覆蓋，改用可追溯的來源後綴並在 TODO／manifest 記錄對應關係。
- `project/data.js`、`project/akiba-event-meta.json` 等共用檔案不得整檔加入。必須以 patch／互動式 staging 只加入目前角色的行；若有尚未確認角色的素材，另建「待確認素材」commit，不能塞進任一已確認角色 commit。
- 每次提交前都必須檢查 `git diff --cached --name-only` 及 `git diff --cached`；角色劇情 commit 必須包含該角色的 `project/story/` 正式來源檔，提交後立即用 `git show --stat --name-only <commit>` 複核，確認沒有跨角色或無關檔案。
- 多角色 ZIP 的基準更新例外：所有角色 commit 完成後，再建立一個只修改本節基準雜湊的最後 commit，將最後一個角色劇情 commit 的完整雜湊寫入本節。基準 commit 不得包含劇情、圖片、註冊或 TODO 以外的變更；下一次更新從該雜湊之後開始。
- 若未能完成上述逐角色 staging 或驗證，不得宣稱已完成提交；應保留變更並回報阻塞原因。

## Luna 執行限制

本節只適用於使用 Luna 的執行者；Terra 或使用者明確授權時不受本節限制。

- Luna 只可處理使用者已明確指定檔案或場景的局部劇情、對話與事件修改；不得自行把 TODO、commit 訊息或劇本註記視為刪除、改寫或擴大工作範圍的授權。
- 禁止自行刪除或移動劇情、樓層、角色支線、圖片、BGM 或其他素材；即使 TODO 寫有「移除」也必須取得使用者當次明確指示。
- 禁止修改 `scripts/`、`extensions/`、`project/plugins.js`、`project/functions.js`、`project/data.js`、`project/akiba-event-meta.json`；需要碰到這些共用或註冊檔時，停止並請使用者改用 Terra 或明確授權。
- 禁止執行可能批量覆寫樓層、劇本或素材的生成器與重建工具。若局部修改後的 diff 出現未指定的場景、資產或共用檔案，立即停止，不可自行收斂或提交。
- 若需求包含跨章節重生、既有事件接入保留、支線移除、素材註冊、Git 歷史判讀或多個 commit 的協調，一律建議使用 Terra；Luna 僅可先做唯讀盤點並回報需要的明確指示。

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
- [角色劇情壓縮檔任務拆分流程](agent/角色劇情壓縮檔任務拆分流程.md)
- [TODO 與待確認事項](agent/todo.md)
- [小遊戲新增與接入指南](agent/minigame-integration.md)
- [AI 撰寫檢查清單](agent/checklist.md)

## 原始指南

原本集中在 `AI_AVG_EDITOR_GUIDE.md` 的內容已依功能拆分到 `agent/` 目錄；該檔現在保留為轉向入口。

## 更新
劇情可能會在某個時間點後更新；如果我要求更新劇情，只需要考慮以下 commit 後（不含）的劇情即可：

b86cbde245c4ccba75c3382da3a2b2aad581cc80

每次更新劇情一律建立兩個 commit：第一個 commit 提交實際劇情更新；第二個 commit 僅更新本節的基準 commit，將第一個 commit 的完整雜湊寫入上方。完成第二個 commit 後，下一次更新以該雜湊為新的起點。
