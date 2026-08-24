main.floors.noir_1=
{
    "floorId": "noir_1",
    "title": "後巷琴聲",
    "name": "後巷琴聲",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_street.png",
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
        "(在路過劇院附近時梗平聽到了有人彈鋼琴聲音）",
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
        "\t[梗平]哪有人會在後巷彈鋼琴？",
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
        "\t[梗平]不可能！絕對不可能！",
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
        "\t[梗平](靈光一閃）",
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
        "\t[梗平]那一定是旮旯給木的女配角登場環節！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "（越靠近聲音的來源，琴聲越令人着迷）",
        "...",
        "（順着聲音找到了那條小巷）",
        "（和設想中的秋葉原後巷不一樣，在昏暗後巷裡，一架孤立的鋼琴響起，少女的指尖輕舞，音符如星光般閃爍，將荒涼化為詩意，彷彿整個世界都在她的旋律中靜止。）",
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]（無我的演奏着鋼琴）",
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
        "\t[梗平]好美，不覺得這樣真的很神聖嗎（小聲說）",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "（正踏出一步的時候）",
        "匡噹",
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]誰！",
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
        "\t[梗平]去你的鋁罐！這樣不就顯得我很像什麼跟蹤犯！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "（梗平的視覺有一瞬間集中在被他踢走的鋁罐，而再次望向剛剛在後巷盡頭的少女和鋼琴的位置時，少女已經連帶着整個鋼琴消失在眼前了，取而代之只是一堆廢物堆。）",
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
        "\t[梗平]難不成是鬼！？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "（尖叫梗平.png）",
        "梗平跑走了...",
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
        "\t[梗平]是鬼吧！這TM不就是鬼嗎！救命呀！（邊跑邊叫）",
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
        "\t[梗平]幪面超人救我呀！（邊跑邊叫）",
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
        "\t[梗平]不對呀，如果是幪面超人的話（突然停下）",
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
        "\t[梗平]區區女鬼！看我用勇氣把他推回去！",
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
        "\t[梗平]（回想了一下）",
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
        "\t[梗平]話說她不是挺可愛的嗎",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "...",
        "（憑着記憶回到那條小巷）",
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
        "\t[梗平]是那個鋼琴聲",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "（後巷的夜色依舊靜謐，鋼琴聲在空氣中流淌。梗平小心翼翼地走近，這次沒有踢到鋁罐）",
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
        "\t[梗平]Err...原來你還在呀",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]...你能聽見我彈的鋼琴？",
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
        "\t[梗平]嗯...剛剛我嚇到你了吧？對不起。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]沒關係，只是...沒有人能夠聽見我彈的琴。（抬眼，灰色瞳孔閃着微光）",
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
        "\t[梗平]其實你彈得很好，只是...我有點不敢靠近。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_surprised.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]膽小鬼。（輕笑）",
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
        "\t[梗平]喂！我...我不習慣這種地方突然有鋼琴出現啊。（臉紅）",
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
        "\t[梗平]而且被嚇走的不是你嗎！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]（臉紅）",
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
        "\t[梗平]我叫梗平，話說我該怎樣稱呼你？",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]NoiR...",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "（沒有再發言，少女的手於黑白間條上再次起舞。琴聲響起，梗平站在原地。）",
        "...",
        "（演奏結束，梗平不由得自己鼓掌起來）",
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]這裡是我最喜歡的地方，因為不會有人打擾。但是如果是你的話，我可以。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]那你...會再來嗎？",
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
        "\t[梗平]如果你不介意的話。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "noir_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[N]那麼...明天再見吧。（低聲）",
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
        "\t[梗平]那麼，明天再見。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "（NoiR連帶着鋼琴消失離開）",
        "夜風輕拂，梗平心裡期待着隔日的相遇。",
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('noir_1'); }"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"noir_2\",\n\t\t\"title\": \"專屬聽眾\",\n\t\t\"locations\": [\"music_venue\"],\n\t\t\"floorId\": \"noir_2\",\n\t\t\"once\": true\n\t});\n}"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
