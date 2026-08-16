# 角色劇情 TODO

## 待確認人物

- `lala`／菈菈安瑟姆：已確認 ZIP 的 `菈菈安瑟姆.txt` 為權威來源；同名 DOCX 僅在 TXT 不存在時作為 fallback。已完成 `project/story/菈菈安瑟姆.txt`、Story IR、立繪、配角素材與 `lala_1`～`lala_4` floor 接入。
- 本次 fresh ZIP run（`drive-download-20260816T121208Z-1-001.zip`，SHA-256 `569AE6B26AE94E1712D45C69A51B32FC2DCD43F261E68FEE91280878D67DB5DF`，run `20260816-201520`）已完成 `ruka`／漆原瑠華、`idw`／IDW、`sena`／柏崎星奈 三份來源、Story IR、floor、Akiba 首段入口與表情圖接入；漆原來源中的自報姓名字面 `漆原?華` 已由使用者確認為預期內容，保留原文。詳見 `.codex/task-questions/20260816-201520-zip-story.md`。

## 待補劇情


## 待補素材

- `watanuki_sakuya_1`～`watanuki_sakuya_4`：神社場景尚無可重用的 544×416 正式背景；目前仍使用 1438×810 的 `watanuki_shrine_bg.jpg`，待繪製神社背景後替換。
- 本次 ZIP 剩餘 14 張圖片已由使用者確認為各篇章主角生成圖的來源，全部改列 `generated-source` 並從 `unknown/` 移除；各角色生成圖輸出或尚未落地狀態見永久 `project/story/manifest.md` 與本次 run 的 `work/asset-usage.md`。`師匠.png` 另已確認為店長「東方不敗」，接入 `shirou_3`。
- `yuedu_ai_4` 的 `便利店.jpg` 與 `熟悉的街角.png` 原始比例不是 runtime 的 544×416；本次以可追溯的等比置中裁切產生 `yuedu_convenience_store.png`、`yuedu_familiar_corner.png` 並接入，待視覺驗收確認裁切是否接受。既有 `mikage_bookstore.jpg` 尺寸問題亦仍保留待辦。
- `ruka_2`、`ruka_3`、`ruka_4` 與 `sena_3` 的泛用小巷使用 `ruka_generic_alley_placeholder.png`；`ruka_4` 的昏暗商業地點使用 `ruka_commercial_interior_dark_placeholder.png`；`sena_1`／`sena_4` 的旅店內部使用 `sena_hotel_interior_placeholder.png`。這些檔案由既有 544×416 背景複製，待正式地點背景替換，完成條件是保留唯一檔名、更新 IR／floor／manifest 並通過 `node scripts/manage_story_ir.js`。
- `ruka_1`、`ruka_2`、`ruka_4` 與 `sena_3` 的來源 CG 尚無正式素材，暫用唯一命名的 `*_cg_*_placeholder.png`；`ruka_2` 的 `GET WILD` 尚無音檔，暫以已登錄 `great_mission_heroic.mp3` 播放。完成條件是取得正式素材後替換對應檔案／BGM、更新 manifest 與 IR，並重新完成圖片／音訊與遊戲內驗證。

## 待實作演出或小遊戲

- 目前無。

## 已確認可處理

- `huangmo_1` 已作為新版 AVG 布局的首個驗證場景；目前所有主線與角色支線 floor 均共用相同語意槽位與 runtime 契約。
- 荒漠篇權威來源已由 commit `7903fa9b762df8518a586d46ed632c0e4b38d10b`／`19dc06e9b96afde7e961ea4032533d1a4a17c37b` 追溯確認，並移至 `project/story/荒漠支線.txt`。後續若修改 `huangmo_1`／`huangmo_2` 劇情內容，必須以此文本為準。
- `huangmo_1`／`huangmo_2` 的既有修字與句末標點已回寫 `project/story/荒漠支線.txt`，並由 `project/story-ir/character/huangmo.json` 記錄來源 SHA-256；後續不得以 floor 反向覆蓋母檔。
