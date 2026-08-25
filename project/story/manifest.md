# 角色原始資源 Manifest

此檔保存角色原始劇本與素材的使用方法及最後命名，是可更新的追溯 metadata，不是劇情來源。劇情內容仍只以同目錄的 `.txt` 為準；本檔不得反向改寫來源、Story IR 或 scene。欄位與更新規則以 `.codex/skills/mota-avg-editor/references/images.md` 及 `archive-story-task-splitting.md` 為準。劇本使用方式記為 `authoritative-source`，素材使用 `direct`、`generated-source` 或 `unknown-todo`。

既有無法追溯的歷史仍標記 `needs-backfill`；本次 fresh ZIP run 的逐張來源、SHA-256、差異、用途、最終路徑與驗證證據已逐角色補登。不得依檔名、相似內容或 commit 訊息猜測舊血緣。

本次 ZIP 序號統一使用日期時間格式 `YYYYMMDD-HHmmss`：`20260816-174815`。原始 ZIP 檔名 `drive-download-20260816T094408Z-1-001.zip` 與 SHA-256 `d93a6f96843cad540ab584f7d0ecdd9eab6301c10aca7fc1f1ec158d8b754b25` 保留於本次 run 的 `work/run-manifest.md`，表內以 ZIP 序號追蹤。

每個角色區段使用相同表格；一個原始資源一列，產生多個最終檔名時在「最後命名／路徑」完整列出。穩定紀錄鍵格式為 `<character-id>:<原始資源 SHA-256>:<raw 相對路徑>`。

## main-story／20260824 主線追加素材 run

主線來源不是角色原始 TXT；本段只保存素材追溯入口，不作為劇情來源。原始 ZIP：`主線追加-20260824T085831Z-1-001.zip`；SHA-256：`AF72FC7ABECFFDBB32D15DCAA79157521AABCE4F627621DA2DB8E0BE32B23F22`；fresh run：`20260824-183110`。逐檔格式、尺寸、SHA-256、差異狀態、目前命名與用途見 `tmp/character-story-import/主線追加-20260824T085831Z-1-001/20260824-183110/work/run-manifest.md`。

| Run | 原始資源 | 種類 | 差異／落地結果 | Story IR／驗證 |
|---|---|---|---|---|
| 20260824-183110 | `主線追加/BGM/*.mp3`（24） | BGM | 20 new、4 identical-existing；接入 `project/bgms/` 並登錄 `project/data.js` | `project/story-ir/main/CH1.json`～`CH7.json`；`validate_story.js` passed |
| 20260824-183110 | `主線追加/更改、追加CG與背景代辦/*.png`（43） | CG／背景 | 依目前首個權威指令行號接入；三筆跨行號 mapping 及 `CH2_L306→CH2_L295` 規則見 run manifest | `validate_story_source.js` passed；110 line assets |
| 20260824-183110 | 主線背景 runtime 正規化（24） | background | 依 AVG 畫布契約保留完整構圖，直接縮放為 `544x416`；原始來源血緣不變，runtime 輸出 SHA-256 見 run manifest | `project/story-ir/main/CH1.json`～`CH7.json` 的 `background.show`；`validate_story.js` |
| 20260824-183110 | 失效歷史 `CH<N>_L<N>.png` | stale lineage | 移至 `project/images/unknown/main-story-stale/`，保留舊檔與追溯紀錄，不註冊／不引用 | `project/data.js`、Story IR 已清除舊引用 |

## 20260823-192556 支線立繪替換追蹤

本次只處理支線角色；半身／裁切 raw 參考圖只用於身份與外觀，正式輸出均經固定 `anime-expression-grid`、`split_emotion_image.py`、`remove_bk.py`。下列新生成表取代先前立繪；原始列保留作血緣。唐三因切割結果出現跨格鞋部，未寫入。

去背規則已更新：只使用綠幕 HSV 候選，不再把近白色像素列為背景；以邊界連通區為主，並只將超過影像面積 0.2% 的大型封閉綠色區塊補判為背景，小型綠色角色細節保留。重新輸出證據位於 `work/deback-v3/`。

| 角色 | 生成表 SHA-256 | 最終替換檔案 | 狀態 |
|---|---|---|---|
| 藍湘 | `a8abf5d1bb6a555ee14460abc05e09a5d52a5501b34fc924ab28a0f5235b8f89` | `project/images/lanxiang_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 神秘香蕉人 | `0883ff2aa643541e156701a0236b406ae3a0f00293ae402090ce7fb118175160` | `project/images/banana_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| NoiR | `0874389bd028ca4db1f9248a7010bf5d8726f821ba2609936f8ef6085497fb53` | `project/images/noir_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 茜 | `85e8beb7b205708ceee5ef5d4487d871d85ad288abc6fdd43ee24e472eadcbd9` | `project/images/akane_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 綿貫咲耶 | `a8d6dfe4349fff21734ee80eb64a4a1365d19e3874890a72d8a013b1d5a65c2c` | `project/images/watanuki_sakuya_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 御影凛珠 | `0e8629aa2c5fe9e47d5921b35f70cddcefae7639474e63d6570679111eb23ed4` | `project/images/mikage_rinju_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 地子 | `360adc256aa5cd7cefd97519c71740afa9648de3c734db281ba1489f87c6a746` | `project/images/dizi_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 衛宮士郎 | `d6398a267af249aa762aa29989ac1de7ba65573a9e0b570fcd1e36de04b27cf3` | `project/images/shirou_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 岡部倫太郎 | `fc660155c7afb938ab9c42858fec752050a460f864d0eaf702114d1b153541f8` | `project/images/okabe_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| IDW | `91367dc90b2118d15ec37f537ffe99e5ee5a2c591124152223ab4b31a699488a` | `project/images/idw_{smile,angry,sad,surprised,panic,normal}.png` | full-body／RGBA／active |
| 柏崎星奈 | `8aa17a7bfa1d57f8a2107a81e23768c26794d090413dc22ab5beaec9e67e46d8` | `project/images/sena_{smile,surprised,panic,normal}.png` | full-body／RGBA／active |
| 蘭斯／Sill | `9a22ba400c5be762ed4dce6119fa0b9c58e0e03612154d579cc2c0f632214d8a` | `project/images/ms_portrait_lance_{smile,angry,sad,surprised,panic,normal}.png` | not applied／原檔已恢復 |
| 菈菈安瑟姆 | `61a7c0999e9e571c46bb9bddb547d60c9788e95ce8f78118070e8393a504f6e0` | `project/images/lala_{smile,angry,sad,surprised,panic,normal}.png` | user-confirmed／full-body／RGBA／active |

## `jiakezi`／夾克子

- 劇情來源：`project/story/夾克子.txt`
- 資源追蹤狀態：`active`（背景／ID mapping 仍有 Open TODO）

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| jiakezi:10deea1ea60d9c9611df90b09bc9c0191aefebd730dea7b9848705b0362e0493:18.夾克子(Linlan)/夾克子.txt | 20260825-223512 | 18.夾克子(Linlan)/夾克子.txt | 10deea1ea60d9c9611df90b09bc9c0191aefebd730dea7b9848705b0362e0493 | script | new | authoritative-source | project/story/夾克子.txt | source／jiakezi_1..3 | run `work/script-manifest.md`; source hash validation | active |
| jiakezi:8a71380d8a2de629e4178e334428590a9135b7c5e08df5758a2d83782f30e4cd:18.夾克子(Linlan)/圖檔/夾克子.png | 20260825-223512 | 18.夾克子(Linlan)/圖檔/夾克子.png | 8a71380d8a2de629e4178e334428590a9135b7c5e08df5758a2d83782f30e4cd | portrait | new | generated-source | project/images/jiakezi_normal.png, project/images/jiakezi_smile.png, project/images/jiakezi_surprised.png | jiakezi_1..3; portrait code 20 | run `work/asset-usage.md`; `project/images`／`main.images`／IR／floor chain | active |

## `akane`／茜

- 劇情來源：`project/story/茜.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| akane:5e71ed43670723e62937e8ef85e28a49412efb4d59ff390a7efd1a6242e1ffed:5.茜(Linlan)/茜.txt | 20260816-174815 | 5.茜(Linlan)/茜.txt | 5e71ed43670723e62937e8ef85e28a49412efb4d59ff390a7efd1a6242e1ffed | script | updated | authoritative-source | project/story/茜.txt | source／akane_1..4 | work/script-manifest.md + 茜.diff | active |
| akane:ee718f0701423b10d803529d0748af002807c7fcfe92b4e7791887cf22ade4e4:5.茜(Linlan)/圖檔/海茶的琴葉茜.png | 20260816-174815 | 5.茜(Linlan)/圖檔/海茶的琴葉茜.png | ee718f0701423b10d803529d0748af002807c7fcfe92b4e7791887cf22ade4e4 | portrait | new | generated-source | project/images/akane_angry.png, project/images/akane_normal.png, project/images/akane_panic.png, project/images/akane_sad.png, project/images/akane_smile.png, project/images/akane_surprised.png | akane_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `dizi`／比那名居地子

- 劇情來源：`project/story/比那名居地子.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| dizi:c52c6ec33c120c69801cf754f34021bfb276e601f3c5897f48ee290785c8c21e:9.地子(風揚)/比那名居地子篇.docx | 20260816-174815 | 9.地子(風揚)/比那名居地子篇.docx | c52c6ec33c120c69801cf754f34021bfb276e601f3c5897f48ee290785c8c21e | script (DOCX extracted) | new | authoritative-source | project/story/比那名居地子.txt | source／dizi_1..4 | work/script-manifest.md + 比那名居地子.diff | active |
| dizi:4672dc357c9b1ac010588f190255c3f44bac2bd734e9b5e81d292d574354c7db:9.地子(風揚)/圖檔/Gemini_Generated_Image_lylyndlylyndlyly.png | 20260816-174815 | 9.地子(風揚)/圖檔/Gemini_Generated_Image_lylyndlylyndlyly.png | 4672dc357c9b1ac010588f190255c3f44bac2bd734e9b5e81d292d574354c7db | portrait | new | generated-source | project/images/dizi_angry.png, project/images/dizi_normal.png, project/images/dizi_panic.png, project/images/dizi_sad.png, project/images/dizi_smile.png, project/images/dizi_surprised.png | dizi_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `huangmo`／荒漠

- 劇情來源：`project/story/荒漠支線.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## `juju`／茱茱

- 劇情來源：`project/story/茱茱.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| juju:299aa9d1ac71a1b0cafe4499d7b744bd433692fef8d7e658ac89206885fe4e72:2.茱茱(55)/茱茱.txt | 20260816-174815 | 2.茱茱(55)/茱茱.txt | 299aa9d1ac71a1b0cafe4499d7b744bd433692fef8d7e658ac89206885fe4e72 | script | updated | authoritative-source | project/story/茱茱.txt | source／juju_1..4 | work/script-manifest.md + 茱茱.diff | active |
| juju:2616bd6a50e2a351b4b7e1c4e5ad5726473bf40ddf87a60f577ccd25f0e1275d:2.茱茱(55)/圖檔/bbcall.png | 20260816-174815 | 2.茱茱(55)/圖檔/bbcall.png | 2616bd6a50e2a351b4b7e1c4e5ad5726473bf40ddf87a60f577ccd25f0e1275d | prop | new | direct | project/images/juju_bbcall.png | juju_2／bbcall code 30 | work/asset-usage.md + IR／floor refs | active |
| juju:6a1106f620bb0d094d4d3f23a6e0a8ddedc13e9d50760c87bcbf06fd58ef644d:2.茱茱(55)/圖檔/店主.png | 20260816-174815 | 2.茱茱(55)/圖檔/店主.png | 6a1106f620bb0d094d4d3f23a6e0a8ddedc13e9d50760c87bcbf06fd58ef644d | portrait | new | direct | project/images/juju_shopkeeper.png | juju_2／juju_4／店主 code 20 | work/asset-usage.md + IR／floor refs | active |
| juju:7ceea5d803a5ae1ef3650918958c4e04765d8fbda69599defb13f2fd01ed4aec:2.茱茱(55)/圖檔/茱茱.png | 20260816-174815 | 2.茱茱(55)/圖檔/茱茱.png | 7ceea5d803a5ae1ef3650918958c4e04765d8fbda69599defb13f2fd01ed4aec | portrait | new | generated-source | project/images/juju_angry.png, project/images/juju_normal.png, project/images/juju_panic.png, project/images/juju_sad.png, project/images/juju_smile.png, project/images/juju_surprised.png | juju_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `lala`／菈菈安瑟姆

- 劇情來源：`project/story/菈菈安瑟姆.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| lala:b0d699c5c59b0a3ad653215ef2632fee3e510e18395b035f99d5c2b154b0af78:11.菈菈安瑟姆(藍風)/菈菈安瑟姆.txt | 20260816-174815 | 11.菈菈安瑟姆(藍風)/菈菈安瑟姆.txt | b0d699c5c59b0a3ad653215ef2632fee3e510e18395b035f99d5c2b154b0af78 | script | updated | authoritative-source | project/story/菈菈安瑟姆.txt | source／lala_1..4 | work/script-manifest.md + 菈菈安瑟姆.diff | active |
| lala:65c3515cea3d4d4237c843dd91b3ba2dd0de27bdee7094db6a4ee3a39d8dce36:11.菈菈安瑟姆(藍風)/圖檔/Saki醬.png | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/Saki醬.png | 65c3515cea3d4d4237c843dd91b3ba2dd0de27bdee7094db6a4ee3a39d8dce36 | portrait | identical-existing | direct | project/images/lala_saki.png | lala_3 | work/asset-usage.md + IR／floor refs | active |
| lala:0948f535caa48da52110b10a49b7c1a691b6ba56989e6db9b56dfdf2b923c16b:11.菈菈安瑟姆(藍風)/圖檔/克洛伊醬.png | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/克洛伊醬.png | 0948f535caa48da52110b10a49b7c1a691b6ba56989e6db9b56dfdf2b923c16b | portrait | identical-existing | direct | project/images/lala_chloe.png | lala_3 | work/asset-usage.md + IR／floor refs | active |
| lala:a2ed9abdc97ed66a1e19ae1429290d8490cf7dd0e4ce08f04a3f36c82d8ee1c1:11.菈菈安瑟姆(藍風)/圖檔/徒姬.jpg | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/徒姬.jpg | a2ed9abdc97ed66a1e19ae1429290d8490cf7dd0e4ce08f04a3f36c82d8ee1c1 | portrait | identical-existing | direct | project/images/lala_tuji.jpg | lala_2..4 | work/asset-usage.md + IR／floor refs | active |
| lala:bd96f46fdea3d30040c1e2c7e2e16350fb25ae4246058ba6cb14f89c0af243b4:11.菈菈安瑟姆(藍風)/圖檔/菈菈安瑟姆.jpg | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/菈菈安瑟姆.jpg | bd96f46fdea3d30040c1e2c7e2e16350fb25ae4246058ba6cb14f89c0af243b4 | portrait | new | generated-source | project/images/lala_angry.png, project/images/lala_normal.png, project/images/lala_panic.png, project/images/lala_sad.png, project/images/lala_smile.png, project/images/lala_surprised.png | lala_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |
| lala:f25f54bdfeb64fb249274d2c22a6ce74963b3534f0f7980c2b8d204c49dd84e1:11.菈菈安瑟姆(藍風)/圖檔/萊茲.png | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/萊茲.png | f25f54bdfeb64fb249274d2c22a6ce74963b3534f0f7980c2b8d204c49dd84e1 | portrait | identical-existing | direct | project/images/lala_reiz.png | lala_2 | work/asset-usage.md + IR／floor refs | active |
| lala:1a3983bb454ea372e8bae8fa3c5b53e696d197a6ef3e3a8f757a0bfc07ee184c:11.菈菈安瑟姆(藍風)/圖檔/阿米莫絲醬.png | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/阿米莫絲醬.png | 1a3983bb454ea372e8bae8fa3c5b53e696d197a6ef3e3a8f757a0bfc07ee184c | portrait | identical-existing | direct | project/images/lala_amimos.png | lala_3 | work/asset-usage.md + IR／floor refs | active |
| lala:3431cb5b88239892c7d11cb3020b7eff245cd3cd834cfaf0d25e4c92aec31648:11.菈菈安瑟姆(藍風)/圖檔/露露米.png | 20260816-174815 | 11.菈菈安瑟姆(藍風)/圖檔/露露米.png | 3431cb5b88239892c7d11cb3020b7eff245cd3cd834cfaf0d25e4c92aec31648 | portrait | identical-existing | direct | project/images/lala_lulumi.png | lala_2 | work/asset-usage.md + IR／floor refs | active |

## `lanxiang`／藍湘

- 劇情來源：`project/story/藍湘.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| lanxiang:b00d5cff958289e74bc2527abb30170858b2173bdd604b0391a05f22583212e7:1.藍湘(55)/藍湘.txt | 20260816-174815 | 1.藍湘(55)/藍湘.txt | b00d5cff958289e74bc2527abb30170858b2173bdd604b0391a05f22583212e7 | script | updated | authoritative-source | project/story/藍湘.txt | source／lanxiang_1..4 | work/script-manifest.md + 藍湘.diff | superseded |
| lanxiang:e01546b7b2525bb360d6ddacb26069ac707fe4a52063e442d2a03c1969a0c9cf:1.藍湘(55)/藍湘.txt | 20260823-192556 | 1.藍湘(55)/藍湘.txt | e01546b7b2525bb360d6ddacb26069ac707fe4a52063e442d2a03c1969a0c9cf | script | updated | authoritative-source | project/story/藍湘.txt | source／lanxiang_1..4 | work/text-classification.json + validated Story IR/floor | active |
| lanxiang:9fa154e25ba97134ab2228cab335cc8e6ce18b75436141705ecbcd070d3e1601:1.藍湘(55)/圖檔/斷水流傳人.png | 20260816-174815 | 1.藍湘(55)/圖檔/斷水流傳人.png | 9fa154e25ba97134ab2228cab335cc8e6ce18b75436141705ecbcd070d3e1601 | portrait | new | direct | project/images/lanxiang_duanshuiliu.png | lanxiang_2／lanxiang_4／speaker 斷水流傳人 | work/asset-usage.md + IR／floor refs | active |
| lanxiang:e1965681841097fec715a49df031ba58a26c3343bde85caa141f8da7d9be76b7:1.藍湘(55)/圖檔/藍湘.png | 20260816-174815 | 1.藍湘(55)/圖檔/藍湘.png | e1965681841097fec715a49df031ba58a26c3343bde85caa141f8da7d9be76b7 | portrait | new | generated-source | project/images/lanxiang_angry.png, project/images/lanxiang_normal.png, project/images/lanxiang_panic.png, project/images/lanxiang_sad.png, project/images/lanxiang_smile.png, project/images/lanxiang_surprised.png | lanxiang_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |
| lanxiang:06918b885bbaaa0f9dc7d85f39850328c3c88c349d84459e17238daafec7d3aa:1.藍湘(55)/圖檔/三人麻將.png | 20260823-192556 | 1.藍湘(55)/圖檔/三人麻將.png | 06918b885bbaaa0f9dc7d85f39850328c3c88c349d84459e17238daafec7d3aa | cg | new | direct | project/images/lanxiang_mahjong_cg.png | lanxiang_2／麻將對局 CG | filename-story-mapping.json + validated Story IR/floor | active |
| lanxiang:cc638e07ff60261f8d36baeb47794169ad177861d56ae06f30bb2c9510c8a8a0:1.藍湘(55)/圖檔/再見.png | 20260823-192556 | 1.藍湘(55)/圖檔/再見.png | cc638e07ff60261f8d36baeb47794169ad177861d56ae06f30bb2c9510c8a8a0 | cg | new | direct | project/images/lanxiang_goodbye_cg.png | lanxiang_4／結尾離別 CG | filename-story-mapping.json + validated Story IR/floor | active |

## `mikage-rinju`／御影凛珠

- 劇情來源：`project/story/御影凛珠.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mikage-rinju:28bd486ab68825cd9edf50b160506123df49af9863ebfd56b6e00e102c00e70b:8.御影凛珠/御影凛珠.txt | 20260816-174815 | 8.御影凛珠/御影凛珠.txt | 28bd486ab68825cd9edf50b160506123df49af9863ebfd56b6e00e102c00e70b | script | updated | authoritative-source | project/story/御影凛珠.txt | source／mikage_rinju_1..4 | work/script-manifest.md + 御影凛珠.diff | active |
| mikage-rinju:baf7c19790d52a1901546eb0328182723362688f68d50850932229c16ab3ba83:8.御影凛珠/圖檔/caption.jpg | 20260816-174815 | 8.御影凛珠/圖檔/caption.jpg | baf7c19790d52a1901546eb0328182723362688f68d50850932229c16ab3ba83 | background | identical-existing | direct | project/images/mikage_bookstore.jpg | mikage_rinju_1..4 | work/asset-usage.md + IR／floor refs; legacy size TODO | active |
| mikage-rinju:f9003d56712c40228d4034c428d5bf621648d96c287a2f3f3a5978e8df42091d:8.御影凛珠/圖檔/御影凛珠.png | 20260816-174815 | 8.御影凛珠/圖檔/御影凛珠.png | f9003d56712c40228d4034c428d5bf621648d96c287a2f3f3a5978e8df42091d | portrait | new | generated-source | project/images/mikage_rinju_angry.png, project/images/mikage_rinju_normal.png, project/images/mikage_rinju_panic.png, project/images/mikage_rinju_sad.png, project/images/mikage_rinju_smile.png, project/images/mikage_rinju_surprised.png | mikage_rinju_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `noir`／NoiR

- 劇情來源：`project/story/NoiR.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| noir:ba5a05ca300f85436453576cdd67b3fda28bb9fd37c7d4b45ea00d7aaab1164c:4. NoiR(情緒)/NoiR.txt | 20260816-174815 | 4. NoiR(情緒)/NoiR.txt | ba5a05ca300f85436453576cdd67b3fda28bb9fd37c7d4b45ea00d7aaab1164c | script | updated | authoritative-source | project/story/NoiR.txt | source／noir_1..4 | work/script-manifest.md + NoiR.diff | superseded |
| noir:da18c1de3b0367465e14ca2e105fe07765eacf84b5eb227c47dfe255551a4dee:4. NoiR(情緒)/NoiR.txt | 20260823-192556 | 4. NoiR(情緒)/NoiR.txt | da18c1de3b0367465e14ca2e105fe07765eacf84b5eb227c47dfe255551a4dee | script | updated | authoritative-source | project/story/NoiR.txt | source／noir_1..4 | work/text-classification.json + validated Story IR/floor | active |
| noir:ab71b4dc99b1fc89732ee086765fcf2d32218ce361f2bdabd54f450b96f00e0f:4. NoiR(情緒)/圖檔/NoiR.png | 20260816-174815 | 4. NoiR(情緒)/圖檔/NoiR.png | ab71b4dc99b1fc89732ee086765fcf2d32218ce361f2bdabd54f450b96f00e0f | portrait | new | generated-source | project/images/noir_angry.png, project/images/noir_normal.png, project/images/noir_panic.png, project/images/noir_sad.png, project/images/noir_smile.png, project/images/noir_surprised.png | noir_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |
| noir:6bf53d3f9fa76126f0fa6b6263e40fd3108dc47f91b4fb636d72f7ce05a98496:4. NoiR(情緒)/圖檔/NoiR髮夾.png | 20260816-174815 | 4. NoiR(情緒)/圖檔/NoiR髮夾.png | 6bf53d3f9fa76126f0fa6b6263e40fd3108dc47f91b4fb636d72f7ce05a98496 | cg | new | direct | project/images/noir_hairclip.png | noir_3 | work/asset-usage.md + IR／floor refs | active |
| noir:f03e6d3ddad1d1558202754186039eab52f383c09d17e9f9c85de668c88d6e80:4. NoiR(情緒)/圖檔/N01.jpeg | 20260823-192556 | 4. NoiR(情緒)/圖檔/N01.jpeg | f03e6d3ddad1d1558202754186039eab52f383c09d17e9f9c85de668c88d6e80 | cg | new | direct | project/images/noir_n01_cg.jpeg | noir_2／演奏 CG N01 | filename-story-mapping.json + validated Story IR/floor | active |
| noir:4df4ea6173271a77bb2c222adfa626a09931621a7f741bbdc7b4ad0c88a6927f:4. NoiR(情緒)/圖檔/N02.jpeg | 20260823-192556 | 4. NoiR(情緒)/圖檔/N02.jpeg | 4df4ea6173271a77bb2c222adfa626a09931621a7f741bbdc7b4ad0c88a6927f | cg | new | direct | project/images/noir_n02_cg.jpeg | noir_2／演奏 CG N02 | filename-story-mapping.json + validated Story IR/floor | active |

## `okabe`／岡部倫太郎

- 劇情來源：`project/story/岡部倫太郎.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| okabe:7c7a18d066ae02f73346e72b9900244778b1e035b01e68f060cb04b60635ae4a:12.岡部倫太郎/岡部倫太郎.txt | 20260816-174815 | 12.岡部倫太郎/岡部倫太郎.txt | 7c7a18d066ae02f73346e72b9900244778b1e035b01e68f060cb04b60635ae4a | script | updated | authoritative-source | project/story/岡部倫太郎.txt | source／okabe_1..4 | work/script-manifest.md + 岡部倫太郎.diff | active |
| okabe:ca39955100f7b658fe69d520e6cc766ea67d47543066d8f25200a0c9f94f491f:12.岡部倫太郎/圖檔/凶真.png | 20260816-174815 | 12.岡部倫太郎/圖檔/凶真.png | ca39955100f7b658fe69d520e6cc766ea67d47543066d8f25200a0c9f94f491f | portrait | new | generated-source | project/images/okabe_angry.png, project/images/okabe_normal.png, project/images/okabe_panic.png, project/images/okabe_sad.png, project/images/okabe_smile.png, project/images/okabe_surprised.png | okabe_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `shirou`／士郎

- 劇情來源：`project/story/鍛刀大賽.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| shirou:db3dace9c043debdbf1fa693843d7540179f3990367112d7b9b019718ac613ad:10. 鍛刀大賽(情緒)/鍛刀大賽.txt | 20260816-174815 | 10. 鍛刀大賽(情緒)/鍛刀大賽.txt | db3dace9c043debdbf1fa693843d7540179f3990367112d7b9b019718ac613ad | script | updated | authoritative-source | project/story/鍛刀大賽.txt | source／shirou_1..4 | work/script-manifest.md + 鍛刀大賽.diff | active |
| shirou:38699e60062503afc0bed267c816c597a4eee3db5350c4129eb60480482abb63:10. 鍛刀大賽(情緒)/唐三.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/唐三.png | 38699e60062503afc0bed267c816c597a4eee3db5350c4129eb60480482abb63 | portrait | new | direct | project/images/shirou_tangsan.png | shirou_3／唐三 | work/asset-usage.md + IR／floor refs | active |
| shirou:33a36d86fa8fe59fcef8bf1822f364b825fac46f7a52dfee0a3d5c9a7c887185:10. 鍛刀大賽(情緒)/師匠.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/師匠.png | 33a36d86fa8fe59fcef8bf1822f364b825fac46f7a52dfee0a3d5c9a7c887185 | portrait | new | direct | project/images/shirou_shisho.png | shirou_3／店長「東方不敗」 | work/asset-usage.md + user confirmation + IR／floor refs | superseded |
| shirou:6b7ee87dfb5290d903c7865b9949eb1b324eaaa1a07f412f0c2a86e70d106107:20260823-192556:師匠-expression-grid | 20260823-192556 | 10. 鍛刀大賽(情緒)/師匠.png | 33a36d86fa8fe59fcef8bf1822f364b825fac46f7a52dfee0a3d5c9a7c887185 | portrait | changed-existing | generated-source | project/images/shirou_shisho.png | shirou_3／店長「東方不敗」 | raw reference → anime-expression-grid → split → remove_bk; replacement-run/original-assets; Story IR/data refs unchanged | active |
| shirou:5be7e2c77364dbe0af64dc490a6d7dfb48aae4c97a5c9901e11973fb351d82e3:10. 鍛刀大賽(情緒)/干將·莫邪.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/干將·莫邪.png | 5be7e2c77364dbe0af64dc490a6d7dfb48aae4c97a5c9901e11973fb351d82e3 | prop | identical-existing | direct | project/images/shirou_blades.png | shirou_2／shirou_3 | work/asset-usage.md + IR／floor refs | active |
| shirou:37f91d8f17b138743238226dfb2a334817e0ff2955656453b8a84f74ed6a1be5:10. 鍛刀大賽(情緒)/武士刀.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/武士刀.png | 37f91d8f17b138743238226dfb2a334817e0ff2955656453b8a84f74ed6a1be5 | prop | identical-existing | direct | project/images/tournament_katana.png | shirou_3 | work/asset-usage.md + IR／floor refs | active |
| shirou:58cf979a4acdd7f3778b3c9ea56c10bc4c9576f64a9c2883357e1b50085af4ad:10. 鍛刀大賽(情緒)/良秀.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/良秀.png | 58cf979a4acdd7f3778b3c9ea56c10bc4c9576f64a9c2883357e1b50085af4ad | portrait | new | direct | project/images/shirou_liangxiu.png | shirou_3／良秀 | work/asset-usage.md + IR／floor refs | active |
| shirou:608d8c7bc8262c8363d72c205ce0ef061bdf132988e0d84177fdf5d4c97352d6:10. 鍛刀大賽(情緒)/衛宮 士郎(ver.後日談).png | 20260816-174815 | 10. 鍛刀大賽(情緒)/衛宮 士郎(ver.後日談).png | 608d8c7bc8262c8363d72c205ce0ef061bdf132988e0d84177fdf5d4c97352d6 | portrait | identical-existing | direct | project/images/shirou_later.png | shirou_4 | work/asset-usage.md + IR／floor refs | active |
| shirou:aa67c6ed432c0b58decf30ad4ffb0f6d0a971027ba4dfd42bc94323a1ee44cce:10. 鍛刀大賽(情緒)/衛宮 士郎.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/衛宮 士郎.png | aa67c6ed432c0b58decf30ad4ffb0f6d0a971027ba4dfd42bc94323a1ee44cce | portrait | new | generated-source | project/images/shirou_angry.png, project/images/shirou_normal.png, project/images/shirou_panic.png, project/images/shirou_sad.png, project/images/shirou_smile.png, project/images/shirou_surprised.png | shirou_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `watanuki-sakuya`／綿貫咲耶

- 劇情來源：`project/story/綿貫咲耶.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| watanuki-sakuya:ce375ec7d55688c85336bb224f87e6d0a689ad60780d621857b4fd6612add1a8:7.綿貫咲耶/綿貫咲耶.txt | 20260816-174815 | 7.綿貫咲耶/綿貫咲耶.txt | ce375ec7d55688c85336bb224f87e6d0a689ad60780d621857b4fd6612add1a8 | script | updated | authoritative-source | project/story/綿貫咲耶.txt | source／watanuki_sakuya_1..4 | work/script-manifest.md + 綿貫咲耶.diff | active |
| watanuki-sakuya:3b81441f44e945d562a864a27dc4e6a8d0e479069666bc8e0485c02d0826d5ac:7.綿貫咲耶/圖檔/Sakuya_CG_1.jpg | 20260816-174815 | 7.綿貫咲耶/圖檔/Sakuya_CG_1.jpg | 3b81441f44e945d562a864a27dc4e6a8d0e479069666bc8e0485c02d0826d5ac | cg | identical-existing | generated-source | project/images/watanuki_shrine_cg1_action_cg.png | watanuki_sakuya_1／watanuki_sakuya_4 | work/asset-usage.md + IR／floor refs | active |
| watanuki-sakuya:1135ef0b2ed0995111f9f3233c931ebb12b3bbd2441c189821a2f2a5218bc98e:7.綿貫咲耶/圖檔/神社.jpg | 20260816-174815 | 7.綿貫咲耶/圖檔/神社.jpg | 1135ef0b2ed0995111f9f3233c931ebb12b3bbd2441c189821a2f2a5218bc98e | background | identical-existing | direct | project/images/watanuki_shrine_bg.jpg | watanuki_sakuya_1..4 | work/asset-usage.md + IR／floor refs; legacy size TODO | active |
| watanuki-sakuya:2b9c8152d6a29be031dce279073566354e7e2348e03419bf542110a888185c8a:7.綿貫咲耶/圖檔/綿貫咲耶.png | 20260816-174815 | 7.綿貫咲耶/圖檔/綿貫咲耶.png | 2b9c8152d6a29be031dce279073566354e7e2348e03419bf542110a888185c8a | portrait | new | generated-source | project/images/watanuki_sakuya_angry.png, project/images/watanuki_sakuya_normal.png, project/images/watanuki_sakuya_panic.png, project/images/watanuki_sakuya_sad.png, project/images/watanuki_sakuya_smile.png, project/images/watanuki_sakuya_surprised.png | watanuki_sakuya_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

## `yuedu-ai`／月讀愛

- 劇情來源：`project/story/月讀愛.txt`
- 資源追蹤狀態：`needs-backfill`

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| yuedu-ai:b7a6bf596480df831943349fab4ae1d4f4caa9db0da123bec605fda1d7402964:6.月讀愛/月讀愛.txt | 20260816-174815 | 6.月讀愛/月讀愛.txt | b7a6bf596480df831943349fab4ae1d4f4caa9db0da123bec605fda1d7402964 | script | updated | authoritative-source | project/story/月讀愛.txt | source／yuedu_ai_1..4 | work/script-manifest.md + 月讀愛.diff | active |
| yuedu-ai:ed1c9a9aeb20fc3c18df592e76ca8948dc0b50c6be9e3b3fb2dcfbe2be4556c7:6.月讀愛/圖檔/便利店.jpg | 20260816-174815 | 6.月讀愛/圖檔/便利店.jpg | ed1c9a9aeb20fc3c18df592e76ca8948dc0b50c6be9e3b3fb2dcfbe2be4556c7 | background | new | generated-source | project/images/yuedu_convenience_store.png | yuedu_ai_4 | work/asset-usage.md + IR／floor refs; 544x416 crop | active |
| yuedu-ai:c06c1b7eed084b9ffe3357766b5e577e9198b5f5abe43787a9bd34f7f52ab:6.月讀愛/圖檔/月讀愛.png | 20260816-174815 | 6.月讀愛/圖檔/月讀愛.png | c06c1b7eed084b9ffe3357766b5e577e9198b5f5abe43787a9bd34f7f52ab | portrait | new | generated-source | project/images/yuedu_angry.png, project/images/yuedu_happy.png, project/images/yuedu_panic.png, project/images/yuedu_sad.png, project/images/yuedu_smile.png, project/images/yuedu_surprised.png | yuedu_ai_1..4 | prior generated-source record | superseded |
| yuedu-ai:398bb6ec5b85aaedbf409ce102b5e2995f0a8526d48be284d71e3d8d0ef5d625:20260823-192556:月讀愛-expression-grid | 20260823-192556 | 6.月讀愛/圖檔/月讀愛.png | c06c1b7eed084b9ffe3357766b5e577e9198b5f5abe43787a9bd34f7f52ab | portrait | changed-existing | generated-source | project/images/yuedu_angry.png, project/images/yuedu_happy.png, project/images/yuedu_panic.png, project/images/yuedu_sad.png, project/images/yuedu_smile.png, project/images/yuedu_surprised.png | yuedu_ai_1..4 | raw reference → anime-expression-grid → split → remove_bk; replacement-run/original-assets; Story IR/data refs unchanged | active |
| yuedu-ai:65e51b8c9d04878f7a772f2d50ec95b173b6ced17358893162f3ba9ab17b650d:6.月讀愛/圖檔/熟悉的街角.png | 20260816-174815 | 6.月讀愛/圖檔/熟悉的街角.png | 65e51b8c9d04878f7a772f2d50ec95b173b6ced17358893162f3ba9ab17b650d | background | new | generated-source | project/images/yuedu_familiar_corner.png | yuedu_ai_4 | work/asset-usage.md + IR／floor refs; 544x416 crop + event switch | active |

## `ruka`／漆原瑠華

- 劇情來源：`project/story/漆原瑠華.txt`
- 資源追蹤狀態：`active`；`ruka_1`～`ruka_4`、Akiba 入口與表情圖已接入；`.codex/task-questions/20260816-201520-zip-story.md` Q2 已由使用者確認「漆原?華」為預期字面內容

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ruka:24047268ba24a72d0e3129bd444ae571a9008413cd5d53ea66c562f953c29cb1:13.漆原瑠華/漆原瑠華.txt | 20260816-174815 | 13.漆原瑠華/漆原瑠華.txt | 24047268ba24a72d0e3129bd444ae571a9008413cd5d53ea66c562f953c29cb1 | script | new | authoritative-source (superseded by current full source) | prior work text | - | prior run record | superseded |
| ruka:79d08ff2ee3ec8ce8ac0279e85ac865d2e18ff0cd5397ed58ddc28686ae55025:13.漆原瑠華/圖檔/漆原瑠華.png | 20260816-174815 | 13.漆原瑠華/圖檔/漆原瑠華.png | 79d08ff2ee3ec8ce8ac0279e85ac865d2e18ff0cd5397ed58ddc28686ae55025 | portrait | new | generated-source (superseded by current run evidence) | prior work output | - | prior run record | superseded |
| ruka:87082e827dd4b81a2299aa3ef48f6ea3623147e3e19786b95bcea91d3b1ac3fb:13.漆原瑠華/漆原瑠華.txt:20260816-201520 | 20260816-201520 | 13.漆原瑠華/漆原瑠華.txt | 87082e827dd4b81a2299aa3ef48f6ea3623147e3e19786b95bcea91d3b1ac3fb | script | new | authoritative-source | project/story/漆原瑠華.txt | ruka_1..ruka_4 | work/script-manifest.md; source SHA 7378c6f3...; manage_story_ir | active |
| ruka:79d08ff2ee3ec8ce8ac0279e85ac865d2e18ff0cd5397ed58ddc28686ae55025:13.漆原瑠華/圖檔/漆原瑠華.png:20260816-201520 | 20260816-201520 | 13.漆原瑠華/圖檔/漆原瑠華.png | 79d08ff2ee3ec8ce8ac0279e85ac865d2e18ff0cd5397ed58ddc28686ae55025 | portrait | new | generated-source | project/images/ruka_{smile,angry,sad,surprised,panic,normal}.png | ruka_2..ruka_4 | prior generated-source record | superseded |
| ruka:b8a7906c1ba0611f5de59be5f5170de9c8efb8e9ba1102d2cc2a10705c76854f:20260823-192556:漆原瑠華-expression-grid | 20260823-192556 | 13.漆原瑠華/圖檔/漆原瑠華.png | b8a7906c1ba0611f5de59be5f5170de9c8efb8e9ba1102d2cc2a10705c76854f | portrait | changed-existing | generated-source | project/images/ruka_{smile,angry,sad,surprised,panic,normal}.png | ruka_2..ruka_4 | raw reference → anime-expression-grid → split → remove_bk; replacement-run/original-assets; Story IR/data refs unchanged | active |

## `idw`／IDW

- 劇情來源：`project/story/IDW.txt`
- 資源追蹤狀態：`active`；`idw_1`～`idw_4`、Akiba 入口與表情圖已接入

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| idw:9f29c3f223c643387a118d44bfbbb6fad757330fc5b0e8afd7d2ac2a1fe2d466:14.IDW/IDW.txt | 20260816-174815 | 14.IDW/IDW.txt | 9f29c3f223c643387a118d44bfbbb6fad757330fc5b0e8afd7d2ac2a1fe2d466 | script | new | authoritative-source (superseded by current run evidence) | prior work text | - | prior run record | superseded |
| idw:9570da4c2c39757d74a8ae813004e7e94e6b34904b4a0e71be25a5764f412a63:14.IDW/圖檔/IDW.png | 20260816-174815 | 14.IDW/圖檔/IDW.png | 9570da4c2c39757d74a8ae813004e7e94e6b34904b4a0e71be25a5764f412a63 | portrait | new | generated-source (superseded by current run evidence) | prior work output | - | prior run record | superseded |
| idw:9f29c3f223c643387a118d44bfbbb6fad757330fc5b0e8afd7d2ac2a1fe2d466:14.IDW/IDW.txt:20260816-201520 | 20260816-201520 | 14.IDW/IDW.txt | 9f29c3f223c643387a118d44bfbbb6fad757330fc5b0e8afd7d2ac2a1fe2d466 | script | new | authoritative-source | project/story/IDW.txt | idw_1..idw_4 | work/script-manifest.md; source SHA matches; manage_story_ir | active |
| idw:9570da4c2c39757d74a8ae813004e7e94e6b34904b4a0e71be25a5764f412a63:14.IDW/圖檔/IDW.png:20260816-201520 | 20260816-201520 | 14.IDW/圖檔/IDW.png | 9570da4c2c39757d74a8ae813004e7e94e6b34904b4a0e71be25a5764f412a63 | portrait | new | generated-source | project/images/idw_{smile,angry,sad,surprised,panic,normal}.png | idw_1..idw_4 | intake-manifest; expression-validation; IR/floor/data chain | active |

## `sena`／柏崎星奈

- 劇情來源：`project/story/柏崎星奈.txt`
- 資源追蹤狀態：`active`；`sena_1`～`sena_4`、Akiba 入口與表情圖已接入

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sena:7040e0c5da09fd132f1ac5f2e3f11440bf552f5f39cd464ead2b3d2ec02770f4:15.柏崎星奈/柏崎星奈.txt | 20260816-174815 | 15.柏崎星奈/柏崎星奈.txt | 7040e0c5da09fd132f1ac5f2e3f11440bf552f5f39cd464ead2b3d2ec02770f4 | script | new | authoritative-source (superseded by current run evidence) | prior work text | - | prior run record | superseded |
| sena:6e95a3553d0b199634f34ccb29b599bef36a76e833f041154ff071a0002bc555:15.柏崎星奈/圖檔/柏崎星奈.png | 20260816-174815 | 15.柏崎星奈/圖檔/柏崎星奈.png | 6e95a3553d0b199634f34ccb29b599bef36a76e833f041154ff071a0002bc555 | portrait | new | generated-source (superseded by current run evidence) | prior work output | - | prior run record | superseded |
| sena:b029382c3456645756a7a1f2ee7d70c3ba5cfc63c1dd7c6b3fdd36bb8ef03440:15.柏崎星奈/柏崎星奈.txt:20260816-201520 | 20260816-201520 | 15.柏崎星奈/柏崎星奈.txt | b029382c3456645756a7a1f2ee7d70c3ba5cfc63c1dd7c6b3fdd36bb8ef03440 | script | new | authoritative-source | project/story/柏崎星奈.txt | sena_1..sena_4 | work/script-manifest.md; source SHA 7040e0c5...; manage_story_ir | active |
| sena:6e95a3553d0b199634f34ccb29b599bef36a76e833f041154ff071a0002bc555:15.柏崎星奈/圖檔/柏崎星奈.png:20260816-201520 | 20260816-201520 | 15.柏崎星奈/圖檔/柏崎星奈.png | 6e95a3553d0b199634f34ccb29b599bef36a76e833f041154ff071a0002bc555 | portrait | new | generated-source | project/images/sena_{smile,sad,surprised,panic,normal}.png | sena_1..sena_4 | intake-manifest; expression-validation; IR/floor/data chain; angry candidate intake-only | active |

## 本次 run：地子／月讀愛 CG 接入

| 角色 | 原始相對路徑 | 原始 SHA-256 | 種類 | 使用方式 | 最後命名／路徑 | Story IR scene | 驗證 |
|---|---|---|---|---|---|---|---|
| dizi | `9.地子(風揚)/圖檔/CG-DS-L1-1.png` | `9df2631173352bd5b2a758b91fa7a35ca664e42fd5453221cd11a4a5c8b76a17` | cg | direct | `project/images/dizi_cg_ds_l1_1.png` | `dizi_1` | IR／floor／data |
| dizi | `9.地子(風揚)/圖檔/CG-DS-L2-1.png` | `98c1f31a597a4ae43895fd3d41e3cb9616ba1b038b60951c20cb9abaaca81a85` | cg | direct | `project/images/dizi_cg_ds_l2_1.png` | `dizi_2` | IR／floor／data |
| dizi | `9.地子(風揚)/圖檔/CG-DS-L3-1.png`, `CG-DS-L3-2.png` | `838ba7e0c9afa94efb432f66c7892cfd582eb4c12bd1b6250a6bfdd74b6fe773`, `1eb62df791e89021cd293aeeed7c5b759a88f7d9dbe924d6b6dbb703230609a2` | cg | direct | `project/images/dizi_cg_ds_l3_1.png`, `dizi_cg_ds_l3_2.png` | `dizi_3` | IR／floor／data |
| dizi | `9.地子(風揚)/圖檔/CG-DS-L4-*` | recorded in current run image inventory | cg | direct | `project/images/dizi_cg_ds_l4_*.png` | `dizi_4` | IR／floor／data |
| yuedu-ai | `6.月讀愛/圖檔/CG6_a.png`, `CG6_b.png`, `CG6_c.png` | `87f4af4a1e06e0295ca40b54bafc4ee69b95bb8a99556df5a2899c8a2ff2d723`, `de1e0d9b88eafe93388eb08c292ee7bc0a4ace5888b8340fb51a846d31d4edea`, `304da33345b463942a151e61f75fd5edeae477305ab88dcdb4fff5facc2baa1c` | cg | direct | `project/images/yuedu_cg6_a.png`, `yuedu_cg6_b.png`, `yuedu_cg6_c.png` | `yuedu_ai_1..4` | IR／floor／data |

## 本次 run：第二批明確 CG 接入

| 角色 | 原始相對路徑 | 最後命名／路徑 | Story IR scene | 驗證 |
|---|---|---|---|---|
| 綿貫咲耶 | `7.綿貫咲耶/圖檔/CG_7a.png`, `CG_7b.png`, `CG_7c.png` | `project/images/watanuki_cg7_a.png`, `watanuki_cg7_b.png`, `watanuki_cg7_c.png` | `watanuki_sakuya_1`, `_4`, `_3` | IR／floor／data |
| 御影凛珠 | `8.御影凛珠/圖檔/CG_8a.png`, `CG_8b.png`, `CG_8c.png` | `project/images/mikage_cg8_a.png`, `mikage_cg8_b.png`, `mikage_cg8_c.png` | `mikage_rinju_1..3` | IR／floor／data |
| 鍛刀大賽 | `10. 鍛刀大賽(情緒)/圖檔/E01.jpeg`, `E02.jpeg` | `project/images/shirou_e01_cg.jpeg`, `shirou_e02_cg.jpeg` | `shirou_3` | IR／floor／data |
| 茱茱 | `2.茱茱(55)/圖檔/攻擊.png`, `肺腑之言.png` | `project/images/juju_attack_cg.png`, `juju_heartfelt_cg.png` | `juju_3`, `juju_4` | IR／floor／data |
| 茜 | `5.茜(Linlan)/圖檔/願與你同行.jpg` | `project/images/akane_walk_together_cg.jpg` | `akane_4` | IR／floor／data |

## 新角色 IR 與素材接入

| 角色 | 權威來源 | Story IR | floor／入口 | 圖片狀態 |
|---|---|---|---|---|
| 可露凱（原 416） | `project/story/可露凱.txt`，SHA `af70af9d7b4b72a30c46d8279f076032b3975e6291aae2b46774a330a3bd57c2` | `project/story-ir/character/kelukai.json` | `kelukai_1`～`kelukai_4`，`police_station` | 完整來源已轉入 IR；runtime slug `kelukai` |
| 神秘香蕉人 | `project/story/神秘香蕉人.txt`，SHA `6c2fa82800b144db0ba6d7ede21e03f066a6f3b0228ecca6f47ecd9ce0bc0157` | `project/story-ir/character/mysterious-banana.json` | `mysterious_banana_1`～`mysterious_banana_4`，`park` | 六表情、CG／背景裁切已接入；來源列出的缺少 CG 另列 TODO |
