main.floors.ruka_3=
{
    "floorId": "ruka_3",
    "title": "零件會場",
    "name": "零件會場",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_maid_cafe.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "bossa_casual_shop.mp3",
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
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3",
            "keep": true
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_maid_cafe.png",
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
            "code": 20,
            "time": 0,
            "async": true
        },
        "\t[艾主席]客人，你坐啊",
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
        "\t[梗平]這裡的女僕也太可怕了吧！",
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
        "\t[梗平]我是桶至學長叫來的啦，學長呢",
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
        "\t[艾主席]出門了",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]甚麼時候會回來？",
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
        "\t[艾主席]不知道",
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
            "image": "ruka_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]欸？又遇到你了……",
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
            "image": "ruka_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]那個！",
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
            "image": "ruka_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]上次還沒問到你的名字……",
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
        "\t[梗平]你何必多此一問",
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
        "\t[梗平]我梗平做好事從來不留姓名",
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
        "\t[梗平]你就叫我假面騎士吧",
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
        "\t[艾主席]他叫梗平",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]等等你怎麼知道的？！",
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
        "\t[艾主席]桶子說的",
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
        "\t[梗平]學長平常都在這裡聊甚麼鬼啊",
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
            "image": "ruka_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]梗平……先生……",
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
        "漆原輕聲念著梗平的名字，臉上露出了婉約的笑容",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]（唔……這種心動的感覺是怎麼回事……）",
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
        "\t[艾主席]漆原氏，先帶他入坐吧",
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
            "image": "ruka_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]是！梗平…先生，請跟我來",
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
            "image": "ruka_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]請問要來點甚麼呢？",
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
        "梗平先打開菜單看看，再打開錢包看看，最後對漆原露出燦爛的笑容",
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
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]冰水一壺，謝謝",
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
            "image": "ruka_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]……我知道了",
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
        "漆原送來冰水一壺後，繼續去服務其他桌客人",
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
        "梗平則是默默看著漆原來去的身影",
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
        "女僕裝的裙襬晃動，而梗平的男兒心也隨之搖擺",
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
        "心臟的悸動，究竟是冰水在作祟，或是......",
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
            "image": "ruka_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]那個……，梗平先生，請問我有甚麼奇怪的地方嗎",
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
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不，不不沒事，只是在等學長沒事做而已",
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
        "\t[梗平]甚麼事都沒有，不用在意我",
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
        "\t[梗平]一定是修卡的改造讓我的身體產生不好的影響了",
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
        "\t[梗平]晚上就讓博士幫我檢查吧",
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
        "\t[梗平]再這樣下去可就無法戰鬥了",
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
        "聽到梗平一連串的解釋，漆原發出了輕快的笑聲",
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
            "image": "ruka_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]呵呵呵呵，梗平先生真有趣呢",
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
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]啊，不，不是，哈哈哈哈哈",
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
        "\t[艾主席]漆原氏，有空嗎？",
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
            "image": "ruka_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]有的，怎麼了嗎？",
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
        "\t[艾主席]可以去幫桶子氏嗎，他在電器街那裏",
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
        "\t[艾主席]梗平氏你要一起去嗎",
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
        "\t[梗平]恩，也好，我一起去找學長吧",
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
            "image": "ruka_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]我們走吧，梗平…先生",
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street_day.png",
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
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]說起來，學長在電器街做甚麼？",
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
            "image": "ruka_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]店長最近打算舉辦活動，所以委託桶子先生找『傳說中的電腦零件』當作獎品",
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
            "image": "ruka_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]好像是…『永靈水冷』、『轉靈CPU』，還有甚麼……",
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
            "image": "ruka_sad.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]對不起，我只記得總共有八個",
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
        "\t[梗平]學長是去跟黑暗電腦界的人戰鬥了嗎",
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
            "image": "ruka_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]不好意思，電腦的事情我也不是很懂……",
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
            "image": "ruka_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]好像就是這裡了",
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_tournament_venue.png",
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
            "code": 20,
            "time": 0,
            "async": true
        },
        "兩人走進一間大樓的地下室，昏暗的空間裡擠滿了人",
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
        "所有人都專注看著房間中間的舞台，並不時交頭接耳",
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
        "\t[路人A]好刺激好刺激，能親眼看到強者對戰，這回真是死也值回票價了",
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
        "\t[路人B]想不到傳說中的黑客居然現身了",
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
        "\t[路人A]果然也是為了『傳說中的電腦零件』爭奪戰才出門的吧",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]抱歉，你們剛剛在聊的是甚麼？",
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
        "\t[路人A]哇，你沒看到剛剛的戰鬥嗎，太可惜了",
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
        "\t[路人B]很快啊，那無影手答答答一秒鐘幾十萬上下，對手直接被打到自爆歸天",
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
        "\t[梗平]太可怕了吧？！",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]『傳說中的電腦零件』爭奪戰又是甚麼？",
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
        "\t[路人A]『傳說中的電腦零件』據說是各大電腦公司製作的試作原型機",
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
        "\t[路人A]然後全部蒐集完組出來的電腦聽說甚至能破解五角大廈的防火牆",
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
        "\t[路人B]我怎麼聽到的是蘇聯時期的量子電腦？",
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
        "\t[路人C]明明就是51區流出的外星人科技，剛剛的黑客也一定是CIA的特工",
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
        "\t[路人A]總之不知為何，最近到處都在舉辦競賽，贏家可以拿到一個零件",
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
        "\t[路人A]剛剛的是『貪狼HDD』，聽說轉速高達3萬，而且能使用超過10億次讀寫",
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
        "\t[路人B]太可惜了，早知道我就參加了",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不行完全聽不懂，去找學長吧",
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
        "梗平和漆原在會場內找桶子，但卻完全沒看到人",
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
        "漆原的電話響了",
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
            "image": "ruka_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]你好，欸？是，是，我知道了",
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
            "image": "ruka_smile.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]桶子先生似乎已經回去了，他說先讓梗平先生去忙自己的事",
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
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]蛤？！",
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
        "\t[梗平]好吧，那之後再見了，漆原",
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
            "image": "ruka_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[漆原]不好意思讓你陪這麼久",
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
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]沒事，你趕快回去吧",
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
        "兩人分開後梗平又繼續往下個地點移動",
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('ruka_3'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({\"id\":\"ruka_4\",\"title\":\"玉龍機殼\",\"locations\":[\"maid_cafe\"],\"floorId\":\"ruka_4\",\"once\":true}); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
