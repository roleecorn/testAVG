main.floors.mystery_girl_2=
{
    "floorId": "mystery_girl_2",
    "title": "好感度2：家庭餐廳再會",
    "name": "家庭餐廳再會",
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
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [28,210],
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
        "\t[???]您好，請問今天要來點什麼呢?",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [28,210],
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
        "\t[???]啊...",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [28,210],
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
        "\t[旁白]梗平被摀住了嘴。",
        "\t[???]不要亂說話。",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [28,210],
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
        "\t[???]客人您要來點什麼呢?(下班後再來說)",
        "\t[旁白]梗平度過了一個難受的午餐。",
        "\t[旁白]......",
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('mystery_girl_2');\n}"
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
