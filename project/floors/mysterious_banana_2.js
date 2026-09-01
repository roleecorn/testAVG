main.floors.mysterious_banana_2=
{
    "floorId": "mysterious_banana_2",
    "title": "神秘香蕉人：好感度2",
    "name": "神秘香蕉人：好感度2",
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
    "images": [
        {
            "name": "banana_park_center.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
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
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3",
            "keep": true
        },
        {
            "type": "showImage",
            "code": 5,
            "image": "banana_park_center.png",
            "loc": [
                0,
                0,
                544,
                416
            ]
        },
        "梗平又一次來到了公園，進入戰鬥模式的梗平不再如上次閒散，連空氣都沉重了幾分",
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]梗平少年，你來了阿",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]當然，英雄可不能臨陣脫逃阿",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]那麼，你找到甚麼信息了嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]當然，先上車再說吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 173: 過場"
        },
        {
            "type": "showImage",
            "code": 5,
            "image": "ms_bg_vehicle_interior.png",
            "loc": [
                0,
                0,
                544,
                416
            ]
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]根據我得到的信息，奪去伊布的人恐怕是與我有舊怨的兩人",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]我想請你幫忙對付其中一位，能拜託你嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]沒問題，交給我吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]那一位是個十分擅長程式咒法的咒術師，還請務必小心",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](為什麼會有奇幻戰鬥作品的要素拉)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[馬面]老大，我們到了",
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]好，我們下車吧。梗平少年，還請務必小心",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "神秘香蕉人指向了車窗外的一座廢棄工廠",
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]就是這裡了，進去吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]廢棄工廠阿，還挺浪漫",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]對在下來說就像是來到了主題公園一樣，真令人興奮",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]興奮很好，但對方絕非等閒之輩，別大意",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]大門就在那裏，四周也無埋伏，我們直接突入吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]好！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 5,
            "image": "ms_bg_warehouse_district_day.png",
            "loc": [
                0,
                0,
                544,
                416
            ]
        },
        "兩人推開門突入工廠，只見兩個人影從黑暗中向他們搭話",
        {
            "type": "comment",
            "text": "source line 191: 下面兩句不使用立繪"
        },
        "\t[神秘香蕉人]你好啊香蕉人，真沒想到你可以找到這裡",
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_angry.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]不過就到此為止了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]接下來就由我Scratch",
        "\t[超酷印度豹]和我超酷印度豹",
        {
            "type": "comment",
            "text": "source line 196: CG：貓科雙人組 出現"
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "banana_cats.png",
            "sloc": [
                0,
                0,
                416,
                286
            ],
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 197: 下面一句不使用立繪"
        },
        "\t[Scratch]來當你們的對手！！",
        {
            "type": "comment",
            "text": "source line 199: CG：貓科雙人組 消失"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]貓科雙人組，沒想到還會再見到你們...",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]喂，怪人，你們究竟把水伊布藏到哪去了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[超酷印度豹]想知道的話",
        "\t[Scratch]就先把我們打倒吧！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]果然是約定俗成的戰鬥回嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]那麼，梗平少年…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在下知道，Scratch就交給在下吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]拜託你了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_angry.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]超酷印度豹，吃我聖劍EX嘎裡棒吧Oraaaaa!!",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]齁，那麼你就是我的對手嗎？",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]沒錯，像素怪人",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我是路過的一般人梗平，給我記好了！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]想要我記住的話展現出你的本事，接招吧！",
        "只見Scratch高頻率的閃現在梗平周圍繞圈",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]什麼！？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]（連續的短瞬移，哪來的投射咒法啊！）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]接招吧！！",
        "而就在梗平為此驚訝之際，Scratch立刻高速向他襲來",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗚挖阿阿！！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](可惡，眼睛跟得上但來不及反應)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](思考，快思考阿梗平，對方有甚麼弱點...)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平的眼神在Scratch身上快速掃過，希望能找到什麼弱點",
        "然而，就算他以堪稱獸控楷模，用舔食般的視線看透了全身",
        "也只是發現Scratch身上繫著疑似腰帶的物品",
        "就在將要絕望之時，他突然想通了",
        "\t[Scratch]哼，看來你也不過是減速帶罷了，我馬上收拾你",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]呼...呼哈哈哈！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]你笑甚麼？因為打不贏絕望瘋了嗎",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不，在下已經想到解決你的方法了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]Nani!",
        "俗話說的好，擒賊先擒王，凡打人必攻下路的梗平很快就想到了解決辦法",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](沒錯，那個腰帶肯定就是他的能力來源)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](只要我能把它拔下來的話！)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]但那又如何，只要沒辦法接觸到，你就拿我沒轍",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]沒錯，所以現在在下要靠近你了，給我等著！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]齁，沒有選擇逃跑而是主動接近我Scratch嗎！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不靠近你，就沒辦法痛揍你一頓阿",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]那就想辦法掙扎吧，路人梗平！",
        "腰帶此時發出了巨大的聲音",
        "Green Flag Clicked",
        "Hello World!!",
        "又一次，Scratch以高頻率的閃現在梗平周圍繞圈",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](沒有遠程武器，要是不能接觸到我確實拿他沒辦法)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](那只要讓他自己接觸到在下就好了！)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]怎麼，放下狠話卻只是呆站在那裏嗎？",
        "\t[Scratch]既然你不過來我可要過去了！",
        "\t[Scratch]哈哈哈哈哈",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗚！！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "面對Scratch怒濤般的攻勢，梗平只能以防守姿勢勉強擋住",
        "看似戰況一面倒，梗平實則是在等待時機",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](如果能找到規律的話，就可以等他自己過來了)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](前後左右前後左右...現在只要忍耐)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]這就是最後一拳，倒下吧！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](就是這裡！)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]吃在下的，Force Stop Punch 阿！！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "蓄力的一拳成功瞄準了Scratch的腰帶，並一拳打散了腰帶的結構",
        "這股力量甚至傳遞到了鼠蹊部，讓Scratch頓時再起不能",
        "連佛陀都閉上了雙眼，不忍觀看",
        "\t[Scratch]嗚挖阿阿！！！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]哼，這樣你就不能再維持那個速度了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]你，怎麼可能！",
        "只見梗平眼前是散落的腰帶，還剩完整的部分分成了兩個",
        "這時，作為特攝片愛好者的他，起了一點心思",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]說起來撿腰帶事件也是經典事件阿...這樣的話",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "分歧選項",
        "1.腰帶Forever",
        "2.腰帶Move (n) steps",
        "1",
        "只見梗平拿起了上面寫著Forever的腰帶",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]和你打的話，用這條比較好吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[Scratch]等等，那條是！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]Henshin！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 274: 此處插入BGM"
        },
        "腰帶開始發出聲響",
        "Green Flag Clicked",
        "Forever!!",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
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
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？怎麼甚麼事都沒有發生",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？怎麼甚麼事都沒有發生",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？怎麼甚麼事都沒有發生",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？怎麼甚麼事都沒有發生",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？怎麼甚麼事都沒有發生",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嗯？怎麼甚麼事都沒有發生",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "於是，梗平停止了思考",
        "BE：Execution Timed Out",
        {
            "type": "comment",
            "text": "source line 287: 返回分歧選項"
        },
        "\t[2]腰帶Move (n) steps",
        "只見梗平拿起了上面寫著Move (n) steps的腰帶",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]和你打的話，用這條比較好吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]Henshin！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 293: 此處插入BGM"
        },
        "腰帶開始發出聲響",
        "Green Flag Clicked",
        "Move (n) steps",
        "\t[Scratch]不！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]喔喔！全身充滿了力量",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]如果是現在的話肯定就能做到！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "Scratch Mode",
        "MOVE",
        "100",
        "STEPS",
        "\t[Scratch]你不要過來阿阿阿！！！",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]RIDER~~ KICK!!!",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 306: 劇情推進"
        },
        "梗平一個騎士踢，Scratch就被踹到遠方了",
        "可惜的是，於此同時腰帶也隨之消滅",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]真是一場酣暢淋漓的戰鬥阿，可惜腰帶也跟著消失了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不，這種八成只是期間限定的臨時腰帶吧，遲早會找到只屬於在下的腰帶的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平是個樂觀的人",
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]梗平少年，你沒事吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]沒事，你打倒超酷印度豹了？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]沒錯，我比退休前弱了不少所以多花了點時間，但還是在聖劍的時限到前打倒他了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_sad.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]聖劍EX嘎裡棒暫時喪失了力量，如果還有同夥就不好了，我們趕緊撤退吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "神秘香蕉人展示了聖劍的樣子",
        "一把縮小的聖劍出現在了香蕉人手中",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](原來那東西還會縮小的嗎？)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]話說，我不小心把敵人踢飛了，沒辦法審問，抱歉阿",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]不用擔心，我已經從超酷印度豹口中得知了水伊布被綁的地點",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]只是為了取回水伊布，我得去取回曾被我封印的裝備",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]需要在下幫忙嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_sad.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]不，這件事得我自己來",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[神秘香蕉人]感謝你，梗平少年，我們明天公園見",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "於是為了籌備戰力，兩人解散了並決定各自準備戰力預備決戰",
        "但梗平也不知道該怎麼做，於是回去看了假面騎士馬拉松",
        {
            "type": "comment",
            "text": "source: project/story/神秘香蕉人.txt lines 165-end; full transcription"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({ id: 'mysterious_banana_3', title: '好感度3', locations: ['park'], floorId: 'mysterious_banana_3', once: true }); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('mysterious_banana_2'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
