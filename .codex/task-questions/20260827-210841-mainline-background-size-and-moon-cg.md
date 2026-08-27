# Task Questions

- Created: `2026-08-27 21:08:41 +08:00`
- Task: `mainline-background-size-and-moon-cg`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`

## Questions

### Q1. CH7-5 月球表面 CG 是否有正式素材

- Classification: `non-blocking`
- Status: `open`
- Source: `project/mainStory/CH7` CH7-5 `【CG：畫面拉遠到月球表面】`
- Affected scope: `project/story-ir/main/CH7.json`、`project/floors/main_ch7_5.js`、`project/images/scene_mapo_cg.png`
- Temporary handling: 其他已確認的主線背景尺寸與背景 mapping 可繼續修正；月球 CG 維持現有可玩的暫代引用，不猜測正式素材。
- Decision needed: 是否提供或指定「畫面拉遠到月球表面」的正式 CG 素材；若有，需確認其可用檔案與 16:11 面板裁切方式。
- Decision / current direction: 目前 repository 沒有可由檔名或內容確認為月球表面的正式 CG；現行 `scene_mapo_cg.png` 是 416×416 的暫代圖，不能視為正式月球素材。
- Remaining work: 取得正式素材後，替換 Story IR／floor 引用，完成 `project/images/`、`project/data.js`、16:11 CG 面板與完整驗證鏈。
- Completion evidence: `project/story-ir/main/CH7.json` 目前仍引用 `scene_mapo_cg.png`；正式素材待補。
- Resolved at: pending

## Promotion

- Q1 promoted to `project/mainStory/TODO.md` as `main-story-ch7-5-moon-surface-cg`.
