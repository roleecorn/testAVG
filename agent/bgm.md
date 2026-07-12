# BGM 背景音樂

這份文件只說明背景音樂 BGM。音效請看 [音樂與特效](audio-effects.md)。

## 檔案登錄

新增 BGM 時要完成兩件事：

1. 把音訊檔放到 `project/bgms/`。
2. 在 `project/data.js -> main.bgms` 加入檔名。

目前專案的寫法如下：

```js
"bgms": [
    "bgm.mp3"
]
```

可選：在 `project/data.js -> main.nameMap` 加別名。別名可以用在事件或程式呼叫中，實際會被映射回檔名。

```js
"nameMap": {
    "背景音樂": "bgm.mp3"
}
```

## 樓層預設 BGM

如果某個 AVG 場景或章節進入時固定播放同一首 BGM，在樓層屬性加 `"bgm"` 最直覺：

```js
main.floors.scene_intro = {
    "floorId": "scene_intro",
    "title": "序章",
    "bgm": "bgm.mp3",
    "eachArrive": [
        "雨停了。"
    ]
}
```

實際行為：

- 切換樓層後，系統會讀取新樓層的 `bgm`。
- 若 `flag:__bgm__` 沒有值，才會播放樓層的 `bgm`。
- 樓層 `bgm` 可以是字串，也可以是陣列；陣列會隨機挑一首播放。

```js
"bgm": ["calm.mp3", "night.mp3"]
```

適合用樓層 `bgm` 的情境：

- 章節或場景有固定背景音樂。
- 切樓層後希望自然切到該場景音樂。
- 不需要讓前一首音樂跨樓層持續。

## 劇情事件插入 BGM

劇情流程中要主動換歌，使用事件指令 `playBgm`。這是可貼進事件 JSON 區的實際格式：

```js
{"type": "playBgm", "name": "bgm.mp3", "startTime": 0, "keep": true}
```

欄位說明：

- `type`: 固定寫 `"playBgm"`。
- `name`: BGM 檔名，或 `main.nameMap` 中的別名。
- `startTime`: 從第幾秒開始播放；可省略，省略時等同 `0`。
- `keep`: 是否把這首設為持續 BGM。為 `true` 時會寫入 `flag:__bgm__`，直到下一個 `playBgm` 事件改寫或清除。

最常用的 AVG 寫法是在 `eachArrive` 開頭插入 BGM：

```js
"eachArrive": [
    {"type": "playBgm", "name": "bgm.mp3", "keep": true},
    "雨停了。",
    "\t[表妹]所以大家到底去哪裡了？"
]
```

如果只要臨時播放，不要跨樓層或讀檔持續，可以不寫 `keep`：

```js
{"type": "playBgm", "name": "tension.mp3"}
```

實作上，事件引擎會執行：

```js
core.playBgm(data.name, data.startTime || 0);
core.setFlag("__bgm__", data.keep ? data.name : null);
```

因此要注意：不帶 `keep` 的 `playBgm` 會清掉 `flag:__bgm__`，下一次切樓層時就會回到樓層預設 BGM 規則。

## keep 與 `flag:__bgm__`

`keep: true` 是 AVG 劇情裡最重要的 BGM 控制。

```js
{"type": "playBgm", "name": "opening.mp3", "keep": true}
```

它代表：

- 寫入 `flag:__bgm__ = "opening.mp3"`。
- 後續切樓層時，只要 `flag:__bgm__` 還存在，就不會自動改播樓層屬性的 `bgm`。
- 讀檔後若有 `flag:__bgm__`，專案會重新播放該 BGM。

要回到樓層預設 BGM，可在新場景主動播放該場景音樂但不帶 `keep`，或帶另一首新的 `keep: true`。

```js
{"type": "playBgm", "name": "scene_day.mp3"}
```

這會播放 `scene_day.mp3`，並把 `flag:__bgm__` 清掉。

## 暫停與恢復

暫停目前 BGM：

```js
{"type": "pauseBgm"}
```

恢復 BGM：

```js
{"type": "resumeBgm"}
```

從暫停位置繼續：

```js
{"type": "resumeBgm", "resume": true}
```

`resume: true` 會使用暫停時記錄的播放位置；不寫時會從頭播放上一首 BGM，若沒有上一首則回到 `main.startBgm`。

## 音量淡入淡出

BGM 音量使用 `setVolume`。事件 JSON 的 `value` 是 `0` 到 `100` 的整數，實作時會除以 `100` 轉成核心音量。

淡出：

```js
{"type": "setVolume", "value": 0, "time": 800}
```

淡入或恢復：

```js
{"type": "setVolume", "value": 100, "time": 800}
```

不等待淡入淡出完成，直接繼續跑下一條事件：

```js
{"type": "setVolume", "value": 40, "time": 1000, "async": true}
```

實作上，`setVolume` 會同時寫入 `flag:__volume__`，讀檔後會恢復這個設計音量。

## 播放速度與音調

使用 `setBgmSpeed` 改變目前 BGM 的播放速度：

```js
{"type": "setBgmSpeed", "value": 80}
```

欄位說明：

- `value`: 速度百分比，範圍 `30` 到 `300`，`100` 是正常速度。
- `pitch`: 是否同時改變音調。`true` 表示速度變快時音調也變高，速度變慢時音調也變低。

```js
{"type": "setBgmSpeed", "value": 120, "pitch": true}
```

播放新 BGM 時，核心會把速度重設為 `100`。如果需要特殊速度，請在 `playBgm` 後再接 `setBgmSpeed`。

## 預載與釋放快取

若下一段劇情需要立即播放某首 BGM，可以先預載：

```js
{"type": "loadBgm", "name": "battle.mp3"}
```

不再需要時釋放快取：

```js
{"type": "freeBgm", "name": "battle.mp3"}
```

一般 AVG 劇情不一定需要手動預載；只有在切歌瞬間卡頓明顯，或檔案較大時再使用。

## 常用範例

### 場景開頭播放並跨樓層持續

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    "雨停了。",
    {"type": "changeFloor", "floorId": "scene_002", "loc": [6, 10], "direction": "up", "time": 0}
]
```

### 轉入緊張段落，淡出後換歌

```js
[
    {"type": "setVolume", "value": 0, "time": 600},
    {"type": "playBgm", "name": "tension.mp3", "keep": true},
    {"type": "setVolume", "value": 100, "time": 600},
    "空氣忽然安靜下來。"
]
```

### 暫停 BGM 播放小遊戲，結束後從暫停處恢復

```js
[
    {"type": "pauseBgm"},
    {"type": "comment", "text": "此處插入小遊戲事件入口"},
    {"type": "resumeBgm", "resume": true}
]
```

實際小遊戲事件入口請依 [小遊戲新增與接入指南](minigame-integration.md) 使用目前專案已有封裝；上例只示意 BGM 的前後控制。

## 編輯器方塊對照

事件編輯器中的 BGM 方塊會產生以下 JSON：

```js
{"type": "playBgm", "name": "bgm.mp3", "startTime": 0, "keep": true}
{"type": "pauseBgm"}
{"type": "resumeBgm", "resume": true}
{"type": "loadBgm", "name": "bgm.mp3"}
{"type": "freeBgm", "name": "bgm.mp3"}
{"type": "setVolume", "value": 90, "time": 500}
{"type": "setBgmSpeed", "value": 100, "pitch": true}
```

產出事件時優先使用這些 JSON 格式，不要直接寫 `core.playBgm(...)` 到劇情事件中。

## 交付檢查

- 新 BGM 已放入 `project/bgms/`。
- 新 BGM 已加入 `project/data.js -> main.bgms`。
- 如使用別名，已加入 `project/data.js -> main.nameMap`。
- 場景固定音樂使用樓層 `"bgm"`；劇情中途切歌使用 `playBgm`。
- 需要跨樓層或讀檔延續時，`playBgm` 有加 `"keep": true`。
- 不想跨樓層延續時，確認沒有誤加 `"keep": true`。
- 淡入淡出後，若劇情需要恢復正常音量，已補回 `{"type": "setVolume", "value": 100, ...}`。
