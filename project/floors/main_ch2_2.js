main.floors.main_ch2_2=
{
    "floorId": "main_ch2_2",
    "title": "主線 CH2 2-2 三過書店",
    "name": "2-2",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_bookstore_a.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "twists_suspense.mp3",
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
            "name": "twists_suspense.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_bookstore_a.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH2 2-2 三過書店】"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "梗平與三個小朋友來到了ANIsister的門口",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH2_L117.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "但拉下的鐵捲門上寫著暫時公休的告示",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
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
        "\t[梗平]什麼？竟然不許！？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chino_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[智乃]好可疑，明明昨天還開得好好的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "正值旺季、接下來就要COMIKE的時間點",
        "身為相關產業的這間書店竟然大門深鎖，不懷疑你懷疑誰？",
        "名偵探梗平如此思考著，然後做出了一個完美的結論！",
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
        "\t[梗平]哎呀，門鎖住了進不去，太可惜了",
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
        "\t[梗平]擅闖別人的店可不好，我們先去其他地方找找吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "？？？",
        "三個小朋友欲言又止，但梗平早已一臉自信的轉身走向了其他地方",
        "互看一眼後嘆了口氣，三個小朋友跟上了梗平的步伐",
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
            "image": "ms_bg_warehouse_district_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
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
        "\t[梗平]這裡一看就是修卡的基地，你的哥哥一定是被綁架來這裡了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_ib_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[IB]是...是這樣嗎？",
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
        "\t[梗平]對的對的，就是這樣",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平立刻在倉庫區開始了自己的大搜查",
        "然而他忘記了一個重要的問題",
        "倉庫，還是鎖的",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "angry"
        },
        "\t[梗平]可惡，都鎖著",
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
        "\t[梗平]那只好換下一個地方了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平話沒說完，又自顧自地往外跑了出去",
        "小朋友們依舊失去了說話的權利，只好跟著愛衝刺的大哥哥繼續走",
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
            "image": "ms_bg_street_day.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
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
        "\t[梗平]看來只能先來調查這種奇怪的小巷子了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "小朋友們剛準備說點什麼，梗平又轉頭跑了出去",
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
        "\t[梗平]看來這裡也沒有，換下一個地方吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "就這樣，梗平從街頭問到巷尾，然後再從巷尾問到街頭",
        "可惜沒有任何人見過IB的哥哥，於是小朋友們提出了再去一次ANIsister的提議",
        "但絕頂聰明的梗平認為這一切都是障眼法，IB的哥哥肯定在其他的地方",
        "天色越來越黑，後面三個小朋友的目光也越來越銳利",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_serious_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "angry"
        },
        "\t[梗平](可惡，ANIsister一看就有問題，我不要進去啊)",
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
        "\t[梗平](得趕快找個理由跑掉才行)",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平，孬了",
        "剛好，小黑的肚子在此時響了起來",
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
        "\t[梗平](有了，就是現在)",
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
        "\t[梗平]時間也差不多了，我們先去吃飯吧，晚點再繼續",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "免除了社會性死亡的梗平，快速地朝家庭餐廳的方向走去",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_ib_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[IB]我是不是自己來會比較好",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chino_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[智乃]好像是這樣",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_kuro_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[小黑]我們已經經過ANIsister三次了，我好想進去",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "三個小朋友跟著梗平走向了家庭餐廳",
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
            "image": "ms_bg_family_restaurant_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "走進餐廳的梗平看到了已經坐在那裏的蘭斯",
        "打起歪腦筋的梗平立刻帶著小朋友與蘭斯併了桌",
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
        "\t[梗平](這時候只需要多談談自己的推測就能轉移焦點了)",
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
        "\t[梗平]這個小朋友的哥哥不見了，可以拜託你一起幫忙找嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[蘭斯]誒？有甚麼線索嗎",
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
        "\t[梗平]你聽我說啊，根據他們的情報，他的哥哥是在ANIsister附近失蹤的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[蘭斯]那你有看過ANIsister了嗎？",
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
        "\t[梗平]......",
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
        "\t[梗平]沒有，不過我認為肯定不是在那裡",
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
        "\t[梗平]ANIsister絕對只是障眼法，實際上他肯定不再那裡",
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
        "\t[梗平]一定是在ANIsister被綁架後轉移到其他地方了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0,
            "expression": "normal"
        },
        "\t[蘭斯]是這樣嗎？",
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
        "\t[梗平]肯定是這樣",
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
        "\t[梗平]而且整件事情有一個非常弔詭的地方",
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
                    "text": "怎麼可能一個目擊者都沒有！一定又是外星人搞的鬼！",
                    "action": [
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
                        "\t[梗平]只有外星人才能不被人發現的情況下抓走你哥哥",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_kuro_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[小黑]才沒有那種東西呢",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_chino_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[智乃]大哥哥......",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "IB用著冰冷的目光看著梗平",
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
                        "\t[梗平]不要用那種眼神看我啊哈斯哈斯",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_ib_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[IB]變態……",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "keng_smile_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "smile"
                        },
                        "\t[梗平]咳，玩笑就先到這裡",
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
                        "\t[梗平]但秋葉原一定潛藏不為人知的魔物，那是在我8歲的時候，老爸老媽第一次帶我來東京",
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
                        "\t[梗平]當我被假面騎士吸引，跑到小巷裡時我看到了",
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
                        "\t[梗平]就在那裏！有個男人被拉進屋裡，然後就再也沒出來了！",
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
                        "\t[梗平]所以你的哥哥和那個男人一樣，都是被外星人誘拐了！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平高舉雙手，相當激動地說著",
                        "但其他人完全沒在聽，都在看菜單",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_lance_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[蘭斯]我推薦這裡的芭非喔，水果給很足",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_lance_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[蘭斯]放心吧，梗平的錢包有錢",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_kuro_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[小黑]那我就不客氣了",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_ib_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[IB]加一",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_chino_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[智乃]欸……那我也",
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
                        "\t[梗平]聽在下說話！",
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
                        "\t[梗平]沒辦法了，看來我只剩下一個選擇，他們就交給你了，Ｂ",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_lance_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[蘭斯]慢走～",
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
                        "梗平離開家庭餐廳，一路朝倉庫區奔去",
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
                        "\t[梗平]只要在下找到外星人，我的尊嚴也能被找回來的！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "就在梗平穿過巷口時，側邊突然冒出一台腳踏車直接把梗平撞飛",
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "ms_ch2_keng_bicycle_action_cg.png",
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
                            "image": "CH2_L210.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "\t[路人]麥克——！",
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
                        "\t[梗平]誰是麥克啊！好危險啊！誰騎這麼……",
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
                        "\t[梗平]這是甚麼？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "一個包裹棉被的神祕生物在地上蠕動，看來騎腳踏車的人撞到梗平後自己也跌倒了",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_quilt_monster_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[棉被怪]姆、姆姆，受到來自小行星群的碰撞，抗衝擊裝備啟動",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平　的　青春點數下降了",
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
                        "\t[梗平]你沒事吧",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平將手伸向神祕生物棉被怪試圖拉他起來",
                        "綁住棉被的繩子因為撞擊而鬆脫，然後梗平看到了棉被怪的真面目",
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "ms_ch2_eri_sunset_action_cg.png",
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
                            "image": "CH2_L222.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "在夕陽照射下，彷彿散發著粒子的藍髮少女",
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
                        "\t[梗平]外、外星人？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_quilt_monster_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[棉被怪]被被……",
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
                        "\t[梗平]被被？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_quilt_monster_surprised.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "surprised"
                        },
                        "\t[棉被怪]被被被被被發現啦！！！！！！！！！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "棉被怪裹上棉被用出乎預料的速度跑走了",
                        "梗平追上去了",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_quilt_monster_surprised.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "surprised"
                        },
                        "\t[棉被怪]救命啊有怪人在追我！！！！！！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "棉被怪呼救了",
                        "梗平被逮捕了",
                        "因為涉嫌尾隨未成年女性所以被通知家長而被帶回老家的梗平當然也無緣參加本屆Comiket了",
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
                        "\t[BE]第三類接觸？",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "main_ch2_2",
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
                    "text": "怎麼可能一個目擊者都沒有！一定是修卡的陰謀！",
                    "action": [
                        "就在梗平越講越心虛的時候，一個警察走了過來",
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
                        "\t[警察]有人提到修卡嗎？",
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
                        "\t[梗平]你見過修卡嗎！？",
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
                        "\t[警察]有喔，快跟我來吧",
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
                        "\t[梗平]這三個小朋友就拜託你了，我要去與修卡戰鬥了",
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
                        "\t[梗平]如果在下回不來的話......就把他們帶回咖啡廳吧",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_lance_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[蘭斯]好喔",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "話剛說完，梗平就跟著警察一起離開了",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_chino_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[智乃]大哥哥，你是他的朋友嗎？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_lance_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[蘭斯]雖然很不想承認，但是，是",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_ib_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[IB]辛苦了",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "ms_portrait_lance_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0,
                            "expression": "normal"
                        },
                        "\t[蘭斯]嗯，看起來他今天對你們做了一些不可原諒的事情呢",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "接下來小朋友們開始了跟蘭斯一起吐槽梗平的時光"
                    ]
                }
            ]
        },
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch2_3",
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
