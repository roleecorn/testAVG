main.floors.jiakezi_1=
{
    "floorId": "jiakezi_1",
    "title": "初遇劇本殺",
    "name": "初遇劇本殺",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_becky_mansion.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
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
        "梗平在四周遊蕩時，注意到有個金色長髮帶著大帽子的少女，身穿著簡單色調的輕便佯裝，似乎有些拘謹想問人，卻又有些害羞的樣子。",
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
        "\t[梗平]（難不成是有甚麼困難嗎？）",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "梗平好奇的靠了過去，這才發現少女似乎正在發著傳單。",
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_angry_portrait.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]（靠！原來是傳銷啊！難怪沒有人想要理會！）",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "然而就在梗平想要離開的時候，金髮少女發現了梗平，一路小跑了過來，噠噠噠的聲音從後背傳來。",
        {
            "type": "showImage",
            "code": 20,
            "image": "jiakezi_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[金髮少女]「不好意思，小哥哥，有沒有興趣參加劇本殺呢？我們正在尋找有興趣的一起參與，第一次體驗是免費的喔！」",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "choices",
            "text": "梗平決定",
            "choices": [
                {
                    "text": "禮貌地拒絕",
                    "action": [
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
                        "\t[梗平]「不了，我對這個活動沒有興趣，謝謝你的邀請。」",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        "話雖如此，但是對方再次湊了上來，十分熱情地想要留住梗平。",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "jiakezi_smile.png",
                            "expression": "smile",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[金髮少女]「欸？那真是太可惜了，明明就差一人就可以湊滿人了呢，真的不行嗎？小哥哥～遊玩時有提供零食飲料喔～」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "看著眼前少女的熱邀，梗平決定",
                        {
                            "type": "choices",
                            "text": "梗平決定",
                            "choices": [
                                {
                                    "text": "粗魯的拒絕",
                                    "action": [
                                        {
                                            "type": "showImage",
                                            "code": 10,
                                            "image": "keng_angry_portrait.png",
                                            "expression": "angry",
                                            "loc": [
                                                "portraitSpeakerX",
                                                "portraitSpeakerY"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[梗平]「就說不要參加了！說不聽阿？現在我可沒有時間玩這種過家家遊戲。」",
                                        {
                                            "type": "hideImage",
                                            "code": 10,
                                            "time": 0
                                        },
                                        "梗平最受不了的就是這種像是漁夫推包包，強賣包包的人了。",
                                        "於是梗平甚至帶有些生氣地推開少女走了。",
                                        "一直到了晚上，梗平覺得房間內有些悶，便到了街上散步吹風。",
                                        "今天正好是個月缺之夜，而路上的街燈也時不時地閃爍著。",
                                        "梗平走著走著，看了眼時間，也差不多回去了，就在此時，身後傳來輕巧的腳步聲。",
                                        {
                                            "type": "showImage",
                                            "code": 20,
                                            "image": "jiakezi_normal.png",
                                            "expression": "normal",
                                            "loc": [
                                                "portraitSpeakerX",
                                                "portraitSpeakerY"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[？？？]「今天真是個適合吹風散步，月黑風高的好日子，你不也這麼覺得嗎？屍體先生？」",
                                        {
                                            "type": "hideImage",
                                            "code": 20,
                                            "time": 0
                                        },
                                        "原以為是同樣喜歡在夜間散步的同好，然而對方接近自己時卻說了如此毛骨悚然的話，而這個聲音是如此的熟悉。",
                                        "伴隨著金屬棍棒的敲擊聲，梗平失去了意識。",
                                        "．．．．．．",
                                        "\t[？？？]「啊！發現屍體了！所以這次的線索是什麼啊？附近怎麼沒有鋪克牌？」",
                                        "\t[？？？]「看樣貌，似乎是毒殺呢！你看臉色都發青了！」",
                                        "\t[？？？]「所以犯人是擁有毒藥的人嗎？」",
                                        "\t[？？？]「不一定，你看這邊的血跡是鮮紅色的，根據線索毒殺的話血液會呈黑色！」",
                                        "BE：完美的參與者",
                                        {
                                            "type": "comment",
                                            "text": "【返回分支選項二】：巢狀選項結束後返回外層選項流程。"
                                        }
                                    ]
                                },
                                {
                                    "text": "接受邀請",
                                    "action": [
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
                                        "\t[梗平]「好吧，既然你都這麼熱情邀請了，如果拒絕怪奇怪的。」",
                                        {
                                            "type": "hideImage",
                                            "code": 10,
                                            "time": 0
                                        },
                                        {
                                            "type": "showImage",
                                            "code": 20,
                                            "image": "jiakezi_smile.png",
                                            "expression": "smile",
                                            "loc": [
                                                "portraitSpeakerX",
                                                "portraitSpeakerY"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[金髮少女]「真是太好了！謝謝你的參與！那麼還請收下這封邀請函，然後請在邀請函上所述的時間來到這地方來！」",
                                        {
                                            "type": "hideImage",
                                            "code": 20,
                                            "time": 0
                                        },
                                        "金髮少女非常的開心，隨後哼著不知道甚麼的旋律走了。",
                                        "梗平看著邀請函上的文字介紹，",
                                        "「危言聳聽！紅魔館中的驚悚駭人事件！絕對給人帶來前所未有的觀感體驗！」",
                                        "「請在ＯＯ月ＸＸ日晚上六點前往紅魔館！」",
                                        "時間是下個禮拜嗎？完全就像是小孩子扮家家一般的宣傳單嘛。",
                                        {
                                            "type": "function",
                                            "function": "function () { core.plugin.addAkibaEvent({\"id\":\"jiakezi_2\",\"title\":\"紅魔館的劇本殺\",\"locations\":[\"kaidan_cave\"],\"floorId\":\"jiakezi_2\",\"once\":true }); }"
                                        }
                                    ]
                                },
                                {
                                    "text": "再次禮貌地拒絕",
                                    "action": [
                                        {
                                            "type": "showImage",
                                            "code": 20,
                                            "image": "jiakezi_smile.png",
                                            "expression": "smile",
                                            "loc": [
                                                "portraitSpeakerX",
                                                "portraitSpeakerY"
                                            ],
                                            "opacity": 1,
                                            "time": 0
                                        },
                                        "\t[金髮少女]「好吧，是我冒犯了，那還請小哥哥有美好的一天。」",
                                        {
                                            "type": "hideImage",
                                            "code": 20,
                                            "time": 0
                                        },
                                        "經過這段小插曲後，梗平離開了此處。",
                                        "並沒有甚麼特別的事情發生。",
                                        "一個禮拜後。",
                                        "報紙上刊登了，本市內出現多起死亡事件，每位死者的死亡方式不同，一時間搞得人心惶惶的。",
                                        "但是跟梗平沒有關係，畢竟梗平很宅，不會得罪人。",
                                        "NE：社恐的勝利宣言",
                                        {
                                            "type": "comment",
                                            "text": "【整體事件結束】：本場支線流程結束。"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "粗魯的拒絕",
                    "action": [
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_angry_portrait.png",
                            "expression": "angry",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]「就說不要參加了！說不聽阿？現在我可沒有時間玩這種過家家遊戲。」",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        "梗平最受不了的就是這種像是漁夫推包包，強賣包包的人了。",
                        "於是梗平甚至帶有些生氣地推開少女走了。",
                        "一直到了晚上，梗平覺得房間內有些悶，便到了街上散步吹風。",
                        "今天正好是個月缺之夜，而路上的街燈也時不時地閃爍著。",
                        "梗平走著走著，看了眼時間，也差不多回去了，就在此時，身後傳來輕巧的腳步聲。",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "jiakezi_normal.png",
                            "expression": "normal",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[？？？]「今天真是個適合吹風散步，月黑風高的好日子，你不也這麼覺得嗎？屍體先生？」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "原以為是同樣喜歡在夜間散步的同好，然而對方接近自己時卻說了如此毛骨悚然的話，而這個聲音是如此的熟悉。",
                        "伴隨著金屬棍棒的敲擊聲，梗平失去了意識。",
                        "．．．．．．",
                        "\t[？？？]「啊！發現屍體了！所以這次的線索是什麼啊？附近怎麼沒有鋪克牌？」",
                        "\t[？？？]「看樣貌，似乎是毒殺呢！你看臉色都發青了！」",
                        "\t[？？？]「所以犯人是擁有毒藥的人嗎？」",
                        "\t[？？？]「不一定，你看這邊的血跡是鮮紅色的，根據線索毒殺的話血液會呈黑色！」",
                        "BE：完美的參與者",
                        {
                            "type": "comment",
                            "text": "【返回分支選項二】：初始選項的分支已結束。"
                        }
                    ]
                },
                {
                    "text": "接受邀請",
                    "action": [
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
                        "\t[梗平]「好吧，既然你都這麼熱情邀請了，如果拒絕怪奇怪的。」",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "jiakezi_smile.png",
                            "expression": "smile",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[金髮少女]「真是太好了！謝謝你的參與！那麼還請收下這封邀請函，然後請在邀請函上所述的時間來到這地方來！」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "金髮少女非常的開心，隨後哼著不知道甚麼的旋律走了。",
                        "梗平看著邀請函上的文字介紹，",
                        "「危言聳聽！紅魔館中的驚悚駭人事件！絕對給人帶來前所未有的觀感體驗！」",
                        "「請在ＯＯ月ＸＸ日晚上六點前往紅魔館！」",
                        "時間是下個禮拜嗎？完全就像是小孩子扮家家一般的宣傳單嘛。",
                        {
                            "type": "function",
                            "function": "function () { core.plugin.addAkibaEvent({\"id\":\"jiakezi_2\",\"title\":\"紅魔館的劇本殺\",\"locations\":[\"kaidan_cave\"],\"floorId\":\"jiakezi_2\",\"once\":true }); }"
                        }
                    ]
                }
            ]
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('jiakezi_1'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
