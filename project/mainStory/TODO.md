# 主線 TODO

主線劇本轉換或補寫時，TODO、待確認人物、缺素材與未定演出統一記錄在這裡。不要只把待辦寫在對話框內。

## 待確認人物

- 目前尚未整理。

## 待補劇情

- `project/mainStory/CH3 3-1`：街頭賣藝分歧目前原稿為「嘆息寫」，已保留為可回流分歧。
- `project/mainStory/CH3 3-3`：傑士塔威會議可追加煩人小遊戲，目前以原劇情旁白接續。
- `project/mainStory/CH6 6-4`：後日談時間尚未撰寫，已以文字標記保留。

## 待補素材

- `BGM-20260822T150228Z-1-001.zip` 內四首 BGM 已接入來源指令，但 ZIP 未附原曲／作者／授權資訊；請補充授權以完成公開發行追溯，詳見 `.codex/task-questions/20260822-231945-bgm-zip-import.md`。

- `project/images/ms_ch1_mapo_shop_entrance_cg.png`：暫用複製 CG，來源為 `project/images/scene_mapo_cg.png`；之後需要替換成「麻婆豆腐店門口」正式 CG。
- `project/images/ms_ch1_keng_2_5_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「2.5 梗平」正式 CG。
- `project/images/ms_ch1_thunder_crocodile_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「放大的鱷魚圖」正式 CG。
- `project/images/ms_ch1_keng_join_cg.png`：專案目前沒有現有 GIF 可複製，母檔暫用複製靜態圖，來源為 `project/images/scene_tournament.png`；之後需要替換成「梗平參戰」正式 CG，再執行 `python scripts/build_action_cgs.py`。
- `project/images/ms_ch2_keng_bicycle_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「梗平被腳踏車撞飛」正式 CG。
- `project/images/ms_ch2_eri_sunset_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「夕陽下的神祕少女」正式 CG。
- `project/bgms/ms_ch2_gallery_opening.mp3`：暫用複製 BGM，來源為 `project/bgms/spacetime_mystery.mp3`；之後需要替換成美術館開場正式 BGM。
- `project/mainStory/CH1` 新增的日／夜與室內背景：目前以既有同類背景複製成唯一檔名，待替換秋葉原車站、街道、倉庫區、中華料理店、料理節目、兔子咖啡廳、商業地點與河邊夜景正式素材。
- `project/mainStory/CH1` 的手機簡訊、梗平躲藏、黑衣人、紅色麻婆碗、梗平VS宿儺、兔子攻擊、紙箱、紙箱人、小丑等 CG：目前以 `project/images/scene_mapo_cg.png` 複製素材暫代，待替換正式素材。
- `project/mainStory/CH1 1-3`：來源要求「麻婆」立繪，但 `project/images/` 尚無可確認的麻婆角色立繪，該句暫不顯示立繪。
- `project/mainStory/CH1 1-4`：來源標記 `河邊(夜))` 多一個右括號，生成器暫以 `河邊(夜)` mapping 處理，未改寫來源。
- `project/mainStory/CH2`～`CH7` 新增的泛用／日夜／室內背景名稱：目前映射到既有同類背景資產，待替換正式專用素材。
- Open: `main-story-background-live-stage`
  - Scope: `project/mainStory/CH7 7-5` 的 `【背景：LIVE大舞台】`。
  - Temporary: `project/images/ms_bg_live_stage.png` 為由 `project/images/scene_tournament.png` 複製的暫代背景。
  - Expected: 正式 `LIVE大舞台` 背景；完成驗收後替換圖片並通過遊戲內驗證。
  - Evidence: `scripts/generate_main_story.js` background mapping、`project/story-ir/main/main-story.json`、`project/floors/main_ch7_5.js`；目前維持 open。
- Open: `main-story-background-police-station`
  - Scope: `project/mainStory/CH7 7-5` 的 `【背景：派出所】`。
  - Temporary: `project/images/ms_bg_police_station.png` 為由 `project/images/scene_street.png` 複製的暫代背景。
  - Expected: 正式 `派出所` 背景；完成驗收後替換圖片並通過遊戲內驗證。
  - Evidence: `scripts/generate_main_story.js` background mapping、`project/story-ir/main/main-story.json`、`project/floors/main_ch7_5.js`；目前維持 open。
- Open: `main-story-costume-portraits`
  - Scope: `project/mainStory/CH3 3-1`、`project/mainStory/CH6 6-4`、`project/mainStory/CH7 7-5` 的服裝狀態角色標籤。
  - Missing: 正式服裝梗平／貝琪／前輩／桶至學長立繪與角色 mapping；目前不使用未驗收素材。
  - Done when: 正式服裝立繪完成驗收，接入 `project/images/`、`project/data.js`、Story IR 與對應 floor，並完成遊戲內驗證。
  - Evidence: 服裝角色標籤保留於權威來源與 Story IR；目前維持 open。

## 待實作演出或小遊戲

- `project/mainStory/CH1 1-4`：下水道雷霆大鱷魚戰鬥目前依原稿以旁白略過，之後可補正式戰鬥或小遊戲。
- `project/mainStory/CH3 3-3`：統至分析傑士塔威的橋段可補獨立小遊戲。
- `project/mainStory/CH6 6-4`：結尾小動畫目前使用既有轉場影片事件暫代，之後可替換正式結尾動畫。

## 已確認可處理

- CH1-CH7 主線已接入樓層與時間線，可先作為完整可跑版本繼續迭代。
- `CG-20260822T143824Z-1-001.zip`（SHA-256：`3AA8EAC2B3834C718010A1E60D88F8AA7AA77999D7AC19D9D65F305F407DFEE6`）：83 張 `CH<N>_L<N>.png` 已逐檔核對首次 CG 出現行號，並接入 `project/images`、`project/data.js`、Story IR 與 floor；其中 22 張實際內容為 JPEG，依使用者確認保留原始 `.png` 檔名。驗證：`python scripts/build_action_cgs.py --check`、`node scripts/generate_main_story.js --check`、`node scripts/manage_story_ir.js`、83/83 圖片引用檢查。
