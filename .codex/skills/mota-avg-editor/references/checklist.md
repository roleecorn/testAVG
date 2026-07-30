# AI 撰寫檢查清單

這份清單只保存所有分支共用的交付檢查。圖片、樓層、BGM、CG、表情圖、ZIP 與 Akiba 等專用驗收，必須讀取本次實際使用之 reference／子 Skill 的 `Validation` 或驗收段落，不在此重複。

- 已讀取並遵守本次實際使用的每一個 reference／子 Skill 驗收段落。
- 所有角色劇情變更都能追溯至 `project/story/*.txt` 真實來源；scene／floor 沒有反向取代文本。
- 新增或修改的檔案、ID、註冊資料與引用彼此存在且一致。
- 所有事件 JSON、JavaScript 與 JSON 資料均通過相應語法檢查。
- 劇本製作指令已轉成事件，不會以 `【CG：...】`、`【GIF：...】`、`【背景：...】` 等文字直接顯示給玩家。
- 修改保持在使用者授權與本次任務範圍內；局部修改沒有造成整檔重排或無關生成器輸出。
- 已檢查 `git diff --name-only`、`git diff --stat` 與 `git diff --check`；若使用者要求提交，也已檢查 staged diff 與 commit 邊界。
- 任務中的每項疑慮均已寫入 `.codex/task-questions/`；未解項目已匯總到正確的長期 TODO。
- 所有阻塞疑慮都已解決，或受影響分支已停止並明確回報；非阻塞疑慮沒有被當成猜測授權。
- 已執行可行的遊戲內或隔離流程測試，並在交付時列出未能執行的檢查。
- Skill 或路由有變更時，已執行 Skill 快速驗證與 `scripts/validate_agent_skill_routes.js`。
