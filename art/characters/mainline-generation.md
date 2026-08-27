# 主線角色立繪生成追溯

- 日期：2026-08-26～2026-08-27（Asia/Taipei）
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

## 暫停項目與既有映射備註

- 未生成：梗平 base、表妹；參考圖缺失。
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
