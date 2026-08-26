# Task Questions

- Created: `2026-08-26 22:28:54 +08:00`
- Task: `remove-bk-color-classification`
- Overall status: `resolved`
- Long-term TODO: none

## Q1. 去背誤刪人物內容

- Classification: `resolved`
- Status: `resolved`
- Scope: `remove_bk.py` 與目前 `art/characters/` 內 47 組主線角色表情素材。
- Finding: 不同母片的綠幕 RGB 不一致；同一切圖的安全邊框有小幅波動。舊流程的寬泛 HSV、morphology、Connected Component、區域面積判定及預設 spill suppression 可能把人物內綠色內容誤判或改色。
- Decision: 改為每張切圖從安全邊框估算實際背景色，以小範圍 BGR color distance 判定；取消連通元件、區域大小與 morphology，`edge_softness`／`spill_strength` 預設停用。
- Evidence: `remove_bk.py`；`art/characters/mainline-generation.md`；282 張切圖重新處理；所有更新 runtime PNG 通過 RGBA alpha 檢查。
- Validation: `python -m py_compile remove_bk.py`、`node scripts/validate_story.js`、`node scripts/generate_main_story.js --check`、`git diff --check`。
- Resolved at: `2026-08-26 22:28:54 +08:00`
