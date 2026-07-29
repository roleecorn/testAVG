# 單一角色劇情 ZIP 任務拆分介面

當使用者只提供一個 ZIP，且可能同時包含 Word 劇本與角色圖基準時，先讀：

```text
../../../../agent/角色劇情壓縮檔任務拆分流程.md
```

這是編排流程，不是圖片或劇情的通用規範。先依文件完成 A「解壓與盤點」，再只對其已驗收產物派發 B「文字提取」與 C「角色圖辨識」。後續的 D「表情表生成」、E「圖片接入」、F「劇本轉事件」與 G「整合驗收」均必須遵守其輸入／輸出契約與依賴關係。

執行 D 時，還必須載入 `anime-expression-grid` 與 `imagegen`；執行 E、F、G 時，再依主流程指定載入 `references/images.md`、`references/text-to-event-json.md`、`references/floors.md` 或 `references/checklist.md`。不得將本流程內容併入這些既有的通用規範。
