main.floors.juju_2=
{
    "floorId": "juju_2",
    "title": "古書追逐",
    "name": "古書追逐",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "scene_mapo_shop.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
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
            "code": 20,
            "time": 0,
            "async": true
        },
        "\t[【地點]倉庫區】",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我剛剛過來的時候在雜貨店旁邊發現了古書店啊",
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
            "image": "juju_surprised.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]對吼！附近的那個雜貨店還有這種地方",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]梗平，你真是個天才",
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
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]哈哈！沒什麼啦～",
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
        "[兩人隨後趕往了雜貨店]",
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
        "\t[【地點]古書店】",
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
            "image": "juju_surprised.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]噢！找到了！＜如何把惡魔趕回地獄＞",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]怎麼這麼完美符合我們的需求",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]活像給我們挖坑跳一樣",
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
            "image": "juju_surprised.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]總之我們打開看看吧！",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]噢…",
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
        "\t[店主]喂！小伙子！不準白看書！",
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
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不好意思！我立刻買下來！",
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
        "\t[店主]嗯？",
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
        "（店主看了一下梗平）",
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
        "\t[店主]不用錢也行，你稍微讓我看一下",
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
            "image": "juju_surprised.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]梗平！拿了書快跑！他是退役驅魔師！",
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
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]蛤？",
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
            "image": "juju_surprised.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]跑！",
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
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]噢！",
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
        "（梗平撞倒了店主跑走）",
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
        "\t[店主]唉唷！真疼！剛才看到白白的一塊，果然是惡魔！",
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
        "\t[店主]等等！果然是什麼來着？而且我為啥這麼疼？",
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
        "（此時在古書店遠方）",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]啊……累死我了",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]我對那個店長的記憶做了處理",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]他一時半回也想不起我們",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]我得先看看這書的真偽",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]不然可能會發生不好的事",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]具體來講？",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]全秋葉原……的馬桶會堵塞",
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
            "image": "keng_angry_portrait.png",
            "loc": [
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]蛤？",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]這邊在2000年還真的爆發過一次",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]好了，這不是重點，總之你改天再找我",
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
            "image": "juju_normal.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[茱茱]倉庫會合，知道嗎？",
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
                "portraitLeft",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]噢……",
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
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('juju_2');\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"juju_3\",\n\t\t\"title\": \"回家法陣\",\n\t\t\"locations\": [\"tent\"],\n\t\t\"floorId\": \"juju_3\",\n\t\t\"once\": true\n\t});\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.returnToAkiba();\n}"
        }
    ]
}
