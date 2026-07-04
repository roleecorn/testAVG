# Flag 與狀態管理

## 4. 如何設置局部/全局 Flag，並且如何搜尋

### 存檔內 Flag

`flag:xxx` 存在目前遊戲存檔的 `core.status.hero.flags`。未定義時讀取預設為 `0`。這是 AVG 分支最常用的狀態。

```js
{"type": "setValue", "name": "flag:met_mio", "operator": "=", "value": "true"}
{"type": "setValue", "name": "flag:trust_mio", "operator": "+=", "value": "1"}
{"type": "setValue", "name": "flag:route", "operator": "=", "value": "'mio'"}
{"type": "setValue", "name": "flag:met_mio", "operator": "=", "value": "null"}
```

`value: "null"` 會刪除該 Flag。

條件判斷：

```js
{
    "type": "if",
    "condition": "flag:trust_mio >= 3",
    "true": ["\t[澪]我相信你。"],
    "false": ["\t[澪]現在還不行。"]
}
```

文字中顯示：

```js
"\t[旁白]澪的信任值是 ${flag:trust_mio}。"
```

### 局部 Flag：獨立開關

`switch:A` 到 `switch:Z` 是「每層、每個座標」獨立的局部變數。適合 NPC 首次對話、某一個場景內的小機關。

```js
[
    {
        "type": "if",
        "condition": "switch:A",
        "true": [
            "\t[少女]又見面了。"
        ],
        "false": [
            "\t[少女]初次見面。",
            {"type": "setValue", "name": "switch:A", "operator": "=", "value": "true"}
        ]
    }
]
```

實際底層會轉成類似 `flag:<floorId>@x@y@A` 的 Flag。如果跨座標存取，要直接用完整 Flag 名稱。

### 臨時變數

`temp:A` 到 `temp:Z` 是事件流臨時變數，事件結束後清空。適合迴圈計數，不適合保存劇情分支。

```js
{"type": "setValue", "name": "temp:A", "operator": "=", "value": "0"}
```

### 跨存檔全局存儲

`global:xxx` 寫入瀏覽器 localStorage，跨存檔存在。適合成就、回想、音樂鑑賞、已讀章節。

```js
{"type": "setValue", "name": "global:cg_mio_01", "operator": "=", "value": "true"}
```

讀取時同樣可用：

```js
{
    "type": "if",
    "condition": "global:cg_mio_01",
    "true": ["\t[系統]已解鎖回想。"]
}
```

### 如何搜尋 Flag

在事件編輯器中使用「變量出現位置搜索」。搜尋格式必須是冒號縮寫量，例如 `flag:trust_mio`。它會搜尋：

- 各樓層 `firstArrive`、`eachArrive`
- 地圖點事件 `events`、`autoEvent`、`changeFloor`、`beforeBattle`、`afterBattle`、`afterGetItem`、`afterOpenDoor`
- 公共事件
- 道具使用事件
- 怪物戰前/戰後事件
- 圖塊碰觸事件、門資訊
- 標題事件、開場劇情、難度分歧、商店

注意：搜尋主要認得 `flag:xxx` 這種事件用寫法。原生腳本中的 `flags.xxx`、複雜 `core.insertAction(...)` 可能搜不到或不完整。AI 產生劇情時應優先使用 `flag:xxx`。

