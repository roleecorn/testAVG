# 角色劇情 TODO

## 待確認人物

- `lala`／菈菈安瑟姆：已確認 ZIP 的 `菈菈安瑟姆.txt` 為權威來源；同名 DOCX 僅在 TXT 不存在時作為 fallback。已完成 `project/story/菈菈安瑟姆.txt`、Story IR、立繪、配角素材與 `lala_1`～`lala_4` floor 接入。
- 本次 fresh ZIP run（`drive-download-20260816T094408Z-1-001.zip`，SHA-256 `d93a6f96843cad540ab584f7d0ecdd9eab6301c10aca7fc1f1ec158d8b754b25`，run `20260816-174815`）新增 `ruka`／漆原瑠華、`idw`／IDW、`sena`／柏崎星奈 三份完整來源；目前尚無 Story IR、floor、入口與可驗收演出，暫不落地 `project/story/`，詳見 `.codex/task-questions/20260816-175000-zip-story-assets.md`。

## 待補劇情

- `ruka`／漆原瑠華、`idw`／IDW、`sena`／柏崎星奈：來源已保存於本次 fresh run `work/text/`，待建立 Story IR、scene/floor、入口與素材接入後，才能依來源原子落地。

## 待補素材

- `watanuki_sakuya_1`～`watanuki_sakuya_4`：神社場景尚無可重用的 544×416 正式背景；目前仍使用 1438×810 的 `watanuki_shrine_bg.jpg`，待繪製神社背景後替換。
- 本次 ZIP 剩餘 14 張圖片已由使用者確認為各篇章主角生成圖的來源，全部改列 `generated-source` 並從 `unknown/` 移除；各角色生成圖輸出或尚未落地狀態見永久 `project/story/manifest.md` 與本次 run 的 `work/asset-usage.md`。`師匠.png` 另已確認為店長「東方不敗」，接入 `shirou_3`。
- `yuedu_ai_4` 的 `便利店.jpg` 與 `熟悉的街角.png` 原始比例不是 runtime 的 544×416；本次以可追溯的等比置中裁切產生 `yuedu_convenience_store.png`、`yuedu_familiar_corner.png` 並接入，待視覺驗收確認裁切是否接受。既有 `mikage_bookstore.jpg` 尺寸問題亦仍保留待辦。

## 待實作演出或小遊戲

- 目前無。

## 已確認可處理

- `huangmo_1` 已作為新版 AVG 布局的首個驗證場景；目前所有主線與角色支線 floor 均共用相同語意槽位與 runtime 契約。
- 荒漠篇權威來源已由 commit `7903fa9b762df8518a586d46ed632c0e4b38d10b`／`19dc06e9b96afde7e961ea4032533d1a4a17c37b` 追溯確認，並移至 `project/story/荒漠支線.txt`。後續若修改 `huangmo_1`／`huangmo_2` 劇情內容，必須以此文本為準。
- `huangmo_1`／`huangmo_2` 的既有修字與句末標點已回寫 `project/story/荒漠支線.txt`，並由 `project/story-ir/character/huangmo.json` 記錄來源 SHA-256；後續不得以 floor 反向覆蓋母檔。
