main.floors.mystery_girl_1=
{
    "floorId": "mystery_girl_1",
    "title": "好感度1：書店邂逅",
    "name": "書店邂逅",
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
    "bgm": "bgm.mp3",
    "ratio": 1,
    "map": [
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0]
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
            "title": [255,225,80,1],
            "text": [255,255,255,1],
            "titlefont": 22,
            "textfont": 20,
            "lineHeight": 30,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "\t[梗平]每個月發行的親熱天堂，就算來了秋葉原還是得買的♪",
        "\t[梗平]找到了!就剩下最後一本了!",
        "\t[旁白]梗平伸出了手，但卻在半空中與另外一隻手碰觸了。",
        "\t[???]咦?",
        "\t[梗平]在書店與美少女邂逅...真是美妙的展開，咦不過是黃書...",
        "\t[旁白]梗平回過神來才發現，那個少女已經紅著臉逃跑了。",
        "\t[梗平]...不必逃得這麼快吧(垂頭喪氣)",
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('mystery_girl_1');\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"mystery_girl_2\",\n\t\t\"title\": \"好感度2：家庭餐廳再會\",\n\t\t\"locations\": [\"restaurant\"],\n\t\t\"floorId\": \"mystery_girl_2\",\n\t\t\"once\": true\n\t});\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.returnToAkiba();\n}"
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
