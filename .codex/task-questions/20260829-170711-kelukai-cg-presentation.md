# Task Questions

- Created: `2026-08-29 17:07:11 +08:00`
- Task: `可露凱 CG 與演出強化`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. `後巷制伏 CG 的取景`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `project/story/可露凱.txt` 好感度 2，`可露凱:趴下。` 至 `下一秒，男人已經被可露凱壓在地上。`
- Affected scope: `project/story/可露凱.txt`、`project/story-ir/character/kelukai.json`、`kelukai_2` 與對應 CG 素材
- Temporary handling: 本機模型兩輪校準無法可靠呈現兩人近身壓制，改用同一動作節拍前一瞬的「可露凱疾衝向畫外嫌疑人」單人動態取景；其他 CG 與演出繼續。
- Decision needed: 確認此取景能在避免錯誤肢體的前提下表達制伏速度與衝擊。
- Decision / current direction: 採用單人動態取景，搭配畫面震動及既有撞擊節點完成動作感。
- Remaining work: none
- Completion evidence: `project/images/kelukai_alley_dash_cg.png` 與衍生 action CG 已接入 `kelukai_2`；`project/floors/kelukai_2.js` 具有震動畫面及固定一秒 CG 序列；`python scripts/build_action_cgs.py --check`、`node scripts/validate_story.js` 通過。
- Resolved at: `2026-08-29 17:24:17 +08:00`

### Q2. `CG 檔名與中央裁切`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `mota-action-cg` 固定契約
- Affected scope: 三組 `kelukai_*_cg.png`／`kelukai_*_action_cg.png`、`scripts/build_action_cgs.py`、`project/action-cg-manifest.json`
- Temporary handling: 母圖使用 1024×704、接近 16:11 的寬幅構圖，衍生檔由既有 builder 中央裁切為 416×286；不手改衍生檔。
- Decision needed: 確認三個描述性檔名與中央裁切後主體均維持在安全區。
- Decision / current direction: 使用 `kelukai_alley_dash`、`kelukai_flashback_strike`、`kelukai_stalker_confrontation`。
- Remaining work: none
- Completion evidence: 三張 1024×704 母圖與三張 416×286 衍生圖已目視核對；`project/action-cg-manifest.json` 記錄中央裁切與雜湊；三組 IR／floor 均為 `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`；完整 Story validation 通過。
- Resolved at: `2026-08-29 17:24:17 +08:00`

## Promotion

None；兩項均已完成並有檔案與驗證證據。
