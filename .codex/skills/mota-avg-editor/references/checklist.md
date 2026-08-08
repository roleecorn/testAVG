# AI 撰寫檢查清單

這份清單只保存所有分支共用的交付檢查。圖片、樓層、BGM、CG、表情圖、ZIP 與 Akiba 等專用驗收，必須讀取本次實際使用之 reference／子 Skill 的 `Validation` 或驗收段落，不在此重複。

- 已讀取並遵守本次實際使用的每一個 reference／子 Skill 驗收段落。
- 所有角色劇情變更都能追溯至 `project/story/*.txt` 真實來源；scene／floor 沒有反向取代文本。
- 新增或修改的檔案、ID、註冊資料與引用彼此存在且一致。
- 所有事件 JSON、JavaScript 與 JSON 資料均通過相應語法檢查。
- 已執行 `python scripts/build_action_cgs.py --check` 與 `node scripts/generate_main_story.js --check`；所有標準主線 floor 均為 17×13，且生成器沒有把地圖寫回 13×13。
- 主線與角色支線遵循同一套全局 AVG 版面；若現有 floor 尚未遷移，交付中明確標示為等待 layout config 實作與視覺驗收的既有實作債，不把它當成允許的新例外。
- `[人名：內容]` 簡訊仍輸出為帶角色名的手機對話；帶冒號的長敘事方括號仍是旁白，生成器沒有把兩者互相誤判，也沒有自行改寫來源台詞用字。
- 六張已登錄的主線動作 CG 都能由目前來源中的 CG／GIF 名稱命中；`*_cg.png` 母檔與 416×286 `*_action_cg.png` 衍生檔的 manifest 雜湊同步，來源標記改名時不會靜默退回 placeholder。
- 新版 544×416 AVG 版面採左人物、中央窄對話框、右人物的下方橫向構圖；人物 bottom 全部只由一個 `portraitBottomGap` 參數控制，且人物 z-order 低於對話框 UI。
- 左右人物位置只代表可用槽位；每句已清空所有人物 code 並只顯示當前發言者，三人以上場景沒有新增第三槽位或保留非發言者。
- 精確人物槽位、`portraitBottomGap` 預設值與對話框矩形在實作時已用遊戲內畫面量測並集中於單一 layout config；floor／角色 mapping 沒有重複寫死 gap 或最終座標。
- 若本次仍是純規範階段，確認沒有修改 generator、floor、事件或資產，也沒有把尚未量測的 placeholder 值寫成正式座標。
- 每個 `【背景：地點】` 都精確映射到唯一檔名；正式圖只替換地點專檔，未覆寫任何共用 generic 背景。
- 劇本製作指令已轉成事件，不會以 `【CG：...】`、`【GIF：...】`、`【背景：...】` 等文字直接顯示給玩家。
- 修改保持在使用者授權與本次任務範圍內；局部修改沒有造成整檔重排或無關生成器輸出。
- 已檢查 `git diff --name-only`、`git diff --stat` 與 `git diff --check`；若使用者要求提交，也已檢查 staged diff 與 commit 邊界。
- 任務中的每項疑慮均已寫入 `.codex/task-questions/`；未解項目已匯總到正確的長期 TODO。
- 所有阻塞疑慮都已解決，或受影響分支已停止並明確回報；非阻塞疑慮沒有被當成猜測授權。
- 已執行可行的遊戲內或隔離流程測試，並在交付時列出未能執行的檢查。
- Skill 或路由有變更時，已執行 Skill 快速驗證與 `scripts/validate_agent_skill_routes.js`。
