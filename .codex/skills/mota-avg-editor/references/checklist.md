# AI 撰寫檢查清單

這份清單只保存所有分支共用的交付檢查。圖片、樓層、BGM、CG、表情圖、ZIP 與 Akiba 等專用驗收，必須讀取本次實際使用之 reference／子 Skill 的 `Validation` 或驗收段落，不在此重複。

- 已讀取並遵守本次實際使用的每一個 reference／子 Skill 驗收段落。
- 本次所有新增與更新都遵守「使用者明確需求與權威劇情來源 → Story IR／scene 需求 → 素材與實作 → runtime 接入與驗證」；每項實作／素材都能反查需求依據，每項需求都有實作或依規定留下阻塞／TODO，沒有由現有素材、floor、資料登錄、工具或舊實作反向增刪或扭曲劇情。
- `project/mainStory/` 與 `project/story/` 沒有任何 Agent 自行編修、局部 patch、補寫、潤稿、修錯字、格式化、刪除、搬移、重新命名或由衍生物反向改寫；若本次有來源檔變更，只能是可追溯完整來源的新增或整檔覆蓋。
- 本次新增或整檔覆蓋的來源檔已核對輸入內容與 SHA-256，並與對應 Story IR、scene／floor 同一內容 commit 提交；來源若早已由外部 commit 提交，則未重複 staging。
- 所有角色劇情變更都能追溯至 `project/story/*.txt` 真實來源；scene／floor 沒有反向取代文本。
- 主線與角色支線都先由來源文本產生相同 schema 的可序列化 Story IR，通過 schema、必要參數、流程與素材驗證後才產生引擎事件；沒有任一分支直接從未驗證原文生成事件。
- 每個受影響的劇情 chapter／scene 都同時存在於來源文本、Story IR 與對應 scene／floor；只新增或修改 Story IR 而沒有對應 scene／floor 更新，不算完成。
- Story IR 與對應 scene／floor 是同一個原子提交單位；staged diff 中每個變更的 `project/story-ir/` 檔案都必須有對應 floor／scene diff，禁止 IR-only commit。
- 自然語言理解只存在於 Story IR 正規化階段；事件生成器只做確定性映射。未辨識或缺參數的製作指令已停止受影響範圍並落入 question／TODO，沒有降級成玩家可見文字。
- `使用BGM`、`BGM暫停`、`播放音效` 等語意及其自然語言變體均先轉成 `bgm.play`、`bgm.pause`、`sound.play` 等 Story IR 節點，再映射為合法引擎事件；必要曲目或音效名稱在驗證前已解析完成。
- 新增或修改的檔案、ID、註冊資料與引用彼此存在且一致。
- ZIP 劇情匯入已按角色依序完成「完整閱讀來源 → draft Story IR 視覺需求 → 來源圖片配對／生成 → validated Story IR → floor／入口」；沒有先整批複製圖片到 `project/images/` 再找用途。
- 已逐張比對 intake／asset-usage manifest：每張 ZIP 圖片都有原始路徑與 SHA-256，並分類為 scene 直接使用、生成來源，或根層 `unknown/<角色ID>/` 的未應用待辦。只有前兩者算已應用；`unknown/` 圖片未放入 `project/images/` 或 `main.images`，且角色劇情已寫入 `project/story/TODO.md`、主線已寫入 `project/mainStory/TODO.md`。
- Story IR 明確需要但缺少正式圖片的每個位置，都已複製其他合適圖片作暫時替代並完成 `project/images/ → main.images → scene`。TODO 已依故事類型寫入 `project/story/TODO.md` 或 `project/mainStory/TODO.md`，並包含暫時檔名、copied source、預期正式素材、scene、替換條件與驗證證據。
- 已檢查 `project/images/ → project/data.js -> main.images → validated Story IR scene → floor`：images 目錄沒有未登錄圖片，data 沒有未被 scene 使用的圖片登錄，scene 引用與 floor 實作一致。單純登錄不算使用。
- 所有事件 JSON、JavaScript 與 JSON 資料均通過相應語法檢查。
- 已執行 `python scripts/build_action_cgs.py --check`、`node scripts/generate_main_story.js --check` 與 `node scripts/manage_story_ir.js`；主線與支線 IR 的來源 SHA-256、schema、素材／跳轉註冊及 floor round-trip 均一致，所有標準主線 floor 均為 17×13。
- 主線與角色支線遵循同一套全局 AVG 版面；新版面完成實作後，所有 AVG floor 都只引用單一當前發言者語意槽，後續視覺調整只修改全局 layout config 與共用資產規則，沒有新增 floor 或角色例外。
- `[人名：內容]` 簡訊仍輸出為帶角色名的手機對話；帶冒號的長敘事方括號仍是旁白，生成器沒有把兩者互相誤判，也沒有自行改寫來源台詞用字。
- 六張已登錄的主線動作 CG 都能由目前來源中的 CG／GIF 名稱命中；`*_cg.png` 母檔與 416×286 `*_action_cg.png` 衍生檔的 manifest 雜湊同步，來源標記改名時不會靜默退回 placeholder。
- 新版 544×416 AVG 版面採「單一當前發言者－下方對話框」的上下構圖；人物可見 bbox 左右置中於畫面，且可見 bottom 精準等於對話框 top（`dialogueY`），z-order 低於對話框 UI，沒有遮住角色名或正文。
- 每句已清空所有人物 code 並只在同一槽顯示當前發言者；旁白已清空人物，三人以上場景沒有新增其他槽位或保留非發言者。
- 單一人物槽、對話框矩形與縮放率集中於一份全局 layout config，且 `portraitDialogueGap === 0`、`portraitScale === 1.2`；人物依 alpha bbox 錨定，但 alpha bbox 只影響置中與底邊對齊。所有立繪的縮放率完全相同，floor／角色 mapping 沒有寫死非零 gap、縮放或最終座標，也沒有殘留依個別圖片尺寸自動 fit 的邏輯。
- 若本次只更新版面文檔，已明確標示 runtime／emitter／floor 尚未遷移，沒有把文檔定稿誤報為遊戲內實作完成。
- 每個 `【背景：地點】` 都精確映射到唯一檔名；正式圖只替換地點專檔，未覆寫任何共用 generic 背景。
- 每張地點背景都是完整畫面的 544×416；沒有 416×416 或其他錯誤尺寸的地點背景、佔位圖或相容例外遺留在可用資產中。
- 劇本製作指令已轉成事件，不會以 `【CG：...】`、`【GIF：...】`、`【背景：...】` 等文字直接顯示給玩家。
- 修改保持在使用者授權與本次任務範圍內；局部修改沒有造成整檔重排或無關生成器輸出。
- 已檢查 `git diff --name-only`、`git diff --stat` 與 `git diff --check`；若使用者要求提交，也已檢查 staged diff 與 commit 邊界。
- 若本次有 Story IR 變更，已在 `git diff --cached --name-only` 與 `git show --stat --name-only <commit>` 中確認同一 commit 包含其對應 scene／floor，且已驗證事件入口可觸發；若無法做到，該 IR 變更未提交。
- 任務中的每項疑慮均已寫入 `.codex/task-questions/`；未解項目已匯總到正確的長期 TODO。
- 所有阻塞疑慮都已解決，或受影響分支已停止並明確回報；非阻塞疑慮沒有被當成猜測授權。
- 已執行可行的遊戲內或隔離流程測試，並在交付時列出未能執行的檢查。
- Skill 或路由有變更時，已執行 Skill 快速驗證與 `scripts/validate_agent_skill_routes.js`。
