# TODO 與待確認事項

## 基本規則

劇情撰寫、轉換或接入途中，如果產生 TODO、待補內容、待確認人物、缺素材、分歧未完成、演出未定、或需要使用者回覆的問題，不要只寫在對話框內。必須在專案中新增或更新一份 TODO list 檔案，讓後續工作可以搜尋與追蹤。

疑慮採兩層保存：

1. 當次任務先建立 `.codex/task-questions/YYYYMMDD-HHmmss-<task>.md`，記錄建立時間、阻塞分類、影響範圍、暫時處理與需要的決策。
2. 任務結束時永久保留 question file；尚未解決且需要跨任務追蹤的項目，再匯總到下列長期 TODO。

## Open 與 Resolved 的邊界

`resolved` 只能表示受影響工作已真正完成，且已有可核對的檔案與驗證證據。使用者決定、規格定稿、決定延後、等待外部輸入或「本次不處理」只會確定後續方向，不會關閉 question 或 TODO。

只要仍有遷移、程式、素材、驗證或外部輸入未完成，question 必須維持 `open`，並在對應長期 TODO 保留 Open 項目。該項目至少列出影響範圍、完成條件與所需驗證；完成後才能連同 question 一起移至 Resolved。不得只因文件或決策已更新而關閉仍有實作債的項目。

建議位置：

- 主線劇本：`project/mainStory/TODO.md`
- 角色支線：`project/story/TODO.md`
- 小遊戲：該小遊戲資料夾內的 `TODO.md`
- 跨系統事項：根據實際修改範圍，放在最接近該工作區塊的位置。
- 跨功能 Agent／Skill 事項：`.codex/TODO.md`。

## TODO list 格式

TODO list 使用 Markdown，至少包含：

- `## 待確認人物`
- `## 待補劇情`
- `## 待補素材`
- `## 待實作演出或小遊戲`
- `## 已確認可處理`

每筆項目盡量寫出來源檔案、章節或場景，例如 `project/mainStory/CH2 2-4`。若後續已確認，將項目移到 `已確認可處理` 或直接標記完成；不要讓已解決問題長期留在待確認區。

每筆 Open TODO 也必須寫出完成條件與驗證證據，例如：

```md
- Open: `avg-legacy-cg-migration`
  - Scope: `project/floors/watanuki_sakuya_1.js`、`project/floors/watanuki_sakuya_4.js`
  - Done when: CG 統一使用現行版面座標與裁切契約。
  - Evidence: floor diff、`node --check` 與遊戲內驗收。
```

## 不確定人物

遇到不確定身分、正式名稱、角色 ID、立繪對應、或是否應該顯示圖片的人物時，先不要自行猜測或套用相似角色圖片。角色身分疑慮不阻塞同批其他角色；只局部阻塞該角色的表情生成、圖片接入與 scene／floor 接入。

在事件或中間稿中，先用便於搜尋的文字：

```txt
不知道是誰的<劇本中出現的名稱>
```

例如劇本中出現 `松：`，但無法確認他是既有角色或正式顯示名時，先使用：

```txt
不知道是誰的松
```

同時把該人物登記到 TODO list 的 `待確認人物`。等同一批未知人物整理完後，再統一詢問使用者；使用者確認後，才統一替換文字、角色 ID 與出現圖片。

## 素材缺口

缺背景、CG、GIF、立繪、BGM 或音效時，也要寫進 TODO list。可在 intake 的 draft Story IR 使用可搜尋的 `unresolved.directive` 保留演出意圖，但 validated Story IR／floor 不得引用不存在、未登錄或不相干的素材。

劇情圖片缺口一律依來源需求處理：先完整閱讀 story source 並建立 draft Story IR，再從輸入圖片依檔名與內容配對直接素材，或以已記錄來源路徑與 SHA-256 的圖片生成 runtime 圖。若 draft Story IR 明確需要圖片但沒有正式素材，複製另一張合適圖片作為暫時替代，立即完成 `project/images/ → main.images → scene`；角色劇情寫入 `project/story/TODO.md`，主線寫入 `project/mainStory/TODO.md`。TODO 必須列出暫時檔名、copied source、預期正式素材、受影響 scene、替換條件與驗證證據。

若只是 ZIP 額外來源圖暫時找不到 scene 用途，原樣複製到 repo 根層 `unknown/<角色ID>/<原始相對路徑>` 並保留 SHA-256；角色劇情寫入 `project/story/TODO.md`，主線寫入 `project/mainStory/TODO.md`。放入 `unknown/` 只表示待辦，不算已應用，也不得加入 `main.images`。Placeholder 與 unknown 待辦都不得只記在 task question；必須同步落到上述故事 TODO。
