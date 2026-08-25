main.floors.main_ch6_4=
{
    "floorId": "main_ch6_4",
    "title": "主線 CH6 6-4 婚禮與終章",
    "name": "6-4",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "CH1_L353.png",
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
            "type": "showImage",
            "code": 1,
            "image": "CH1_L353.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH6 6-4 婚禮與終章】"
        },
        "梗平感受著手上的心意，回憶起了那個打小鋼珠的下午",
        "還有那之後在ANIsister並肩作戰的時光",
        "就在梗平的眼眶即將決堤之際",
        "一道金屬彈片的「喀噠」聲響了",
        {
            "type": "playBgm",
            "name": "BGMRakisuta.mp3"
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
        "\t[梗平](嗯？這是什麼？)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH6_L319.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平困惑之後，他看清了手上正是金屬的手銬",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "等到他抬頭一看，警察的表情已經變得無比猙獰",
        "梗平滿是屈辱與憤怒的朝著警察大喊",
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
        "\t[梗平]為什麼！？連你也背叛在下嗎！？",
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
            "image": "ms_portrait_police_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[警察]我就是想要看到你這種表情啊！",
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
            "image": "ms_portrait_police_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[警察]你竟然真的以為我會來救你？",
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
            "image": "ms_portrait_police_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[警察]你還以為自己得救是了吧，蠢貨",
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
            "image": "ms_portrait_police_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[警察]哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
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
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[警察]既然恩報了，那仇豈有不報的道理！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平的大腦飛速運轉，然後他找到了",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH2_L271.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "一切的一切都指向那天打小鋼珠的下午",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_police_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[警察]德式背摔的苦痛我也一併還給你哈哈哈哈哈哈",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "在此之後，伴隨警察的笑聲，梗平放棄了掙扎",
        "後來趕到的友人與其他警察們，也都發出了笑聲",
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
            "image": "CH6_L343.png",
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
            "name": "BGMED1.mp3",
            "loop": false
        },
        "在反應過來時，身體就已經換上了西裝站在紅毯上",
        "一旁的警察拿著婚戒放到了他的手中，用動作跟言語催促著他往前",
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
        "\t[警察]這種時候可不能掉鍊子啊，當然，手銬是不會打開的",
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
        "\t[警察]去吧，接受你的命運",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平拿著婚戒一步步走向紅毯的另一端",
        {
            "type": "showImage",
            "code": 1,
            "image": "CH6_L349.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "紅毯尾端的貝琪慢慢轉了過來，讓梗平看得有些失神",
        "一旁的修女則念起了誓詞",
        {
            "type": "showImage",
            "code": 1,
            "image": "CH6_L343.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        {
            "type": "comment",
            "text": "TODO: 【此處應有梗平、貝琪立繪替換，未製作完成，忽略本句】"
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
        "\t[修女]新郎和新娘都已經表明你們的心願，願意共同進入這神聖的婚姻",
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
        "\t[修女]在場也沒有人證明你們不配進入這神聖的婚姻",
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
        "\t[修女]那麼，新娘你願意新郎成為你的丈夫嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_becky_wedding_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[貝琪(婚紗)]我願意",
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
        "\t[修女]那麼，新郎你願意新娘成為你的妻子嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_keng_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平(西裝)]......",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_keng_suit_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平(西裝)]在下願意",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "眼前的貝琪露出了梗平這輩子看到最美麗的笑容",
        "周圍的掌聲逐漸淹沒了梗平的思緒，一切似乎變得有些模糊",
        "酒精、歡笑、掌聲",
        "梗平的人生大事就此畫下帷幕",
        {
            "type": "comment",
            "text": "【第六章結束】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_tokyo_big_sight.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "次日清晨，日本東京國際展示場",
        "梗平牽著貝琪的手站在了Comike的排隊人潮中",
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
        "\t[梗平]人好多啊，拜託了，我的限量假面騎士變身腰帶一定還要有啊",
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
        "\t[貝琪]人每年都這麼多的啦，不過放心親愛的",
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
        "\t[貝琪]你想要的東西我們一定買的到的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "CH6_L374.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[梗平]啊，好像開始入場了",
        "\t[貝琪]那......我們走吧",
        "梗平突破了百般困難，搜尋失蹤人口、歷經破產",
        "還有解決肥宅們的暴動問題，甚至結了個婚",
        "但現在的他與自己的戀人，跟所有人一樣享受著Comike",
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
            "type": "hideToolbar"
        },
        {
            "type": "comment",
            "text": "【開始滾動ending.png，在上一首BGM結束時恰好到達底部】"
        },
        {
            "type": "endingRoll",
            "code": 40,
            "image": "ending.png",
            "width": 544
        },
        {
            "type": "sleep",
            "time": 3000,
            "noSkip": true
        },
        {
            "type": "hideImage",
            "code": 40,
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
            "type": "showToolbar"
        },
        {
            "type": "comment",
            "text": "【背景：旁白(表)】"
        },
        {
            "type": "comment",
            "text": "【以下13句話不使用立繪】"
        },
        "\t[？？？]辛苦你了，穿過重重困難看到現在",
        "\t[？？？]能到達這裡的，想必都是有過人毅力的勇者吧",
        "\t[？？？]你說劇情在幹尛…？",
        "\t[？？？]雖然看起來很複雜，但至此只有『一條』正確的道路",
        "\t[？？？]梗平沒看見的秋葉原想必也發生了不少事情吧…",
        "\t[？？？]…你不會好奇嗎？",
        "\t[？？？]如果想知道就繼續吧…",
        "\t[？？？]不會耽誤你太多時間的(振聲)",
        "\t[？？？]或者你也可以點取ALT+F4跳過這些…",
        "\t[？？？]……………",
        "\t[？？？]……………",
        "\t[？？？]你還在啊？",
        "\t[？？？]那麼，我們開始吧—",
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch7_1",
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
