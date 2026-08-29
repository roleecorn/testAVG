# 可露凱演出指示稽核

- 日期：2026-08-29（Asia/Taipei）
- 權威來源：`project/story/可露凱.txt`
- Story IR：`project/story-ir/character/kelukai.json`
- 衍生樓層：`project/floors/kelukai_1.js`～`kelukai_4.js`
- 來源 SHA-256：`72fdda17a0c83fff7c1cf5315508e36927e5d4a7451c9e23a719bfe30e421c6a`

## 演出採用原則

- 移除只存在於註記、沒有對應素材或 runtime 無法顯示的效果。
- 震動使用 `screen.shake`／`avgShake`，同時位移固定遊戲畫布與 `showImage` AVG 動態圖層，對話 UI 保持穩定。
- 色調、淡黑與閃光使用 curtain 層，覆蓋背景、立繪與行為 CG，但不遮蔽對話 UI。
- 所有行為 CG 維持不可略過的一秒中央面板契約。

## 分篇核對

### 第一篇

- 街頭扒手段：微暗聚焦、恢復亮度、後悔停頓、逼近壓暗均有 `screen.tint`／`screen.reset`。
- 威脅節拍：警示音、梗平立繪與街景橫向震動後才啟動追逐 BGM。
- 警察局切換：淡黑、背景替換、淡入；撞門聲、嫌棄／思考／微笑立繪及門外暗轉均有對應事件。

### 第二篇

- 辦公桌調查：照片落桌、截圖滑動與監視器切換都有不同音高的提示音；插話與離場加入短停頓。
- 後巷追逐：淡黑切至傍晚後巷、懸疑 BGM、奔跑低幅震動、撞擊音與重震。
- 制伏節拍：一秒疾衝行為 CG；拔槍時使用單次紅色警示閃光。

### 第三篇

- 現在時：腳步、插話停頓、文件聲與既有一秒沉默均保留。
- 回憶段：淡黑進場、冷灰藍低飽和色調、暫停 BGM、低頻通訊警示音。
- 攻擊段：一秒按鍵行為 CG、爆炸音、白色全畫面閃光與斜向震動；最後退為黑幕。

### 第四篇

- 調查節奏：紀錄落桌／拿起、起身動作音，以及對遠處男子的聚焦暗轉均有對應事件。
- 店鋪與對峙：淡黑切換店鋪前背景、對峙行為 CG與近景暗轉，之後淡黑返回警察局。
- 尾聲：開門聲後延遲、店員失望與離場停頓，保留安靜而克制的收尾。

## 素材狀態

- 三組可露凱行為 CG 已正式接入並由 `project/action-cg-manifest.json` 追溯。
- `kelukai_alley_evening_bg.png`、`kelukai_shopfront_day_bg.png` 是可追溯的既有背景暫代品；正式專屬背景仍記錄於 `project/story/TODO.md`，不影響目前演出可執行性。
- 本次沒有保留直接呼叫 `core.vibrate(...)` 的功能事件。

## 驗證證據

- `node scripts/test_avg_effect_runtime.js`：通過；固定遊戲畫布與背景／立繪動態圖層皆出現非零位移，UI 動態圖層未移動，結束後 transform 完整復原。
- `node scripts/test_story_ir_lifecycle.js`：通過；新語意可正確輸出 `avgShake`、`setCurtain` 與 `screenFlash`，不合法的閃光時間會被拒絕。
- `node scripts/validate_agent_skill_routes.js`：0 errors。
- `node scripts/validate_story.js`：通過；來源、Story IR、四篇 floor、CG、素材與 runtime 架構一致。
- `git diff --check`：通過。
