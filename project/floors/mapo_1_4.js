main.floors.mapo_1_4=
{
    "floorId": "mapo_1_4",
    "title": "主線 CH1 1-4 炭烤蜜瓜兔子",
    "name": "1-4",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_cafe.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "flags_drama.mp3",
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
            "name": "flags_drama.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_cafe.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH1 1-4 炭烤蜜瓜兔子】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_cafe_rabbit_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平走入了一間在河畔的咖啡廳，有些古樸的招牌展示著這間店的歷史",
        "招牌上寫著這間店的名字",
        {
            "type": "comment",
            "text": "【炭烤蜜瓜兔子】"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[不知道是誰的？]你就是梗平吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "低沉的男聲從櫃檯的方向傳了出來，但那裏並沒有站著任何人",
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
        "\t[梗平]什麼？這種技術...難道是修卡嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[不知道是誰的？]說什麼啊你，看下面",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "一個藍髮的少女手上抓著手偶，並正在使用手偶說話",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]我就是這裡的店長，三角，你應該就是來打工換宿的梗平沒錯",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]你母親都跟我說過了，你只要做些簡單的工作就可以了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]每天早上幫忙處理一下環境清潔跟開店就準備就可以了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]作為交換，閣樓你可以隨意使用",
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
        "\t[梗平]兔子玩偶竟然發出了聲音？你肯定是被修卡改造的怪人－咕",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "兔子彈了出來，往梗平的臉用力一蹬",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH1_L377.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平的面部遭受了小兔子暗黑無限破的強力一擊",
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
        "\t[梗平]好痛啊，這個到底是什麼啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]希望你清醒了一點，我再繼續跟你介紹一下這裡",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]這裡白天會是咖啡廳，也就是你主要要幫忙的部分",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]晚上則會稍微調整布局，改成小型的酒吧",
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
        "\t[梗平]晚上不需要幫忙嗎？不如說請務必讓在下排晚上的班！",
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
        "\t[梗平]不然在下難以償還您願意讓我住在這裡的恩情啊！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]你母親告訴我絕對不能讓你在店裡碰到酒，所以不行",
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
        "\t[梗平]你說......什麼？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]還說如果你動了歪腦筋大學學費就自己付",
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
        "\t[梗平]竟然不許！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平，再起不能",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]時間也差不多了，你趕快去閣樓放一放行李",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]你明天早上再來報到就好，我也該去處理酒吧的業務了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "三角說完後就走向了櫃檯後方開始繼續處理事情",
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
        "\t[梗平](可惡啊，我在秋葉原喝酒的夢想竟然如此輕易的被擊倒了)",
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
        "\t[梗平](等等......剛剛的話意思是我到明天早上為止都可以自由活動對吧)",
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
        "\t[梗平](我記得過來的路上...似乎有看到一家便利商店的樣子)",
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
        "\t[梗平]三角店長！我先出去一趟",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_sankaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[三角]明天記得回來就好",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平衝出了店門，朝著便利商店的方向狂奔",
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
            "image": "ms_bg_commercial_interior_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平進入便利商店後，立刻衝向了裝著酒的冰櫃",
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
        "\t[梗平]這瓶、這瓶，還有這瓶",
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
        "\t[梗平]對的對的，假面騎士怎麼可以沒有燃料呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平抱著好幾罐啤酒走向了櫃檯",
        "櫃台站著的是看起來即將登出人生的店員小姐",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_dead_eyes_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[眼神死掉的人]您...您好，只......需要這些嗎？",
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
        "\t[梗平]對，塑膠袋謝謝",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "結完帳的梗平抓起了塑膠袋便朝外面跑了出去",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_dead_eyes_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[眼神死掉的人]......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_dead_eyes_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[眼神死掉的人]我是不是已經連續上班5天了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_dead_eyes_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[眼神死掉的人]......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_dead_eyes_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[眼神死掉的人]我不管了！老娘要辭職啊！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "眼神死掉的店員小姐把東西丟在了收銀台後，也往外面衝了出去",
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
            "image": "ms_bg_riverside_night.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "來到了河邊的梗平打開了裝著酒的袋子，拿出了自己的戰利品",
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
        "\t[梗平]在下明天還得繼續跟修卡戰鬥，怎麼能沒有燃料呢",
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
        "\t[梗平]老媽就是太過擔心我跟修卡戰鬥會受傷了",
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
        "\t[梗平]可是在下已經下定決心要跟他們戰鬥到底了",
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
        "\t[梗平]所以沒錯，乾杯！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平將啤酒拿到了自己的嘴前，手感受著剛從冰箱拿出來的冰涼",
        "看著這瓶啤酒，梗平開始思考",
        {
            "type": "choices",
            "text": "請選擇。",
            "choices": [
                {
                    "text": "奶奶說過答應別人的事情得做到才行",
                    "action": [
                        "天人交戰的梗平啤酒從手中滑落",
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
                        "\t[梗平]在下的酒啊！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平與啤酒進入了追逐輪，隨後來到了一處下水道旁，啤酒滾進了水溝內，梗平跪在地",
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
                        "\t[梗平]在下的啤酒！100塊！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "這時從水溝伸出一隻手把酒遞了過去",
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
                        "\t[梗平]...",
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
                        "\t[梗平]雖然不知道你是誰但你人真好",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平伸手握住了啤酒，但隨著一股強大的力量，梗平被拖進了下水道，隨後失去意識",
                        {
                            "type": "playBgm",
                            "name": "battle_theme_a.mp3",
                            "keep": true
                        },
                        {
                            "type": "comment",
                            "text": "【過場】"
                        },
                        "[不知過了多久，梗平艱難的張開了眼睛］",
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
                        "\t[梗平]嘔嘔嘔嘔嘔！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平吐了一地之後，發現自己剛才還趴在堅硬的地板上，四周伸手不見五指",
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
                        "\t[梗平]手機不在身上，這下麻煩了",
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
                        "\t[梗平]有這麼大的力氣，對方肯定是想趁我還沒補充能量趁機打倒我",
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
                        "\t[梗平]連燃料都一起搶走了，修卡太可惡！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "等到眼睛適應黑暗，梗平開始觀察四周",
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
                        "\t[梗平]這裡還挺大的，但沒路的樣子？",
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
                        "\t[梗平]這種時候該出現強化事件了！一定有什麼可以用的道具",
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
                        "\t[梗平]就是這個了",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH1_L450.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "敏銳的梗平在下水道裡發現了一堆的紙箱",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH1_L453.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "梗平撿起了一個紙箱後，套在了自己身上",
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
                        "\t[梗平]我是——GUNDAM！",
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
                        "\t[梗平]已經，沒什麼好怕的了！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平開始在下水道探索，然後前方傳來手機鈴聲",
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH1_L459.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "在閃爍的燈光下看見了一個人影拿著手機，那是一個小丑",
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
                        "\t[梗平]給我站住！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "然後梗平追了上去，小丑也開始逃跑，雙方的差距出乎預料越來越小",
                        "就在梗平即將追上的時候，小丑突然轉過身對梗平揮拳",
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
                        "\t[梗平]只要打不中就沒什麼大不了的",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "但拳頭毫不留情直接打中梗平的臉，雙方開始極其高速的肉搏戰",
                        "南無三，何等精彩的戰鬥，想必諸位擁有忍者般動態視力的觀眾已經觀賞到了吧！",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_smile_portrait.png",
                            "expression": "smile",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]哈哈，區區小丑，根本不在話下",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平一邊大腿發抖一邊為自己打氣",
                        "......",
                        "小丑摸了摸破損的頭套後，粗暴的拉下頭套，下面竟然是...",
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "ms_ch1_thunder_crocodile_action_cg.png",
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
                            "code": 30,
                            "image": "CH1_L472.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
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
                        "\t[梗平]居然是雷霆大鱷魚！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        "雷霆大鱷魚不等梗平反應即發起了死亡翻滾",
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
                        "\t[梗平]這跟說好的不一樣啊！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "總之，梗平被鱷魚追殺了好一陣子後，總算找到了出路",
                        "梗平艱難的從下水道出來，許久不見的陽光照射在他的身上",
                        {
                            "type": "playBgm",
                            "name": "bossa_casual_shop.mp3",
                            "keep": true
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
                        "\t[梗平]只有失去過才會懂得珍惜嗎？果然人是活在陽光下的生物",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "\t[不知道是誰的？]喂！那邊那位！",
                        "梗平正沉浸在自己的思緒中，遠方傳來了說話的聲音",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_police_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[警察]你這身傷是怎麼回事？趕快去醫院治療",
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
                        "\t[梗平]這是誤會阿警察先生，這些血都是雷霆大鱷魚的",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_police_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[警察]受傷加上妄想嗎？去跟醫生說吧",
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
                        "\t[梗平]所以在下沒說謊阿，哎呦頭好暈...",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平忘了自己幾天沒進食，被警察輕易的架去醫院接受檢查",
                        "梗平證明了自己沒有說謊，但還是錯過了Comike",
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
                        "\t[BE]大鱷魚之戀",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "mapo_1_4",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 0
                        }
                    ]
                },
                {
                    "text": "反正不喝店裡的酒就可以了吧",
                    "action": [
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
                        "\t[梗平]沒錯沒錯，在下可沒有違反規則啊！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "區區半杯啤酒下肚，梗平便倒在了橋底下睡死過去",
                        "一夜平安過去了......嗎?",
                        {
                            "type": "changeFloor",
                            "floorId": "mapo_1_5",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 500
                        }
                    ]
                }
            ]
        },
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
    ]
}
