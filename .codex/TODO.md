# Agent and Skill TODO

保存跨功能的 Agent／Skill 長期未解事項。單次任務疑慮先寫入 `.codex/task-questions/`；只有尚未解決且需要跨任務追蹤的項目才匯總到這裡。

## Open

- `20260823-023000-main-shared-portrait-resolver.md` Q1：`project/timeline.json` 仍因 `EPERM` 無法由主線 generator 更新；解除檔案鎖定／ACL 後重新產生並驗證。
- `20260823-023000-main-shared-portrait-resolver.md` Q2：東山 source → Story IR 情緒決策表仍待修復；目前不在 emitter 階段用函數或文字 regex 猜測情緒。

## Resolved

- `20260823-023000-main-shared-portrait-resolver.md` Q3：排除使用者指定移出範圍的 `huangmo_1/2` 後，56 個角色支線 floor 已由共用 emitter 重建並通過 Story IR round-trip 驗證；`huangmo_1/2` 保持無 diff。
- `20260816-195916-character-scene-return-validation.md` Q1：新增 typed Akiba lifecycle IR 節點與終端路徑驗證，並修復 `lala_1`～`lala_4`、`okabe_1`～`okabe_4`、`shirou_1`～`shirou_4` 的回傳流程；角色 IR、floor、Akiba 管理器與主線檢查均通過。
- `20260811-103543-akiba-minigame-study.md` Q4：原先把 `<canvas>` fallback 文字誤判為實際畫面；內建瀏覽器已完成「公園清潔隊」通關、計分與返回地圖的實機驗收。
- `20260811-103543-akiba-minigame-study.md` Q1：以實際 `project/location-mappings.json` 的 22 個地點為正式範圍，並把 `akiba.md` 預期數量由 27 修正為 22。
- `20260811-103543-akiba-minigame-study.md` Q2：已更新 `minigame-integration.md`，移除不存在的 `mapo_1_1.js` 示範入口敘述，改記 Akiba 地點選單正式入口。
- `20260809-140234-agent-skill-todo-resolution.md` Q1：主線與角色支線共用 `scripts/story_ir.js` schema／validator／emitter；IR 納入 Git 的 `project/story-ir/`，保存來源路徑與 SHA-256。`scripts/generate_main_story.js` 與 `scripts/manage_story_ir.js` 都只從通過驗證的 IR 產生 floor。
- `20260809-004949-avg-layout-spec.md` Q1／`20260809-140234-agent-skill-todo-resolution.md` Q2：全局人物可見寬度硬上限定為 `128px`、對話框遮擋比例上限為 25%；runtime 依 alpha bbox 與各槽可用空間取更小有效上限，過大時等比例縮小且不放大小圖，不建立角色專屬 offset。
- `20260808-120000-update-story.md` Q1／Q2：主線與角色支線分別以 `project/mainStory/CH1`～`CH6`、`project/story/*.txt` 為唯一真實來源；當次更新範圍已依基準 commit 規則完成，不存在待提供劇本的持續阻塞。
- `20260809-001410-project-principle-audit.md` Q1：主線與角色支線採同一套全局 AVG 版面，舊支線遷移延後至版面定稿。
- `20260809-001410-project-principle-audit.md` Q2：`*_cg.png` 為母檔，`scripts/build_action_cgs.py` 產生 `*_action_cg.png` 與同步 manifest，generator `--check` 驗證兩者。
- `20260809-001410-project-principle-audit.md` Q3：每個地點使用獨立背景檔名與精確 mapping，generic 背景只作 placeholder 來源。
