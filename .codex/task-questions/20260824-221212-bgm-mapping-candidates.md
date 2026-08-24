# Task Questions

- Created: `2026-08-24 22:12:12 +08:00`
- Task: `依既有 24 首 BGM 建立來源曲名候選映射`
- Overall status: `open`
- Long-term TODO: `project/mainStory/TODO.md`、`project/story/TODO.md`

## Questions

### Q1. 來源 BGM 曲名與既有檔案的候選映射

- Classification: `non-blocking`
- Status: `open`
- Source: `project/mainStory/CH3`、`CH6`、`CH7`；`project/story/*.txt` 的 BGM 指令；既有 `project/bgms/`
- Affected scope: 下列 Story IR 與其生成 floor 的 BGM 播放事件
- Temporary handling: 已先接入可播放且已登錄的檔案；四筆已確認映射已標記並完成 floor 重新輸出，剩餘候選仍保留原始 TODO／來源意圖，等待人工確認。

| 來源指令 | 候選檔案 | 信心 | 推定依據 |
| --- | --- | --- | --- |
| CH3 3-1 `春日影` | `BGMHaru.mp3` | confirmed | 使用者確認 |
| CH3 3-3 `鐵達尼號` | `BGMWhisper.mp3` | confirmed | 使用者確認 |
| CH6 6-4 `ED1用` | `BGMED1.mp3` | confirmed | 使用者確認 |
| CH7 7-5 `關羽之歌` | `BGMKanu.mp3` | confirmed | 使用者確認 |
| 漆原瑠華 `GET WILD` | `Get_Wild.mp3` | high | 使用者新增同名音檔，SHA-256 已記錄並接入 `project/bgms` |
| 可露凱 `unwelcome school` | `Unwelcome_School.mp3` | high | 使用者新增同名音檔，SHA-256 已記錄並接入 `project/bgms` |
| 月讀愛 `希望之花` | `BGMYume.mp3` | low | 希望／收束情境；檔名無直接證據 |
| 月讀愛 `EXCITE` | `EXCITE.mp3` | high | 使用者新增同名音檔，SHA-256 已記錄並接入 `project/bgms` |
| 綿貫咲耶 `陰森的神明大祭` | `BGMWitch.mp3` | medium | 巫女祭典／詭異氣氛，檔名具巫術情境但非直接證據 |
| 神秘香蕉人 `目標是成為寶可夢大師最後10秒` | `BGMRun.mp3` | low | 變身／動作高潮情境；檔名無直接證據 |

- Decision needed: 人工確認剩餘 low／medium 項目：`希望之花`、`陰森的神明大祭` 與寶可夢變身段。
- Decision / current direction: 使用者已確認 `春日影`、`鐵達尼號`、`ED1用`、`關羽之歌`；另 `GET WILD`、`unwelcome school`、`EXCITE` 已使用者提供的同名音檔接入；其餘維持候選先行，問題仍 `open`。
- Remaining work: 人工確認剩餘候選後更新檔名、移除對應暫代註記，重新執行 Story IR／floor／完整故事驗證。
- Completion evidence: 三首新增音檔已複製至 `project/bgms`、加入 `project/data.js`，並接入 `project/story-ir/character/ruka.json`、`kelukai.json`、`yuedu-ai.json`；四筆主線確認映射已同步至 Story IR／floor。`node scripts/generate_main_story.js --check`、`node scripts/validate_story_source.js`、`node scripts/validate_story.js` 與 `git diff --check` 均通過。
- Resolved at: `pending`

## Promotion

上述候選已同步至 `project/mainStory/TODO.md` 與 `project/story/TODO.md`，等待人工修正。
