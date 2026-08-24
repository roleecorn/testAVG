# Task Questions

- Created: `2026-08-24 00:00:00 +08:00`
- Task: `character-story-import side-story expression grids`
- Overall status: `open`
- Long-term TODO: `project/story/TODO.md`

## Questions

### Q0. `半身參考圖生成與替換`

- Classification: `non-blocking`
- Status: `resolved`
- Source: `2026-08-24 user instruction to generate and replace existing game assets`
- Affected scope: `師匠、月讀愛、漆原瑠華、菈菈安瑟姆及本次已確認支線角色`
- Temporary handling: `先生成母圖，通過逐角色目視驗收後再 split/remove_bk，保留原檔備份並以相同檔名替換。`
- Decision needed: `none`
- Decision / current direction: `已依使用者指示完成`
- Remaining work: `none`
- Completion evidence: `work/replacement-run/final/`、`work/bulk-replacement/final/`、`project/images/` 對應既有檔名；data.js／Story IR 引用未改名且替換後檔案為 RGBA 透明圖。菈菈安瑟姆由使用者確認符合要求；唐三、良秀、茱茱仍未落地。
- Resolved at: `2026-08-24`

### Q1. `茱茱參考圖被安全阻擋`

- Classification: `blocking`
- Status: `open`
- Source: `tmp/character-story-import/drive-download-20260823T111855Z-1-001/20260823-192556/raw/2.茱茱(55)/圖檔/茱茱.png` and built-in image generation safety response
- Affected scope: `茱茱六表情母圖生成與其後續 project/images/ 接入`
- Temporary handling: `停止茱茱；不改用 ComfyUI、本機後端、或繞過 anime-expression-grid 固定提示詞。其他身份已確認且參考圖為全身的支線角色可繼續。`
- Decision needed: `是否提供符合安全生成條件的完整角色參考圖／服裝版本，或明確取消茱茱本次六表情生成？`
- Decision / current direction: `待使用者提供；目前不生成、不寫入 project/images/`
- Remaining work: `茱茱六表情生成、逐格檢查與正式接入仍未完成`
- Completion evidence: `尚無；本次內建生成請求被 safety system 以 sexual 類別拒絕`
- Resolved at: `pending`

## Promotion

`project/story/TODO.md` 已同步；仍保留 Q1 open 以阻止茱茱落地，並在 TODO 記錄良秀身份漂移與唐三跨格瑕疵。
