main.floors.huangmo_2=
{
    "floorId": "huangmo_2",
    "title": "餐廳再會",
    "name": "餐廳再會",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_family_restaurant_interior.png",
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
            "code": 12,
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
        "\t[梗平]好了該吃飯了，今天就來這間餐廳吃飯吧，聽說炸蝦一絕。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 12,
            "image": "huangmo_smile.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[???]您好，請問今天要來點什麼呢?",
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 10,
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
        "\t[梗平]我要來點...咦?",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 12,
            "image": "huangmo_surprised.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[???]啊...",
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 10,
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
        "\t[梗平]你就是上次嗚嗚嗚",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        "梗平被摀住了嘴。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 12,
            "image": "huangmo_angry.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[???]不要亂說話。",
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 10,
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
        "\t[梗平]嗚嗚嗚(點頭)",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 12,
            "image": "huangmo_smile.png",
            "loc": [
                "portraitRight",
                "portraitBottom"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[???]客人您要來點什麼呢?(下班後再來說)",
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        "梗平度過了一個難受的午餐。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 12,
            "time": 0,
            "async": true
        },
        "......",
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('huangmo_2');\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.returnToAkiba();\n}"
        }
    ]
}
