# 樓層與場景

## 1. 如何新增樓層

新增樓層至少要做兩件事：

1. 在 `project/floors/` 新增 `<floorId>.js`。
2. 在 `project/data.js` 的 `main.floorIds` 加入 `<floorId>`。

樓層最小模板：

```js
main.floors.scene_intro =
{
    "floorId": "scene_intro",
    "title": "序章",
    "name": "序章",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "intro_bg.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "opening.mp3",
    "ratio": 1,
    "map": [
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    "width": 13,
    "height": 13,
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "bgmap": [],
    "fgmap": []
}
```

`floorId`、檔名、`main.floors.<floorId>` 必須一致。`width/height` 必須符合 `map` 的列數與每列長度。AVG 若只靠背景圖，可固定使用 13x13。

在編輯器中新增樓層：資料區切到「地圖編輯」後使用「新建空白地圖」。儲存後編輯器會建立樓層檔並更新 `main.floorIds`。

