main.floors.main_ch3_2=
{
    "floorId": "main_ch3_2",
    "title": "主線 CH3 3-2 貝琪晚餐",
    "name": "3-2",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_street.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "next_to_you_emotional.mp3",
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
            "name": "next_to_you_emotional.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH3 3-2 貝琪晚餐】"
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
        {
            "type": "playBgm",
            "name": "next_to_you_emotional.mp3",
            "keep": true
        },
        "失魂落魄的梗平拖著沉重的步伐走出了馬的膝蓋，癱坐在路邊",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在下到底......守護了甚麼啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "彷彿是算好了時間一般，一台黑色的加長豪華禮車出現在了梗平的前方",
        "貝琪穿著精緻的晚禮服下了禮車，並牽起了梗平的手",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]梗平先生，你守護了我喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]所以請不要這樣垂頭喪氣的，我們走吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]痾，嗯......好",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "就這樣梗平被貝琪拉上了車，前往了一間跟梗平毫不相襯的高級餐廳",
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
            "image": "ms_bg_fine_dining.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "貝琪輕鬆的安排好了所有的餐序，梗平只能在一旁嗯嗯啊啊",
        "然後在迎賓酒被送上來的同時，貝琪看向了梗平",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]剛剛在車上甚麼都沒能聊到呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]梗平，你喜歡怎麼樣的女性呢？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在下......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "明明眼前就是酒，或許是因為壓力，梗平遲遲沒有動手",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]喜歡的女性什麼的......我也不是很清楚",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]畢竟以前從來沒想過這些",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在下可以跟你分享在下喜歡的東西嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]嗯......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "貝琪看著眼前有些緊張的男人，停下了繼續追問的心思",
        "只是擺正了姿態，用心地聽著梗平說話",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在下啊，最喜歡假面騎士了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]作為孤獨的英雄，即便被誤解或當成怪物，仍然會挺身而出",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]為了守護大家而戰，這就是假面騎士",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在這裡面，在下特別喜歡......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "餐點一道道的送上，貝琪則繼續耐心的聽著梗平的分享",
        "時間一分一秒的過去，餐後的甜點也已被清盤",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]很想再聽你分享更多呢，只可惜時間好像有點晚了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "正當梗平準備做出回應時，手機響了起來",
        "\t[蘭斯]梗平，你在哪裡？",
        "\t[蘭斯]我們在ANIsister前面要討論怎麼樣攻進去了",
        "\t[梗平]馬上過來",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯，謝謝你願意聽我分享我喜歡的東西",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我有一件很重要的事情要去辦，可以拜託你送我回秋葉原嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]嗯，沒有問題",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【過場】"
        },
        "梗平上了車重新回到了秋葉原，在下車之前貝琪拉住了他的手",
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
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]我們還會有下一次嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]會有的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪]嗯，謝謝你",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "貝琪帶著微笑送別了梗平，禮車轉頭便消失在了視線中",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](太好了，假面騎士又有新的夥伴了)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](這下擊敗修卡指日可待)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
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
        "\t[蘭斯]梗平，剩你還沒到了",
        "\t[梗平]馬上來",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "梗平來不及思考什麼，便奔向了肥宅滿布的ANIsister",
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch3_3",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0
        }
    ]
}
