main.floors.main_ch4_1_exchange_1=
{
    "floorId": "main_ch4_1_exchange_1",
    "title": "主線 CH4 4-1 搶火車篇（交流後）",
    "name": "4-1",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "CH1_L42.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "BGMRakisuta.mp3",
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
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "playBgm",
            "name": "BGMRakisuta.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "CH1_L42.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "comment",
            "text": "【主線 CH4 4-1 搶火車篇（交流後）】"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]時間差不多了，也該過去咖啡廳了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不對，每次在下想去咖啡廳的時候一定......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "時機已至，秋葉原的熱意再次到來",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH2_L32.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "同樣的肥宅再次出現並撞擊了梗平",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]怎麼又是你啊，不能換個人嗎！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "上天決定回應梗平的祈禱，第二份熱意，襲來",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH2_L32.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "另一個肥宅以相同的速度撞擊了勉強站住的梗平",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]咕...嗚......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]竟然還有第二下嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平拖著被二度撞擊的身軀走回了碳烤蜜瓜兔子",
        "再一次無視著智乃的眼光拿起了掃帚開始打掃",
        "整個上午，無事發生",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](錢還是很缺啊，小鋼珠肯定是不能碰的)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](好像還是只能去那個書店工作了)",
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
            "image": "CH2_L295.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
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
        "於是梗平重複了一遍昨天的流程",
        "抵達書店、堆出假面騎士、與檢察官進行攻防戰",
        "準備下班的梗平看到群組裡出現了新的訊息",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH1_L44.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[東山]找到能解決ANIsister問題的方式了",
        "\t[東山]可以的話晚上11點在雜貨店集合",
        "\t[梗平]一定到",
        "\t[東山]如果可以的話幫忙多找一點人手",
        "\t[梗平](人手......她的話應該可以的)",
        "梗平打開了與貝琪的私訊後，敲起了鍵盤",
        "\t[梗平]我在找可以和我在一起(解決肥宅)的人",
        "\t[梗平](幫忙的事)可以答應我嗎",
        "\t[梗平]我還有一點事情要忙，十一點後在雜貨店後相見吧",
        "\t[貝琪]太好了，我願意",
        "回完了訊息並製造了誤會的梗平，馬上看見了來自表妹的私訊",
        "\t[表妹]表哥，我在河邊找到了一條奇怪的大鱷魚",
        "\t[表妹]如果你有空的話就來幫我吧",
        "\t[梗平]什麼奇怪的大鱷魚？",
        "\t[梗平]這肯定是修卡的造物，我現在就來！",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我先走了！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_bookstore_clerk_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[書店店員]慢走",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平奪門而出，跑向了河邊",
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
            "image": "CH4_L79.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
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
            "type": "playBgm",
            "name": "BGMDuel.mp3",
            "keep": true
        },
        "跑的河邊的梗平，看見了一臉自信的表妹拿著一把魚竿",
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_happy_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]我聽說這條河的裡面藏著一隻雷霆大鱷魚",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_happy_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]只要能夠釣上來的話就賺翻啦，嘿嘿",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "話說完後表妹就把鉤子拋進了水裡，過沒多久就有了動靜",
        "突然，一陣強大的力量把表妹往水裡拖了過去",
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]快過來幫我！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]嘖，修卡已經連大鱷魚都開始改造了嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可惡的修卡，放馬過來",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]表妹，在下來助你！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平跑到了表妹的背後，兩人一起扛住了大鱷魚的力量",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]可惡，拖下去只會對我們越來越不利",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]這時候果然就是要使用那一招了！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
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
            "textfont": 24,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]接下這招吧，大鱷魚！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
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
            "textfont": 24,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]這個是我們羈絆的力量啊！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
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
        "梗平與表妹喊著甚麼愛、羈絆、勇氣的，便把大鱷魚從河裡拉了出來",
        "梗平隨後做出了變身的動作，擺好了戰鬥姿勢面向大鱷魚",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]雷霆大鱷魚，速速束手就擒！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]等一下，他嘴裡那顆光球是什麼",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]竟然還有後手嗎！？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH4_L102.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "在梗平與表妹反應過來之前，大鱷魚嘴裡的光球變成了光束射了過來",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "梗平，卒",
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
            "image": "CH4_L107.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
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
            "type": "playBgm",
            "name": "BGMKanu.mp3"
        },
        "梗平醒了過來後，發現眼前是陌生的天花板",
        "一個長著兔耳的女人走了過來，驚訝地看著醒來的梗平",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]誒，你醒得這麼快啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]這裡是哪裡，在下還要跟雷霆大鱷魚戰鬥啊！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]冷靜下來聽我說可以嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]你昏迷了一個月然後錯過了Comike",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_surprised_portrait.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不！我的限量變身腰帶",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]嗯，看起來沒有瘋，你可以出院了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]順帶一提你只昏了五小時，生命力真頑強",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]五小時......也就是說現在是10點",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]跟朋友的約定要遵守才行",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]謝謝你，博士",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]希望你順便修好了在下的假面騎士系統，我先走了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平抓起了旁邊自己的個人物品後，便跑出了醫院",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]我是不是該把他抓回來做精神鑑定啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]算了，人都已經出去了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "一段時間後，一起送進去的表妹也醒了過來",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]你也醒了啊，沒什麼問題就可以出去了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "suou_happy_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]痾......我的大鱷魚......我的錢......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_doctor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[醫生]這兩個人到底是怎麼回事",
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
            "image": "CH1_L353.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
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
        "跑出來外面的梗平，內心蹦生了一個想法",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](嗯......離預定的時間還有一個小時)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](要是在下能自己一個人把事情解決了，豈不是就是真正的假面騎士了)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "choices",
            "text": "請選擇。",
            "choices": [
                {
                    "text": "不行，果然還是要大家一起上",
                    "action": [
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_panic_portrait.png",
                            "expression": "panic",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平](自己去太危險了，等11點更好一點)",
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
                            "type": "playBgm",
                            "name": "BGMWitch.mp3"
                        },
                        {
                            "type": "showImage",
                            "code": 1,
                            "image": "CH4_L142.png",
                            "loc": [
                                0,
                                0
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "梗平乖乖等到了11點後，才前往了雜貨店",
                        "到了雜貨店後，梗平發現其他人都已經到達了",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "dongshan_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[東山]你也到了啊，我們開始吧",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "dongshan_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[東山]數到三我們就一起衝進去",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "dongshan_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[東山]一...二...三！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_surprised_portrait.png",
                            "expression": "surprised",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]邪惡的修卡迅速束手就擒！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平與友人們一同衝入了奇怪的車廂內，然而裡面卻是一群彪形大漢",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_surprised_portrait.png",
                            "expression": "surprised",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]你們就是修卡的改造人吧！",
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
                        "\t[蘭斯]等等，好像不太對",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "一個身高兩米的修女從後面走了出來，看著眾人",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_nun_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[修女]還有人想攪局啊，一定要出重拳",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_nun_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[修女]最大火力，開始壓制",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "下一秒，在場的所有人就被大漢們打暈並失去了意識",
                        "在失去意識以前，梗平看見了遠方出現了一輛黑色禮車",
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
                            "type": "playBgm",
                            "name": "BGMYume.mp3"
                        },
                        {
                            "type": "showImage",
                            "code": 1,
                            "image": "ms_bg_becky_mansion.png",
                            "loc": [
                                0,
                                0
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "當梗平下一次醒來時，眼前是金璧輝煌的天花板",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_becky_surprised.png",
                            "expression": "surprised",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[貝琪]你終於醒了！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_neutral_portrait.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]這...這裡是......",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_becky_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[貝琪]我的家喔",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_becky_panic.png",
                            "expression": "panic",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[貝琪]我把你跟你的朋友們都帶過來了，外面太危險了",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_becky_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[貝琪]這一個月裡你們就在這裡養傷吧",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_becky_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[貝琪]千萬不可以出去喔",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH4_L168.png",
                            "sloc": [
                                0,
                                65,
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
                            "time": 250
                        },
                        "梗平環視一圈，友人們已經露出了絕望的表情",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "dongshan_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[東山]那個，貝琪親，我也不能出去嗎？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_becky_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[貝琪]不可以，你們得待著養傷才可以",
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
                        "\t[蘭斯]試過了，完全跑不出去",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "suou_happy_portrait.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]爬到屋頂上但是被探照燈抓回來了",
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
                        "\t[克莉絲]扮裝成僕人想出去，馬上就被抓了",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_surprised_portrait.png",
                            "expression": "surprised",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]不！我的假面騎士腰帶！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "過沒多久後，眾人就聽到了本屆Comike被暴動的肥宅摧毀的消息",
                        "梗平，失去了參加Comike的權利",
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH1_L119.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "\t[BE]一波送完",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "main_ch4_1",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 0,
                            "silent": true
                        }
                    ]
                },
                {
                    "text": "看我一命通關！",
                    "action": [
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_neutral_portrait.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平](沒錯，而且這還能挽回我在大家心中的風評)",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "於是，梗平在完全不知道去雜貨店要做什麼的狀況下",
                        "單槍匹馬前往了未知的地點",
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
                            "type": "playBgm",
                            "name": "BGMYocho.mp3"
                        },
                        {
                            "type": "showImage",
                            "code": 1,
                            "image": "CH4_L142.png",
                            "loc": [
                                0,
                                0
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "梗平來到了雜貨店的後方，發現這裡正好在倉庫區與鐵路中間",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_neutral_portrait.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平](這個地方看起來很可疑啊)",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_neutral_portrait.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平](他們該不會是要截胡修卡的造物吧)",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_neutral_portrait.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平](剛好就由我這個假面騎士來幫大家解決問題)",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "就在這個瞬間，草叢中傳來了窸窸窣窣的聲音",
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
                            "textfont": 24,
                            "lineHeight": 22,
                            "fixedLines": 2,
                            "time": 10,
                            "letterSpacing": 0,
                            "animateTime": 120
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_surprised_portrait.png",
                            "expression": "surprised",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]誰在那裡！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
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
                        "正當梗平想做點什麼的時候，草叢中跳出了幾個全副武裝的大漢",
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
                            "textfont": 24,
                            "lineHeight": 22,
                            "fixedLines": 2,
                            "time": 10,
                            "letterSpacing": 0,
                            "animateTime": 120
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_surprised_portrait.png",
                            "expression": "surprised",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]你們是誰！你們要做什麼！？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
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
                        "在梗平準備行動前，大漢們一人一拳哄睡了梗平",
                        "梗平，影逝二度"
                    ]
                }
            ]
        },
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch4_2",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0,
            "silent": true
        }
    ]
}
