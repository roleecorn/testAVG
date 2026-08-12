main.floors.akane_2=
{
    "floorId": "akane_2",
    "title": "輪迴之歌",
    "name": "輪迴之歌",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_station.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "spacetime_mystery.mp3",
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
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]（不知不覺間又來到了這裡，這裡既然會傳出謠言出來，代表這這裡的事情應該不會只發生一次吧？還是說有其他人存在嗎？）",
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
        "當梗平靠近站台的時候，那位同樣裝扮的少女正站在那裡，並沒有唱歌，也沒有做甚麼，只是在那傻站著，但是當耿平靠近時，少女出聲了。",
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
            "image": "akane_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]「在冷氣的蔓延下，細胞單位也迎來了終結，就像星星墜落的現象一樣，明天依然會放晴的吧。」",
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
            "image": "akane_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]「你好，初次見面、我叫做茜，好久不見，梗平先生。」",
        {
            "type": "choices",
            "text": "要怎麼回應？",
            "choices": [
                {
                    "text": "不如就先應著對方的話接下去吧。",
                    "action": [
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
                        "（不如就先應著對方的話接下去吧。）",
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
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]「好久不見了茜。」",
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
                            "image": "akane_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「梗平先生是來陪我的嗎？」",
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
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]「嗯．．．啊！對的！我是來陪你的。」",
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
                            "image": "akane_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「那還真是開心呢，昨天的記憶，已經消逝，但何謂消逝也，不太清楚呢。」",
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
                        "少女又開始唱起了歌，與此同時天上似乎變成陰天一般，那滿天的烏雲......不，那是金槍魚，黃色的金槍魚。",
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
                            "image": "akane_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「黃金槍魚，也飛了過來，邊飛著邊打破，屋頂上的瓦片，被金槍魚用它那，劇毒的長針，刺穿倒下，溺死於河底。」",
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
                        "茜和梗平，金槍魚從空中俯衝下來，將兩人變成了魚身肉串，劇烈的疼痛從傷口處蔓延，劇毒將身體變成了慘白，隨後發紫腐爛，兩人成為了站台的養分。",
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
                        "\t[Bad End]我們被降落下的金槍魚，頃刻間殺戮"
                    ]
                },
                {
                    "text": "這傢伙在說甚麼啊？根本不認識她啊",
                    "action": [
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
                        "（這傢伙在說甚麼啊？根本不認識她啊）",
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
                            "image": "akane_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「很高興你能來呢，梗平先生，明天的事，我也非常知曉，無人的車站上，無聲的腔調。」",
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
                        "少女自顧自話地，又開始了歌唱。",
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
                            "image": "akane_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「那不在綻放的花朵，鳥兒也無法唱出夢話，只剩冷風播散寂靜雪花，月無圓缺之分，不停輪轉。」",
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
                        "在少女開始唱歌的時候，梗平彷彿好像意識到接下來會發生甚麼事情一般，想要阻止少女唱歌。",
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
                            "image": "akane_normal.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「今日開始相連的，那一份純真日復一日地雀躍著，忘記了每一個人，前行著正因我無法再次，挽回你那年的腳痕。」",
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
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]「停！先停停！先別唱了！」梗平跑了過去，但是......站台上出現了沙丁魚，沙丁魚們從站台上的間隙長出來了，梗平被這突如其來的狀態驚嚇到，不經停下了腳步。",
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
                            "image": "akane_sad.png",
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[茜]「沙丁魚從土裡鑽了出來，車站開了個大洞，因為木踏板消失了啊。」",
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
                        "少女露出開心的笑容，再度從憑空出現的大洞跌落了進去，留下了更加迷茫的耿平留在了站台上，還有一些剛長出來的沙丁魚。",
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
                            "loc": [
                                "portraitSpeakerX",
                                "portraitSpeakerY"
                            ],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]「．．．這魚還能吃嗎？」"
                    ]
                }
            ]
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
            "type": "function",
            "function": "function () {\n\tcore.plugin.completeAkibaEvent('akane_2');\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"akane_3\",\n\t\t\"title\": \"列車重來\",\n\t\t\"locations\": [\"elevated_train\"],\n\t\t\"floorId\": \"akane_3\",\n\t\t\"once\": true\n\t});\n}"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.returnToAkiba();\n}"
        }
    ]
}
