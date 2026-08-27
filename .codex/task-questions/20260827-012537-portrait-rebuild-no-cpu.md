# Task Questions

- Created: `2026-08-27 01:25:37 +08:00`
- Task: `重切 bodyguard、dio、strongman_b 六表情立繪`
- Overall status: `resolved`
- Long-term TODO: `none`

## Questions

### Q1. GPU 去背執行環境不可用

- Classification: `blocking`
- Status: `resolved`
- Source: `remove_bk.py` / 使用者要求「不要用 CPU 處理」
- Affected scope: `bodyguard`、`dio`、`strongman_b` 的母片分割後去背與 `project/images/ms_portrait_*` 素材替換
- Temporary handling: 依新增 GPU workflow 指向本機 CUDA DLL，完成母片副本、六格分割與 GPU 去背後替換；原始母片未修改
- Decision needed: none
- Decision / current direction: 使用者禁止 CPU；改用文件指定的 `CUDAExecutionProvider` 與 `isnet-anime`
- Remaining work: none
- Completion evidence: 18 張輸出均回報 `Model: isnet-anime`、`ONNX providers: ['CUDAExecutionProvider', 'CPUExecutionProvider']`；18 張 runtime 與 18 張 `art/characters` 成品均為 RGBA、alpha 非空且兩處 SHA-256 一致；`python -m py_compile remove_bk.py`、`git diff --check`、`node scripts/validate_story.js` 通過。重建結果與原檔位元相同，因此沒有產生圖片 diff。
- Resolved at: `2026-08-27 01:39:15 +08:00`

## Promotion

None
