# 角色劇情 TODO

## 待確認人物

- `lala`／菈菈安瑟姆：ZIP 同時提供 `菈菈安瑟姆.txt` 與 `菈菈安瑟姆.docx`，提取後內容與段落結構不同；確認權威稿後才可落地 `project/story/菈菈安瑟姆.txt`、建立 Story IR、註冊立繪並接入 floor。詳見 `.codex/task-questions/20260810-215941-zip-story-update.md`。

## 待補劇情

- 目前無。

## 待補素材

- `watanuki_sakuya_1`～`watanuki_sakuya_4`：神社場景尚無可重用的 544×416 正式背景；目前仍使用 1438×810 的 `watanuki_shrine_bg.jpg`，待繪製神社背景後替換。

## 待實作演出或小遊戲

- 目前無。

## 已確認可處理

- `huangmo_1` 已作為新版 AVG 布局的首個驗證場景；目前所有主線與角色支線 floor 均共用相同語意槽位與 runtime 契約。
- 荒漠篇權威來源已由 commit `7903fa9b762df8518a586d46ed632c0e4b38d10b`／`19dc06e9b96afde7e961ea4032533d1a4a17c37b` 追溯確認，並移至 `project/story/荒漠支線.txt`。後續若修改 `huangmo_1`／`huangmo_2` 劇情內容，必須以此文本為準。
- `huangmo_1`／`huangmo_2` 的既有修字與句末標點已回寫 `project/story/荒漠支線.txt`，並由 `project/story-ir/character/huangmo.json` 記錄來源 SHA-256；後續不得以 floor 反向覆蓋母檔。
