# 樓層與場景

## 如何新增樓層

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
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    "width": 17,
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

`floorId`、檔名、`main.floors.<floorId>` 必須一致。`width/height` 必須符合 `map` 的列數與每列長度。標準 AVG floor 固定使用 17x13（544×416）；不要讓舊生成器重新寫回 13x13。若由舊 13x13 floor 擴充，只能在每列右側追加四個 `0`，不得遷移既有事件或落點座標。原本就不是 13x13 的大地圖不套用此規則。

每個 AVG floor 必須在 `images` 預載一張 `canvas: "bg"`、`x: 0`、`y: 0` 的初始背景。引擎會先繪製 floor map，之後才執行 `eachArrive`；若只在 `eachArrive` 開頭使用 `showImage` 顯示背景，進場第一幀仍可能露出預設石磚。後續場景內背景切換可以繼續使用 `showImage`，但不能取代 floor-level 初始背景。

主線生成後必須執行：

```powershell
node scripts/generate_main_story.js --check
node scripts/manage_story_ir.js
```

主線生成器的輸入是 `project/story-ir/main/CH1.json`～`CH7.json`。它會按章合併已驗證 bundle，並由共用 generator 注入所有 scene 共通的 presentation 與 17×13 全零 map，再輸出主線 floor；不要把主線恢復成單一 `main-story.json`，也不要直接修改生成出的 floor。

普通對話的立繪生命周期也由共用 generator 負責：Story IR 保存 `speaker`、`text`、文字特效與 `portrait` 情緒／圖片選擇，generator 統一補入 `opacity: 1`、`time: 0`，再輸出對應的 `showImage`，並在該句後補上同 code 的 `hideImage`。立繪位置使用共用語意槽，不得在 IR、scene 或 floor 逐句寫入 `loc`／`sloc`；非對話的 CG、GIF、多圖演出仍可使用明確的 `image.show`／`image.hide`，其 portrait 共通欄位同樣由 generator 統一設定。

驗證至少要確認主線與角色支線 Story IR 的來源 SHA-256、schema、素材／跳轉註冊及 floor round-trip，並確認 `width === 17`、`height === 13`、`map.length === 13`，且每列長度皆為 17。

AVG 故事劇情、章節劇情、場景演出一律寫在 `eachArrive`。`firstArrive` 目前不要放故事，只保留給未來明確需要整個存檔只執行一次的指導規則或初始化功能。

在編輯器中新增樓層：資料區切到「地圖編輯」後使用「新建空白地圖」。儲存後編輯器會建立樓層檔並更新 `main.floorIds`。

