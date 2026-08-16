# 圖片與立繪

## 劇情需求驅動與圖片使用閉環

所有涉及圖片的新增與更新都必須由劇情需求驅動，不限 ZIP 流程。固定順序是：完整理解使用者需求與權威劇情來源、建立標示人物／背景／道具／CG 的 draft Story IR／scene 視覺需求、依需求從既有或輸入圖片的檔名與內容配對素材、直接接入或生成所需素材，最後才把會被 runtime 使用的圖片放入 `project/images/`。不得先依手邊圖片決定劇情演出，也不得先整批複製圖片到 `project/images/` 再尋找用途。

角色劇情 ZIP 依相同全域原則逐角色執行；ZIP 的完整來源圖片盤點只增加逐張分類與追溯要求，不改變需求先於素材的決策順序。

- 直接使用：來源圖成為 runtime 圖時，必須放入 `project/images/`、登錄於 `project/data.js -> main.images`，並由該角色最終 Story IR 的 `image.show`／`background.show` 及對應 floor scene 實際引用。
- 作為生成來源：原圖留在原始 ZIP／`tmp/character-story-import/`，使用 `asset-usage.md` 記錄來源相對路徑、SHA-256、生成輸出與對應 scene／事件；只有生成後且同時完成 `project/images/ → main.images → scene` 的 runtime 圖進入專案圖片目錄。
- 角色基準圖：只有在 draft Story IR 確認該角色需要立繪後，才可作為六表情圖的生成來源。六張切圖可先保留在 intake 作為生成產物，但只有被實際台詞情緒引用的表情才能進入 `project/images/` 並登錄；不能把六張全部放進專案等待未來使用。
- IR 缺少正式圖片：複製一張其他合適圖片，改成可搜尋的暫時替代檔名，並立即完成 `project/images/ → main.images → Story IR scene → floor`。角色劇情把替代檔名、copied source、預期正式內容、受影響 scene、替換條件與驗證證據寫入 `project/story/TODO.md`；主線寫入 `project/mainStory/TODO.md`。Placeholder 是可玩的暫時實作，不得省略 TODO。
- 未配對圖片：先回讀來源與 draft Story IR，確認是否漏掉 CG、道具、配角、背景或角色演出。仍無法建立 scene 引用或生成血緣時，將原圖不變地複製到 repo 根層 `unknown/<角色ID>/<原始相對路徑>` 並保留 SHA-256。它不進 `project/images/`、不登錄 `main.images`；這是標示未完成圖片待辦，不是圖片已應用或角色完成的證明。角色劇情寫入 `project/story/TODO.md`，主線寫入 `project/mainStory/TODO.md`。

角色收尾時先逐張把 ZIP 圖片分類為直接使用、生成來源或 `unknown/` 待辦；只有前兩者算已應用。再檢查 runtime 硬鏈：`project/images/` 每張圖片都在 `main.images`，`main.images` 每個項目都至少被一個 validated Story IR scene 與對應 floor 使用。單純存在、只登錄、或僅在 TODO 提及都不算 scene 使用。

## 角色原始資源 Manifest

`project/story/manifest.md` 是跨任務保存的角色資源血緣索引；本次 intake 的 `script-manifest.md` 與 `asset-usage.md` 只負責工作期盤點。每位角色完成來源或素材接入時，必須把該角色所有原始資源逐筆合併到 manifest，且只修改該角色區段。每筆至少包含：

- 原始 ZIP 路徑與 SHA-256、`run-id`、`raw/` 相對路徑及原始資源 SHA-256。
- 資源種類：`script`、`portrait`、`background`、`cg`、`prop`、`audio` 或 `other`。
- 差異狀態：劇本使用 `new`、`updated`、`identical`、`conflict`；圖片使用 `new`、`identical-existing`、`changed-existing`、`unresolved`。
- 使用方式：劇本使用 `authoritative-source`；素材使用 `direct`、`generated-source` 或 `unknown-todo`。使用方式與差異狀態是兩個獨立欄位。
- 最後命名／路徑：直接素材與生成輸出列出所有最終 `project/images/...`；重用素材列出既有路徑；未配對素材列出 `unknown/...`。另列對應 Story IR scene／事件與驗證證據。
- 紀錄狀態：`active`、`superseded`、`pending` 或 `needs-backfill`。

最終命名變更、來源或素材替換、停用時，不得刪除或改寫舊血緣；將舊紀錄標為 `superseded` 並新增一筆指向新名稱的紀錄。既有資源若找不到原始 ZIP、SHA-256 或生成證據，只能在對應角色區段標示 `needs-backfill`；不得從檔名、相似內容或 Git 訊息猜測原始來源。新增角色時，須在來源 TXT 或任何 runtime 素材提交前先建立其 manifest 區段。

## 如何顯示/隱藏圖片

本專案有三種「顯示/隱藏」，不要混用：

- `show` / `hide`：顯示或隱藏地圖上的事件圖塊，例如 NPC、門、怪。
- `showImage` / `hideImage`：顯示或清除 UI 圖片，最適合 AVG 立繪、CG、特效遮罩。
- `showFloorImg` / `hideFloorImg`：顯示或隱藏樓層貼圖，也就是樓層 `images` 中的持續背景/前景貼圖。

### 顯示持續圖片

Runtime 圖片需放在 `project/images`，登錄到 `project/data.js -> main.images`，並至少由一個 scene 使用；三者缺一即為錯誤。未引用來源圖只能放在 repo 根層 `unknown/`，不得進入這條 runtime 鏈。

```js
[
    {
        "type": "showImage",
        "code": 1,
        "image": "keng_neutral_portrait.png",
        "loc": [28, 210],
        "opacity": 1,
        "time": 300
    },
    "\t[梗平]我在這裡。",
    {
        "type": "hideImage",
        "code": 1,
        "time": 300
    }
]
```

`code` 是圖片編號：

- 編號越大越蓋在上面。
- 1-24：在色調層下方。
- 25-40：在色調層上方、UI 下方。
- 41-50：在 UI 上方，會蓋住文字框，需慎用。

### 17×13 畫布定位基準

目前遊戲畫布是 544×416（17×13）。每張正式地點背景都是完整畫面，必須輸出為 544×416；不得把任何 416×416 佔位圖或舞台素材當成背景規格。任何 416×416 地點背景都是錯誤素材，必須納入檢查與替換範圍。各類圖片必須分開定位，不能共用角色或 CG 的座標規則：

- 地點背景固定為 544×416，使用 `loc: [0, 0]` 或樓層 `images` 的 `x: 0, y: 0`，完整覆蓋 AVG 畫布；不得裁切、留白或只覆蓋左側區域。
- 角色立繪只使用一個全局「當前發言者」槽。人物 alpha bbox 的可見內容左右置中於畫面，且可見 bottom 精準對齊下方對話框 top。alpha bbox 只負責對齊；所有人物統一套用單一全局 `portraitScale`。
- AVG 中央 CG 面板使用 `loc: [112, 50, 320, 220]`，可見比例為 16:11。來源不是 16:11 時要用 `sloc` 中央裁切，不可直接拉伸；416×312 來源的標準裁切是 `sloc: [0, 13, 416, 286]`。
- 一般持續 CG 與固定一秒動作 CG 共用上述面板位置；差異在停留流程，不在畫面範圍。固定一秒動作 CG 仍須使用不可跳過的一秒 `sleep` 後立即清除。
- 對話框固定在畫面下方，不再為左右人物槽預留水平空間。新版全局 layout config 的 544×416 基準為 `x=16, y=295, width=512, fixedLines=2`；`x=96, width=352` 是禁止回用的舊窄框值。

背景與中央 CG 是不同演出類型，定位不能混用。一般劇情 CG 與固定一秒動作 CG 雖共用中央面板範圍，仍不可混用淡入時間與停留流程。

這套畫布、人物、對話框與 CG 範圍是全專案唯一 AVG 版面，主線和角色支線相同；兩者只在觸發方式與文本來源位置不同。後續遷移必須讓所有 AVG floor 共用單一人物語意槽，不得建立 floor 或角色例外。

### CG 母檔與動作 CG 衍生檔

- `<scene>_<beat>_cg.png` 是權威母檔；`<scene>_<beat>_action_cg.png` 是 runtime 衍生檔，不得手工修圖。
- 母檔變更後執行 `python scripts/build_action_cgs.py`。腳本中央裁成 16:11、輸出固定 416×286，並更新 `project/action-cg-manifest.json` 的母檔／輸出雜湊。
- 衍生檔在事件中使用完整畫面 `sloc: [0, 0, 416, 286]` 與 `loc: [112, 50, 320, 220]`。母檔裁切座標只存在 manifest，不再由 floor 各自決定。
- `python scripts/build_action_cgs.py --check` 與 `node scripts/generate_main_story.js --check` 都必須通過；只替換母檔而未重建衍生檔視為驗證失敗。

### 地點背景資產

- 每張正式地點背景必須是 544×416，完整覆蓋 17×13 AVG 畫布。生成、匯入或驗收時都必須檢查此尺寸；416×416 或任何其他尺寸均為錯誤，不可保留為可用 placeholder。
- 每個劇本地點建立唯一背景檔名，並以地點全名精確 mapping；不得用會把多個地點合併到同一輸出的寬鬆 regex。
- 正式圖只能覆蓋該地點專檔。不得覆寫共用 generic 檔來更新單一地點；generic 圖也不得複製為尺寸錯誤的地點背景 placeholder。
- 同一地點若日後需要日夜或內外等不同畫面，應把版本寫成不同來源名稱並建立另一個唯一檔名，例如「街道」與「街道(夜)」。

### AVG 立繪新定位規則

新版定位只使用一個置中人物槽，不採 `textTop`、畫面底部或左右站位。runtime 先量測來源裁切區域的 alpha bbox，再以可見內容計算對齊；縮放倍率則直接取全局 `portraitScale`：

```txt
portraitScale = globalLayout.portraitScale
visiblePortraitX = (viewportWidth - visibleSourceWidth * portraitScale) / 2
visiblePortraitY = dialogueY - visibleSourceHeight * portraitScale
```

`portraitScale` 固定為 `1.2`。它可由全局 layout config 統一調整，但不可依各角色、各表情或圖片寬高產生不同倍率。如此才能保留素材中原有的角色身高差。透明 padding 不得影響可見內容的置中與底邊；最後必須滿足 `visibleCenterX === viewportWidth / 2` 與 `visibleBottom === dialogueY`。canvas alpha 不可讀時才退回整張來源矩形。

整份 layout config 集中保存下列已定稿欄位；後續不得由個別 floor 覆蓋：

```js
{
    portraitSlot: "speaker",
    portraitDialogueGap: 0,
    portraitScale: 1.2,
    dialogueX: "<global pixels>",
    dialogueY: "<global pixels>",
    dialogueWidth: "<global pixels>",
    dialogueFixedLines: 2
}
```

人物可見 bottom 必須貼齊對話框 top；人物圖層仍必須在 UI／文字框下方，因此即使邊界相接也不得蓋住文字框。人物使用 UI 下方的圖片 code（既有 10／11 等角色 code 可保留）；禁止使用 41–50 等會蓋住文字框的 code。舊的 `portraitLeft`、`portraitRight`、`portraitBottomGap`、非零 `portraitDialogueGap`、`portraitMaxVisibleWidth=128`、`portraitMaxDialogueOverlapRatio=0.25` 與小圖不放大規則均不得帶入新版實作。

本節是全局版面契約；目前 1-1 已完成 runtime／emitter／floor 遷移，其他既有 floor 尚未遷移。未遷移場景在完成實作及遊戲內驗證前，不得宣稱新版面已生效。

### 更換立繪

```js
[
    {"type": "hideImage", "code": 1, "time": 150, "async": true},
    {"type": "showImage", "code": 1, "image": "keng_smile_portrait.png", "loc": [28, 210], "opacity": 1, "time": 150},
    "\t[梗平]這樣就好多了。"
]
```

### 對話人物顯示

畫面只有一個人物槽。每句角色台詞前先清空所有人物 code，再把當前發言者顯示於同一個置中槽；旁白前清空所有人物。場景有三名以上人物時也只替換這個槽的圖片與表情，不保留非發言者。

以下是新版面完成 runtime 支援後的目標語意範例；`portraitSpeakerX`／`portraitSpeakerY` 由全局 layout config 解析，並統一套用全局 `portraitScale`：

```js
[
    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 10, "image": "keng.png", "loc": ["portraitSpeakerX", "portraitSpeakerY"], "opacity": 1, "time": 0},
    "\t[梗平]這一句只有梗平的圖。",

    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 11, "image": "suou_sad_portrait.png", "loc": ["portraitSpeakerX", "portraitSpeakerY"], "opacity": 1, "time": 0},
    "\t[表妹]換我說話時，仍使用同一個人物位置。",

    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0},
    "旁白不顯示人物立繪。"
]
```

樓層 `images` + `showFloorImg` 以固定左上角座標識別貼圖，無法自然套用單一人物槽的 alpha bbox 對齊與全局縮放，因此新版 AVG 人物應優先改用 `showImage`。尚未遷移的歷史 floor 若仍使用 `canvas: "fg"` 人物貼圖，必須保留 `disabled: true`，避免人物在第一個事件執行前閃出；後續實作新版面時，應把這類人物貼圖一併轉成由全局人物槽控制的 `showImage`，不可只把舊座標移到畫面中央。

既有 AVG 立繪曾使用固定數字、`textTop` 或舊的左右語意槽；以下僅供辨識待遷移的歷史內容，不得複製到新事件：

- 梗平 `keng_portrait.png`：`x: 28, y: 210`
- 表妹/蘇芳 `suou_sad_portrait.png`：`x: 260, y: 185`

### 常用立繪 mapping

自動產生 AVG 對話時，角色表情立繪優先使用 `showImage`，因為可直接指定圖片檔名。每句先清空所有人物 code，再把當前發言者放到同一個語意槽：

```js
[
    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 10, "image": "keng_smile_portrait.png", "loc": ["portraitSpeakerX", "portraitSpeakerY"], "opacity": 1, "time": 0},
    "\t[梗平]這一句只顯示目前發言的我。",
    {"type": "hideImage", "code": 10, "time": 0, "async": true},
    {"type": "hideImage", "code": 11, "time": 0, "async": true},
    {"type": "showImage", "code": 11, "image": "suou_angry_portrait.png", "loc": ["portraitSpeakerX", "portraitSpeakerY"], "opacity": 1, "time": 0},
    "\t[表妹]換我說話時，先清空人物再在同一位置顯示我。"
]
```

上例語意座標已由 runtime 支援，並用於已遷移的 1-1。最終 x、y 由 layout config 及人物 alpha bbox 計算，縮放倍率則只取全局 `portraitScale`，不能落成逐角色固定像素或各自 fit。

自動為劇本補立繪時，必須先保留正確角色名，確認圖片屬於當前發言角色後，再依台詞當下的情緒選擇合適表情。同一個角色理論上會有複數張表情圖可用，例如 `neutral`、`smile`、`angry`、`surprised` 等；若判斷不出情緒，才使用該角色的預設/平常立繪。不得把其他角色或相似名字的圖片誤認為該角色的正式素材；但已確認角色且 Story IR 明確需要立繪時，若正式素材缺少，必須依本節規則複製合適圖片作為明確可搜尋的暫時替代，接入 scene 並寫入對應故事 TODO。未知角色如 `???` 若身分尚未確認，該角色圖片接入仍屬局部阻塞，清空所有人物圖且不顯示立繪。

新增角色支線劇情時，輸入應是一個 `.txt` 劇本文本，且能從檔案名稱確認這是哪個角色的支線。先完整閱讀文本並建立 draft Story IR，再確認既有正式角色圖或同角色 ZIP 基準圖能否滿足 IR 的立繪需求；若已確認角色但沒有對應正式角色圖，使用明確標示且有 TODO 的暫時替代圖完成可玩 scene，不得留下缺檔引用，也不得把暫代品宣稱為正式素材。需要新表情時，在 intake 先使用 `remove_bk.py` 去背，再使用 `split_emotion_image.py` 分割六張候選表情；分割工具會把輸出圖等比例縮小到固定上限，預設不超過 `195x195`。只有被 Story IR 實際引用的表情才移入 `project/images/`、登錄到 `project/data.js -> main.images` 並用於後續劇情轉換。

`remove_bk.py` 是新增角色表情圖的固定前置流程，不是可選優化。即使原圖已是 2x3 表情表、尺寸可直接分割、或只需要裁切幾個像素，也要先去背，後續裁切與 `split_emotion_image.py` 都應基於去背後的透明 PNG。

新角色 2x3 表情表的固定格順如下，`split_emotion_image.py` 會依此輸出檔名：

```txt
喜 / 怒
哀 / 驚訝
慌亂 / 無表情
```

對應檔名為 `角色_smile.png`、`角色_angry.png`、`角色_sad.png`、`角色_surprised.png`、`角色_panic.png`、`角色_normal.png`。新增角色時這是今後的標準規則；舊角色若已經使用 `happy`、`neutral` 等檔名，可維持既有檔名，不要為了改名造成無關 diff。

角色圖處理流程範例：

```powershell
python remove_bk.py tmp/character-story-import/<zip>/art/角色.png tmp/character-story-import/<zip>/art/角色_transparent.png
python split_emotion_image.py tmp/character-story-import/<zip>/art/角色_transparent.png --keep-original
```

若需要維持最終表情檔名為 `角色_smile.png`、`角色_angry.png`、`角色_normal.png` 等，可在 intake 的去背輸出完成後，用去背圖取代原始處理用圖，再執行分割；不要直接跳過去背。只把 validated Story IR 已引用的最終檔案移入 `project/images/`。

若支線劇情中的發言者被刻意隱蔽，例如 `???`、`神秘人`、`神祕人`，預設視為該支線劇情持有者本人來選擇立繪；但對話中顯示的發言者名稱仍保留原本的隱蔽寫法，不要提前暴露真名。

`梗平` 是既有角色，一定有可用立繪；預設使用 `keng_neutral_portrait.png`、code `10`、loc `[28, 210]`。除非劇本明確指定表情，否則不要把 `梗平` 判定為缺圖。

`表妹`、`妹`、`蘇芳`、`蘇方` 都指同一位角色，統一使用 `suou_*_portrait.png` 與 code `11`。

| 角色 | code | 歷史 loc（不得使用） | 表情/別名 | 圖片 |
| --- | ---: | --- | --- | --- |
| 梗平 | 10 | `[28, 210]` | 預設、平常 | `keng_neutral_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 生氣、不爽 | `keng_angry_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 崩潰、顏藝、恐慌 | `keng_panic_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 嚴肅、低落 | `keng_serious_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 笑、得意 | `keng_smile_portrait.png` |
| 梗平 | 10 | `[28, 210]` | 驚訝、錯愕 | `keng_surprised_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 哀、難過、預設 | `suou_sad_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 怒、生氣 | `suou_angry_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 喜、微笑 | `suou_smile_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 樂、開心 | `suou_happy_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 顏藝、崩壞 | `suou_goofy_portrait.png` |
| 表妹/妹/蘇芳/蘇方 | 11 | `[260, 185]` | 驚訝、錯愕 | `suou_surprised_portrait.png` |
| 荒漠 | 12 | `[260, 185]` | 笑、友善、預設 | `huangmo_smile.png` |
| 荒漠 | 12 | `[260, 185]` | 怒、生氣、制止 | `huangmo_angry.png` |
| 荒漠 | 12 | `[260, 185]` | 哀、難過 | `huangmo_sad.png` |
| 荒漠 | 12 | `[260, 185]` | 樂、開心 | `huangmo_happy.png` |
| 荒漠 | 12 | `[260, 185]` | 驚訝、錯愕 | `huangmo_surprised.png` |
| 荒漠 | 12 | `[260, 185]` | 崩潰、恐慌 | `huangmo_panic.png` |

若歷史內容暫時必須保留樓層 `images` + `showFloorImg`，每張表情在同一樓層內仍要有不同的 `x, y` 作為識別鍵，切換前也要清掉該角色全部表情座標；但這只是待遷移相容規則，不得用來定義新版人物位置或縮放。新版 AVG 應以 `showImage` 及單一人物語意槽為準。

新增角色時，應把角色放入同一個全局當前發言者槽。runtime 依 alpha bbox 將人物可見內容左右置中，將可見 bottom 對齊 `dialogueY`，並統一套用全局 `portraitScale`；不得把像素、縮放值散寫到個別內容，也不得把 `textTop`、左右站位、非零垂直 gap 或既有數字座標宣稱為新版標準。

### 樓層貼圖

樓層貼圖寫在樓層屬性 `images`：

```js
"images": [
    {"name": "school_day.jpg", "canvas": "bg", "x": 0, "y": 0},
    {"name": "window_light.png", "canvas": "fg", "x": 160, "y": 0}
]
```

`canvas` 可用：

- `bg`：背景層，會在地圖事件與角色下方。
- `fg`：前景層，會在角色與事件上方。
- `auto`：按圖片下方 32px 畫在背景、其餘畫在前景，常用於大型物件遮擋。

顯示/隱藏樓層貼圖時以貼圖左上角像素座標作為識別：

```js
[
    {"type": "hideFloorImg", "loc": [[160, 0]]},
    "窗邊的光暗了下去。",
    {"type": "showFloorImg", "loc": [[160, 0]]}
]
```

