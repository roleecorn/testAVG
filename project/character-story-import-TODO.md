# ZIP 角色個人劇情 TODO

來源：\`drive-download-20260729T131245Z-1-001.zip\`

## 待確認人物

- \`tmp/character-story-import/drive-download-20260729T131245Z-1-001/3.嘿，你知道嗎？(一蕉)/嘿，你知道嗎？.txt\`：公園支線的主要角色是「伊布迷」，但 ZIP 沒有可確認的伊布迷角色基準圖。\`可疑的人.png\` 是香蕉造型支援圖，未套用為伊布迷立繪。待確認正式角色 ID、角色圖與是否要作為角色個人支線接入。
- \`tmp/character-story-import/drive-download-20260729T131245Z-1-001/9.地子(風揚)/比那名居地子篇.docx\`：正文確認顯示名為「比那名居地子」，目前以 \`dizi\` 作為英文樓層／圖片 ID；若專案有指定正式 ID，需同步更名。

## 待補劇情

- 公園「嘿，你知道嗎？」支線尚未接入樓層、事件 metadata 與分支解放邏輯，原因是角色身分與主立繪未確認。
- ZIP 的茱茱、月讀愛劇本與現有 \`juju_1\`–\`juju_4\`、\`yuedu_ai_1\`–\`yuedu_ai_4\` 內容有版本差異；已依既有角色修改規則覆蓋正式來源，並依差異更新原有 8 個 floor。舊版本仍可由 Git 歷史追溯。

## 待補素材

- 目前已接入的六位新增角色均有六張透明表情立繪；Watanuki 神社 CG、地點背景與公園支援素材均已登錄。未發現已接入劇情引用的缺檔素材。

## 待實作演出或小遊戲

- 公園支線的黑屏 BE、福瑞祕密花園名片與「角色支線解放」需在角色確認後補成正式事件。
- ZIP 中未提供專用掌摑／Eternal 音效；御影支線目前以既有 \`attack.mp3\` 作為掌摑演出音效。

## 已確認可處理

- 藍湘：\`lanxiang_1\`–\`lanxiang_4\`
- NoiR：\`noir_1\`–\`noir_4\`
- 茜：\`akane_1\`–\`akane_4\`
- 綿貫咲耶：\`watanuki_sakuya_1\`–\`watanuki_sakuya_4\`
- 御影凛珠：\`mikage_rinju_1\`–\`mikage_rinju_4\`
- 比那名居地子：\`dizi_1\`–\`dizi_4\`（ID 待確認）

## 故事來源檔

- ZIP 中被分類為角色劇情的 8 份原生 TXT 與 1 份 DOCX 提取 TXT，均已正式放置於 `project/story/`，後續樓層更新以該目錄為故事根本。
- ZIP 的月讀愛 TXT 與既有 `project/story/月讀愛.txt` 內容不同；ZIP 原稿保留於 `project/story/月讀愛-ZIP-20260729T131245Z.txt` 作為比對副本，正式來源已覆蓋為 ZIP 版本。
- 茱茱同樣以 ZIP 新稿覆蓋 `project/story/茱茱-角色劇情.txt`，並同步更新 `juju_1`–`juju_4`。
- 月讀愛新稿的 `BGM:EXCITE` 目前以既有 `next_to_you_emotional.mp3` 作為可用替代音樂，待取得正式音源後替換。
