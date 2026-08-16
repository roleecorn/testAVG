# 角色原始資源 Manifest

此檔保存角色原始劇本與素材的使用方法及最後命名，是可更新的追溯 metadata，不是劇情來源。劇情內容仍只以同目錄的 `.txt` 為準；本檔不得反向改寫來源、Story IR 或 scene。欄位與更新規則以 `.codex/skills/mota-avg-editor/references/images.md` 及 `archive-story-task-splitting.md` 為準。劇本使用方式記為 `authoritative-source`，素材使用 `direct`、`generated-source` 或 `unknown-todo`。

既有無法追溯的歷史仍標記 `needs-backfill`；本次 fresh ZIP run 的逐張來源、SHA-256、差異、用途、最終路徑與驗證證據已逐角色補登。不得依檔名、相似內容或 commit 訊息猜測舊血緣。

本次 ZIP 序號統一使用日期時間格式 `YYYYMMDD-HHmmss`：`20260816-174815`。原始 ZIP 檔名 `drive-download-20260816T094408Z-1-001.zip` 與 SHA-256 `d93a6f96843cad540ab584f7d0ecdd9eab6301c10aca7fc1f1ec158d8b754b25` 保留於本次 run 的 `work/run-manifest.md`，表內以 ZIP 序號追蹤。

每個角色區段使用相同表格；一個原始資源一列，產生多個最終檔名時在「最後命名／路徑」完整列出。穩定紀錄鍵格式為 `<character-id>:<原始資源 SHA-256>:<raw 相對路徑>`。

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
| lanxiang:b00d5cff958289e74bc2527abb30170858b2173bdd604b0391a05f22583212e7:1.藍湘(55)/藍湘.txt | 20260816-174815 | 1.藍湘(55)/藍湘.txt | b00d5cff958289e74bc2527abb30170858b2173bdd604b0391a05f22583212e7 | script | updated | authoritative-source | project/story/藍湘.txt | source／lanxiang_1..4 | work/script-manifest.md + 藍湘.diff | active |
| lanxiang:9fa154e25ba97134ab2228cab335cc8e6ce18b75436141705ecbcd070d3e1601:1.藍湘(55)/圖檔/斷水流傳人.png | 20260816-174815 | 1.藍湘(55)/圖檔/斷水流傳人.png | 9fa154e25ba97134ab2228cab335cc8e6ce18b75436141705ecbcd070d3e1601 | portrait | new | direct | project/images/lanxiang_duanshuiliu.png | lanxiang_2／lanxiang_4／speaker 斷水流傳人 | work/asset-usage.md + IR／floor refs | active |
| lanxiang:e1965681841097fec715a49df031ba58a26c3343bde85caa141f8da7d9be76b7:1.藍湘(55)/圖檔/藍湘.png | 20260816-174815 | 1.藍湘(55)/圖檔/藍湘.png | e1965681841097fec715a49df031ba58a26c3343bde85caa141f8da7d9be76b7 | portrait | new | generated-source | project/images/lanxiang_angry.png, project/images/lanxiang_normal.png, project/images/lanxiang_panic.png, project/images/lanxiang_sad.png, project/images/lanxiang_smile.png, project/images/lanxiang_surprised.png | lanxiang_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |

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
| noir:ba5a05ca300f85436453576cdd67b3fda28bb9fd37c7d4b45ea00d7aaab1164c:4. NoiR(情緒)/NoiR.txt | 20260816-174815 | 4. NoiR(情緒)/NoiR.txt | ba5a05ca300f85436453576cdd67b3fda28bb9fd37c7d4b45ea00d7aaab1164c | script | updated | authoritative-source | project/story/NoiR.txt | source／noir_1..4 | work/script-manifest.md + NoiR.diff | active |
| noir:ab71b4dc99b1fc89732ee086765fcf2d32218ce361f2bdabd54f450b96f00e0f:4. NoiR(情緒)/圖檔/NoiR.png | 20260816-174815 | 4. NoiR(情緒)/圖檔/NoiR.png | ab71b4dc99b1fc89732ee086765fcf2d32218ce361f2bdabd54f450b96f00e0f | portrait | new | generated-source | project/images/noir_angry.png, project/images/noir_normal.png, project/images/noir_panic.png, project/images/noir_sad.png, project/images/noir_smile.png, project/images/noir_surprised.png | noir_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |
| noir:6bf53d3f9fa76126f0fa6b6263e40fd3108dc47f91b4fb636d72f7ce05a98496:4. NoiR(情緒)/圖檔/NoiR髮夾.png | 20260816-174815 | 4. NoiR(情緒)/圖檔/NoiR髮夾.png | 6bf53d3f9fa76126f0fa6b6263e40fd3108dc47f91b4fb636d72f7ce05a98496 | cg | new | direct | project/images/noir_hairclip.png | noir_3 | work/asset-usage.md + IR／floor refs | active |

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
| shirou:33a36d86fa8fe59fcef8bf1822f364b825fac46f7a52dfee0a3d5c9a7c887185:10. 鍛刀大賽(情緒)/師匠.png | 20260816-174815 | 10. 鍛刀大賽(情緒)/師匠.png | 33a36d86fa8fe59fcef8bf1822f364b825fac46f7a52dfee0a3d5c9a7c887185 | portrait | new | direct | project/images/shirou_shisho.png | shirou_3／店長「東方不敗」 | work/asset-usage.md + user confirmation + IR／floor refs | active |
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
| yuedu-ai:c06c1b7eed084b9ffe3357766b5e577e9198b5f5abe43787a9bd34f7f52ab:6.月讀愛/圖檔/月讀愛.png | 20260816-174815 | 6.月讀愛/圖檔/月讀愛.png | c06c1b7eed084b9ffe3357766b5e577e9198b5f5abe43787a9bd34f7f52ab | portrait | new | generated-source | project/images/yuedu_angry.png, project/images/yuedu_happy.png, project/images/yuedu_panic.png, project/images/yuedu_sad.png, project/images/yuedu_smile.png, project/images/yuedu_surprised.png | yuedu_ai_1..4 | work/asset-usage.md + user-confirmed protagonist generation source | active |
| yuedu-ai:65e51b8c9d04878f7a772f2d50ec95b173b6ced17358893162f3ba9ab17b650d:6.月讀愛/圖檔/熟悉的街角.png | 20260816-174815 | 6.月讀愛/圖檔/熟悉的街角.png | 65e51b8c9d04878f7a772f2d50ec95b173b6ced17358893162f3ba9ab17b650d | background | new | generated-source | project/images/yuedu_familiar_corner.png | yuedu_ai_4 | work/asset-usage.md + IR／floor refs; 544x416 crop + event switch | active |

## `ruka`／漆原瑠華

- 劇情來源：`work/text/漆原瑠華.txt`（本次 ZIP 新來源，尚未落地）
- 資源追蹤狀態：`pending`；尚無 Story IR、floor 或可玩入口

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ruka:24047268ba24a72d0e3129bd444ae571a9008413cd5d53ea66c562f953c29cb1:13.漆原瑠華/漆原瑠華.txt | 20260816-174815 | 13.漆原瑠華/漆原瑠華.txt | 24047268ba24a72d0e3129bd444ae571a9008413cd5d53ea66c562f953c29cb1 | script | new | authoritative-source (pending) | work/text/漆原瑠華.txt | - | work/script-manifest.md + task-question 20260816-175000 | pending |
| ruka:79d08ff2ee3ec8ce8ac0279e85ac865d2e18ff0cd5397ed58ddc28686ae55025:13.漆原瑠華/圖檔/漆原瑠華.png | 20260816-174815 | 13.漆原瑠華/圖檔/漆原瑠華.png | 79d08ff2ee3ec8ce8ac0279e85ac865d2e18ff0cd5397ed58ddc28686ae55025 | portrait | new | generated-source | （使用者確認為漆原瑠華主角生成圖來源；目前無已登錄 runtime 輸出） | 13.漆原瑠華／主角生成來源；支線尚未落地 | work/asset-usage.md + user confirmation; branch pending | pending |

## `idw`／IDW

- 劇情來源：`work/text/IDW.txt`（本次 ZIP 新來源，尚未落地）
- 資源追蹤狀態：`pending`；尚無 Story IR、floor 或可玩入口

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| idw:9f29c3f223c643387a118d44bfbbb6fad757330fc5b0e8afd7d2ac2a1fe2d466:14.IDW/IDW.txt | 20260816-174815 | 14.IDW/IDW.txt | 9f29c3f223c643387a118d44bfbbb6fad757330fc5b0e8afd7d2ac2a1fe2d466 | script | new | authoritative-source (pending) | work/text/IDW.txt | - | work/script-manifest.md + task-question 20260816-175000 | pending |
| idw:9570da4c2c39757d74a8ae813004e7e94e6b34904b4a0e71be25a5764f412a63:14.IDW/圖檔/IDW.png | 20260816-174815 | 14.IDW/圖檔/IDW.png | 9570da4c2c39757d74a8ae813004e7e94e6b34904b4a0e71be25a5764f412a63 | portrait | new | generated-source | （使用者確認為 IDW 主角生成圖來源；目前無已登錄 runtime 輸出） | 14.IDW／主角生成來源；支線尚未落地 | work/asset-usage.md + user confirmation; branch pending | pending |

## `sena`／柏崎星奈

- 劇情來源：`work/text/柏崎星奈.txt`（本次 ZIP 新來源，尚未落地）
- 資源追蹤狀態：`pending`；尚無 Story IR、floor 或可玩入口

| 紀錄鍵 | ZIP 序號／run | 原始相對路徑 | 原始 SHA-256 | 種類 | 差異狀態 | 使用方式 | 最後命名／路徑 | Story IR scene／用途 | 驗證證據 | 狀態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sena:7040e0c5da09fd132f1ac5f2e3f11440bf552f5f39cd464ead2b3d2ec02770f4:15.柏崎星奈/柏崎星奈.txt | 20260816-174815 | 15.柏崎星奈/柏崎星奈.txt | 7040e0c5da09fd132f1ac5f2e3f11440bf552f5f39cd464ead2b3d2ec02770f4 | script | new | authoritative-source (pending) | work/text/柏崎星奈.txt | - | work/script-manifest.md + task-question 20260816-175000 | pending |
| sena:6e95a3553d0b199634f34ccb29b599bef36a76e833f041154ff071a0002bc555:15.柏崎星奈/圖檔/柏崎星奈.png | 20260816-174815 | 15.柏崎星奈/圖檔/柏崎星奈.png | 6e95a3553d0b199634f34ccb29b599bef36a76e833f041154ff071a0002bc555 | portrait | new | generated-source | （使用者確認為柏崎星奈主角生成圖來源；目前無已登錄 runtime 輸出） | 15.柏崎星奈／主角生成來源；支線尚未落地 | work/asset-usage.md + user confirmation; branch pending | pending |
