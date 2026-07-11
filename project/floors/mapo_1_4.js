main.floors.mapo_1_4=
{
    "floorId": "mapo_1_4",
    "title": "麻婆豆腐篇 1-4",
    "name": "1-4",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "scene_street.png",
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
    "bgm": "bgm.mp3",
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
            "background": "winskin.png",
            "titlefont": 22,
            "textfont": 20,
            "lineHeight": 30,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
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
        "從倉庫出來的兩人遇到了同行的 B、C。",
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
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]B、C，你們有看見 A 嗎？",
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
        "\t[B]沒有，不過去問了神社的巫女之後說是在北方的樣子。",
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
        "\t[C]向北總共只有三條路，那不如我們分三組搜尋怎麼樣？",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]有道理，邪惡的修卡到底藏在哪裡。",
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
            "image": "suou_smile_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]我就繼續跟著表哥走了。",
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
        "\t[B]那我們先繼續分頭行動吧，再見。",
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
        "\t[C]我也先走了。",
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
        "B、C 離開了。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可惡的修卡，他們到底在哪裡。",
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
        "兩人在秋葉原繞了一段時間過後，依舊不見 A 的蹤影。",
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
        "\t[B]{還沒找到 A，我先吃飯，傳地址給你們}",
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
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]修卡為什麼要綁走 A，現在看來只有一種可能性，他們正在籌劃破壞 Comike。",
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
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]不明白修卡為什麼要破壞 Comike，但聽著挺有趣，先繼續說。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可能性一，修卡想要利用 Comike 的同人之力製造前所未有的強大怪人！",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可能性二，修卡想要抓大量的阿宅做改造人。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可能性三，最大的一種可能，修卡閒著沒事，單純想破壞 Comike！",
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
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]每一種都是妄想，不過表哥最希望是可能性二對吧。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]你再說甚麼啊，表哥我才沒有想過在摩托車訓練的途中被修卡抓住並改造。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]然後在要被腦改造前被善良的博士救出，從此開始跟修卡的戰爭。",
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
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]完全沒有。",
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
            "image": "suou_angry_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]太詳細了吧，到底在腦內演練幾次了啊這個。",
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
        "又過一段時間後。",
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
        "\t[C]{餓了，我也先吃個飯…}",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]{你們有看到修卡的蹤跡嗎？}",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]群裡剛剛有人發了個位置之後就沒人回應了…一定是修卡幹的。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]這個吃飯跟地址一定是他們暗號，修卡一定就在這裡。",
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
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]他們只是很普通的在吃飯吧。",
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
            "image": "keng_surprised_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]什麼！？吃飯竟然不叫我。",
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
            "image": "suou_smile_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]總之先過去找他們會合吧。",
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
        "兩人朝著手機中的地址走去。",
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "mapo_1_5",
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

