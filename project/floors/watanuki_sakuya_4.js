main.floors.watanuki_sakuya_4=
{
    "floorId": "watanuki_sakuya_4",
    "title": "開花之儀",
    "name": "開花之儀",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "watanuki_shrine_bg.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "warped_surreal.mp3",
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
            "type": "showImage",
            "code": 30,
            "image": "watanuki_cg7_b.png",
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
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
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
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "[某處傳來奇怪音樂，梗平回想起在神社初遇的那番景象，不自覺地走到神社。]",
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]かごめかごめ（籠目 籠目）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]籠の中の鳥は-（籠中的鳥兒）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]いついつ出やる-（什麼時候飛出來）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]夜明けの晩に-（在即將天亮的夜裡）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]鶴と亀が滑った-（鶴與龜跌倒了）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]後ろの正面だあれ？-（在後面的那個人是誰？）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "watanuki_shrine_cg1_action_cg.png",
            "sloc": [
                0,
                0,
                1066,
                800
            ],
            "loc": [
                48,
                50,
                320,
                240
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
            "code": 10,
            "image": "keng_surprised_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]真是充滿詭異的音樂與景象…這個到底是什麼祭典啊…",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]沒想到在預演祭典時，梗平先生又來了呢～歡迎光臨。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]原來又是演習嗎？像真度很高呢，這些投影……",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]畢竟是用昂貴的投影工具輔助呢……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]那麼，梗平先生從一開始看到剛才結束嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]Way？我也不知道是否從頭開始…就是聽到在唱歌…",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "watanuki_sakuya_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[綿貫咲耶]那麼…想要開花嗎？梗平先生……？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "choices",
            "text": "要怎麼回應？",
            "choices": [
                {
                    "text": "什麼意思",
                    "action": [
                        "（什麼意思）",
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]開花是指？辛☆味☆噌！不安！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_smile.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]呼呼，像梗平先生的人應該不會有開花機會吧…只是吾隨心說笑而已",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]請不用在意，想要繼續欣賞「開花之儀」嗎？梗平先生。",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]ＷＡＹ！敵☆裸☆体！可以啊～",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]果然和艾瑪醬很相似呢…梗平先生…那麼，請在一旁享受「開花之儀」吧。",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]かごめかごめ（籠目 籠目）",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]籠の中の鳥は-（籠中的鳥兒）",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_surprised.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]いついつ出やる-（什麼時候飛出來）",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "[在迷幻光影與滲人歌聲中迷失的梗平，仿佛身體變得菠蘿菠蘿…意識遠去…]",
                        "[梗平只是在自己家中再次醒來，手握著一朵白雛菊，那到底是什麼一回事？]"
                    ]
                },
                {
                    "text": "不用了",
                    "action": [
                        "（不用了）",
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]巫女小姐說的，心領了！GEGEGE！病院 in my heart！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]我想起還有其他事要做！摩艾！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_neutral_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]ｸｻｰ!!(橘!!)",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]是這樣呢，那麼祝梗平先生能締結良緣吧~",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "[梗平小跑兩步回頭]",
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]為什麼只是看著！巫女小姐！我還以為你會多說幾句留著我！難道真的背叛嗎！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_surprised.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]梗平先生在說什麼事情呢？吾不太懂呢？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]巫女小姐！這樣下去我會忍不住木☆扣☆螺☆絲那些壞人的！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]欸欸……要吾為梗平先生進行「淨穢」嗎？",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 10,
                            "image": "keng_surprised_portrait.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]不用了( ;0M0)＜ｳｰ↑ﾜﾜﾜｰ↓ﾜｰ↑ﾜｰ↓ﾜｰ↓ｱｧｧｧｧｧ！",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "watanuki_sakuya_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[綿貫咲耶]真是奇怪的人呢~看來和艾瑪醬會很投機呢。",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "[梗平愉快地釋放Onduru語，仿佛進入了BLADE世界一樣！]",
                        "[病院 in my heart forever！梗平得到了小感冒。]"
                    ]
                }
            ]
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('watanuki_sakuya_4');\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.returnToAkiba();\n}"
        }
    ]
}
