main.floors.main_ch6_3=
{
    "floorId": "main_ch6_3",
    "title": "主線 CH6 6-3 逃亡與希望",
    "name": "6-3",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_horses_knee.png",
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
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "playBgm",
            "name": "next_to_you_emotional.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_horses_knee.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH6 6-3 逃亡與希望】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_bookstore_a_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平一路上繞過了正在搜捕的警察，躲到了熟悉的書店內",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "surprised"
        },
        "\t[梗平]前輩！救救在下！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_bookstore_clerk_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[書店店員]嗯？你怎麼喘成這樣",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]有人要抓在下，有沒有地方可以藏起來的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_bookstore_clerk_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[書店店員]嗯，看在你跟我們一起撐過了包裝地獄的份上",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "前輩拿出了一把鑰匙跟一張地圖，地圖上標著一個地點與編號",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_bookstore_clerk_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[書店店員]這裡是書店的額外倉庫，這個鑰匙可以打開這個編號的倉庫",
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
            "time": 0,
            "expression": "surprised"
        },
        "\t[梗平]喔，太謝謝你了！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_bookstore_clerk_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[書店店員]你趕快走吧，有人來的話我不會透漏給他們的",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]感激不盡",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "拿了東西後，梗平便往倉庫區的方向跑去",
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_warehouse_district.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平來到了地圖上的地點，打開了小倉庫並躲了進去",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]好，暫時應該是安全的了",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]現在就是想想要怎麼才能出去",
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
            "time": 0,
            "expression": "surprised"
        },
        "\t[梗平]總之先看看周遭有沒有什麼地方能夠逃出秋葉原吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平稍微探出了頭，看向整個倉庫的兩側",
        "但他卻絕望的發現整個倉庫區的外面似乎已經被封鎖了起來",
        "他，無處可逃",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]在下的自由",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]在下的夢想",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]在下的假面騎士精神真的都要在這裡結束了嗎......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "在山窮水盡之際，從牆壁的後方傳來了叩叩叩的聲音",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]不知道是敵是友，可是現在的在下只有一個選擇",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "playBgm",
            "name": "battle_theme_a.mp3",
            "keep": true
        },
        "梗平來到了牆壁另一邊後，看見了一個熟悉的人",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH6_L288.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "那個打小鋼珠的警察，他來了，他來拯救梗平了",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]夥伴，不要放棄希望啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]我來拯救你了",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]夥伴，在下好感動",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "surprised"
        },
        "\t[警察]有什麼話晚點再說，跟我走！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【過場】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street_night.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "警察帶著梗平穿過了重重的封鎖線，抵達了無人看守的地方",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]你不愧是在下最好的朋友，你怎麼會來這裡",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]朋友的事情，我自然是要幫忙啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]另外就是，像我這樣的人不適合光",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]難道你......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]沒錯，所以你一定要保有希望",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "警察一邊說著一邊從口袋裡拿出了20萬円交給梗平",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]你怎麼會有這麼多的錢",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]而且都給在下的話，你該怎麼辦",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]這你就不用擔心了，我可是天天都有在打小鋼珠呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[警察]這個呢，是還你當初那1000円的人情的",
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
            "time": 0,
            "expression": "normal"
        },
        "\t[梗平]夥伴，你的心意與希望，在下收下了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "surprised"
        },
        "\t[警察]所以去吧！去追尋屬於我們的太陽！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch6_4",
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
