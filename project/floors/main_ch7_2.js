main.floors.main_ch7_2=
{
    "floorId": "main_ch7_2",
    "title": "主線 CH7 7-2 聖典與ANIsister",
    "name": "7-2",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_bookstore_a_interior.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "twists_suspense.mp3",
    "ratio": 1,
    "map": [
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    ],
    "width": 17,
    "height": 13,
    "firstArrive": [],
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
    "fgmap": [],
    "eachArrive": [
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 16,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "playBgm",
            "name": "twists_suspense.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_bookstore_a_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH7 7-2 聖典與ANIsister】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_bookstore_a_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "comment",
            "text": "【BGM預定地：()切換BGM或到7-2結束前連續播放此首BGM】"
        },
        "\t[書店店員]嗯…不知道呢—",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]這種蠻少見的呢，整本沒有任何作者或社團訊息的東西—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[書店店員]不如說除了圖什麼也沒有呢，不會是私自印刷的吧？",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]沒有資料無處可認、直接丟掉又不太好、拿去失物處感覺會社死，到底該怎麼辦啊這個？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[書店店員]那樣的話街上有一個收購所，據說那的MASTER什麼都能處裡…",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_commercial_interior_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]打擾了—請問有人嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[M‧A‧STER]有什麼事嗎？",
        "隨著話音落下，一名擁有極強的氣勢的老者豎立在櫃台，讓東山忍不住退了一步",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]嗚哇什麼時候……據說您這裡什麼都能搞定，請問您看過這個嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[M‧A‧STER]否，但尚可一觀",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]主人是一個肥宅穿著的這般這般長的那樣那樣",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[M‧A‧STER]這種人在此地多如繁星啊，那麼姑娘是想物歸原主…",
        "\t[M‧A‧STER]不，是想快刀亂麻吧，妳的表情如此說著",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]差別呢…？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[M‧A‧STER]姑娘付錢、或老夫給錢",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]那不用選，賣了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[M‧A‧STER]夠果斷，給姑娘湊個整吧",
        "一張千元鈔票直直地滑進了東山的口袋",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_family_restaurant_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](雖然忙了一陣但至少今天飯錢有著落了。謝謝你，不認識的肥宅)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "來到了家庭餐廳的東山正好看到了坐在裡面的蘭斯與小朋友們",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]…你終於連小孩子也不放過了嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[蘭斯]怎麼可能啊？我又不是蘿莉控",
        "\t[蘭斯]如此這般那般然後梗平那小子還沒回來",
        {
            "type": "comment",
            "text": "【過場：一段時間過後】"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]就別理那白癡了，吃完我們一起去現場看看吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]謝謝",
        "\t[小黑]雖然那哥哥不太靠普，感覺你們倒是挺正常的呢？話說回來智乃那是你親…",
        "\t[智乃]我不認識他—",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "眾人在前往ANIsister的途中，正好看見了警察經過",
        "\t[蘭斯]喂警官！梗平呢？",
        "\t[警察]那個混蛋竟然對警察施暴，要是讓我逮到他—",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH1_L44.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）你人呢？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "……………",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]沒回呢。竟然如此就請警察大人代替梗平跟我們走一趟吧，你已經是當事人了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[警察]啥東西？我還要忙著巡邏可沒空理你們這些…",
        "\t[小黑]………(盯",
        "\t[智乃]………(盯",
        "\t[IB]………(盯",
        "\t[蘭斯]…人民保母應該不會放著找哥哥的小朋友不管吧？",
        "\t[警察]蛤—你在說什麼鬼話！ANIsister就在前面跟我來！",
        "於是眾人來到了暫時公休的ANIsister前",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]不對勁，都快到COMIKE了這時間公休營業額很痛吧？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[警察]哎呀，門鎖住了進不去，太可惜了，看來我們只能解散—",
        "就在警察作勢要溜之際，四處張望的小黑從旁邊的巷子裡繞了出來",
        "\t[小黑]後門沒有鎖呢！",
        "\t[警察]私闖民宅可不好，我們還是循正規管道改天再—",
        "\t[蘭斯]你不就是嗎",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]『正規管道』大人，就交給你了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[警察]我…我嗎？",
        "\t[眾人]『『『『『不然呢？』』』』』",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "comment",
            "text": "【BGM預定地：()】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_bookstore_a_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "推著警察帶頭，眾人進入了ANIsister。井然有序的環境看似無異卻出奇安靜",
        "眾人的腳步聲迴盪這碩大的賣場中，與外頭市街的熱絡相比，更增添了一絲弔詭",
        "\t[警察]你們這可是現行犯喔…我可以逮捕你們的喔…",
        "\t[蘭斯]囉嗦！快找找可疑的地方！你左我右",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]從陳列來看有人在整理、也沒有特別奇怪的缺失，到底為什麼會在這種時間公休啊？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[智乃]那邊…好像有光？",
        "智乃指著角落的一扇門",
        "\t[智乃]非工作人員禁止內",
        "\t[IB]………",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L199.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "IB打開了門",
        "IB關上了門",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]…去看看別層樓吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]……同意",
        "\t[智乃](點頭點頭)",
        "就在這時其他人也走了過來",
        "\t[警察]有啥發現嗎？",
        "\t[蘭斯]嗯？怎麼開了又關？裡面有人吧？",
        "蘭斯一邊喊著一邊打開了門",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]孩子們我有不好的預感—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[小黑]那麼走先—",
        "\t[IB](移動音效)",
        "\t[智乃](快步跟上)",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L199.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[蘭斯]打擾了你們有沒有看過一個—",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L218.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "裡面的肥宅同時轉過了頭",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "\t[蘭斯](拔腿就跑)",
        "\t[警察]不是說要找人跑啥呢！所以你們有沒有看到一個—",
        "警察打開了門高聲提問",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH2_L299.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[警察]^%$#^%#%#$%#^%$$%#%",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "comment",
            "text": "【BGM預定地：()切換BGM或到7-2結束前連續播放此首BGM】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[蘭斯]哈啊哈啊—似乎不會衝出來—",
        "轉頭確認小朋友都在的蘭斯匆忙關上了後門",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]那堆是什麼來著",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[小黑]肥宅吧？IB你有認識的嗎？",
        "\t[IB](搖頭)",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]你哥哥真的會在這種地方嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]…可能…感覺很相似",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]哥哥長什麼樣子啊？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]…紫色海帶頭",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]那挺顯眼的應該不會看漏",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[智乃]……那個警察呢？",
        "\t[眾人]『『『『啊』』』』",
        {
            "type": "comment",
            "text": "【過場：一段時間過後】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street_night.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[小黑]沒出來呢，再進去找找嗎？",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]天色也差不多了，今天先放棄吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "於是東山帶著IB智乃準備回兔子咖啡，跟蘭斯還有小黑道別後",
        "\t[IB]…",
        "\t[智乃]一定能找到哥哥啦",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]跟肥宅相似大概啥時會自己冒出來吧？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]…我先回家確認一趟",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]那先送你去車站吧？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]不用",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]你一個人沒問題嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[IB]沒問題，自己來的",
        "\t[智乃]那要注意安全喔—",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_cafe_rabbit_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](梗平親戚家消費應該可以打個折吧?)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "帶著這樣的想法，東山跟著智乃進入了店裡",
        "在與三角店長說明小朋友們被梗平丟包的經緯後，又蹭到了一餐了家人們",
        "就在東山啃著烤肉三明治配highball的同時，一位入店的女性坐上了吧檯的位置",
        "\t[貝琪]唉，老樣子—",
        "\t[貝琪]三角店長啊，最近有沒有什麼好目標啊—",
        "就在女性與三角店長互動的同時，東山也在一旁觀察著",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](嗚喔，好女人)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](憑我鑑賞女性20年功力，這渾然天成的泰然與和動作表現出的優雅細緻)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](那#F0CCAC的膚色，應該是CPB最頂級的遮瑕膏。號稱塗上連M‧J都能白到發亮—)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](貴的要死的東西竟然足足疊了至少十層？)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山](再加上這有些憂慮的氛圍…)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]我叫東山，不好意思這位美麗的小姐，請問你與三角店長在談些什麼樣的話題呢？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]因為這是我第一次來酒吧，有點好奇一般酒吧的客人都會談論些什麼",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[三角]一個人喝悶酒的女人，還能討論什麼呢。",
        "\t[貝琪]所—以—說—就沒有什麼好對象嗎～吶—店長告訴我嘛～？",
        "\t[貝琪]那東山呢—，妳一個小姑娘又為什麼來酒吧？",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]我認識的男性其中一位剛好是三角店長的親戚—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[貝琪]店長你怎麼還有男性親戚～都不說很小氣耶—噗—",
        "\t[三角]那小子只是個成天見人就喊這是修卡的陰謀的神經病，你別認識比較好—",
        "\t[貝琪]耶～修卡的敵人嗎？那就是騎士摟。騎士好呢～都長得挺正的呢～",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]痾…是啊，忽略性格的話，他外觀確實不錯呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]閉嘴往街邊站的話是帥到十個男人也有九個會回頭的那種…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 24,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "\t[貝琪]細說",
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 16,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 24,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "\t[貝琪]跟東山是朋友對吧？有他的聯絡方式嗎？",
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 16,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 24,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "\t[貝琪]不，這樣太慢了，直接告訴我他在哪裡！",
        {
            "type": "setText",
            "avg": true,
            "position": "down",
            "offset": 0,
            "align": "left",
            "bold": true,
            "background": "winskin.png",
            "title": [
                255,
                225,
                80,
                1
            ],
            "text": [
                255,
                255,
                255,
                1
            ],
            "titlefont": 22,
            "textfont": 16,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]等等等，妳這樣會嚇到人的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]總之妳先冷靜在這座好，剩下我來安排",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[貝琪]東山妳為什麼要對初次見面的我那麼好！？",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]我最喜歡幫助朋友跟可愛的女性了！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "接著東山拿出了手機",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）梗平！兔子咖啡被修卡襲擊了！速歸！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_cafe_rabbit_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH2_L464.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[梗平]放開那位女士！",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "就在梗平三兩下解決了修卡，與女性開始對上了英雄救美的段子時",
        "被擊敗的修卡爬了起來，坐到了在角落的東山與三角店長身旁",
        "同時拉下了面罩",
        "\t[前輩]夏天穿這個還挺熱的說",
        "\t[前輩]琪姐說這是麻煩若的一點心意—",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L308.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "那是一個摸起來有點厚度的信封，上面還寫著女性的聯絡方式",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "\t[前輩]那咱去還戲服了吶—",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]多謝，今天真是個幸運日！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[三角]這算是兩個麻煩一次解決了吧？",
        "\t[三角]……又或是，會帶來更多波折呢？",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_phone_message.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[貝琪]（手機）東山醬好厲害呢～我們約了要共進晚餐喔",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）第一次約會很重要喔！可不能急躁喔貝琪親",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）重點是傾聽與投其所好，製造下一次見面的契機",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）最好是點些他根本沒見過或會不好意思大吃大喝的料理",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）這樣妳們才能有更多機會了解彼此呢！梗平不太能喝，記得別勸他酒",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）也別忍不住動手動腳喔，眼光要放的長遠！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（手機）加油喔～(∠・ω< )⌒☆彡",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch7_3",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0
        }
    ]
}
