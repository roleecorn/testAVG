# AI 撰寫檢查清單

- 新樓層檔名、`floorId`、`main.floors.<id>` 三者一致。
- 新樓層 ID 已加入 `project/data.js -> main.floorIds`。
- 新圖片已放入 `project/images` 並加入 `main.images`。
- 新 BGM 已放入 `project/bgms` 並加入 `main.bgms`。
- 主線或支線樓層已在完整篇劇情處理完後，依整體情境設定合適 `"bgm"`；未指定時依 [BGM 背景音樂](bgm.md) 的風格庫自動選曲。
- 新音效已放入 `project/sounds` 並加入 `main.sounds`。
- 所有事件 JSON 都是合法 JS 物件/陣列；字串內換行使用 `\n`。
- 角色支線輸入應為 `.txt`，且檔名可確認支線持有者；新增支線前必須確認已有對應角色圖，缺圖時拒絕改動。
- 角色支線事件 ID、樓層 ID、檔名使用 `角色英文名_章節序號`；已知角色不可保留 `mystery_girl`、`unknown` 等中間暫名。
- 角色支線章節若已寫明標題，該標題就是劇情名稱；若未命名或只叫 `好感度1/2/3`，可依內容補 7 個中文字以下的短名。樓層 `title`、meta `activeEvents[].title`、`addAkibaEvent({ title })` 都使用這個短名，不要保留 `好感度N：` 前綴。
- 已有角色原始圖時，必須先用 `remove_bk.py` 去背輸出透明 PNG，再用 `split_emotion_image.py` 分割六張表情；不可因為原圖可直接分割或只需裁切就跳過去背。輸出圖預設等比例縮小到不超過 `195x195`，並將輸出圖片加入 `project/data.js -> main.images`。
- 角色支線文本的 `場地:` 若不存在於 `project/location-mappings.json`，自動選擇最接近的既有地點；沒有合理近似時使用既有地點作為隨機 fallback，並在交付說明中寫明選用的 `location.id`。
- 角色台詞預設用 `\t[角色]正文`；旁白不是發言者，轉 scene 時直接寫正文，不要輸出成 `\t[旁白]正文`；普通 AVG 台詞不要加 `\b[...]`。
- 立繪切換要遵守「只顯示當前發言者」；旁白前要清空人物圖。
- 自動補立繪時，先確認圖片屬於當前發言角色，再依台詞情緒選擇同角色的合適表情；判斷不出情緒才用預設圖。找不到同角色圖片就留空，不可用相似或其他角色圖片代替。`梗平` 已知存在，預設可用 `keng_neutral_portrait.png`。
- `???`、`神秘人`、`神祕人` 等刻意隱蔽的支線發言者，預設以支線持有者本人選圖，但顯示名稱維持隱蔽寫法。
- 立繪座標要採 AVG 站位：不要完整浮在文字框上方，應讓下半身進入底部對話框覆蓋區。
- 持續立繪用 `showImage/hideImage` 或 `showFloorImg/hideFloorImg`，不要只用 `\f`。
- 修改既有樓層或劇本時，優先維持原檔格式與局部修改，避免為了小改動重新序列化整份 JSON/JS 造成大 diff。
- AVG 預設英雄圖保持透明；若要做小遊戲需要可見玩家角色，再另備可見英雄圖或用 `showHero`/`setHeroOpacity` 控制。
- 劇情分支用 `flag:xxx`；單點一次性狀態用 `switch:A`；跨存檔解鎖用 `global:xxx`。
- 搜尋 Flag 時使用事件編輯器的「變量出現位置搜索」，搜尋 `flag:xxx`。
- AVG 場景若不需要地圖玩法，`map` 全填 `0`，背景交給樓層貼圖或 `showImage`。
- 獨立小遊戲本體放在 `extensions/minigames/`；`project/plugins.js` 只做載入、事件入口與結果回寫。
- 小遊戲必須從標準服務 `启动服务.exe` 啟動後，在遊戲事件流程中測試，不用 `8765` 或 `python -m http.server` 當作預設測試方式。

