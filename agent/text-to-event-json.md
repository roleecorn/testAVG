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
澪@mio_normal.png: 你終於醒了。
CHOICE 你相信我嗎？
- 相信 => flag:trust_mio += 1
- 還不能 => flag:trust_mio -= 1
GOTO scene_002
```

事件輸出範例。所有故事劇情、章節劇情、場景演出都應放進樓層的 `eachArrive`。`firstArrive` 目前不放故事，只保留給未來明確需要整個存檔只執行一次的指導規則或初始化功能。

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    "\t[旁白]雨停了。",
    {"type": "showImage", "code": 10, "image": "mio_normal.png", "loc": [32, 36], "opacity": 1, "time": 200},
    "\t[澪]你終於醒了。",
    {
        "type": "choices",
        "text": "\t[澪]你相信我嗎？",
        "choices": [
            {
                "text": "相信",
                "action": [
                    {"type": "setValue", "name": "flag:trust_mio", "operator": "+=", "value": "1"}
                ]
            },
            {
                "text": "還不能",
                "action": [
                    {"type": "setValue", "name": "flag:trust_mio", "operator": "-=", "value": "1"}
                ]
            }
        ]
    },
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 500}
]
```

