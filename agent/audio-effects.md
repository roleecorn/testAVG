# 音樂與特效

背景音樂 BGM 的完整插入、樓層預設、`keep` 與 `flag:__bgm__` 說明，請先看 [BGM 背景音樂](bgm.md)。本文件保留音訊與特效的總覽。

## 如何新增音樂/特效

### 新增背景音樂

1. 把檔案放到 `project/bgms/`，支援常見音訊格式；編輯器表格允許 `mp3/ogg/wav/m4a/flac`。
2. 在 `project/data.js -> main.bgms` 加入檔名。
3. 可選：在 `main.nameMap` 加別名，例如 `"主題曲": "theme.mp3"`。
4. 樓層預設 BGM 可寫在樓層屬性：`"bgm": "theme.mp3"`。
5. 劇情中播放用 `playBgm`。

```js
{"type": "playBgm", "name": "theme.mp3", "startTime": 0, "keep": true}
```

`keep: true` 代表持續到下一個本事件，底層會設置 `flag:__bgm__`。若不設 `keep`，切樓層時可能回到樓層預設 BGM。

其他 BGM 指令：

```js
{"type": "pauseBgm"}
{"type": "resumeBgm", "resume": true}
{"type": "loadBgm", "name": "battle.mp3"}
{"type": "freeBgm", "name": "battle.mp3"}
{"type": "setVolume", "value": 60, "time": 500}
{"type": "setBgmSpeed", "value": 80, "pitch": true}
```

### 新增音效

1. 把檔案放到 `project/sounds/`。
2. 在 `project/data.js -> main.sounds` 加入檔名。
3. 可選：在 `main.nameMap` 加別名，例如 `"心跳": "heartbeat.mp3"`。
4. 劇情中播放用 `playSound`。

```js
{"type": "playSound", "name": "heartbeat.mp3"}
```

常用參數：

```js
{"type": "playSound", "name": "heartbeat.mp3", "stop": true}
{"type": "playSound", "name": "heartbeat.mp3", "pitch": 120}
{"type": "playSound", "name": "heartbeat.mp3", "sync": true}
{"type": "stopSound"}
```

- `stop: true`：播放前停止其他音效。
- `pitch`：30 到 300，100 是正常音調/速度。
- `sync: true`：等待音效播完再執行下一條事件。

### 新增動畫特效

動畫檔放在 `project/animates/`，並在 `project/data.js -> main.animates` 登錄不含副檔名的名稱。播放：

```js
{"type": "animate", "name": "hand", "loc": "hero"}
```

也可指定座標：

```js
{"type": "animate", "name": "thunder", "loc": [6, 6]}
```

