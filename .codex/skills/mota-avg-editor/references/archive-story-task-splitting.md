# 單一角色劇情 ZIP 任務拆分介面

當使用者只提供一個 ZIP，且可能同時包含 Word 劇本與角色圖基準時，先讀：

```text
../../../../agent/角色劇情壓縮檔任務拆分流程.md
```

這是編排流程，不是圖片或劇情的通用規範。必須依正式流程中的「Skill 重用與責任對照」將 A 至 G 分別交給既有能力：A 只盤點，B 只提取並落地真實來源文本，C 只確認角色與圖片身分，D 重用表情圖生成 Skill，E 重用圖片接入規則，F 重用文本轉事件與場景規則，G 重用交付檢查清單。每一步只接收已驗收的上游產物，不得跨階段直接修改下游資料。

執行 D 時，必須載入 `anime-expression-grid` 與 `imagegen`；執行 E 時載入 `references/images.md`；執行 F 時按內容載入 `references/text-to-event-json.md`、`references/floors.md`、`references/dialogue.md`、`references/scene-flow.md` 及所需音訊規則；執行 G 時載入 `references/checklist.md`。不得在本編排 reference 內複製或改寫這些既有能力的實作規則。
