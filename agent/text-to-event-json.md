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

角色支線劇情的輸入應是一個 `.txt` 檔，並且可以從檔案名稱確認支線持有者。新增角色支線前要先確認已存在對應角色圖；若缺圖，拒絕改動。若已有角色圖，先用 `remove_bk.py` 將原始圖片去背為透明 PNG，再用 `split_emotion_image.py` 將去背後圖片分割為六張表情，輸出圖會等比例縮小到固定上限，預設不超過 `195x195`，再依台詞情緒選擇同角色表情圖。劇本文字若用 `???`、`神秘人`、`神祕人` 等名稱刻意隱藏發言者，預設以支線持有者本人選圖，但保留原本顯示名稱。

角色支線章節不一定會寫成 `好感度1`、`好感度2`、`好感度3`；若章節已寫明標題，將該章節標題視為該段劇情名稱，並用於事件 `title` / 樓層 `title` / meta `activeEvents[].title` / `addAkibaEvent({ title })` 的可讀名稱。若章節沒有命名，或名稱只是 `好感度1`、`好感度2`、`好感度3` 這類序號，AI 可以依劇情內容自行補一個短名，約束為 7 個中文字以下。可讀 `title` 不要保留 `好感度1：`、`好感度2：` 這類序號前綴。

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

