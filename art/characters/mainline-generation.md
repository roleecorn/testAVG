# 主線角色立繪生成追溯

- 日期：2026-08-26～2026-08-28（Asia/Taipei）
- 權威角色清單：`project/mainStory/CH1`～`CH7`
- 角色參考來源：`主線用角色參考/`
- 生成工具：Codex 內建 `imagegen`
- 專案流程：`anime-expression-grid`；固定使用 `.codex/skills/anime-expression-grid/assets/style.png` 作為唯一畫風／版面參考
- 母片格式：2 欄 × 3 列，全身、綠幕、無文字；格位順序：`smile`、`angry`、`sad`、`surprised`、`panic`、`normal`
- 後處理：`split_emotion_image.py` 拆格，`remove_bk.py` 使用 `rembg` 的 `isnet-anime` 模型去背並輸出 RGBA PNG；目前 GPU 測試透過 `CUDAExecutionProvider` 執行
- 去背流程完整說明：[`rembg-isnet-anime-gpu-workflow.md`](rembg-isnet-anime-gpu-workflow.md)
- runtime 接入：既有角色保留原有 `project/images/` 檔名並僅替換檔案內容；本次新增惠惠、來島澄、李嚴的正式檔名並更新 Story IR／floor 使用鏈；主線來源未修改

## 已完成的來源對照

| 角色參考圖 | 生成目錄 |
|---|---|
| 東山.png | `dongshan/` |
| DIO.png | `dio/` |
| 智乃.png | `chino/` |
| 麻婆.png | `mapo/` |
| 三日月.png | `mikazuki/` |
| 克莉絲.png | `chris/` |
| 蘭斯.png | `lance/` |
| IB.png、IB哥哥.png | `ib/`、`ib_brother/` |
| 小黑.png、小將.png | `kuro/`、`shogun/` |
| 書店店員.png、雜貨店老闆.png | `bookstore_clerk/`、`shopkeeper/` |
| 警察.png、醫生.png、修女.png、保鑣.png | `police/`、`doctor/`、`nun/`、`bodyguard/` |
| M‧A‧STER.png、三角.png、店長.png、教主.png | `master/`、`sankaku/`、`tencho/`、`cult_leader/` |
| 兵長.png、前輩.png、前輩(旗袍).jpg | `captain/`、`senpai/`、`senpai_qipao/` |
| 桶至學長.png、桶至學長(女僕).png | `tongzhi/`、`tongzhi_maid/` |
| 梅愛莉.png、香坂輪.png、記者.png、芹澤.png | `mei_aili/`、`kousaka_rin/`、`reporter/`、`serizawa/` |
| 色情刊物檢察官.png | `adult_book_prosecutor/` |
| 貝琪.png、貝琪(婚紗).png | `becky/`、`becky_wedding/` |
| 宿儺.png、棉被怪.png、眼神死掉的人.png | `sukuna/`、`quilt_monster/`、`dead_eyes/` |
| 肥宅.png、肥宅A.png、肥宅B.png、肥宅C.png | `otaku/`、`otaku_a/`、`otaku_b/`、`otaku_c/` |
| 『工作人員』.png、哈斯太.png | `staff/`、`hastur/` |
| 女裝壯漢.png、壯漢A.png、壯漢B.png | `crossdress_strongman/`、`strongman_a/`、`strongman_b/` |
| 梗平(女裝).png、梗平(西裝).png | `keng_female/`、`keng_suit/` |
| 慧慧.jpg | `huihui/`（對應主線角色「惠惠」；使用者已確認） |
| 來島橙.png | `laidao_cheng/`（對應主線角色「來島澄」；使用者已確認） |
| 面具廚師.png | `liyan/`（對應主線角色「李嚴」；使用者已確認） |
| 表妹.jfif | `suou/`（對應主線角色「表妹」；使用者於 2026-08-28 指定） |

## 暫停項目與既有映射備註

- 未生成：梗平 base；仍缺少正式參考圖。
- 已完成：惠惠、來島澄、李嚴；三組參考圖對應關係已由使用者確認，並已生成、拆分、以 `rembg/isnet-anime` GPU 去背及接入主線。
- 尚未生成：梗平 base、表妹；參考圖仍缺少。
- 肥宅群組保留既有 IR／runtime 檔名；現有主線 IR 存在 `ms_portrait_otaku_a_normal.png`、`ms_portrait_otaku_b_normal.png` 的跨角色共用映射。本次只替換檔案內容，未自行修改 IR 或重生 floor；若要拆成角色專用檔名，需另行確認語意後走 IR → validator → generator 流程。

## 去背流程校正（2026-08-26）

- 量測 47 張母片與 282 張切圖後確認：不同生成圖不共用完全相同的 RGB 綠幕色；同一張切圖的安全邊框也存在小幅色彩／亮度波動。
- 舊流程的 `H=35~90`、morphology、Connected Component、區域面積判定與預設 spill suppression 已移除或停用。
- 新流程從每張切圖的安全邊框取樣，以 robust median 取得該圖背景 BGR，依樣本 p99 距離加極小餘量自動決定 color tolerance；不再以「所有綠色」作為背景條件。
- `edge_softness` 與 `spill_strength` 預設為 0，避免後處理進一步改動人物本體；如需改動必須明確傳入參數。
- 已從未去背的 `expression_sheet_*` 切圖重新產生 282 張透明拆分檔，並同步更新目前使用的 runtime 立繪。

## rembg GPU 批次替換（2026-08-26）

- `onnxruntime-gpu` 已安裝；`onnxruntime` 可用 `CUDAExecutionProvider`，裝置回報為 `GPU`。
- `remove_bk.py` 已改為使用本機 `rembg` 的 `isnet-anime`，不再以綠色像素分類作為去背主體。
- `adult_book_prosecutor` 的 `normal` 先完成 GPU 測試並經確認可接受。
- 已使用既有切分圖，以同一 GPU 流程批次重做 276 張實際使用的主線立繪，並替換 `project/images/ms_portrait_*.png`；未重新切分母片。
- `art/characters/` 下 282 張角色表情成品也已同步替換為同批次 `RGBA` 輸出；47 張原始 `*_expression_sheet.png` 母片與 282 張 `*_expression_sheet_<表情>.png` 綠幕切分來源保留不變，供日後重新處理。
- 本次原正式立繪備份於 `work/bulk-rembg-replacement/20260826-234958/original-assets/`；`art/characters` 原成品備份於 `work/bulk-rembg-replacement/20260827-000851/art-characters-original-assets/`；批次輸出保留於 `tmp/remove-bk-batch/20260826-234958/`。

## 三角色補生成（2026-08-27）

- `huihui/`、`laidao_cheng/`、`liyan/` 各生成一張 2×3 六表情母片，格位順序為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`。
- 三組各 6 張切分圖均以 `remove_bk.py` 的 `rembg/isnet-anime` GPU 流程輸出 RGBA PNG；六表情成品完整保留於 `art/characters/<id>/`。
- 主線使用位置依權威來源／現有 Story IR 確認：李嚴 1 個普通對話節點（CH1）、來島澄 22 個（CH3）、惠惠 25 個（CH7）；已依語意使用 `normal`、`smile`、`angry`、`sad`、`surprised`、`panic`，實際引用的 12 張檔案寫入 `project/images/ms_portrait_<id>_<expression>.png` 並登錄 `main.images`。

## 表妹補生成（2026-08-28）

- 角色參考：`主線用角色參考/表妹.jfif`，JPEG、1024×1024，SHA-256：`b23d9678494d3bbaccb9593136cc40a1cd1d7ca6368597da3daaa7f7b9e67da7`。三視圖設定表用於鎖定短鮑伯髮、後側長辮、白色護頸、紫色外套、雙層橘裙、黑褲襪與白靴；設定表文字與武器不進立繪。
- 生成母片：`art/characters/suou/suou_expression_sheet.png`，1024×1536 RGB、SHA-256：`854e899ee99d37759b523058fe1d7f621f1acfd5cb634aa6640ce61c894806bd`。以 `anime-expression-grid` 生成，格位為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`。
- 後處理：`split_emotion_image.py` 使用綠幕 gutter 偵測切割；`remove_bk.py` 使用 `isnet-anime`，ONNX session 以 `CUDAExecutionProvider` 為首，輸出六張 RGBA PNG。透明度驗證：`validate_png_alpha.py` 六張均通過。
- runtime 替換：保留既有 `suou_*_portrait.png` 檔名與 Story IR／floor／`main.images` 引用；`normal→suou_happy_portrait.png`、`panic→suou_goofy_portrait.png`，其餘依表情同名。輸出與原檔備份見 `work/mainline-portrait-update-20260828-004505/`。
- 新 runtime SHA-256：`suou_happy_portrait.png` `bd58f2482b23161e5b5a0dbbacbc12c73c80b41681973f77930095f54c1342c0`；`suou_angry_portrait.png` `28dbc5b333909ff790957f76b958a042bbe42e7bce3b75d9dc1aef95286fe929`；`suou_sad_portrait.png` `117aa7b7359d6fdf004129f0a408b32a202fbea89b2ed144ee30c56a0b881fd9`；`suou_surprised_portrait.png` `3cdc7480b03e676094fac3fd736b2bf37f7b5cea1c3eb722e51a5d31703e6b38`；`suou_goofy_portrait.png` `43d8f50d78e3946896ec3656f807b48702e98baecfbeda34090ff0c04d47b721`；`suou_smile_portrait.png` `8cba4e3ca7ecc1b2eaddbbc64c1c5cf0fa9e3db9483003e83f4a6d42e6f3872d`。

## 三角手偶補生成（2026-08-29）

- 使用者提供的根目錄 `三角.png` 與既有 `主線用角色參考/三角.png` 完整相同；格式／尺寸：RGB、1024×1449；SHA-256：`463DF3B513196689FFBDB06972A5566D62ABEA9777A2F3F106DBEEE72C1A8C0F`。
- 以 Codex 內建 `imagegen` 依 `anime-expression-grid` 生成新的 2×3 綠幕母片 `art/characters/sankaku/sankaku_expression_sheet.png`；格位順序為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`；母片格式／尺寸：RGB、1024×1536；SHA-256：`82114319E97D7B2BA6E777606795D461EAFB89CE52F54096B199802FDE395450`。
- 先以 `split_emotion_image.py` 偵測綠幕 gutter 分格，再以 `remove_bk.py` 的 `isnet-anime`、`CUDAExecutionProvider` 去背；六格均目視確認手偶完整、沒有跨格前景，成品保留為 `art/characters/sankaku/sankaku_<expression>.png`。
- runtime 保留原有檔名與 Story IR／floor 引用，替換 `project/images/ms_portrait_sankaku_*.png`；六張新 runtime SHA-256：`smile` `65fdc02efd4e9d08981070d62301e077289571f759df53bc560c1b3365d22cce`、`angry` `a5128c6b93f2f69e414979b17c67189872dff2fd03086585b2ba01f7c246963d`、`sad` `17258940e1b41502141b16d52ed33020688e21d123626998d427dcb5df494c26`、`surprised` `719d1c370a91aa6971e2a75220fb4e644153cfc9dfc0868936199fe048e3f818`、`panic` `ef15fb3170e4f16624373061c10bcb0a14c7a83927550dac1cc2ecd221226d18`、`normal` `fec3e85542d2d0720b982d3b89b1f13f71ee07f53c6daf1586dcff884224cc09`。
- 驗證：`node scripts/validate_story.js`、`git diff --check`；既有 `main.images`、`project/story-ir/main/CH1.json` 與 `project/floors/mapo_1_4.js` 未需改名或重生。
