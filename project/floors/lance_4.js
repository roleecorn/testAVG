main.floors.lance_4=
{
    "floorId": "lance_4",
    "title": "瑪麗亞之牆救援",
    "name": "瑪麗亞之牆救援",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "lance_black_curtain.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "battle_theme_a.mp3",
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
            "name": "battle_theme_a.mp3",
            "keep": true
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_black_curtain.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        "蘭斯：到瑪麗亞之牆吧，去救希露了",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_maria_wall_bg_placeholder.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]準備好了嗎，要上了喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]至少給我用30字說明前情提要啊！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]嘛，如此這般如此這般",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]也就是說，希露小姐要被改嫁給別的男人",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]所以我們要闖入希露小姐家裡然後把希露小姐帶出來",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]同時要把希露小姐老家為非作歹的證據搶出來讓他們家廢掉",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不管怎麼想都不可能吧常考",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]哼，放心吧，他們家內部都調查過了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]只要跟著我就沒問題了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]……算了，走吧，男子漢說一不二",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]話說，還有誰要去",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]我",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]我",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]還有我",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]是不是少一個人啊？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]東山失聯了，但她一定沒事啦",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]上車吧，我要全速飆回去",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "蘭斯拍拍停在店門口的吉普車，然後坐上駕駛座",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]安全帶都繫好了吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]ＧＯ！！！！！！！！！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "才剛坐好的眾人瞬間被慣性推上椅背，一起步就是油門踩死的蘭斯用神乎其技的車技衝上了高速公路",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]閃啦閃啦撞到不負責喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]你是誰你不是蘭斯學長吧？！！！！！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "playTransitionVideo",
            "name": "floor-transition.mp4",
            "standalone": true
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_alley_night_bg_placeholder.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]到了，你們還行吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]……",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]……爺爺你怎麼在那裏，甚麼橋，要我過去嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]……開甚麼玩笑搭船還要過路費！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]沒辦法了，基礎急救拳！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]噗！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]嘎！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]反擊！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]還能反擊就沒問題了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我們到了嗎？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]轉角那間就是了，把這套穿上吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "蘭斯把三套衣服遞給三人，攤開一看是全黑的緊身衣附面罩",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]忍者？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]要是臉被認出來就是私闖民宅加妨礙自由了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]……這種事情不要啊",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "tongzhi_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]放棄吧，來都來了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]忍忍！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "換好衣服的四人悄悄走到大宅後面，蘭斯隨意敲了幾下門",
        "門打開後一個看起來極度可疑的男人探出頭向梗平四人揮手",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]誰？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]我二哥",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]可以稱呼我臨也喔，難得老弟想幹些蠢事",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]我才提前潛入調查好一切了喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]所以別一副吃到蟲子的臉了嘛，蘭斯～",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]嘖",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]我們走吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_courtyard_night_bg.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        "一行人進入了宅邸，躲在庭院的陰影處討論計畫",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]希露大概是在他的房間，但我不確定",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]證據交給我吧，我還有幫手",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]如果希露不在房間就麻煩了呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]可能會在哪裡？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]不知道，加油吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]嘖",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]希露房間在二樓，走這",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]你為什麼這麼熟練啊……",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]……以前很常來",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_mansion_interior_bg.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        "四個人小心翼翼地避開宅內的人潛入到二樓",
        "然後蘭斯停在一間和室前，並拉開一個小縫確認室內",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]……沒人？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "蘭斯拉開和室門，裡面空蕩蕩一片，幾乎沒有個人物品",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]怎麼會……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[傭人]啊，啊啊啊啊有人闖入啊啊啊啊啊！！！！",
        "一個傭人從轉角走出來，當他看到四個黑色緊身衣人時立刻放聲大叫",
        "很快地，一群穿西裝的壯漢立刻也跑上來圍住了梗平一行人",
        {
            "type": "playBgm",
            "name": "BGMRun.mp3"
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]糟了！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]這裡就交給我吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]克莉絲？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]我來爭取時間吧，當然——",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "lance_chris_attack_action_cg.png",
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
            "type": "sleep",
            "time": 1000,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]把那些傢伙打倒也沒問題吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "tongzhi_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "sleep",
            "time": 250
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "tongzhi_black_suit_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]那是死亡FLAG吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]交給你了，被抓到就報臨也的名字",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]太無情了吧……",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]阻擋戀人的無情者們啊，休怪我無情了，我今日已經奉臨也大人之命必須將你們阻止於此",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]參上！！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]克莉絲是這種個性的人嗎……",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "tongzhi_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]大概是忍者COSPLAY讓他入戲了吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "克莉絲一個箭步衝向穿西裝的護衛群裡，並用極其特殊的體技將護衛一一擊倒開出一條路",
        {
            "type": "showImage",
            "code": 20,
            "image": "chris_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]快走，這裡交給我斷後！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        "才剛跑沒多久，又有一群人即將追上梗平",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]為什麼會這麼多人啊？！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]不知道，但沒時間思考那種事了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "tongzhi_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]……這裡該我登場了呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]桶子學長？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "tongzhi_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]等戰爭結束後我就回老家結婚吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]那可是不折不扣的死亡FLAG啊！！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "桶子向梗平露出微笑，然後躺下並朝人群高速滾過去",
        "人群彷彿保齡球被桶子撞倒",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]不要浪費桶子的犧牲，走了！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]桶子學長！！！！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_courtyard_night_bg.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]我記得應該是在這附近……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]那裡！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "蘭斯迅速跑到一個小屋前，他嘗試開門但是被鎖阻礙",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]嘖，可惡，麻煩死了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]蘭斯踢！！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "鐵門被蘭斯一腳踢開，發出巨響然後倒下，結束了他無辜的一生",
        "在裡面是堆滿的雜物，還有倒在地上的希露",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_sill_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[希露]蘭斯……大人？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]喂——你，打算去哪裡啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_sill_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[希露]我……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]我先說好喔，我沒打算跟家裡扯上關係",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]所以就算跟著我也沒有任何好處",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]但你……你現在打算怎麼做",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]隨波逐流，被當作家裡的道具過完一生嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]聽好了，給我自己做決定啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]要是你要逃跑的話，就抓住我的手",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]如果你是個蠢到沒人命令就不知道怎麼做的女人",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]那就變成我的所有物",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]我會死命使喚你，然後等你有一天決定逃跑時，我再狠狠懲罰你",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_sill_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[希露]……蘭斯大人，你一直都沒變呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "希露握住了蘭斯伸出的手，站起身來",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_sill_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[希露]真的，可以嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_sill_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[希露]就這樣依賴你，真的可以嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]廢話，你以為我是誰啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]……雖然不是很想打擾兩位，但",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "在蘭斯與希露交談的期間，被聲響引來的大量人群也圍住了他們",
        "一個穿著豪華和服的老人走到最前面盯著蘭斯",
        "\t[老人]哼，本家的小鬼，希露可是已經跟你們沒關係了啊",
        "\t[老人]看在本家的情面上，你自己一個人走吧",
        "\t[老人]至於其他人，我稍微『提醒』一下就會放走了",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]給我聽好了，這傢伙",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]希露可是我的女人啊，少自作主張了，老不死的！！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【此處???不使用立繪】"
        },
        "\t[???]噗——",
        "從人群中站出來，走到劍拔弩張的兩方中間的是臨也",
        "臨也抱著肚子，止不住地大笑著",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]呼，不行，哈哈哈哈哈，蘭斯老弟是認真的啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]哈哈哈，恩，哈哈哈哈哈，等我一下，讓我，哈，喘一下",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]恩，沒事了，我們來談正經事吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]老人家，這個你應該認得吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "臨也從懷裡拿出一本黑色的書，書中間夾滿了各種便條",
        "老人看到書的瞬間臉色大變",
        "\t[老人]怎麼可能，你為什麼……",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]讓我們全身而退，包括希露，以後再也不得干涉他們的生活",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]然後我就不追究這裡面的東西了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[老人]你……！那裏面可是也包括了你們本家的東西啊！",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]我用最簡單讓你明白的話說吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]我是被父親授權才來的喔～",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[老人]……我知道了",
        "老人比了手勢，然後被抓住的桶子和克莉絲被放開，來到了蘭斯身邊",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]好了，我們走吧，蘭斯要回老家一趟嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]不了，我還要把他們送回去",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]那就沒辦法了，有空可以邀請他們回來玩啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_black_suit_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]……有空再說",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 2000
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 2000
        },
        {
            "type": "playBgm",
            "name": "BGMGintama.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_alley_night_bg_placeholder.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        "一行人正大光明地從正門離開，然後回到了吉普車旁換回原本的衣服",
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]我先回去了，下次去東京找你們玩的時候幫我導覽吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]滾！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]還有這個，希露的證件跟金融卡",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]……嘖，為什麼會準備的這麼周全啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "lance_liyan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[臨也]這是哥哥的貼心喔～",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "一臉不爽的蘭斯收下了臨也遞來的東西，然後坐上駕駛座",
        "副駕駛是希露，後座擠了桶子梗平和克莉絲",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]要被壓扁了……",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]忍耐",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]我睡了，到了再叫我",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_maria_wall_bg_placeholder.png",
            "loc": [
                0,
                0,
                544,
                416
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        "於是梗平他們返程回到秋葉原，在瑪麗亞之牆前眾人都一臉疲倦",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]解散吧，我還要安置這傢伙",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]恩，後續記得跟我們說喔",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長]累死了，下次這種事情要收錢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]其實還蠻有趣的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "於是一行人各自離去，重回自己的人生故事裡",
        "至於蘭斯與希露的故事，就待有緣再述",
        "THE END",
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('lance_4'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
