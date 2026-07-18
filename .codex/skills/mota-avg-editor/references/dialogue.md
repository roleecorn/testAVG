# 對話撰寫

## 如何撰寫對話

事件列表是一個陣列；字串就是「顯示文章」。AVG 劇本的日常格式分成角色台詞與旁白敘述；角色台詞才需要角色名，旁白不是發言者。

```txt
\t[標題]正文
旁白正文
```

常見寫法：

```js
[
    "雨停了，但街燈還在微微發亮。",
    "\t[梗平]這裡是秋葉原。",
    "\t[表妹]所以大家到底去哪裡了？",
    "\t[梗平]這正是我要調查的事。"
]
```

欄位規則：

- `標題`：說話者名稱。只有角色台詞使用；旁白敘述不要寫成 `旁白` 角色。
- `圖像`：可填圖塊 ID、`hero`、`this`，或 `project/images` 中的圖片檔名。
- `\b[...]`：單句對話框位置覆蓋。一般 AVG 對話不要使用，避免文字框跑到角色上方。
- `\f[...]`：立繪，只在這一句顯示，下一個指令前會清掉。要持續顯示請用 `showImage`。
- 正文可用 `\n` 換行，可用 `${...}` 插入數值或表達式，例如 `${flag:trust}`。

### AVG 對話框顯示區域

普通 AVG 應以畫面下方文字框為主，不做角色頭上的氣泡框。請在每個劇情樓層開頭先設定一次 `setText`，後續角色台詞寫成 `"\t[角色]正文"`，旁白敘述直接寫正文。

```js
[
    {
        "type": "setText",
        "position": "down",
        "offset": 8,
        "align": "left",
        "bold": true,
        "background": "winskin.png",
        "title": [255, 225, 80, 1],
        "text": [255, 255, 255, 1],
        "titlefont": 22,
        "textfont": 20,
        "lineHeight": 30,
        "time": 10,
        "letterSpacing": 0,
        "animateTime": 120
    },
    "這裡開始使用下方 AVG 文字框。"
]
```

引擎可用的文字框區域有兩層：

- `setText.position`：`"up"` 顯示於畫面上方、`"center"` 顯示於中央、`"down"` 顯示於畫面下方。AVG 預設一律用 `"down"`。
- 單句 `\b[...]`：可用 `up`、`center`、`down`、`hero`、`this`，也可加目標如 `up,hero`、`down,null`、`up,6,10`。這會覆蓋全局文字框位置，且 `up/down + 目標` 會形成角色附近的氣泡效果。

AVG 規範：

- 普通角色台詞與旁白敘述都不要加 `\b[...]`，避免顯示於角色上方。
- 只有系統提示、章節標題、結尾文字等特殊演出，才可少量使用 `\b[center]`。
- 若需要改外觀，優先調整 `setText`，不要在每一句台詞上分別指定位置。

分支選項範例：

```js
{
    "type": "choices",
    "text": "\t[表妹]要相信你的直覺嗎？",
    "choices": [
        {
            "text": "相信",
            "action": [
                {"type": "setValue", "name": "flag:trust_suou", "operator": "+=", "value": "1"},
                "\t[表妹]那就先照你說的走。"
            ]
        },
        {
            "text": "還不能",
            "action": [
                {"type": "setValue", "name": "flag:trust_suou", "operator": "-=", "value": "1"},
                "\t[表妹]我就知道不能太相信你。"
            ]
        }
    ]
}
```

