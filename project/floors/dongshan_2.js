main.floors.dongshan_2=
{
    "floorId": "dongshan_2",
    "title": "本子反擊",
    "name": "本子反擊",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_bookstore_a_interior.png",
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
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "comment",
            "text": "source line 82: 好感度2 → scene title 本子反擊"
        },
        {
            "type": "comment",
            "text": "source line 83: 【背景：泛用書店內部(明亮)】 → floor background ms_bg_bookstore_a_interior.png"
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
        "\t[書店店員]你在看什麼書？",
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
        "\t[梗平]《關鍵時刻被朋友拋下該怎樣治癒內心》",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "叮鈴叮鈴",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]又是你啊",
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
        "\t[梗平]有何貴幹，東山的LO本不會擺上這裡的書架吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]印刷是很麻煩的，那傢伙還會來好幾次",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]現在她人就在裡屋呢",
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
        "\t[梗平]是嗎（無關心）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]你打算怎麼做？正在治癒內心的卡面來打？",
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
        "\t[梗平]我不是說過了嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平啪地合上書本",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我是警察的同伴",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_smile_portrait.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]就讓我跟你一起狙擊忘恩負義的SIN ARTIST吧",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "兩人無言碰拳",
        "東山從裡屋出來了",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]這充滿年上感和清爽笨蛋感的空氣…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]檢察官和梗平，我知道你們躲在店裡埋伏我",
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
        "\t[梗平]（什麼！她是怎麼察覺我完美的隱身的！）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]剛才的對話全聽見了",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]庫庫庫…我早就料到這局面，準備了對策",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]無論你使出什麼手段，今天也要讓你伏誅",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]立刻停止你罪惡的印刷計畫！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]要阻止文明的進步嗎原始人檢察官，畫的力量可是很強大的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]你到底想說什麼！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 108: 下一句使用大字"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "text",
            "text": "\t[東山]接招吧！",
            "textfont": 24
        },
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "東山亮出一本成人本草稿！",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]無聊，和我刀下的累累死屍沒有任何差別！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
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
        "\t[梗平]唔，唔喔喔喔喔喔",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]看來，正確的武器、對正確的對象起效了呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]這、這到底是！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "草稿封面上畫的半脫女子穿著假面騎士cosplay",
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
        "\t[梗平]咕，我不承認！我絕對不會接受這種東西的存在喔喔喔！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平再起不能",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]先幹掉一個叛徒。下一個就是你了，檢察官！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "色情刊物檢察官、大步走向東山！",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]吼吼，沒有逃走，反而向我靠近了過來嗎，向我這個天才漫畫家東山！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]不要靠近你，怎麼把你暴打一頓呢",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 122: CG：東山掏本子 出現"
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "dongshan_book_reveal_cg.png",
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
        "東山拿出了一本小薄本",
        "封面畫著和檢察官相似的西裝眼鏡娘",
        {
            "type": "comment",
            "text": "source line 125: CG：東山掏本子 消失"
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]我沒拿蔡O文出來已經很仁慈了。這其實是O之契約者的本子，但是！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]跟我一樣沒有任何經驗的old lady能抵擋這份相似性嗎！",
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
        "\t[梗平]所以你上次撂下我走人是生氣我說的話嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]別、別開玩笑了！這種羞辱對我根本不算什麼！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]哦呀，誰說要抵禦的是羞辱了？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "檢察官停下了腳步！",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]看啊，你能不好奇這裡面的內容嗎",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]和你相似的女人被這樣那樣，你能抵抗住誘惑不去想嗎？對像是辣妹？還是老成的OL？又或者被矮個子蘿莉輕易擺平？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]被自己的妄想吞噬殆盡！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "檢察官、攥緊了拳頭！",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]別得意忘形了！你以為我還沒準備針對你的武器嗎！",
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
        "\t[梗平]（為什麼這傢伙的臉這麼紅、果然店裡太熱了嗎）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_panic.png",
            "expression": "panic",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]（我只是想威嚇一下、沒想到妄想開關已經全開了可怕）",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "色情刊物檢察官、丟出大量的紙張",
        "包圍了自己和梗平！",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]吃我聖書頁攻擊，然後我已經完全封死了書店的大門",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]你已經被我封印了，是我贏了，色情漫畫家·東山",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]別開玩笑了，中二也有個限度，我根本不在乎這種東西",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]看我直接跨過去…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "每一張聖書頁都是寫滿了情色刊物管制法的文件",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]嚇——！太卑鄙了吧！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "東山像看到髒東西的貓一樣跳到一旁",
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_smile.png",
            "expression": "smile",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]只要等我消化完妄想…就能將東山緝捕歸案…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
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
        "\t[梗平]我已經不行了，但你無需為此煩惱，稽查員小姐",
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
        "\t[梗平]那本子裡全是東山所謂「清湯寡水」的內容，她只是在虛張聲勢！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_surprised.png",
            "expression": "surprised",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]什麼？你看過嗎？",
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
        "\t[梗平]之前東山給我展示和吐槽過（作為反面教材）",
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
        "\t[梗平]沒想到，這會成為她今日致命的弱點…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]換言之你看過工口本子對吧",
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
        "\t[梗平]所以說只是…嗯？難道說你想要",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_adult_book_prosecutor_angry.png",
            "expression": "angry",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[色情刊物檢察官]骯髒的心靈，進洗衣機滾筒洗滌一遍吧！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "梗平被檢察官幹掉了",
        "聖書頁的字跡被梗平的血蓋掉了",
        "東山得以通過並離開了",
        {
            "type": "showImage",
            "code": 20,
            "image": "dongshan_sad.png",
            "expression": "sad",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[東山]我不會忘記你的犧牲的",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
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
        "\t[書店店員]呼姆呼……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "店員小姐好像畫了漫畫的第二話",
        {
            "type": "comment",
            "text": "source line 162: scene dongshan_2 full transcription boundary"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({ id: 'dongshan_3', title: '殭屍決戰', locations: ['horses_knee'], floorId: 'dongshan_3', once: true }); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('dongshan_2'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
