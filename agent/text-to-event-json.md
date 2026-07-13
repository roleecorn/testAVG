# 純文字轉事件 JSON

## 純文字到事件 JSON 的建議格式

AI 接到劇本文本時，先轉成中間格式，再轉成事件陣列。

中間格式範例：

```txt
[SCENE scene_intro]
title: 序章
bg: intro_bg.jpg
bgm: opening.mp3

旁白: 雨停了。
表妹@suou_sad_portrait.png: 所以大家到底去哪裡了？
CHOICE 要相信梗平的直覺嗎？
- 相信 => flag:trust_suou += 1
- 還不能 => flag:trust_suou -= 1
GOTO scene_002
```

事件輸出範例。所有故事劇情、章節劇情、場景演出都應放進樓層的 `eachArrive`。`firstArrive` 目前不放故事，只保留給未來明確需要整個存檔只執行一次的指導規則或初始化功能。

文字稿中的 `旁白:` 是敘述標記，不是發言者。轉成 scene / event JSON 時要省略發言對象，輸出成普通文字字串；不要寫成 `"\t[旁白]正文"`。

角色支線劇情的輸入應是一個 `.txt` 檔，並且可以從檔案名稱確認支線持有者。新增角色支線前要先確認已存在對應角色圖；若缺圖，拒絕改動。若已有角色圖，必須先用 `remove_bk.py` 將原始圖片去背為透明 PNG，再用 `split_emotion_image.py` 將去背後圖片分割為六張表情；不要因為原圖看起來已經乾淨、可直接分割、或只差少量裁切就跳過去背。輸出圖會等比例縮小到固定上限，預設不超過 `195x195`，再依台詞情緒選擇同角色表情圖。劇本文字若用 `???`、`神秘人`、`神祕人` 等名稱刻意隱藏發言者，預設以支線持有者本人選圖，但保留原本顯示名稱。

新角色表情圖的 2x3 固定格順是「喜、怒 / 哀、驚訝 / 慌亂、無表情」，輸出檔名依序為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`。判斷不出情緒時，新角色優先使用 `角色_normal.png`；若該角色是舊資源且沒有 `normal`，再使用既有預設圖。

角色支線的事件 ID、樓層 ID、檔名採用 `角色英文名_章節序號`。若角色已知，必須使用正式角色 ID，例如荒漠使用 `huangmo_1`、`huangmo_2`；不要保留 `mystery_girl`、`unknown` 這類產線中間暫名。只有完整劇情處理後仍無法對應到既有角色時，才可暫用未知命名，並在角色確認後改回正式命名。

角色支線章節不一定會寫成 `好感度1`、`好感度2`、`好感度3`；若章節已寫明標題，將該章節標題視為該段劇情名稱，並用於事件 `title` / 樓層 `title` / meta `activeEvents[].title` / `addAkibaEvent({ title })` 的可讀名稱。若章節沒有命名，或名稱只是 `好感度1`、`好感度2`、`好感度3` 這類序號，AI 可以依劇情內容自行補一個短名，約束為 7 個中文字以下。可讀 `title` 不要保留 `好感度1：`、`好感度2：` 這類序號前綴。

角色支線文本即使沒有寫 `bgm:`，也要依劇情自動選擇合適 BGM，但選曲必須放在閱讀並處理完整篇劇情後的最後一步。可用曲目與選曲規則見 [BGM 背景音樂](bgm.md)。一般日常、餐廳、酒會、書店、害羞邂逅、普通閒聊用 `bossa_casual_shop.mp3`；溫柔收尾用 `next_to_you_emotional.mp3`；只有完整篇真的帶有失憶、異常現象、不可思議線索或真相調查時，才用 `spacetime_mystery.mp3` 或 `twists_suspense.mp3`；調查與危機用 `dark_alleys_tension.ogg`；決戰或動作高潮用 `battle_theme_a.mp3`。若劇本文本有明確指定 `bgm:`，以劇本指定為優先，但仍需確認該 BGM 已登錄在 `project/data.js -> main.bgms`。

角色支線文本若寫了 `場地:`，先用 `project/location-mappings.json` 查找同名或語意最接近的秋葉原地點，並把事件 meta 的 `locations` 掛到該地點 ID。若沒有完全同名地點，不要因此拒絕改動；應自動選擇最接近的既有地點，例如「雜貨店」可對應便利店。若找不到合理近似地點，使用一個既有地點作為隨機 fallback，並在交付說明中明確寫出選用的地點 ID 與原因。

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    "雨停了。",
    {"type": "showImage", "code": 11, "image": "suou_sad_portrait.png", "loc": [260, 185], "opacity": 1, "time": 200},
    "\t[表妹]所以大家到底去哪裡了？",
    {
        "type": "choices",
        "text": "\t[表妹]要相信梗平的直覺嗎？",
        "choices": [
            {
                "text": "相信",
                "action": [
                    {"type": "setValue", "name": "flag:trust_suou", "operator": "+=", "value": "1"}
                ]
            },
            {
                "text": "還不能",
                "action": [
                    {"type": "setValue", "name": "flag:trust_suou", "operator": "-=", "value": "1"}
                ]
            }
        ]
    },
    {"type": "playTransitionVideo"},
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 0}
]
```

