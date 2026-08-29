main.floors.noir_3=
{
    "floorId": "noir_3",
    "title": "夢想舞台",
    "name": "夢想舞台",
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
    "bgm": "next_to_you_emotional.mp3",
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
        "夜色依舊籠罩着後巷，鋼琴的投影在空氣中閃爍",
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
        "\t[梗平]你到了呀。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "NoiR的身影浮現，她沒有立刻演奏，而是低下頭，灰色瞳孔映着微光",
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
        "\t[NoiR]我一直有一個夢想……能在真正的舞台上演奏。",
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
        "\t[NoiR]不是孤單的後巷，而是能讓音符迴盪在廣闊的空間裡。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "NoiR望向天空，目光直抵遠方",
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
        "\t[NoiR]哪怕只有一個人聽，也好。",
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
        "\t[NoiR]不過我這種的人怎麼可能呢，哈哈。",
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
        "\t[梗平]那就跟在下來吧，在下知道一個地方！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_tournament_venue.png",
            "opacity": 1,
            "time": 0
        },
        "梗平帶着NoiR，悄悄推開劇院的大門",
        "舞台中央，NoiR的鋼琴再次成形",
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
        "\t[NoiR]這裡...真的可以嗎？如果你被發現...",
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
        "\t[梗平]他們跑不過我，儘管彈吧，這裡只屬於你。",
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
        "\t[NoiR]這就是我夢想的舞台...",
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
        "\t[梗平]而我，會成為你的專屬聽眾無論你彈什麼，我都會聽到最後。",
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
        "\t[NoiR]一直也會？",
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
        "\t[梗平]一直也會！",
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
        "\t[NoiR]那麼我的專屬聽眾，請就坐吧。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "noir_n01_cg.jpeg",
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
        "...",
        {
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
        },
        "NoiR指尖落下琴鍵，旋律在劇院中迴盪",
        "她彈的是他們最初相識時的那段音樂，旋律在空曠的場館裡顯得格外鮮明",
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
        "\t[NoiR]音樂不需要舞台大小，只要有人聽，就足夠了。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "noir_n02_cg.jpeg",
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
        "\t[梗平]嗯，因為我們都喜歡音樂。而音樂，就是我們的共同語言。",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "隨後曲風一轉...是那動漫的一首ED",
        "琴聲填滿空曠的劇院，沒有掌聲，卻有兩人共同的喜悅",
        "演奏結束了，然而NoiR的手指並沒有從琴鍵上抬起",
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
        "\t[梗平]那首ED，是你為了在下而自學的嗎？",
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
        "\t[NoiR]今天剛學會的歌能夠在這裏派上用場真的太好了[點頭]",
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
        "\t[梗平]太好聽了！能夠聽到這種天籟之樂也是我一生的榮幸！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "然而，梗平察覺到了NoiR眼神中的一絲不捨",
        {
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
        },
        "NoiR沉默良久，手才從琴鍵上緩緩抬起",
        "最後一個音符消散時，NoiR的身影逐漸透明，她露出滿意的微笑",
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
        "\t[NoiR]抱歉呢...似乎到此為止了...",
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
        "\t[NoiR]今晚的夢想，已經足夠了。",
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
        "\t[梗平]這到底是什麼一回事！",
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
        "\t[NoiR]你大概已經意識到了吧，我並不是人。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平像是在否定些甚麼一樣，低下了頭",
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
        "\t[NoiR]抬起頭吧，梗平先生。",
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
        "\t[NoiR]我們的樂章並不會就此結束，這只是兩段樂章之間的間奏。",
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
        "\t[梗平]不要停下來，繼續彈奏下去啊！",
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
        "\t[梗平]只是僅僅一次表演你就已經滿足了嗎！你應該嚮往更大的舞台，渴望更多的人聽見你的音樂！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "NoiR搖了搖頭",
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
        "\t[NoiR]我有梗平先生你做我的專屬觀眾，已經滿足了。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平跑到舞台下嘗試爬上去，但高度落差讓他難以爬上舞台",
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
        "\t[梗平]你不能這樣呀！",
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
        "\t[梗平]因為成佛了，所以拋下了你的專屬聽眾離開，太不負責任了！",
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
        "\t[梗平]你不是害怕孤獨嗎！",
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
        "\t[NoiR]因為有你，我已經不會再感到孤獨了。",
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
        "\t[梗平]在下不會拋下你一個的！",
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
        "\t[NoiR]你知道樂譜上休止符的作用嗎？",
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
        "\t[NoiR]那不是永別，只是下一段音樂到來之前的一段空白。",
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
        "\t[梗平]不要留下我一個！",
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
        "\t[NoiR]謝謝你...我不會忘記你和我的這段時光的...",
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
        "\t[梗平]如果NoiR你離在下而去的話，在下的音樂之魂！",
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
        "\t[NoiR]一定要記得我哦。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平用盡了自身所有的力氣，終於爬上了舞台",
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
        "\t[梗平]在下想一直作為你的永遠的觀眾！",
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
        "\t[NoiR]さようなら...",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "少女閉上了雙眼，連帶着幾點淚光從臉頰滑落",
        "隨着夜風輕拂，她的身影連帶着鋼琴緩緩消散",
        "卡刷一聲,有一個東西跌在地上",
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
        "\t[梗平]是NoiR的髮夾！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "noir_hairclip.png",
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
        "髮夾是一個黑白琴鍵的造型，連帶着稍微濕潤的觸感",
        {
            "type": "hideImage",
            "code": 30,
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
        "\t[梗平]NoiR！你在哪裏！在下聽不見你的聲音！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0
        },
        "但是任憑梗平呼叫，只有他的聲音在劇院中迴響",
        "直到最後只剩下梗平敲打地板的聲音",
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('noir_3'); }"
        },
        {
            "type": "function",
            "function": "function () {\n\tcore.plugin.addAkibaEvent({\n\t\t\"id\": \"noir_4\",\n\t\t\"title\": \"宇宙女鬼\",\n\t\t\"locations\": [\"music_venue\"],\n\t\t\"floorId\": \"noir_4\",\n\t\t\"once\": true\n\t});\n}"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
