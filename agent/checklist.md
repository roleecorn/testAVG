# AI 撰寫檢查清單

- 新樓層檔名、`floorId`、`main.floors.<id>` 三者一致。
- 新樓層 ID 已加入 `project/data.js -> main.floorIds`。
- 新圖片已放入 `project/images` 並加入 `main.images`。
- 新 BGM 已放入 `project/bgms` 並加入 `main.bgms`。
- 新音效已放入 `project/sounds` 並加入 `main.sounds`。
- 所有事件 JSON 都是合法 JS 物件/陣列；字串內換行使用 `\n`。
- 角色台詞預設用 `\t[角色]正文`；旁白不是發言者，轉 scene 時直接寫正文，不要輸出成 `\t[旁白]正文`；普通 AVG 台詞不要加 `\b[...]`。
- 立繪切換要遵守「只顯示當前發言者」；旁白前要清空人物圖。
- 自動補立繪時，先確認圖片屬於當前發言角色，再依台詞情緒選擇同角色的合適表情；判斷不出情緒才用預設圖。找不到同角色圖片就留空，不可用相似或其他角色圖片代替。`梗平` 已知存在，預設可用 `keng_neutral_portrait.png`。
- 立繪座標要採 AVG 站位：不要完整浮在文字框上方，應讓下半身進入底部對話框覆蓋區。
- 持續立繪用 `showImage/hideImage` 或 `showFloorImg/hideFloorImg`，不要只用 `\f`。
- 修改既有樓層或劇本時，優先維持原檔格式與局部修改，避免為了小改動重新序列化整份 JSON/JS 造成大 diff。
- AVG 預設英雄圖保持透明；若要做小遊戲需要可見玩家角色，再另備可見英雄圖或用 `showHero`/`setHeroOpacity` 控制。
- 劇情分支用 `flag:xxx`；單點一次性狀態用 `switch:A`；跨存檔解鎖用 `global:xxx`。
- 搜尋 Flag 時使用事件編輯器的「變量出現位置搜索」，搜尋 `flag:xxx`。
- AVG 場景若不需要地圖玩法，`map` 全填 `0`，背景交給樓層貼圖或 `showImage`。
- 獨立小遊戲本體放在 `extensions/minigames/`；`project/plugins.js` 只做載入、事件入口與結果回寫。
- 小遊戲必須從標準服務 `启动服务.exe` 啟動後，在遊戲事件流程中測試，不用 `8765` 或 `python -m http.server` 當作預設測試方式。

