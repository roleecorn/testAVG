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
- `\f[...]`：舊事件格式的立繪標記；新的 Story IR 不在對話節點內保存立繪位置或生命週期，普通台詞的立繪由生成器自動處理。
- 正文可用 `\n` 換行，可用 `${...}` 插入數值或表達式，例如 `${flag:trust}`。

### AVG 對話框顯示區域

普通 AVG 應以畫面下方文字框為主，不做角色頭上的氣泡框。請在每個劇情樓層開頭先設定一次 `setText`，後續角色台詞寫成 `"\t[角色]正文"`，旁白敘述直接寫正文。

目前標準遊戲畫布是 544×416（17×13）。新版普通 AVG 的構圖固定為「單一當前發言者－下方對話框」：畫面只保留一個普通人物位置，人物可見 bbox 左右置中於畫面，且可見 top 精準錨定於畫面高度的 20%（`portraitTopRatio: 0.2`）。這個位置是生成器／引擎的共用版面規則，不是 Story IR 的逐句欄位。對話框不再為左右人物槽刻意縮窄；新版全局 layout config 的基準矩形為 `x=16, y=295, width=512, fixedLines=2`，人物圖層位於對話框 UI 後方。不得回用舊的 `x=96, width=352` 窄框值，也不得把幾何值散落在 floor 或逐句事件。

人物不再使用左右槽定位。人物可見 bbox 的水平中心必須等於畫面水平中心，可見頂端必須等於 `viewportHeight * portraitTopRatio`；角色 mapping、floor、scene 與逐句 Story IR 都不得增加專屬偏移或 `loc`／`sloc`。

人物圖層必須低於對話框 UI，且可見內容應停在對話框正文區上方。人物不得使用會越過 UI、遮住角色名或正文的圖片層級。

普通單人立繪台詞在 Story IR 寫發言者、內容／文字特效，以及本句人物情緒與圖片選擇（`dialogue.portrait.expression` 等欄位）；不寫立繪位置、`opacity` 或展示 `time`。生成器讀取 dialogue 的 portrait 資料，統一套用 `opacity: 1`、`time: 0`，在輸出事件前自動加入 `showImage(本句人物 code)`，並在該句結束後加入 `hideImage(同一 code)`。IR 不應手寫這組普通對話生命周期，也不應寫立繪 `loc`／`sloc`。分歧中的每條 action 都各自遞迴套用同一規則；來源明確要求多人同時存在或非對話展示時，才保留明確的多圖事件。

主線與角色支線使用同一套全局 AVG 對話版面與同一套逐句立繪生命週期；兩者的差異只限觸發方式與原始文本位置。人物依 alpha bbox 定位並保持比例，所有立繪套用同一個全局 `portraitScale: 0.92`；runtime 不得根據個別圖片寬高改變縮放率。後續只調整單一 layout config 與共用資產規則，不得讓任何劇情或角色另用一套縮放。

以下 `setText` 僅保留文字樣式範例；幾何範圍必須由全局 layout config 控制，事件文字使用 `pos: "avg"` 取得下方對話框。新版基準為 `x=16, y=295, width=512, fixedLines=2`，不能退回舊窄框或把相同像素散寫到其他 floor。

```js
[
    {
        "type": "setText",
        "position": "down",
        "offset": 0,
        "align": "left",
        "bold": true,
        "background": "winskin.png",
        "title": [255, 225, 80, 1],
        "text": [255, 255, 255, 1],
        "titlefont": 22,
        "textfont": 16,
        "lineHeight": 22,
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
- 普通 AVG 對話框使用統一高度與固定行數；全塔 `fixedLines` 預設為 `2`，單句正文超過可顯示行數時，引擎會自動切成下一個文字框繼續顯示，不要為了長句逐場調高對話框。
- 對話框矩形、單一人物槽、`portraitBottomY` 與 `portraitScale` 都由同一份全局 layout config 決定；floor 只引用語意槽，不寫死最終像素或個別縮放。
- 實作新版面後，AVG floor 應使用 `pos: "avg"` 取得全局下方對話框，人物則統一使用單一當前發言者槽。視覺定稿時只調整全局參數，不得逐 floor 重寫幾何值。

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

