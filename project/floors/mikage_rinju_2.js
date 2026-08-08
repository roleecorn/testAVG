main.floors.mikage_rinju_2=
{
    "floorId": "mikage_rinju_2",
    "title": "毒舌衝突",
    "name": "毒舌衝突",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "mikage_bookstore.jpg",
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0],
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
            0
        , 0, 0, 0, 0]
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
            "code": 20,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_surprised_portrait.png",
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]最近的封面欺詐也太過分了！怎麼可以用梗騙人進去看娘們的！",
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
            "image": "watanuki_sakuya_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]嗚…在這裡不要打臉…",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]那邊傳來的聲音，嗯？是上次的兩位少女…",
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
            "image": "mikage_rinju_surprised.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]不在這裡教訓你的話就不會懂吧！",
        {
            "type": "playSound",
            "name": "attack.mp3"
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
        "[梗平衝到白毛少女面前代替承受了黑髮少女的耳光]",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]在這裡做這種事情，假面騎士是不會袖手旁觀的…",
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
            "image": "mikage_rinju_surprised.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]誰啊你…啊，上次擋路的臭蟲，嘖，我對她做什麼也不用你管吧！",
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
            "image": "watanuki_sakuya_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]……那個，先生真不好意思讓你看到這種場面…",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我不是臭蟲！ご唱和ください我の名を!我的名字是梗平！倒是你這惡人的名字是什麼！",
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
            "image": "mikage_rinju_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]有必要向你這種不分場合胡說八道的蛆蟲告訴名字嗎？",
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
            "image": "watanuki_sakuya_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]凜珠醬……這位先生只是關心我而已",
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
            "image": "mikage_rinju_surprised.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]你這傢伙…誰讓你隨便說我名字的！",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]喂，不告訴我名字也沒關係，沒道理隨意發火吧？你沒事吧…",
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
            "image": "mikage_rinju_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[御影凛珠]嘖，我的名字是御影凛珠…儘管開心吧，能得知我的名字，你這粒線體異變。",
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
            "image": "watanuki_sakuya_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]吾乃綿貫咲耶…凜珠她沒惡意的…可能有一點點，但是她是乖孩子…梗平先生…",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]哈啊？綿貫小姐你是中了催眠嗎？需要我幫忙MEMORY BREAK嗎？",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]她怎麼看也不像是乖孩子吧？",
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
            "image": "mikage_rinju_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[御影凛珠]你這失敗進化體有資格對我評頭論足嗎？",
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
            "image": "watanuki_sakuya_normal.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]凜珠醬…買了想要的本子就回去吧……",
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
            "image": "mikage_rinju_surprised.png",
            "loc": ["portraitRight","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[御影凛珠]嘖…你這傢伙……嘖，你這猴子別以為隨便幫助別人就有好感了！",
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
        "[兩位少女就這樣前往收銀處付款後離開了。]",
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
            "loc": ["portraitLeft","portraitBottom"],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]……為什麼會有這樣的人啊。",
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
        "[梗平感覺見識到奇怪的關係，摸不著頭腦買了本BA同人本就回家閱讀了。]",
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
        "[怎麼是老師與黑服的BL本…梗平卻讀完覺得挺有趣的。]",
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
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('mikage_rinju_2');\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"mikage_rinju_3\",\n\t\t\"title\": \"百合守則\",\n\t\t\"locations\": [\"melon_shop\"],\n\t\t\"floorId\": \"mikage_rinju_3\",\n\t\t\"once\": true\n\t});\n}"
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
