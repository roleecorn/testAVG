main.floors.jiakezi_2=
{
    "floorId": "jiakezi_2",
    "title": "紅魔館的劇本殺",
    "name": "紅魔館的劇本殺",
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
        "耿平看著手中的邀請函前往了紅魔館。",
        "恩……此時的時間是……",
        {
            "type": "choices",
            "text": "梗平抵達紅魔館的時間",
            "choices": [
                {
                    "text": "比預期來的早",
                    "action": [
                        "為了避免遲到導致讓那位金髮女孩傷心，於是提早抵達了紅魔館。",
                        "金髮少女已經在此等候",
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
                        "\t[金髮少女]「真是感謝您的到來呢，不過其他人還沒到，不如先到裡面坐著休息吧，旁邊桌上的飲料與零食都可以享用。」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "金髮少女客氣地招待耿平，而她似乎還在等其他參與者的到來。",
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
                        "\t[梗平]「那我就先進去了。」",
                        {
                            "type": "hideImage",
                            "code": 10,
                            "time": 0
                        },
                        "在遊戲室內，是由七張椅子圍繞著一張桌子擺放的形式，在六個座位前各自擺放著一張白紙以及一個木盒。",
                        "這木盒做工非常精緻，不過也有使用過的痕跡，可能是給玩家進行遊戲時用的。",
                        "隨著玩家們陸續抵達，伴隨著眾人落坐。",
                        "金髮少女是最後進來落坐剩餘的空位置上。",
                        "隨後作為遊戲主持人的GM發話。",
                        "\t[GM]「請各位打開擺在面前的盒子，取出身分卡後，告知大家自己的身分，。」",
                        "梗平的木盒中放著一張卡片、一張紙。",
                        "梗平看著紙張上的說明。",
                        "（卡片：你的身分是侍者，是這棟洋館的工作人員，你很清楚這棟洋館內沒有行兇用的凶器。）",
                        "梗平看了說明後，便告知了其他人自己的身分，而其他人也都陸續回應自己的身分。",
                        "有來自鄰國的公主看起來有些神秘，有帶著刀負著護衛的侍衛，有跟公主有衝突的王子。",
                        "最後大家看像金髮女子，她看了眼手中的卡片，隨後說：",
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
                        "\t[金髮女子]「我的身分是，陽光開朗大男孩，特長似乎是微笑。」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "金髮少女露出一個非常尷尬又不失禮貌的笑容出來。",
                        {
                            "type": "function",
                            "function": "function () { core.plugin.addAkibaEvent({\"id\":\"jiakezi_3\",\"title\":\"劇本殺真相\",\"locations\":[\"kaidan_cave\"],\"floorId\":\"jiakezi_3\",\"once\":true }); }"
                        }
                    ]
                },
                {
                    "text": "來的剛剛好",
                    "action": [
                        "梗平看著時間很充裕，於是先是到了附近買了吃的喝的，甚至可能還玩了一下。",
                        "前往紅魔館時只是晚了十分鐘左右，這點時間應該不至於遊戲開始了吧？",
                        "梗平如此想著，接著前往了紅魔館，而當耿平抵達後，只見金髮少女還在門口等待著。",
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
                        "\t[金髮少女]「歡迎歡迎！時間來的剛剛好呢！」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "金髮少女開心的向耿平打招呼。",
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
                        "\t[耿平]「路上耽誤了些時間，遊戲開始了嗎？」",
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
                        "\t[金髮少女]「正要開始呢！你正好是最後到達的人！」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "金髮少女如此說著，便帶著耿平前往了會議室。",
                        "隨著會議室的門打開，金髮少女帶著耿平進去。",
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
                        "\t[金髮少女]「來看看你今晚吃了什麼好料的吧。」",
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 0
                        },
                        "．．．．．．",
                        "\t[？？？]「哇！沒想到凶器就藏在這個箱子裡嗎？還有血呢！」",
                        "\t[？？？]「只是染料吧？」",
                        "\t[？？？]「不過兇手也太蠢了，竟然就把凶器匕首放在跟屍體同個房間，深怕有人找不到呢。」",
                        "\t[？？？]「那個……不好意思，那把匕首似乎是我的。」",
                        "\t[眾人]「欸？」",
                        "\t[？？？]「我的設定是剛來到城堡，就不小心弄丟護身匕首的護衛。」",
                        "BE：第七個小兵人"
                    ]
                }
            ]
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('jiakezi_2'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
