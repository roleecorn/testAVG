# 純文字轉事件 JSON

## 主線與角色支線共用管線

主線與角色支線只允許在來源位置與觸發方式上不同，不得使用不同的文本理解或事件生成契約。兩者一律依序執行：

1. 讀取自然語言來源；主線以 `project/mainStory/CH1`～`CH6`、角色支線以 `project/story/*.txt` 為唯一真實來源。
2. 由語意理解／正規化層把原文轉成可序列化的 Story IR。這一層可由 AI、確定性 parser，或兩者組合完成；只有文件明訂的 DSL 才能只靠固定字串辨識。
3. 在產生任何引擎事件前驗證 Story IR 的 schema、必要參數、場景流程、素材檔案與 `project/data.js` 登錄。未辨識或無法補齊的製作指令必須停止受影響範圍並依 question／TODO 規則記錄。
4. 只從已驗證的 Story IR 確定性產生 floor 與引擎事件 JSON。事件生成階段不得重新解讀自然語言，也不得直接讀取原文並猜測事件。

禁止把未辨識的製作指令降級成旁白、台詞或其他玩家可見文字。主線生成器與角色支線轉換流程必須使用同一份 Story IR schema、同一組語意驗證與同一組事件映射；不得因其中一條流程由 AI 執行，就省略中間產物或驗證。

Story IR 必須納入 Git，統一放在 `project/story-ir/main/` 與 `project/story-ir/character/`。每份 IR 都要保存權威來源的 repo-relative 路徑與 SHA-256；來源雜湊不符時禁止產生 floor。Story IR 與 floor 都是衍生產物，不得反向覆蓋來源文本。

## 共用 Story IR（強制）

最低結構如下；實作可以增加欄位，但不得讓主線與角色支線各自定義不相容版本：

```json
{
  "storyIrVersion": 1,
  "source": {
    "kind": "main",
    "files": [
      {
        "path": "project/mainStory/CH1",
        "sha256": "<64 lowercase hex digits>"
      }
    ]
  },
  "scenes": [
    {
      "id": "scene_intro",
      "floor": {
        "floorId": "scene_intro",
        "title": "序章"
      },
      "events": [
        {
          "kind": "bgm.play",
          "name": "opening.mp3",
          "keep": true
        },
        {
          "kind": "narration",
          "text": "雨停了。"
        },
        {
          "kind": "dialogue",
          "speaker": "表妹",
          "text": "所以大家到底去哪裡了？"
        },
        {
          "kind": "bgm.pause"
        },
        {
          "kind": "sound.play",
          "name": "heartbeat.mp3"
        }
      ]
    }
  ]
}
```

`source.kind` 只能描述來源類型，例如 `main` 或 `character`，不能改變 `scenes[].events[]` 的語意。bundle 的來源路徑、SHA-256 與 scene ID 是最低追溯契約；正規化器能精確保留原句或行號時，可另外加入 `sourceText`／來源位置，但 emitter 不得利用追溯欄位重新猜測事件。

共用核心節點至少包含：

| `kind` | 必要欄位 | 說明 |
| --- | --- | --- |
| `narration` | `text` | 玩家可見旁白 |
| `dialogue` | `speaker`, `text` | 角色台詞；`portrait` 可選 |
| `layout.set` | `value` | 共用對話框樣式與 AVG 版面 |
| `bgm.play` | `name` | 播放背景音樂；`keep` 可選，若存在須在正規化階段解析完成 |
| `bgm.pause` | 無 | 暫停目前 BGM |
| `bgm.resume` | 無 | 恢復 BGM |
| `sound.play` | `name` | 播放音效；`stop`、`pitch`、`sync` 可選 |
| `sound.stop` | 無 | 停止音效 |
| `background.show` | `code`, `image` | 顯示或切換背景 |
| `image.show` | `code`, `image`, `role` | 顯示立繪、CG 或 GIF；位置已在正規化層解析成語意槽位或明確座標 |
| `image.hide` | `code` | 隱藏指定圖片層 |
| `wait` | `time` | 等待；`noSkip` 可選 |
| `choice` | `prompt`, `options` | 選項與分支 |
| `goto` | `floorId` | 場景或流程跳轉 |
| `comment` | `text` | 明確允許的非玩家可見製作備註 |
| `function.call` | `function` | 既有引擎函式事件；必須是明確程式碼字串，不得由 emitter 猜測 |
| `transition.video` | 無 | 播放轉場影片 |
| `unresolved.directive` | `text`, `reason` | 尚未解析的製作指令；此節點必須讓驗證失敗，禁止輸出 floor |

未知 `kind`、缺少必要欄位、無法解析的素材名稱、未登錄或不存在的圖片／BGM／音效、失效跳轉、來源 SHA-256 不符與任何 `unresolved.directive` 都必須讓共用驗證失敗。相同 Story IR 無論來自主線或角色支線，都必須產生語意等價的引擎事件。

音訊意圖的共用正規化與映射如下：

| 自然語言意圖範例 | Story IR | 引擎事件 |
| --- | --- | --- |
| `使用BGM：opening.mp3`、`播放背景音樂 opening.mp3` | `{"kind":"bgm.play","name":"opening.mp3","keep":true}` | `{"type":"playBgm","name":"opening.mp3","keep":true}` |
| `BGM暫停`、`暫停背景音樂` | `{"kind":"bgm.pause"}` | `{"type":"pauseBgm"}` |
| `恢復BGM`、`繼續背景音樂` | `{"kind":"bgm.resume"}` | `{"type":"resumeBgm"}` |
| `播放音效：heartbeat.mp3`、`使用 heartbeat 音效` | `{"kind":"sound.play","name":"heartbeat.mp3"}` | `{"type":"playSound","name":"heartbeat.mp3"}` |
| `停止音效` | `{"kind":"sound.stop"}` | `{"type":"stopSound"}` |

這些例句描述語意，不是只認固定字面的 parser 規則。若原文只有「使用BGM」而未指定曲目，正規化層必須依完整篇劇情與 [BGM 背景音樂](bgm.md) 選定並填入已登錄曲目，才可通過驗證。若「播放音效」沒有檔名，只有在上下文能唯一對應到已登錄音效時才可補值；否則視為缺少必要參數，禁止生成空白 `playSound` 或把原句顯示給玩家。

## 主線來源正規化規則

主線來源是 `project/mainStory/CH1`～`CH6`，由 `scripts/generate_main_story.js` 處理。文本生成器是 JavaScript，不要另建一份 Python 版本。Python 只負責在文本生成器之前，把權威 `*_cg.png` 母檔固定衍生為 runtime action CG。母檔有變動時依序執行，未變動時至少執行兩個 `--check`：

```powershell
python scripts/build_action_cgs.py
python scripts/build_action_cgs.py --check
node scripts/generate_main_story.js --refresh-ir
node scripts/generate_main_story.js --check
node scripts/manage_story_ir.js
```

`--refresh-ir` 是唯一會重新理解主線自然語言並覆寫 `project/story-ir/main/main-story.json` 的入口，同時由新 IR 產生 floor。一般 `node scripts/generate_main_story.js` 只讀已驗證 IR 並確定性重生 floor；`--check` 驗證來源雜湊、schema、素材／跳轉註冊及 floor round-trip，不寫檔。角色支線的 `project/story-ir/character/*.json` 由 AI／Skill 依權威 TXT 做語意更新，`node scripts/manage_story_ir.js` 驗證來源雜湊與 floor 一致，`--emit-character` 才從 IR 寫回 floor；`--bootstrap-character` 只供首次遷移且拒絕覆寫既有 IR。

主線正規化階段只負責理解來源、辨識格式並產生共用 Story IR，不得直接產生引擎事件，也不得潤稿或改寫台詞：

1. 每個 CH 檔在第一個 `章-節` 標題前的格式說明不進入事件。
2. `【背景 ：名稱】`、`【背景：名稱】` 等空白差異可正規化成同一指令；正文、標點與用字保持原樣。
3. `[人名：內容]` 必須先辨識為簡訊，再處理一般 `[敘述]`。簡訊輸出為 `"\t[人名]（手機）內容"`，不能去掉中括號後誤當旁白。冒號前必須是已知角色或不含敘事標點的短標籤；像 `[於是梗平轉身……：哈……]` 這種長敘事仍是旁白，不可誤建成超長發言者。
4. `人名：{內容}` 也視為簡訊；`人名：內容` 是一般對話；`人名：(內容)` 保留為角色內心話。
5. `[敘述]` 去掉外層中括號後輸出成旁白，不加發言者。
6. 不得在生成器中把梗平的「我／我們」自動改成「在下／我等」；`project/mainStory` 文本是內容真實來源，floor 必須逐字遵從來源。
7. `【CG：...】`、`【GIF ...】`、`【背景：...】` 與立繪／替換／動畫標記必須先於普通文字處理。已支援的指令先轉為對應 Story IR 節點；未支援的製作指令必須轉成 `unresolved.directive`、讓 Story IR 驗證失敗並寫入主線 TODO，不得改成玩家可見文字或逕自輸出 floor。
8. `【劇情推進】`、`【推進劇情】`、`【接2-3】`、`【接續2-3】` 等同義流程標記要正規化為同一種 Story IR 控制流程。
9. CG／GIF 對照表要以目前來源文字為準；來源更名時可保留歷史別名，但 `--check` 必須確認所有已登錄的主線動作 CG 都仍有實際輸出，避免素材存在卻因標記改名而靜默退回 placeholder。
10. 背景名稱以完整名稱精確查表；每個地點映射到唯一背景檔。遇到未登錄名稱必須失敗並補 mapping，不可靜默退回 generic 圖。
11. 明確音訊 DSL 支援 `使用BGM`／`播放BGM`（無名稱時使用已在完整場景正規化後選定的場景 BGM）、`使用BGM：<已登錄檔名或別名>`、`BGM暫停`、`恢復BGM`、`播放音效：<已登錄檔名或別名>` 與 `停止音效`。BGM 與音效必須分別正規化成 `bgm.*` 與 `sound.*`，不可共用一種 audio 節點；只有「播放音效」而無可唯一解析名稱時必須失敗。

新版主線與支線必須由同一份全局 AVG layout config 產生「左人物槽－中央窄對話框－右人物槽」空間配置。人物 y 不再由 `textTop` 計算，而是依不透明內容 bbox 的底邊、`viewportHeight` 與 `portraitBottomGap` 計算；人物位於對話框 UI 後方。每句必須先清空左右人物 code，再只顯示當前發言者；三人以上仍重用兩個槽位。runtime 與所有現有 AVG floor 已使用 `pos: "avg"`、`portraitLeft`／`portraitRight`／`portraitBottom` 語意定位；全局人物可見寬度硬上限為 `128px`、對話框遮擋比例上限為 25%，runtime 依各槽實際空間取更小的有效上限，超過時等比例縮小、不放大較小圖片，透明 padding 不影響可見內容錨點。不得建立個別例外。

固定一秒動作 CG 必須交給 `mota-action-cg` 契約：`*_cg.png` 為母檔，`scripts/build_action_cgs.py` 產生固定 416×286 的 `*_action_cg.png`；事件使用 `sloc: [0, 0, 416, 286]`、`loc: [112, 50, 320, 220]`，順序為 `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`。一般持續劇情 CG 使用同一個中央面板，但不可誤套一秒自動隱藏。

## Story IR 到事件 JSON

只有通過共用驗證的 Story IR 才能轉成事件陣列。所有故事劇情、章節劇情、場景演出都應放進樓層的 `eachArrive`。`firstArrive` 目前不放故事，只保留給未來明確需要整個存檔只執行一次的指導規則或初始化功能。

文字稿中的 `旁白:` 是敘述標記，不是發言者。轉成 scene / event JSON 時要省略發言對象，輸出成普通文字字串；不要寫成 `"\t[旁白]正文"`。

主線或支線劇本中若遇到不確定身分、正式名稱、角色 ID、立繪對應、或是否應該顯示圖片的人物，先不要自行猜測。用便於搜尋的顯示文字 `不知道是誰的<劇本中出現的名稱>` 暫代，例如 `不知道是誰的松`，並同步記錄到 TODO list 檔案。等同一批未知人物整理完後，再統一詢問使用者；使用者確認後，才統一替換文字、角色 ID 與出現圖片。TODO list 規則見 [TODO 與待確認事項](todo.md)。

轉換主線或支線時，若劇本需要 CG、GIF 或 BGM 但缺少正式素材，不要讓事件引用不存在的檔案。直接複製任意同類型現有素材，命名成劇情需要的新檔名，照常寫入事件與 `project/data.js` 登錄，並在 TODO list 的 `待補素材` 標明「暫用複製素材、來源檔案、之後要替換的正式內容」。這條規則只適用於 CG/GIF/BGM；角色立繪不可用其他角色圖片替代。

劇本中的 `【CG：...】`、`【GIF ...】` 是演出指令，不是玩家可見文字。轉換時必須用 `showImage` 或對應媒體事件顯示實際素材或替代素材，不要輸出成 `【CG：...】`、`【GIF：...】`、`\t[CG]...`、`\t[GIF]...` 這類文字描述。

劇本中的 `【背景：...】` 同樣是演出指令。轉換時應切換樓層背景或用 `showImage` 顯示背景素材，不要再把 `【背景：...】` 當成對話文字輸出給玩家。

角色支線劇情的輸入應是一個 `.txt` 檔，並且可以從檔案名稱確認支線持有者。新增角色支線前要先確認已存在對應角色圖；若缺圖，拒絕改動。若已有角色圖，必須先用 `remove_bk.py` 將原始圖片去背為透明 PNG，再用 `split_emotion_image.py` 將去背後圖片分割為六張表情；不要因為原圖看起來已經乾淨、可直接分割、或只差少量裁切就跳過去背。輸出圖會等比例縮小到固定上限，預設不超過 `195x195`，再依台詞情緒選擇同角色表情圖。劇本文字若用 `???`、`神秘人`、`神祕人` 等名稱刻意隱藏發言者，預設以支線持有者本人選圖，但保留原本顯示名稱。

新角色表情圖的 2x3 固定格順是「喜、怒 / 哀、驚訝 / 慌亂、無表情」，輸出檔名依序為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`。判斷不出情緒時，新角色優先使用 `角色_normal.png`；若該角色是舊資源且沒有 `normal`，再使用既有預設圖。

角色支線的事件 ID、樓層 ID、檔名採用 `角色英文名_章節序號`。若角色已知，必須使用正式角色 ID，例如荒漠使用 `huangmo_1`、`huangmo_2`；不要保留 `mystery_girl`、`unknown` 這類產線中間暫名。只有完整劇情處理後仍無法對應到既有角色時，才可暫用未知命名，並在角色確認後改回正式命名。

角色支線章節不一定會寫成 `好感度1`、`好感度2`、`好感度3`；若章節已寫明標題，將該章節標題視為該段劇情名稱，並用於事件 `title` / 樓層 `title` / meta `activeEvents[].title` / `addAkibaEvent({ title })` 的可讀名稱。若章節沒有命名，或名稱只是 `好感度1`、`好感度2`、`好感度3` 這類序號，AI 可以依劇情內容自行補一個短名，約束為 7 個中文字以下。可讀 `title` 不要保留 `好感度1：`、`好感度2：` 這類序號前綴。

主線與角色支線文本即使沒有明寫 BGM 指令，也要依劇情自動選擇合適 BGM，但選曲必須放在閱讀並正規化完整篇劇情後的最後一步，並在 Story IR 中解析為明確的 `bgm.play.name`。可用曲目與選曲規則見 [BGM 背景音樂](bgm.md)。一般日常、餐廳、酒會、書店、害羞邂逅、普通閒聊用 `bossa_casual_shop.mp3`；溫柔收尾用 `next_to_you_emotional.mp3`；只有完整篇真的帶有失憶、異常現象、不可思議線索或真相調查時，才用 `spacetime_mystery.mp3` 或 `twists_suspense.mp3`；調查與危機用 `dark_alleys_tension.ogg`；決戰或動作高潮用 `battle_theme_a.mp3`。若劇本文本明確指定曲目，以劇本指定為優先，但仍需確認該 BGM 已登錄在 `project/data.js -> main.bgms`。

角色支線文本若寫了 `場地:`，先用 `project/location-mappings.json` 查找同名或語意最接近的秋葉原地點，並把事件 meta 的 `locations` 掛到該地點 ID。若沒有完全同名地點，不要因此拒絕改動；應自動選擇最接近的既有地點，例如「雜貨店」可對應便利店。若找不到合理近似地點，使用一個既有地點作為隨機 fallback，並在交付說明中明確寫出選用的地點 ID 與原因。

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

上例的 `[260, 185]` 是現行事件格式的歷史座標，只用來保持 JSON 範例可執行；它不是新版 layout 參數。layout config 實作後，生成器必須以右人物槽位及 `portraitBottomGap` 的計算結果取代。

