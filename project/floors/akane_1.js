main.floors.akane_1=
{
    "floorId": "akane_1",
    "title": "廢站歌聲",
    "name": "廢站歌聲",
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
        "\t[梗平]（在車站附近似乎有個廢棄的站台，聽說那邊不時會有歌聲傳來，但當中的內容，有時讓人感到親和，有時又讓人感到違和，不知道現在過去會不會遇到。）",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
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
        "\t[？？？]「閒暇之餘便向內走去，步行了幾分鐘之後，那二連二拍的正弦波啊，正朝著這邊步步走過來。」",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平接近站台時，聽到了歌聲從破舊的站台上傳來，那歌聲明明正在唱著歌，當中卻不帶著一絲感情，宛如機械一般的唱出歌詞而已。",
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
        "\t[？？？]「無論明天還是昨天就這樣消失，不管是誰都對此事非常知曉，水中漸漸在融化的那灰塵背後，月亮彷彿從中顯現。」",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "站台上的是一名穿著洛麗塔的少女正在唱歌。",
        {
            "type": "showImage",
            "code": 20,
            "image": "akane_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[？？？]「在那裡聽到了些什麼，早已知曉無法再度離開，將溢出蜂蜜的瓶子打碎，新的一天，在那晚的輪迴中。」",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "當梗平接近少女時，正在唱歌的少女，也注意到了梗平的存在，但依舊沒有停下歌唱。",
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
        "\t[？？？]「還沒理解其外表好像表示危險含意，突然發現地上一個大洞，回過神來才發現被整個吞下，掉下去時身體直接融化了。」",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "伴隨著這段歌詞的結束，少女對著耿平露出了微笑，但下一個瞬間，少女的底下出現了一個大洞，少女掉了進去，少女的表情十分的平靜，甚至有些釋懷地笑了。",
        "當大洞吞噬掉少女之後，洞消失了，在廢棄的站台上，只剩下一臉迷茫的耿平。",
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
        "\t[梗平]（這是幻覺還是？明明確實地聽到了歌聲，也看到了實物，卻不見任何原本該在這裡的事物。）",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('akane_1'); }"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"akane_2\",\n\t\t\"title\": \"輪迴之歌\",\n\t\t\"locations\": [\"elevated_train\"],\n\t\t\"floorId\": \"akane_2\",\n\t\t\"once\": true\n\t});\n}"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
