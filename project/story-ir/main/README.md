# 主線 Story IR

主線 Story IR 依權威來源章節拆分保存：`CH1.json`～`CH7.json` 各自對應 `project/mainStory/CH1`～`CH7`，只包含該章的 `source.files` 與 scenes。通關特典另置於 `bonus/CH8.json`，由同一生成器輸出但不進入 `project/timeline.json`。每個檔案仍是完整且可獨立通過共用 Story IR schema 驗證的 bundle。

所有 scene 共通的 bundle-level `presentation` 與 `scene.floor.map` 不保存於 Story IR。`scripts/story_ir.js` 的共用 generator 會注入固定 presentation、17×13 全零 map，再輸出 floor；個別台詞節點上的 `presentation` 仍屬於台詞演出語意，照常保留。

主線 floor 生成器會依 `CH1` 到 `CH7` 的固定順序讀取主線 bundle，再讀取 `bonus/` 下的特典 bundle，檢查來源與 scene ID，注入共通 presentation／map 後再確定性輸出 `project/floors/`。不要直接修改 floor；調整劇情時先更新對應章節 IR，再執行：

```powershell
node scripts/validate_story_source.js
node scripts/generate_main_story.js
node scripts/generate_main_story.js --check
node scripts/validate_story.js
```

拆分不改變 scene 內容、順序或 floor 輸出；架構驗證器會比對合併後的主線 IR 與上一個版本，只有純結構拆分且所有 floor 完全不變時才接受無 floor diff 的遷移。
