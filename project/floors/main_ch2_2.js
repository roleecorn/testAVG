main.floors.main_ch2_2=
{
    "floorId": "main_ch2_2",
    "title": "主線 CH2 2-2 三過書店",
    "name": "2-2",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "scene_road.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        },
        {
            "name": "keng_portrait.png",
            "canvas": "fg",
            "x": 28,
            "y": 210,
            "disabled": true
        },
        {
            "name": "suou_sad_portrait.png",
            "canvas": "fg",
            "x": 260,
            "y": 185,
            "disabled": true
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
            0
        ]
    ],
    "width": 13,
    "height": 13,
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setText",
            "position": "down",
            "offset": 8,
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
            "textfont": 20,
            "lineHeight": 30,
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
            "image": "scene_road.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "【主線 CH2 2-2 三過書店】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_street.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "【背景：書店A】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平與三個小朋友來到了書店A的門口",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "但拉下的鐵捲門上寫著暫時公休的告示",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]什麼？竟然沒開？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[智乃]好可疑，明明昨天還開得好好的",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "正值旺季、接下來就要COMIKE的時間點",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "身為相關產業的這間書店竟然大門深鎖，不懷疑你懷疑誰？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "名偵探梗平如此思考著，然後做出了一個完美的結論！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]哎呀，門鎖住了進不去，太可惜了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]擅闖別人的店可不好，我們先去其他地方找找吧",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "？？？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "三個小朋友欲言又止，但梗平早已一臉自信的轉身走向了其他地方",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "互看一眼後嘆了口氣，三個小朋友跟上了梗平的步伐",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_street.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "【背景：倉庫】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]這裡一看就是修卡的基地，你的哥哥一定是被綁架來這裡了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[IB]是...是這樣嗎？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]對的對的，就是這樣",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平立刻在倉庫區開始了自己的大搜查",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "然而他忘記了一個重要的問題",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "倉庫，還是鎖的",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可惡，都鎖著",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]那只好換下一個地方了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平話沒說完，又自顧自地往外跑了出去",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "小朋友們依舊失去了說話的權利，只好跟著愛衝刺的大哥哥繼續走",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_street.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "【背景：街道】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]看來只能先來調查這種奇怪的小巷子了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "小朋友們剛準備說點什麼，梗平又轉頭跑了出去",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]看來這裡也沒有，換下一個地方吧",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "就這樣，耿平從街頭問到巷尾，然後再從巷尾問到街頭",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "可惜沒有任何人見過IB的哥哥，於是小朋友們提出了再去一次書店A的提議",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "但絕頂聰明的耿平認為這一切都是障眼法，IB的哥哥肯定在其他的地方",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "天色越來越黑，後面三個小朋友的目光也越來越銳利",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]「可惡，書店A一看就有問題，我不要進去啊」",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]「得趕快找個理由跑掉才行」",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平，孬了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "剛好，小黑的肚子在此時響了起來",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]「有了，就是現在」",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]時間也差不多了，我們先去吃飯吧，晚點再繼續",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "免除了社會性死亡的梗平，快速地朝家庭餐廳的方向走去",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[IB]我是不是自己來會比較好",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[智乃]好像是這樣",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[柯南]我們已經經過書店A三次了，我好想進去",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "三個小朋友跟著梗平走向了家庭餐廳",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_mapo_shop.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "【背景：家庭餐廳】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "走進餐廳的梗平看到了已經坐在那裏的友人B",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "打起歪腦筋的梗平立刻帶著小朋友與友人B併了桌",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]「這時候只需要多談談自己的推測就能轉移焦點了」",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]這個小朋友的哥哥不見了，可以拜託你一起幫忙找嗎",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[友人B]誒？有甚麼線索嗎",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]你聽我說啊，根據他們的情報，他的哥哥是在書店A附近失蹤的",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[友人B]那你有看過書店A了嗎？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]......",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]沒有，不過我認為肯定不是在那裡",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]書店A絕對只是障眼法，實際上他肯定不再那裡",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]一定是在書店A被綁架後轉移到其他地方了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[友人B]是這樣嗎？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]肯定是這樣",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]而且整件事情有一個非常弔詭的地方",
        {
            "type": "choices",
            "text": "請選擇。",
            "choices": [
                {
                    "text": "怎麼可能一個目擊者都沒有！難不成我們有人背叛了！？",
                    "action": [
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "(鴿子)",
                        {
                            "type": "changeFloor",
                            "floorId": "main_ch2_2",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 0
                        }
                    ]
                },
                {
                    "text": "怎麼可能一個目擊者都沒有！一定是修卡的陰謀！",
                    "action": [
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "就在梗平越講越心虛的時候，一個警察走了過來",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[不知道是誰的松]有人提到修卡嗎？",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_panic_portrait.png",
                            "loc": [
                                28,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]你見過修卡嗎！？",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[不知道是誰的松]有喔，快跟我來吧",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_neutral_portrait.png",
                            "loc": [
                                28,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]這三個小朋友就拜託你了，我要去與修卡戰鬥了",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_neutral_portrait.png",
                            "loc": [
                                28,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]如果我回不來的話......就把他們帶回咖啡廳吧",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[友人B]好喔",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "話剛說完，梗平就跟著警察一起離開了",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[智乃]大姊姊，你是他的朋友嗎？",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[友人B]雖然很不想承認，但是是",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[IB]辛苦了",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "\t[友人B]嗯，看起來他今天對你們做了一些不可原諒的事情呢",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 11,
                            "time": 0,
                            "async": true
                        },
                        "接下來小朋友們開始了跟友人B一起吐槽梗平的時光",
                        {
                            "type": "changeFloor",
                            "floorId": "main_ch2_3",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 500
                        }
                    ]
                }
            ]
        },
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch2_3",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0
        }
    ],
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
