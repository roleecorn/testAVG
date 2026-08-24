# Task Questions

- Created: `2026-08-24 00:39:20 +08:00`
- Task: `立繪重新生成品質檢討`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`, `project/story/TODO.md`

## Questions

### Q1. 目前重新生成批次不可接受

- Classification: `blocking`
- Status: `open`
- Source: 使用者 2026-08-24 回饋；主線／支線重新生成工作目錄與 `project/images/`
- Affected scope: 所有本次重新生成的主線與支線立繪、圖片接入結果
- Temporary handling: 停止後續生成與再次覆蓋；目前生成圖只保留作為失敗批次證據，不得視為合格美術資源
- Decision needed: 重新生成時必須以原始角色圖的可核對特徵為硬約束；原始已是完整立繪者不得重繪，應直接保留原圖並只處理外部背景；非完整立繪才可依原圖特徵生成全身版本
- Decision / current direction: 已確認目前批次不合格。失敗主因是使用泛化職業／外觀文字猜測角色，未逐角色抽取並核對原始性別、髮型、髮色、服裝、物種、年齡與辨識配件；主線也錯誤地把原始完整立繪全部送入重生成
- Remaining work: 重新盤點每個原始資源的形態與角色特徵；建立「直接保留／特徵參考後生成」分流；撤銷或替換目前不合格圖片；重新進行圖片位置與素材驗證
- Completion evidence: 尚無；`node scripts/validate_story.js` 只能證明檔案與入口完整，不能證明角色辨識正確
- Resolved at: `<pending>`

## Promotion

- `Q1` 必須維持 open，直到不合格批次被替換並完成逐角色視覺驗收。
