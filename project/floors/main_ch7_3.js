main.floors.main_ch7_3=
{
    "floorId": "main_ch7_3",
    "title": "主線 CH7 7-3 集合與突破",
    "name": "7-3",
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
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH7 7-3 集合與突破】"
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
            "text": "【BGM預定地：()切換BGM或到7-3結束前連續播放此首BGM】"
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L329.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[東山]囊裡踏實之後，就算連夜畫圖都能神清氣爽！人果然不能窮忙",
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
        "\t[東山]先把畫好的樣本拿去書店加工—痛—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "在準備去往地方書店的路上，東山不幸遭遇肥宅追撞…",
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
        "\t[東山]又來？這裡的肥宅到底怎麼回事啊…",
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
        "\t[東山]等等我書呢！？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "發現手上的樣本不翼而飛的東山用最快的速度追了上去",
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
            "image": "CH1_L42.png",
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
        "\t[蘭斯]我說啊IB，你要不先去朋友家待著如何？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_ib_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[IB]………",
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
        "\t[蘭斯]唉—怎搞啊…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "前日暫時放棄了的IB，一覺醒來就直奔ANIsister",
        "但礙於蘭斯阻止而沒有直接衝進去，於是兩人在路邊僵持不下",
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
        "\t[東山]蘭斯—！幫我抓住那個傢伙—！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "蘭斯一個臂勾直接撂倒了肥宅",
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
        "\t[東山]哈—哈—謝了…，明明是肥宅還真會跑—",
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
        "\t[蘭斯]所以啥狀況？",
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
        "\t[東山]剛畫的本子被這肥宅搶了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "東山一邊說著一邊拿回本子",
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
        "\t[蘭斯]肥宅還會沿街搶劫？這生態位不對吧？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "IB從肥宅身上搜出了一張傳單",
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
        "\t[東山]可以借我看看嗎？『請各位士兵放下槍吧！地球只有一個…』",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L355.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[東山]嗚哇這什麼邪教",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_ib_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[IB]哥哥也有一張…",
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
        "\t[東山]嗯？蘭斯把他叫醒",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]OK，急救拳！",
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
        "\t[東山]喂有話要問你，嗯？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_otaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[肥宅]………ｾ#%^*ｴｶ",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_otaku_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[肥宅]………ｾ$*@^ｴｶﾝ$%&@ﾃｲｾ",
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
            "image": "ms_portrait_otaku_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[肥宅]：セエカセエカｾｴｶセエカﾝ@$*@ﾃｲ@*&ｾ—！！！！",
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
        "肥宅邊發出怪叫，邊衝進了ANIsister旁的巷子裡",
        "正要追上去的蘭斯被東山阻止了",
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
        "\t[東山]別追了，那個看起來沒辦法溝通。",
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
        "\t[東山]加上昨天的事，大概只能在書店裡A找線索了。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]IB你昨天有發現什麼新的線索嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_ib_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[IB](搖頭)",
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
        "\t[東山]嗯？我們昨天不是一起進去的嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]後來IB好像又跟梗平進去了一次？然後梗平說著什麼修卡出現了把她半路丟包給我…",
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
        "\t[東山]？ (靠北啊這麼剛好？)",
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
        "\t[東山]IB妳很聰明，哥哥應該跟IB推測的一樣在裡面，但妳也看到了那堆肥宅的狀態不正常。",
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
        "\t[東山]總之一個人進去很危險，別再這樣做了，等晚點大家有空再一起想辦法。",
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
        "\t[東山]我們一定會幫妳找到哥哥的。妳先去找智乃，好嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_ib_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[IB]………知道了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "在說服了IB停止衝塔後，邊繼續往本地書店走的著東山拿出了手機",
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
        "\t[東山]路上的肥宅看起來像神經病，大概與ANIsister有關",
        "\t[東山]為了防止IB再度獨自升級須要解決這事，有啥好想法嗎？",
        "\t[表妹]直接進去看看唄？",
        "\t[蘭斯]ANIsister昨天進去過，內部的肥宅數量很可怕",
        "\t[桶至學長]試著對話不好嗎？我相信秋葉原的肥宅沒有壞人",
        "\t[蘭斯]剛剛抓了一隻，但怪叫著跑走了無法溝通，可能得深入ANIsister看看了",
        "\t[克莉絲]還有其他線索嗎？總不可能打進去吧？",
        "\t[蘭斯]沒有…聽IB說後來梗平跟警察在裡面，不知道有沒有啥新發現？",
        "\t[東山]警察不靠普，梗平…沒反應呢",
        "\t[東山]總之晚點先在ANIsister集合吧，記得帶傢伙",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
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
        "東山進入了名為『馬的膝蓋』的地方書店，正打算尋找認識的人時—",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]你們果真藏著淫穢讀物嗎？",
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
        "\t[梗平]這是汙衊！在下知道了！妳果然是修卡的人吧！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]讓開！",
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
        "\t[梗平]在下不會向邪惡屈服的！",
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
        "\t[東山](………靠北這人又在幹什麼？)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "就在梗平跟檢察官角力的你來我往時，看到了東山",
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
        "\t[梗平]太好了！東山你來了，這個人是修卡的人！快來幫在下一起阻止她！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]還有同夥嗎？",
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
        "\t[東山]他是誰？我不認識",
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
        "\t[東山]不打擾你們，我走了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "東山聽著諸如別走啊，啊，好痛！、快停止抵抗，乖乖投降！之類的背景音",
        "決定先去打發時間晚點再來加工本子",
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
            "type": "comment",
            "text": "【BGM預定地：()切換BGM或到7-3結束前連續播放此首BGM】"
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
        "ANIsister前",
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
        "\t[東山]所以大家都準備了什麼？",
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
        "\t[克莉絲]球棒",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]店裡借來的鋼刃菜刀跟立體機動裝置",
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
        "\t[蘭斯]扳手、物理學聖劍、園藝剪…銃刀法就允許那麼多了",
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
        "\t[表妹]獵槍跟橡膠彈，我有獵人執照沒違法喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]你們是想殺人嗎！",
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
        "\t[東山]看來準備充分，那就差梗平，應該快到了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "一段時間過後",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L422.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平在眾人的目視之下搭著長到靠北的黑色高級轎車登場",
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
        "\t[梗平]各位應該都知道裡面發生了什麼對吧—",
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
        "\t[東山]總之先看看該怎麼突破肥宅群吧",
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
        "\t[梗平]事不宜遲，我們先去找個小女孩…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]太糟糕了吧",
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
        "\t[表妹]表哥你原來喜歡這樣玩嗎？",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]沒想到梗平你竟然是這種人",
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
        "\t[梗平]那在下也不道該怎辦了啊！",
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
        "\t[蘭斯]這麼說來我剛剛在雜貨店還買到了這個",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH3_L565.png",
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
            "type": "hideImage",
            "code": 30,
            "time": 150
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
        "\t[桶至學長]喔？這不是傑士塔威嗎？真還原啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]你知道這個是做什麼用的嗎？",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]應該只要按下他的頭就會爆炸了",
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
        "\t[東山]太好了，這應該能一次清掉聚集的肥宅",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]你只買了一個嗎？那我們必須要審慎的思考如何使用他",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]那這個東西丟出去無非就是四種可能",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]丟出去爆炸、丟出去沒爆炸、沒丟出去但爆炸、沒丟出去可沒爆炸",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]好了，讓我們開始吧—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "桶至學長展開了二十分鐘的『有關於丟出去爆炸的分析』",
        "接下來桶至學長又進行了二十分鐘的『有關於丟出去沒爆炸的分析』",
        "就在桶至學長打算開始『有關於沒丟出去但爆炸的分析』的時候…",
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
        "\t[東山]………(靠北我要閃了)",
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
        "\t[東山]我還有事先走了，你們慢慢討論啊",
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
        "\t[東山]那就麻煩妳了，不會被檢察官找碴吧？",
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
        "\t[書店店員]她專門叼LO本，百合應該安全吧",
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
            "image": "CH6_L68.png",
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
        "\t[東山]桶至學長今天大概沒辦法繼續幫忙了，我來通知一聲",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_captain_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[兵長]唉—叫他明天早點來吧—",
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
            "image": "CH1_L401.png",
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
        "\t[東山]我來兌換小鋼珠的獎品",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_master_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[M‧A‧STER]姑娘運氣不錯啊",
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
            "image": "CH1_L189.png",
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
        "\t[東山]老闆能不能來份正常的？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_mapo_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[麻婆]行吧",
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
            "image": "CH1_L401.png",
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
        "\t[東山]請幫我微波",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "TODO: 【下句店員使用月讀愛立繪】"
        },
        "\t[店員]要順便帶手啤酒嗎—",
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
            "type": "pauseBgm"
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
            "type": "resumeBgm"
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
        "\t[東山]看來先走是對的…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[惠惠]這邊在做什麼？",
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
        "\t[東山]喔，因為我們要進去找人，但裡面有一堆神經病肥宅所以打算—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH7_L477.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "東山指著在ANIsister前的眾人，邊解說邊跟路過的少女分享起了剛買的爆米花",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "\t[惠惠]啊！傑士塔威被搶過去了",
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
        "\t[東山]喔，終於要出手了嗎？",
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
        "\t[東山]看好喔，竟然他們如此費心的討論了，女神絕對會微笑著把旗幟回收",
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
        "\t[表妹]我丟！嘿—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]幹！要死！快閃開啊啊啊啊啊！！！！！！！",
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
        "\t[梗平]發生腎磨事了？",
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
        "\t[克莉絲]等等…",
        {
            "type": "hideImage",
            "code": 20,
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
        "\t[桶至學長]是嗎，這就是命運石之門的選擇嗎—",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "TODO: 【BGM：BGMBOOM】"
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "CH3_L614.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[惠惠]NICE爆炸！我給79分！",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "\t[惠惠]美中不足的地方應該是有一半的人閃過了呢",
        "\t[惠惠]這力道攻堅應該不夠用吧？",
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
        "\t[東山]有何高見？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[惠惠]我知道明天有個好機會能提升火力喔？來不？",
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
        "\t[東山]好啊",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[惠惠]你不問我是啥嗎？",
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
        "\t[東山]總比開會強",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[惠惠]那總之明天晚上11點在鐵道旁的雜貨店後面會合，多找點人喔—",
        {
            "type": "comment",
            "text": "【BGM預定地：()切換BGM或到7-3結束前連續播放此首BGM】"
        },
        {
            "type": "playBgm",
            "name": "BGMDuel.mp3"
        },
        {
            "type": "playBgm",
            "name": "BGMUZUUZU.mp3"
        },
        {
            "type": "playBgm",
            "name": "BGMBOOM.mp3"
        },
        {
            "type": "playBgm",
            "name": "BGMUZUUZU.mp3"
        },
        "惠惠走遠後東山加入了斂屍的行列",
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
        "\t[東山]回，這幾個放哪",
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
        "\t[蘭斯]帶去女咖吧？桶至學長在理由正當，重點是兵長很罩",
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
        "\t[蘭斯]昨天IB也是兵長幫忙才消停的，還直接讓我們借住…話說梗平哪去了？",
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
        "\t[東山]別理他，反正明天肯定會自己冒出來",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "playTransitionVideo",
            "name": "floor-transition.mp4",
            "standalone": true
        },
        "巷子裡，意識朦朧睜開眼睛的梗平看見了一道人影從後門走了出來",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tencho_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[店長]………",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "確認了店門口的痕跡與門鎖的男人，接著來到了躺在巷子裡的梗平身前",
        "他給梗平蓋上了一條毛巾，然後回頭進了後門",
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch7_4",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0,
            "silent": true
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "playBgm",
            "name": "BGMUZUUZU.mp3"
        },
        {
            "type": "pauseBgm"
        }
    ]
}
