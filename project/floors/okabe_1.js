main.floors.okabe_1=
{
    "floorId": "okabe_1",
    "title": "五百萬的彈珠機",
    "name": "五百萬的彈珠機",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_arcade.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "bossa_casual_shop.mp3",
    "ratio": 1,
    "width": 17,
    "height": 13,
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
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_arcade.png",
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
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]經費還是不太夠呢。得找個能來錢的活兒...",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？這是什麼？「超級彈珠機-泥沼」？目前累計獎池一，十，百，千...五百萬円？！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]呼，這一看就是商家用來騙錢的機器啦，《賭博OO錄》裡都演過了，還是老老實實去打工比較好。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        "梗平進入小鋼珠店",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]但這是，廢物的思維！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在下要在這裡，獨自贏下五百萬！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]等著吧——",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        "\t[？？？]嗚哇啊啊啊啊啊！！就差一步，就差一步啊啊啊啊啊！！！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？你是...",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]凶真！你小子怎麼在這裡啊！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "okabe_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[岡部倫太郎]嗚啊啊啊啊——誒，梗...梗平？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "okabe_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[岡部倫太郎]喔喔你來的正好，借我點錢，我馬上就要通關了！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]你到底在幹什麼啊...？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "okabe_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[岡部倫太郎]就是那個超級彈珠機啊！就差一點點，我就能贏下了！拜託了！把你的錢借給我吧！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "okabe_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[岡部倫太郎]贏下來的錢我會給你五五分的！",
        {
            "type": "choices",
            "text": "\t[梗平]要怎麼做？",
            "choices": [
                {
                    "text": "把錢借給他",
                    "action": [
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_neutral_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]真的？五五分，那就是兩百五十萬...",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_panic_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]可惡，在下就把珍貴的錢包都賭在你身上了！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        "十五分鐘後",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "okabe_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[岡部倫太郎]哦哦哦哦哦哦哦哦哦！！！輸了！！！！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "okabe_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[岡部倫太郎]連一萬円都拿不出來，你這傢伙平時到底在幹什麼啊？",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_panic_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]你是在拿在下尋開心嗎！！那是在下這個月所有的經費啊，快還錢啊你個混賬人渣！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "okabe_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[岡部倫太郎]我知道啦你別掐我脖子了，要...死...",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        "——最後兇真通過在不知名黑心企業打工把錢還上了。"
                    ]
                },
                {
                    "text": "不借",
                    "action": [
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_neutral_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]看見你的悲慘模樣讓我的熱情都冷卻了下來...",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_panic_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]在下的錢包可是很珍貴的啊...怎麼能因為這種小事而借給你，在下要回去了。",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "okabe_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[岡部倫太郎]誒誒，就差一點了啊！！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0,
                            "async": true
                        },
                        "——梗平丟下了哀嚎的兇真，回去了。"
                    ]
                }
            ]
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('okabe_1'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({ id: 'okabe_2', title: '時間機器的夢想', locations: ['game_center'], floorId: 'okabe_2', once: true }); }"
        }
    ]
}
