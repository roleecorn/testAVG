main.floors.mapo_1_2=
{
    "floorId": "mapo_1_2",
    "title": "主線 CH1 1-2 倉庫區",
    "name": "1-2",
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
    "bgm": "dark_alleys_tension.ogg",
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
            "name": "dark_alleys_tension.ogg"
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
        "【主線 CH1 1-2 倉庫區】",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]倉庫總是邪惡組織的據點對吧，黑道啊混混什麼的",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]如果A真的在這裡的話，應該就是綁架案了吧",
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
        "\t[梗平]馬撒卡，A莫非先我一步被修卡抓去改造身體了",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]總之可能有危險對吧，我先拿武器出來吧",
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
        "表妹在此時拿出隨身攜帶的氣槍，瞄準著前方",
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
            "image": "keng_serious_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]作為假面騎士，最重要的便是勇敢的心靈",
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
        "梗平一邊說著一邊躲到了表妹的背後",
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
        "\t[梗平]好，我們快去拯救A吧",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]你的良心不會痛嗎？",
        {
            "type": "choices",
            "text": "請選擇。",
            "choices": [
                {
                    "text": "門，很理所當然的全都鎖著",
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
                        "\t[梗平]可惡，竟然所有的門都打不開",
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
                            "code": 11,
                            "image": "suou_sad_portrait.png",
                            "loc": [
                                260,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]很正常吧，畢竟是人家的財物",
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
                            "code": 11,
                            "image": "suou_surprised_portrait.png",
                            "loc": [
                                260,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]可是A到底去哪裡了呢?",
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
                            "image": "keng_smile_portrait.png",
                            "loc": [
                                28,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]雖然我是假面騎士，但看來還是只能尋求警察的幫助了",
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
                        "梗平拿起了自己的電話撥打了110",
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
                        "\t[警察]秋葉原派出所，請問有什麼需要幫助的",
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
                            "image": "keng_smile_portrait.png",
                            "loc": [
                                28,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]我的朋友被修卡抓走了，假面騎士需要你們的幫助才能......",
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
                        "\t[警察]神經病啊你！",
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
                        "電話被掛斷了",
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
                        "\t[梗平]什麼？警察怎麼一點警惕性沒有？",
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
                        "\t[梗平]不對，反過來想如果他們這麼果斷的掛了電話",
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
                        "\t[梗平]那他們肯定跟修卡勾結了對吧，太邪惡了修卡",
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
                            "code": 11,
                            "image": "suou_surprised_portrait.png",
                            "loc": [
                                260,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]很明顯是因為騷擾電話才被掛斷的啊",
                        {
                            "type": "choices",
                            "text": "請選擇。",
                            "choices": [
                                {
                                    "text": "先去其他地方吧",
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
                                        "\t[梗平]先去其他地方想辦法吧，警察已經靠不上了",
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
                                        "梗平一邊說著一邊跟表妹走出了倉庫"
                                    ]
                                },
                                {
                                    "text": "路不轉人轉，RIDER KICK！",
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
                                        {
                                            "type": "showImage",
                                            "code": 10,
                                            "image": "keng_smile_portrait.png",
                                            "loc": [
                                                28,
                                                "textTop"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[梗平]表妹啊，你知道騎士是有必殺技的嗎",
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
                                            "code": 11,
                                            "image": "suou_surprised_portrait.png",
                                            "loc": [
                                                260,
                                                "textTop"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[表妹]表哥你該不會……？！",
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
                                        "\t[梗平]變——身—！",
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
                                        "梗平做出變身動作",
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
                                            "image": "keng_smile_portrait.png",
                                            "loc": [
                                                28,
                                                "textTop"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[梗平]騎士——踢！",
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
                                        "梗平跳到空中並開始旋轉踢向其中一扇門",
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
                                        "門被踢開的音效",
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
                                        "\t[梗平]束手就擒吧你們這群修卡……",
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
                                        "穿黑色大衣拿著手提箱的兩個男人看著闖入的梗平",
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
                                        "\t[梗平]……抱歉打擾了？",
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
                                        "梗平轉身看到身後站著一個壯碩的男人，以及表妹已經躺在旁邊",
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
                                        "然後梗平被壯碩的男人一棒敲暈",
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
                                        "自此梗平與表妹從社會上消失了，至於有兩個未成年男女在秋葉原遊蕩的故事就待有緣再述",
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
                                        "【BE1：這裡不是米O市吧？！】",
                                        {
                                            "type": "changeFloor",
                                            "floorId": "mapo_1_2",
                                            "loc": [
                                                6,
                                                10
                                            ],
                                            "direction": "up",
                                            "time": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "什麼?你說有一扇門是開的",
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
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_smile_portrait.png",
                            "loc": [
                                28,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]假面騎士之魂告訴我就是這裡了",
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
                            "code": 11,
                            "image": "suou_surprised_portrait.png",
                            "loc": [
                                260,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]這是私闖民宅吧？",
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
                        "\t[梗平]救人的事怎麼能說是私闖民宅呢，而且這裡可是修卡的祕密基地",
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
                        "\t[梗平]肯定有什麼可怕的陰謀在發生！",
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
                            "code": 11,
                            "image": "suou_surprised_portrait.png",
                            "loc": [
                                260,
                                "textTop"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]從外面看不出來裡面有什麼，進去嗎？",
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
                        "\t[梗平]那當然，女士優先",
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
                        "梗平把表妹推進了門裡，然後黑暗吞噬了她",
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
                        "\t[梗平]...",
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
                        "\t[梗平]我會記住你的犧牲的",
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
                        "梗平關門到一半的瞬間，裡面伸出一隻黑色的東西纏住了梗平的手",
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
                        "\t[梗平]我還沒參加到Comike，而且我還沒在秋葉原喝到酒，放我走啊！",
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
                        "梗平試圖抵抗，但無濟於事",
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
                        "\t[不知道是誰的？]還是沒靈感呢，希望編輯不要找到我",
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
                        "其他人在一個月後的秋葉原車站發現了梗平跟表妹，兩人被發現時眼神空洞",
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
                        "就這樣，梗平錯過了Comike",
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
                        "【BE2：不要闖空門】",
                        {
                            "type": "changeFloor",
                            "floorId": "mapo_1_2",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 0
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
        "從倉庫出來的兩人遇到了同行的B、C",
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
        "\t[梗平]B、C，你們有看見A嗎？",
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
        "\t[友人B]沒有，不過去問了神社的巫女之後說是在北方的樣子",
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
        "\t[友人C]向北總共只有三條路，那不如我們分三組搜尋怎麼樣",
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
            "image": "keng_smile_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]有道理，邪惡的修卡到底藏在哪裡",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]我就繼續跟著表哥走了",
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
        "\t[友人B]那我們先繼續分頭行動吧，再見",
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
        "\t[友人C]我也先走了",
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
        "B、C離開了",
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
        "\t[梗平]可惡的修卡，他們到底在哪裡",
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
        "兩人在秋葉原繞了一段時間過後，依舊不見A的蹤影",
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
        "\t[友人B]（手機）還沒找到A，我先吃飯，傳地址給你們",
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
        "\t[梗平]修卡為什麼要綁走A、現在看來只有一種可能性、他們正在籌劃破壞comike",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]不明白修卡為什麼要破壞comike，但聽著挺有趣，先繼續說",
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
        "\t[梗平]可能性1.修卡想要利用comike的同人之力製造前所未有的強大怪人！",
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
        "\t[梗平]可能性2.修卡想要抓大量的阿宅做改造人",
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
        "\t[梗平]可能性3.最大的一種可能、修卡閒著沒事…單純想破壞comike！",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]每一種都是妄想，不過表哥最希望是可能性2對吧",
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
        "\t[梗平]你再說甚麼啊，表哥我才沒有想過在摩托車訓練的途中被修卡抓住並改造",
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
        "\t[梗平]然後在要被腦改造前被善良的博士救出，從此開始跟修卡的戰爭",
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
        "\t[梗平]完全沒有",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]太詳細了吧，到底在腦內演練幾次了啊這個",
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
        "又過一段時間後",
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
        "\t[友人C]（手機）餓了、我也先吃個飯…",
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
        "\t[梗平]（手機）你們有看到修卡的蹤跡嗎?",
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
        "......",
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
        "\t[梗平]群裡剛剛有人發了個位置之後就沒人回應了…一定是修卡幹的",
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
        "\t[梗平]這個吃飯跟地址一定他們暗號，修卡一定就在這裡",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]他們只是很普通的在吃飯吧",
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
        "\t[梗平]什麼！？吃飯竟然不叫我",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [
                260,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]總之先過去找他們會合吧",
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
        "兩人朝著手機中的地址走去",
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
            "floorId": "mapo_1_3",
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
