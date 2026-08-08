# 純文字轉事件 JSON

## 主線生成前預處理

主線來源是 `project/mainStory/CH1`～`CH6`，由 `scripts/generate_main_story.js` 處理。文本生成器是 JavaScript，不要另建一份 Python 版本。Python 只負責在文本生成器之前，把權威 `*_cg.png` 母檔固定衍生為 runtime action CG。母檔有變動時依序執行，未變動時至少執行兩個 `--check`：

```powershell
python scripts/build_action_cgs.py
python scripts/build_action_cgs.py --check
node scripts/generate_main_story.js --check
```

預處理只負責辨識格式與正規化製作標記，不得潤稿或改寫台詞：

1. 每個 CH 檔在第一個 `章-節` 標題前的格式說明不進入事件。
2. `【背景 ：名稱】`、`【背景：名稱】` 等空白差異可正規化成同一指令；正文、標點與用字保持原樣。
3. `[人名：內容]` 必須先辨識為簡訊，再處理一般 `[敘述]`。簡訊輸出為 `"\t[人名]（手機）內容"`，不能去掉中括號後誤當旁白。冒號前必須是已知角色或不含敘事標點的短標籤；像 `[於是梗平轉身……：哈……]` 這種長敘事仍是旁白，不可誤建成超長發言者。
4. `人名：{內容}` 也視為簡訊；`人名：內容` 是一般對話；`人名：(內容)` 保留為角色內心話。
5. `[敘述]` 去掉外層中括號後輸出成旁白，不加發言者。
6. 不得在生成器中把梗平的「我／我們」自動改成「在下／我等」；`project/mainStory` 文本是內容真實來源，floor 必須逐字遵從來源。
7. `【CG：...】`、`【GIF ...】`、`【背景：...】` 與立繪／替換／動畫標記必須先於普通文字處理。已支援的指令轉為事件；未支援的製作指令改成非玩家可見 `comment` 並寫入主線 TODO，不得直接顯示。
8. `【劇情推進】`、`【推進劇情】`、`【接2-3】`、`【接續2-3】` 等同義流程標記要正規化為同一控制流程。
9. CG／GIF 對照表要以目前來源文字為準；來源更名時可保留歷史別名，但 `--check` 必須確認所有已登錄的主線動作 CG 都仍有實際輸出，避免素材存在卻因標記改名而靜默退回 placeholder。
10. 背景名稱以完整名稱精確查表；每個地點映射到唯一背景檔。遇到未登錄名稱必須失敗並補 mapping，不可靜默退回 generic 圖。

主線開場的 `setText` 必須保持參考截圖規格：`position: "down"`、`offset: 0`、`titlefont: 22`、`textfont: 16`、`lineHeight: 22`。配合 `fixedLines: 2`，544×416 畫布上的對話框範圍為 `x: 13, y: 295, width: 518, height: 116`；人物位置使用左 `[28, "textTop"]`、右 `[260, "textTop"]`。

固定一秒動作 CG 必須交給 `mota-action-cg` 契約：`*_cg.png` 為母檔，`scripts/build_action_cgs.py` 產生固定 416×286 的 `*_action_cg.png`；事件使用 `sloc: [0, 0, 416, 286]`、`loc: [112, 50, 320, 220]`，順序為 `showImage(code 30)` → `sleep(1000, noSkip)` → `hideImage(code 30)`。一般持續劇情 CG 使用同一個中央面板，但不可誤套一秒自動隱藏。

## 純文字到事件 JSON 的建議格式

AI 接到劇本文本時，先轉成中間格式，再轉成事件陣列。

中間格式範例：

```txt
[SCENE scene_intro]
title: 序章
bg: intro_bg.jpg
bgm: opening.mp3

旁白: 雨停了。
表妹@suou_sad_portrait.png: 所以大家到底去哪裡了？
CHOICE 要相信梗平的直覺嗎？
- 相信 => flag:trust_suou += 1
- 還不能 => flag:trust_suou -= 1
GOTO scene_002
```

事件輸出範例。所有故事劇情、章節劇情、場景演出都應放進樓層的 `eachArrive`。`firstArrive` 目前不放故事，只保留給未來明確需要整個存檔只執行一次的指導規則或初始化功能。

文字稿中的 `旁白:` 是敘述標記，不是發言者。轉成 scene / event JSON 時要省略發言對象，輸出成普通文字字串；不要寫成 `"\t[旁白]正文"`。

主線或支線劇本中若遇到不確定身分、正式名稱、角色 ID、立繪對應、或是否應該顯示圖片的人物，先不要自行猜測。用便於搜尋的顯示文字 `不知道是誰的<劇本中出現的名稱>` 暫代，例如 `不知道是誰的松`，並同步記錄到 TODO list 檔案。等同一批未知人物整理完後，再統一詢問使用者；使用者確認後，才統一替換文字、角色 ID 與出現圖片。TODO list 規則見 [TODO 與待確認事項](todo.md)。

轉換主線或支線時，若劇本需要 CG、GIF 或 BGM 但缺少正式素材，不要讓事件引用不存在的檔案。直接複製任意同類型現有素材，命名成劇情需要的新檔名，照常寫入事件與 `project/data.js` 登錄，並在 TODO list 的 `待補素材` 標明「暫用複製素材、來源檔案、之後要替換的正式內容」。這條規則只適用於 CG/GIF/BGM；角色立繪不可用其他角色圖片替代。

劇本中的 `【CG：...】`、`【GIF ...】` 是演出指令，不是玩家可見文字。轉換時必須用 `showImage` 或對應媒體事件顯示實際素材或替代素材，不要輸出成 `【CG：...】`、`【GIF：...】`、`\t[CG]...`、`\t[GIF]...` 這類文字描述。

劇本中的 `【背景：...】` 同樣是演出指令。轉換時應切換樓層背景或用 `showImage` 顯示背景素材，不要再把 `【背景：...】` 當成對話文字輸出給玩家。

角色支線劇情的輸入應是一個 `.txt` 檔，並且可以從檔案名稱確認支線持有者。新增角色支線前要先確認已存在對應角色圖；若缺圖，拒絕改動。若已有角色圖，必須先用 `remove_bk.py` 將原始圖片去背為透明 PNG，再用 `split_emotion_image.py` 將去背後圖片分割為六張表情；不要因為原圖看起來已經乾淨、可直接分割、或只差少量裁切就跳過去背。輸出圖會等比例縮小到固定上限，預設不超過 `195x195`，再依台詞情緒選擇同角色表情圖。劇本文字若用 `???`、`神秘人`、`神祕人` 等名稱刻意隱藏發言者，預設以支線持有者本人選圖，但保留原本顯示名稱。

新角色表情圖的 2x3 固定格順是「喜、怒 / 哀、驚訝 / 慌亂、無表情」，輸出檔名依序為 `smile`、`angry`、`sad`、`surprised`、`panic`、`normal`。判斷不出情緒時，新角色優先使用 `角色_normal.png`；若該角色是舊資源且沒有 `normal`，再使用既有預設圖。

角色支線的事件 ID、樓層 ID、檔名採用 `角色英文名_章節序號`。若角色已知，必須使用正式角色 ID，例如荒漠使用 `huangmo_1`、`huangmo_2`；不要保留 `mystery_girl`、`unknown` 這類產線中間暫名。只有完整劇情處理後仍無法對應到既有角色時，才可暫用未知命名，並在角色確認後改回正式命名。

角色支線章節不一定會寫成 `好感度1`、`好感度2`、`好感度3`；若章節已寫明標題，將該章節標題視為該段劇情名稱，並用於事件 `title` / 樓層 `title` / meta `activeEvents[].title` / `addAkibaEvent({ title })` 的可讀名稱。若章節沒有命名，或名稱只是 `好感度1`、`好感度2`、`好感度3` 這類序號，AI 可以依劇情內容自行補一個短名，約束為 7 個中文字以下。可讀 `title` 不要保留 `好感度1：`、`好感度2：` 這類序號前綴。

角色支線文本即使沒有寫 `bgm:`，也要依劇情自動選擇合適 BGM，但選曲必須放在閱讀並處理完整篇劇情後的最後一步。可用曲目與選曲規則見 [BGM 背景音樂](bgm.md)。一般日常、餐廳、酒會、書店、害羞邂逅、普通閒聊用 `bossa_casual_shop.mp3`；溫柔收尾用 `next_to_you_emotional.mp3`；只有完整篇真的帶有失憶、異常現象、不可思議線索或真相調查時，才用 `spacetime_mystery.mp3` 或 `twists_suspense.mp3`；調查與危機用 `dark_alleys_tension.ogg`；決戰或動作高潮用 `battle_theme_a.mp3`。若劇本文本有明確指定 `bgm:`，以劇本指定為優先，但仍需確認該 BGM 已登錄在 `project/data.js -> main.bgms`。

角色支線文本若寫了 `場地:`，先用 `project/location-mappings.json` 查找同名或語意最接近的秋葉原地點，並把事件 meta 的 `locations` 掛到該地點 ID。若沒有完全同名地點，不要因此拒絕改動；應自動選擇最接近的既有地點，例如「雜貨店」可對應便利店。若找不到合理近似地點，使用一個既有地點作為隨機 fallback，並在交付說明中明確寫出選用的地點 ID 與原因。

```js
[
    {"type": "playBgm", "name": "opening.mp3", "keep": true},
    "雨停了。",
    {"type": "showImage", "code": 11, "image": "suou_sad_portrait.png", "loc": [260, "textTop"], "opacity": 1, "time": 200},
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

