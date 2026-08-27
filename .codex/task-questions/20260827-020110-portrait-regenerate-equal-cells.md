# Task Questions

- Created: `2026-08-27 02:01:10 +08:00`
- Task: `重新生成 bodyguard、dio、strongman_b 等格母片並替換六表情立繪`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. 生成模型是否會嚴格遵守六格等尺寸與跨格留白

- Classification: `non-blocking`
- Status: `resolved`
- Source: `imagegen` 生成提示與 `anime-expression-grid` 六格母片規格
- Affected scope: `bodyguard`、`dio`、`strongman_b` 的母片生成、分割、去背與素材替換
- Temporary handling: 生成結果先以綠幕前景分離各格人物，再以固定 512×512 cell、統一 380px 人物高度重排成母片；未用此步驟取代 GPU 去背
- Decision needed: none
- Decision / current direction: 母片必須為 2×3 的六個等大 cell；以重排後母片作為後續標準分割輸入
- Remaining work: none
- Completion evidence: 三張母片均為 1024×1536 RGB，六格無跨列／跨欄前景且垂直留白至少 66px；18 張成品均為 RGBA、alpha 非空、最頂 row 無非透明像素；`remove_bk.py` 全部使用 `CUDAExecutionProvider`；`node scripts/validate_story.js`、`git diff --check`、`python -m py_compile remove_bk.py` 通過。
- Resolved at: `2026-08-27 02:01:10 +08:00`

## Promotion

None
