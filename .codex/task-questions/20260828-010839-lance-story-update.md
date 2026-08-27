# 蘭斯支線更新疑慮

- 建立時間：2026-08-28 01:08（Asia/Taipei）
- 狀態：open
- 分類：非阻塞；暫代素材與可逆角色資源配對

## 範圍

- `project/story/蘭斯支線.txt`
- 新增 `lance_1`～`lance_4` Story IR、floor 與秋葉原事件入口
- 來源中 `希露` 立繪與 `克莉絲迎擊` CG

## 判定與暫時處理

- 權威來源目前 SHA-256：`3d518716fee3ed2776d1492252dba02feddc6502044eab30f133515f289b8143`；支線共四段好感劇情。
- `希露` 立繪指令可由同一 fresh ZIP run 的原始資源 `17.蘭斯/圖檔/Sill-01_(2).png` 追溯，SHA-256：`4ff25367fab2d84644d3f473bdd49b5af1005d0de298e81caa23fa72cb525d2c`；本次以直接使用的 `project/images/lance_sill_normal.png` 接入，保留原角色顯示名稱。
- `克莉絲迎擊` 來源未提供可直接使用的正式 CG；先以可搜尋的 `lance_cg_chris_attack_placeholder.png` 暫代，並在 `project/story/TODO.md` 保留正式素材替換條件。
- 各來源場景目前沒有對應正式背景；依場景語意使用既有 544×416 背景複製為唯一命名 placeholder，不覆寫既有背景，並在 `project/story/TODO.md` 記錄來源與替換條件。
- ZIP 中的 `Cg00011.png` 沒有被本支線來源指令引用，維持未應用；不加入 `project/images/` 或 `main.images`。

## 解決條件

- 取得並驗收 `克莉絲迎擊` 正式 CG、各支線場景正式背景後，替換 placeholder、更新 manifest／TODO，重新通過 `node scripts/validate_story.js` 與遊戲內入口驗證。

## 驗證狀態

- 蘭斯 IR schema／素材／floor references、`manage_story_ir.js`、主線 emitter check、action-CG check、Story IR lifecycle、Akiba event manager、Akiba minigame、western duel、四個 lance floor `node --check`、`data.js` syntax 與 Akiba meta JSON 均通過。
- `node scripts/validate_story_architecture.js` 已通過，確認四個新 scene 有 `lance_1` meta root 與 `lance_1 → lance_2 → lance_3 → lance_4` 入口鏈。
- 全域 `node scripts/validate_story_source.js`／`node scripts/validate_story.js` 目前被既有 `project/story/NoiR.txt` 與 `project/story-ir/character/noir.json` 的 hash drift 阻塞；此非本次蘭斯來源，沿用既有 open TODO `noir-source-ir-hash-drift`，未猜改 NoiR IR。

## 證據

- `project/story/蘭斯支線.txt` 完整來源與逐行演出審計：`tmp/character-story-import/lance-story-update/20260828-010839/work/source-audit.md`
- 舊 ZIP 原始資源：`tmp/character-story-import/drive-download-20260823T111855Z-1-001/20260823-192556/raw/17.蘭斯/圖檔/`
