# 主線 TODO

主線劇本轉換或補寫時，TODO、待確認人物、缺素材與未定演出統一記錄在這裡。不要只把待辦寫在對話框內。

## 20260824 主線更新紀錄

- 更新基準：`4d9fc9e3d05a3d6e71ef3d9fac32700387ccfc12`；已稽核目前 `project/mainStory/CH1`～`CH7` 全部來源差異，來源文字未修改。
- ZIP run：`tmp/character-story-import/主線追加-20260824T085831Z-1-001/20260824-183110/work/run-manifest.md`；原始 ZIP SHA-256：`AF72FC7ABECFFDBB32D15DCAA79157521AABCE4F627621DA2DB8E0BE32B23F22`。
- 已接入 24 首 BGM、43 張 ZIP 圖片；`CH3_L257.png → CH2_L258.png`、`CH7_L863.png → CH7_L864.png`、`CH7_L991.png → CH7_L992.png`，其餘依目前首個權威指令行號命名。原始 `CH2_L306.png` 因同一背景首次權威出現於 CH2:295，落地為 `CH2_L295.png`，完整血緣保留在 run manifest。
- 因來源行號失效而停用的歷史檔案移至 `project/images/unknown/main-story-stale/`，未再註冊或引用。
- 20260824-183110 run 的 24 張主線背景已依 AVG 畫布契約保留完整構圖並直接縮放為 `544x416`；原始尺寸／SHA-256 與 runtime 輸出 SHA-256 見 run manifest 的「背景 runtime 尺寸正規化」紀錄。
- 驗證證據：`validate_story_source.js`（110 個有效行號素材）、`generate_main_story.js --check`（28 floors）、`validate_story.js`、`git diff --check` 均通過。主線 Story IR 已按章保存於 `project/story-ir/main/CH1.json`～`CH7.json`。

## 待確認人物

- 目前尚未整理。

## 待補劇情

- `project/mainStory/CH3 3-1`：街頭賣藝分歧目前原稿為「嘆息寫」，已保留為可回流分歧。
- `project/mainStory/CH3 3-3`：傑士塔威會議可追加煩人小遊戲，目前以原劇情旁白接續。
- `project/mainStory/CH6 6-4`：後日談時間尚未撰寫，已以文字標記保留。

## 待補素材

- `BGM-20260822T150228Z-1-001.zip` 內四首 BGM 已接入來源指令，但 ZIP 未附原曲／作者／授權資訊；請補充授權以完成公開發行追溯，詳見 `.codex/task-questions/20260822-231945-bgm-zip-import.md`。

- BGM 映射已確認：`CH3 3-1 春日影 → BGMHaru.mp3`、`CH3 3-3 鐵達尼號 → BGMWhisper.mp3`、`CH6 6-4 ED1用 → BGMED1.mp3`、`CH7 7-5 關羽之歌 → BGMKanu.mp3`；原始 TODO 保留作來源追溯，詳見 `.codex/task-questions/20260824-221212-bgm-mapping-candidates.md`。

- `project/images/ms_ch1_mapo_shop_entrance_cg.png`：暫用複製 CG，來源為 `project/images/scene_mapo_cg.png`；之後需要替換成「麻婆豆腐店門口」正式 CG。
- `project/images/ms_ch1_keng_2_5_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「2.5 梗平」正式 CG。
- `project/images/ms_ch1_thunder_crocodile_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「放大的鱷魚圖」正式 CG。
- `project/images/ms_ch1_keng_join_cg.png`：專案目前沒有現有 GIF 可複製，母檔暫用複製靜態圖，來源為 `project/images/scene_tournament.png`；之後需要替換成「梗平參戰」正式 CG，再執行 `python scripts/build_action_cgs.py`。
- `project/images/ms_ch2_keng_bicycle_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「梗平被腳踏車撞飛」正式 CG。
- `project/images/ms_ch2_eri_sunset_cg.png`：暫用複製 CG，來源為 `project/images/scene_badend.png`；之後需要替換成「夕陽下的神祕少女」正式 CG。
- `project/bgms/ms_ch2_gallery_opening.mp3`：暫用複製 BGM，來源為 `project/bgms/spacetime_mystery.mp3`；之後需要替換成美術館開場正式 BGM。
- `project/mainStory/CH1` 新增的日／夜與室內背景：目前以既有同類背景複製成唯一檔名，待替換秋葉原車站、街道、倉庫區、中華料理店、料理節目、兔子咖啡廳、商業地點與河邊夜景正式素材。
- `project/mainStory/CH1` 的手機簡訊、梗平躲藏、黑衣人、紅色麻婆碗、梗平VS宿儺、兔子攻擊、紙箱、紙箱人、小丑等 CG：目前以 `project/images/scene_mapo_cg.png` 複製素材暫代，待替換正式素材。
- Resolved: `main-story-ch7-4-background-tongzhi-smile`
  - Scope: `project/mainStory/CH7:622` 的 `【背景：桶至學長壯烈的微笑】`。
  - Source: root `CH7_L622.png`（1080×826，SHA-256：`AB4A8D6201E1558A2AE5B96D03233A57DB92A345C8F0FFD46C9E9485B1AA4961`）。
  - Current: 已縮放並取代為 `project/images/CH7_L622.png`（544×416，SHA-256：`9FCAC7158BA47B5FA168262B320CAC70A22B09ECF9159689B8C4D2230147BFD1`）。既有 `project/data.js` 登錄與 Story IR／floor 引用維持一致。
  - Evidence: `node scripts/validate_story.js` 與 `node scripts/generate_main_story.js --check` 通過；`.codex/task-questions/20260825-102710-ch7-media-bugs.md` Q4 已 resolved。
- Resolved: `main-story-ch7-4-cg-huihui-explosion-switch`
  - Scope: `project/mainStory/CH7:626` 的 `【CG：惠惠按下爆炸開關 出現】`。
-  - Source: root `CH7_L626.png`（1080×743，SHA-256：`F8DB1B475886801B32261FEED1E348ACDBDB62BAD4FCF1D8D3554114BB1A385A`）。
  - Current: 已取代為 `project/images/CH7_L626.png`（1080×743，SHA-256：`8D5EE2BB7F89F2C260EED9A190233043C44453B284F35B70AFD2E26FF76222C1`）。既有 `project/data.js` 登錄與 Story IR／floor 引用維持一致。
  - Evidence: `node scripts/validate_story.js` 與 `node scripts/generate_main_story.js --check` 通過；`.codex/task-questions/20260825-102710-ch7-media-bugs.md` Q5 已 resolved。
- Resolved: `main-story-ch6-3-bright-bookstore`
  - Scope: `project/mainStory/CH6:262` 的 `【背景：泛用書店內部(明亮)】`。
  - Current: Story IR／floor 已改用首次權威素材 `project/images/CH3_L66.png`，不再誤用暗色 `CH2_L295.png`。
  - Evidence: `project/story-ir/main/CH6.json`、`project/floors/main_ch6_3.js`；`node scripts/validate_story.js`、`node scripts/generate_main_story.js --check`、`node scripts/validate_story_alignment.js` 通過。
- Resolved: `main-story-ch6-4-background-and-bgm`
  - Scope: `project/mainStory/CH6:312`、`317`、`349`、`374` 的背景／BGM／演出型別。
  - Source: root `CH6_L349.png`（1080×826，SHA-256：`6F127DB3002B354F750BAD5D6072143D322D028BF4C7827744C254E5E47B3775`）與 `CH6_L374.png`（1080×826，SHA-256：`C6E3AC95E80D108D3294D22F6885A475D244AC32EA9C5101237D04F3AD9FA46E`）。
  - Current: `312` 改用 `CH1_L353.png`、`317` 改回 `BGMRakisuta.mp3`；`349` 與 `374` 改為完整背景事件並移除 CG hide，runtime 素材各縮放為 544×416，SHA-256 分別為 `172A4E59FBDA80D29F9DB09A2D539259EBC4A09A734DAFC51F8FF130EE6AED45`、`CE1FF5C1E7F55A886283C6DD855D5CFF66A2BA2F4F0AFA3FC81F9AB51A1156E2`。
  - Evidence: `project/story-ir/main/CH6.json`、`project/floors/main_ch6_4.js`；`node scripts/validate_story.js`、`node scripts/generate_main_story.js --check`、`node scripts/validate_story_alignment.js` 通過。
- Resolved: `main-story-ch7-background-switch-followup`
  - Scope: `project/mainStory/CH7:622`、`638`、`1215`、`1230`、`1233`、`1282`。
  - Current: `622` 背景改回主背景層 `code 1`，避免 626 的 CG hide 連帶清除背景；`638` 切換時間改為 0，避免女僕咖啡廳靜態底圖閃現；`1215` 使用 `CH6_L217.png`、`1230` 補上 `CH1_L42.png`、`1233` 補上 `BGMRakisuta.mp3`、`1282` 改用正式婚禮背景 `CH6_L343.png`。
  - Evidence: `project/story-ir/main/CH7.json`、`project/floors/main_ch7_4.js`、`project/floors/main_ch7_5.js`；遊戲內重現仍併入 `.codex/task-questions/20260825-102710-ch7-media-bugs.md` Q2。
- Resolved: `main-story-ch6-1-bgm-sequence`
  - Scope: `project/mainStory/CH6:14`、`29`、`67` 的 BGM 順序。
  - Current: `BGMYocho` 保留在 6-1 開場；`BGMTree` 移至第一段內容結束後的過場；`BGMRakisuta` 補回女僕咖啡廳過場前，移除錯置在轉樓層後的播放事件。
  - Evidence: `project/story-ir/main/CH6.json`、`project/floors/main_ch6_1.js`；`node scripts/validate_story.js`、`node scripts/validate_story_alignment.js` 通過。
- Resolved: `main-story-ch6-2-background-switch-and-size`
  - Scope: `project/mainStory/CH6:114`、`217`、`243` 的背景顯示與尺寸。
  - Current: 6-2 初始夜街與 243 夜街統一使用 `CH1_L353.png`；`CH6_L217.png` 由 1024×775 正規化為 544×416，供 CH6-2／CH7-5 共用。
  - Evidence: `project/story-ir/main/CH6.json`、`project/floors/main_ch6_2.js`、`project/images/CH6_L217.png`；完整主線驗證與生成器檢查通過。
- `project/mainStory/CH1 1-3`：來源要求「麻婆」立繪，但 `project/images/` 尚無可確認的麻婆角色立繪，該句暫不顯示立繪。
- `project/mainStory/CH1 1-4`：來源標記 `河邊(夜))` 多一個右括號，生成器暫以 `河邊(夜)` mapping 處理，未改寫來源。
- `project/mainStory/CH2`～`CH7` 新增的泛用／日夜／室內背景名稱：目前映射到既有同類背景資產，待替換正式專用素材。
- Open: `main-story-background-live-stage`
  - Scope: `project/mainStory/CH7 7-5` 的 `【背景：LIVE大舞台】`。
  - Temporary: `project/images/ms_bg_live_stage.png` 為舊暫代背景，已不再由 CH7-5 IR 引用。
  - Expected: 正式 `LIVE大舞台` 背景；目前改用既有正式 `project/images/CH7_L1093.png`，仍待遊戲內驗收確認。
  - Evidence: `project/story-ir/main/CH7.json` 的 CH7-5 1093／1153 兩處背景、`project/floors/main_ch7_5.js`；資產替換完成但 question file `20260825-102710-ch7-media-bugs.md` 維持 open。
- Resolved: `main-story-background-police-station`
  - Scope: `project/mainStory/CH7 7-5` 的 `【背景：派出所】`，以及 `kelukai_2`／`kelukai_3`／`kelukai_4` 三個既有可露凱場景。
  - Source: built-in imagegen 產生的派出所室內背景（原始輸出 1434×1097，SHA-256：`01FBA6EA150293D6248BD83C56E0A053067E00C7057DD1F6D2EE73FA981D6D97`）。
  - Current: 已縮放為 544×416 並寫入 `project/images/ms_bg_police_station.png`（SHA-256：`1B46375BE63778A7FBD0D242247A3C3B3A3CF1F752E481EE43D6DEE94696E877`）；CH7-5 Story IR 改用此正式檔名，可露凱既有引用同步使用新圖。
  - Cleanup: 移除不再被任何 Story IR／floor 使用的暫代 `ms_bg_station_akihabara.png` 及其 `project/data.js` 登錄。
  - Evidence: `node scripts/generate_main_story.js`、`node scripts/validate_story.js` 與 `node scripts/generate_main_story.js --check` 通過；question file Q1 已 resolved。
- Open: `main-story-costume-portraits`
  - Scope: `project/mainStory/CH3 3-1`、`project/mainStory/CH6 6-4`、`project/mainStory/CH7 7-5` 的服裝狀態角色標籤。
  - Missing: 正式服裝梗平／貝琪／前輩／桶至學長立繪與角色 mapping；目前不使用未驗收素材。
  - Done when: 正式服裝立繪完成驗收，接入 `project/images/`、`project/data.js`、Story IR 與對應 floor，並完成遊戲內驗證。
  - Evidence: 服裝角色標籤保留於權威來源與 Story IR；目前維持 open。

## 待實作演出或小遊戲

## 20260824 `【...】` 指令稽核後續

- Resolved: `main-story-ch7-bgm-directive-alignment`
  - Scope: CH7 全部 BGM 播放、停止、恢復指令已逐段對齊來源順序，並保留原始 TODO／規劃註記。
  - Evidence: `node scripts/validate_story_alignment.js`、`node scripts/generate_main_story.js --check`、`node scripts/validate_story.js` 通過。
- Resolved: `main-story-ch3-1-bgm-order`
  - Scope: 已移除 CH3 3-1 開場誤放的 BGMWitch，並將來源第 110 行的 BGMWitch 放回書店危機段落。
  - Evidence: `project/story-ir/main/CH3.json`、`project/floors/main_ch3_1.js`；雙向對位與完整故事驗證通過。
- Resolved: `main-story-source-ir-bidirectional-alignment`
  - Scope: CH1～CH7 的來源文字、BGM／停止／恢復、分歧與交流語意已完成雙向對位，支線不在本次範圍。
  - Evidence: `node scripts/test_story_alignment.js`、`node scripts/validate_story_alignment.js`、`node scripts/generate_main_story.js --check`、`node scripts/validate_story.js` 通過。
- Resolved: `main-story-character-exchange-lifecycle`
  - Scope: CH1～CH5 的 `【人物交流時間】` 統一按單一完整流程處理；交流結束返回 continuation scene 後，來源緊接的 BGM／演出從該 scene 開頭播放，支線不在本次範圍。
  - Evidence: `project/story-ir/main/CH1.json`～`CH5.json`、對應生成 floor、`node scripts/test_story_alignment.js`、`node scripts/validate_story_alignment.js`。
- Open: `main-story-exchange-and-headline-presentation`
  - Scope: CH7 headline 的刪除線／換行／大字組合，以及 `【返回標題畫面】` 尚未完成；CH1～CH5 `【人物交流時間】` 已依完整流程約束接入。
  - Done when: 確認 runtime 可用的語意表達後完成 IR／floor；無法表達的部分持續保留原始指令與 task-question。

- `project/mainStory/CH1 1-4`：下水道雷霆大鱷魚戰鬥目前依原稿以旁白略過，之後可補正式戰鬥或小遊戲。
- `project/mainStory/CH3 3-3`：統至分析傑士塔威的橋段可補獨立小遊戲。
- `project/mainStory/CH6 6-4`：結尾小動畫目前使用既有轉場影片事件暫代，之後可替換正式結尾動畫。

## 已確認可處理

- CH1-CH7 主線已接入樓層與時間線，可先作為完整可跑版本繼續迭代。
- `CG-20260822T143824Z-1-001.zip`（SHA-256：`3AA8EAC2B3834C718010A1E60D88F8AA7AA77999D7AC19D9D65F305F407DFEE6`）：83 張 `CH<N>_L<N>.png` 已逐檔核對首次 CG 出現行號，並接入 `project/images`、`project/data.js`、Story IR 與 floor；其中 22 張實際內容為 JPEG，依使用者確認保留原始 `.png` 檔名。驗證：`python scripts/build_action_cgs.py --check`、`node scripts/generate_main_story.js --check`、`node scripts/manage_story_ir.js`、83/83 圖片引用檢查。
