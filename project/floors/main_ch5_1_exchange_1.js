main.floors.main_ch5_1_exchange_1=
{
    "floorId": "main_ch5_1_exchange_1",
    "title": "主線 CH5 5-1 五日無戰事篇（交流後）",
    "name": "5-1",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_vehicle_interior.png",
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
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_vehicle_interior.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【主線 CH5 5-1 五日無戰事篇（交流後）】"
        },
        {
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3",
            "keep": true
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
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]呼，看起來都處理得差不多了",
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
        "\t[梗平]不過總感覺今天好像少了什麼",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "沒錯，秋葉原的熱意，再臨",
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
        "肥宅與梗平的羈絆還在繼續，肥宅朝著梗平發起了衝鋒",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "天啊，梗平閃過了肥宅的撞擊",
        "梗平，他勝利了",
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
        "\t[梗平]哈，英雄不會因為同一個招式倒下第四次！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "當梗平宣布勝利時，從肥宅的後方死角出現了更多的肥宅",
        {
            "type": "showImage",
            "code": 30,
            "image": "CH5_L50.png",
            "loc": [
                112,
                50,
                320,
                220
            ],
            "opacity": 1,
            "time": 250
        },
        "這就是肥宅們三位一體無法迴避的噴射氣流攻擊",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        "效果顯著，梗平失去戰鬥能力",
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
        "\t[梗平]啊！！！！！！！！",
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
        "\t[梗平]我的鼻子啊！",
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
        "\t[梗平]可惡，我一定要找到方法解決你們",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "或許是為了回應這麼想的梗平，手機恰到好處的響了起來",
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_street.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "\t[東山]好，從剛剛救出來了IB的哥哥得到了很有用的資訊",
        "\t[梗平]什麼？他已經被救出來了！？",
        "\t[梗平]那我跟小朋友們的羈絆與約定該怎麼辦啊",
        "\t[東山]那種東西怎麼樣都好吧",
        "\t[梗平]可......可惡",
        "\t[東山]好消息是我們知道肥宅們為甚麼會這樣了",
        "\t[東山]他們是因為一個叫「聖物」的東西不見了才會發瘋的",
        "\t[東山]所以只要找回聖物就好了",
        "\t[蘭斯]那壞消息是什麼呢？",
        "\t[東山]聖物被掛在拍賣網站上，要200萬",
        "\t[克莉絲]多...多少？",
        "\t[東山]200萬，所以沒錯，各位我們要趕快去籌錢了",
        "\t[東山]我要去想辦法賺錢了，再見",
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
            "image": "keng_panic_portrait.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平](200萬啊，好可怕的價格)",
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
        "\t[梗平](該怎麼籌到啊......)",
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
                    "text": "這麼說來，小鋼珠是不是挺好賺的",
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
                        "\t[梗平](這種時候要賺到這麼多的錢的話只能這樣了)",
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
                        "\t[梗平](而且表妹也從那裏賺到了這麼多，看來就是這條道路了)",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平選擇了捷徑(?)",
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
                            "image": "ms_bg_arcade.png",
                            "loc": [
                                0,
                                0
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "梗平充新踏入了電子遊樂場，那個他永遠的失去了1000円的地方",
                        "梗平學著那個警察坐到了機台前，投入了自己的錢",
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
                        "\t[梗平]總感覺，好快樂",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "在一陣勁爆的假面騎士特效後，螢幕上出現的數字讓梗平震驚不已",
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
                        "\t[梗平]原來，錢是這麼好賺的嗎？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "不知道甚麼時候出現的警察站在了梗平的身旁",
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
                        "\t[警察]夥伴，你來了啊",
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
                        "\t[梗平]在下來了",
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
                        "\t[警察]看來你沒有忘記那個美好的下午呢",
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
                        "\t[梗平]這樣的地方在下怎麼沒有早點發現呢",
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
                        "\t[警察]時間還不算晚，讓我們去追逐我們的光吧",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH5_L97.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "梗平與警察一同踏上了在小鋼珠店奮戰的道路，成功獲取了可觀的資金",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        "至於幾個小時後就欠下了幾十萬，被迫進入地下礦場打工就是後話了",
                        "在暗無天日的礦場打工，並正面擊潰了地下賭博帝國之後",
                        "賭神梗平重新見到了地面上的太陽，但Comike早已結束",
                        "梗平，錯過了Comike",
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
                        "\t[BE]梗平的賭博默示錄",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "main_ch5_1_exchange_1",
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
                    "text": "既然如此，答案只有一個了…我將效忠於您",
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
                        "\t[梗平](果然這種時候還是書店最保險)",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗平決定將今天自己剩下的所有時間投入到書店的打工中",
                        "如果一小時2000，他只需要工作區區1000小時就可以賺到200萬了",
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
                            "image": "ms_bg_bookstore_a_interior.png",
                            "loc": [
                                0,
                                0
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "梗平前往了熟悉的馬的膝蓋，即將迎接他的是無比艱難的挑戰",
                        {
                            "type": "showImage",
                            "code": 30,
                            "image": "CH5_L116.png",
                            "loc": [
                                112,
                                50,
                                320,
                                220
                            ],
                            "opacity": 1,
                            "time": 250
                        },
                        "面對即將到來的Comike，繪師們心血堆積如山",
                        "倉庫裡滿山遍谷的小薄本，等待著膽敢挑戰包裝它的勇士",
                        {
                            "type": "hideImage",
                            "code": 30,
                            "time": 150
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
                        "\t[書店店員]你來啦，讓我們憶起奮戰到底吧",
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
                        "\t[梗平]是的，前輩！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "梗吉訶德朝著風車發起了衝鋒",
                        "就這樣，持續到了午夜",
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
                        "\t[書店店員]今天差不多就這樣了，這個給你",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "前輩從旁邊的袋子裡拿出了一個便當，然後交到了梗平的手上",
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
                        "\t[書店店員]之後有需要幫忙再說喔",
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
                        "\t[梗平]謝謝前輩！",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "握著手上的20000円與便當，梗平離開了馬的膝蓋",
                        "與此同時，第五天打工依舊沒有換到宿",
                        {
                            "type": "comment",
                            "text": "【第五章結束】"
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
            "floorId": "main_ch6_1",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0
        }
    ]
}
