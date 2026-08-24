# 角色劇情 TODO

## Resolved：portrait-generation-backend

- ComfyUI 已由使用者明確禁止，不得用於角色立繪生成、重生成或驗收。
- 主線與支線統一沿用 `anime-expression-grid` → 內建 `imagegen`，不要求本機生成後端；ComfyUI 不得使用。
- Evidence: `.codex/task-questions/20260823-230151-portrait-generation-backend.md`。

## Open：20260823 最新角色支線 ZIP

- Fresh run：`tmp/character-story-import/drive-download-20260823T111855Z-1-001/20260823-192556`；原始 ZIP SHA-256：`49CE655BDA170D9FA6264AFB84C82CA518685748D800E11257F02C9E3B54CEC6`。
- 本次已完成全新解壓、文字／DOCX 抽取、完整 SHA-256 盤點與圖片實際格式／尺寸／SHA-256 盤點；文字分類證據為 `work/text-classification.json`，圖片分類證據為 `work/image-inventory.json`。
- 既有角色更新來源尚未落地至 `project/story/`、Story IR 或 floor，因本批新增多個 CG／字體／鏡頭／BGM／SE 指令，需先完成逐角色語意翻譯與素材用途配對；不得以來源雜湊更新代替劇情更新。
- 茜同時提供 `茜.txt` 與 `茜(添加CG的修正版).txt`；兩份差異為新增 `願與你同行` CG 出現／消失指令。本次暫採修正版作為候選完整來源，仍保留兩份原始證據，見 `.codex/task-questions/20260823-192556-zip-story.md`。
- 新增文本：`可露凱.txt`、`神秘香蕉人.txt`；可露凱與神秘香蕉人已依完整來源轉入 Story IR、scene／floor、素材與 Akiba 首段入口。神秘香蕉人文本中明列但 ZIP 未提供的 CG 仍保留為待補素材。
- `17.蘭斯` 只有圖片、沒有角色支線權威文本；使用者已明確要求移除 `Cg00011.png` 與 `Sill-01_(2).png`，兩張已從 `unknown/lance/` 移除；ZIP raw 原始檔仍保留作為本次 intake 證據。
- DOCX 提取流程已正規化：`scripts/extract_docx_text.py` 直接按 `word/document.xml` 段落輸出 UTF-8 無 BOM、LF-only TXT，保留空段落、手動換行與 tab；舊有含字面 `\\n` 的提取物不得再使用。地子已改用正規化提取結果覆蓋來源。香蕉人／茜 DOCX 與 TXT 版本不一致，保留 TXT 作為已確認來源並記錄 DOCX 比對證據。
- TXT 編碼也已正規化：`scripts/normalize_story_text.py` 先嚴格辨識 UTF-8／UTF-8 BOM，失敗時以 CP950 解碼，再輸出 UTF-8 無 BOM、LF-only；已修復漆原瑠華／柏崎星奈的 `�` 來源問題，並重新同步所有本次來源 SHA。
- 本次 ZIP 提供的圖片目前已全部離開 `unknown/`；既有角色與兩個新角色的素材已完成 `project/images → data.js → Story IR → floor` 閉環。
- 可露凱與神秘香蕉人的部分 SE、特殊鏡頭與來源列出的缺少 CG 仍待正式素材／演出規格；台詞、旁白、段落流程與可解析 BGM／背景已完整進入 IR，缺少正式素材的項目不得誤標為已完成。

## 待確認人物

- `lala`／菈菈安瑟姆：已確認 ZIP 的 `菈菈安瑟姆.txt` 為權威來源；同名 DOCX 僅在 TXT 不存在時作為 fallback。已完成 `project/story/菈菈安瑟姆.txt`、Story IR、立繪、配角素材與 `lala_1`～`lala_4` floor 接入。
- 本次 fresh ZIP run（`drive-download-20260816T121208Z-1-001.zip`，SHA-256 `569AE6B26AE94E1712D45C69A51B32FC2DCD43F261E68FEE91280878D67DB5DF`，run `20260816-201520`）已完成 `ruka`／漆原瑠華、`idw`／IDW、`sena`／柏崎星奈 三份來源、Story IR、floor、Akiba 首段入口與表情圖接入；漆原來源中的自報姓名字面 `漆原?華` 已由使用者確認為預期內容，保留原文。詳見 `.codex/task-questions/20260816-201520-zip-story.md`。
- Open: `akiba-horses-knee-kasou-identity`
  - Scope: `project/location-mappings.json` 的「馬的膝蓋」與尚未建立的卡總支線入口。
  - Done when: 使用者確認「卡總」的正式角色名稱／角色 ID，並在有可追溯來源文本與對應 scene／floor 後完成事件接入。
  - Evidence: 對應來源、Story IR、floor、Akiba event meta 與驗證結果。

## 待補劇情

- `huangmo_1`／`huangmo_2` runtime floor 與 Akiba 入口已依使用者指示移除；權威來源與既有 Story IR 保留作歷史追溯，未自動改寫 IR。


## 待補素材

- Open：本次支線角色六表情生成仍有局部阻塞。`茱茱` 的 raw 參考圖被內建 imagegen 以 `sexual` 類別拒絕；`良秀` 生成結果身份漂移；唐三因切割結果出現跨格鞋部而暫不替換。菈菈安瑟姆已由使用者確認符合要求，並完成固定流程後替換既有 `project/images/` 同名素材。其餘已確認角色亦已完成 `split_emotion_image.py` → `remove_bk.py` 後替換；原檔保存在本次 run `work/bulk-replacement/original-assets/`。`師匠`、`月讀愛`、`漆原瑠華` 的前一批替換原檔仍在 `work/replacement-run/original-assets/`。Evidence：`.codex/task-questions/20260824-000000-character-portrait-grid.md`、`tmp/character-story-import/drive-download-20260823T111855Z-1-001/20260823-192556/work/bulk-replacement/`。

- `watanuki_sakuya_1`～`watanuki_sakuya_4`：神社場景尚無可重用的 544×416 正式背景；目前仍使用 1438×810 的 `watanuki_shrine_bg.jpg`，待繪製神社背景後替換。
- 本次 ZIP 剩餘 14 張圖片已由使用者確認為各篇章主角生成圖的來源，全部改列 `generated-source` 並從 `unknown/` 移除；各角色生成圖輸出或尚未落地狀態見永久 `project/story/manifest.md` 與本次 run 的 `work/asset-usage.md`。`師匠.png` 另已確認為店長「東方不敗」，接入 `shirou_3`。
- `yuedu_ai_4` 的 `便利店.jpg` 與 `熟悉的街角.png` 原始比例不是 runtime 的 544×416；本次以可追溯的等比置中裁切產生 `yuedu_convenience_store.png`、`yuedu_familiar_corner.png` 並接入，待視覺驗收確認裁切是否接受。既有 `mikage_bookstore.jpg` 尺寸問題亦仍保留待辦。
- `ruka_2`、`ruka_3`、`ruka_4` 與 `sena_3` 的泛用小巷使用 `ruka_generic_alley_placeholder.png`；`ruka_4` 的昏暗商業地點使用 `ruka_commercial_interior_dark_placeholder.png`；`sena_1`／`sena_4` 的旅店內部使用 `sena_hotel_interior_placeholder.png`。這些檔案由既有 544×416 背景複製，待正式地點背景替換，完成條件是保留唯一檔名、更新 IR／floor／manifest 並通過 `node scripts/manage_story_ir.js`。
- `ruka_1`、`ruka_2`、`ruka_4` 與 `sena_3` 的來源 CG 尚無正式素材，暫用唯一命名的 `*_cg_*_placeholder.png`；`ruka_2` 的 `GET WILD` 已接入使用者提供的 `Get_Wild.mp3`，原曲／授權追溯仍待補。完成條件是取得正式素材授權資訊或完成人工驗收，並重新完成圖片／音訊與遊戲內驗證。

- BGM 映射狀態：`可露凱 unwelcome school → Unwelcome_School.mp3`、`月讀愛 EXCITE → EXCITE.mp3` 已由使用者提供正式檔案並接入；`月讀愛 希望之花 → BGMYume.mp3`、`綿貫咲耶 陰森的神明大祭 → BGMWitch.mp3`、`神秘香蕉人 目標是成為寶可夢大師最後10秒 → BGMRun.mp3` 仍是候選，詳見 `.codex/task-questions/20260824-221212-bgm-mapping-candidates.md`。

## 待實作演出或小遊戲

- 目前無。

## 已確認可處理

- `huangmo_1`／`huangmo_2` 曾作為角色支線與新版 AVG 布局驗證場景，現已依使用者指示移除 runtime 接入。
- 荒漠篇權威來源已由 commit `7903fa9b762df8518a586d46ed632c0e4b38d10b`／`19dc06e9b96afde7e961ea4032533d1a4a17c37b` 追溯確認，並移至 `project/story/荒漠支線.txt`。後續若修改 `huangmo_1`／`huangmo_2` 劇情內容，必須以此文本為準。
- `huangmo_1`／`huangmo_2` 的既有修字與句末標點已回寫 `project/story/荒漠支線.txt`，並由 `project/story-ir/character/huangmo.json` 記錄來源 SHA-256；後續不得以 floor 反向覆蓋母檔。
