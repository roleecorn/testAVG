main.floors.shirou_3=
{
    "floorId": "shirou_3",
    "title": "鍛刀大賽",
    "name": "鍛刀大賽",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_mapo_shop.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "bgm": "great_mission_heroic.mp3",
    "ratio": 1,
    "width": 17,
    "height": 13,
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
            "code": 1,
            "image": "ms_bg_mapo_shop.png",
            "opacity": 1,
            "time": 0
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
            "code": 1,
            "image": "ms_bg_tournament_venue.png",
            "opacity": 1,
            "time": 0
        },
        "梗平如約準時在比賽開始前到了比賽場地",
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
        "而他找到了正在中華料理店前在準備工具的士郎",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]Aibo 你準備好了嗎？",
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
        "\t[梗]上啊士郎，給這群傳統鐵匠一點二次元震撼！",
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
            "code": 1,
            "image": "ms_bg_tournament_venue.png",
            "opacity": 1,
            "time": 0
        },
        "走了一會他們到了比賽場地，梗平看了一眼四周",
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
        "空地之上，坐在評判席上的是中華料理店的老闆以及收購所的老闆",
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
        "然後映入眼簾是分隔了三個區域的區間",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]中間哪個間隔就是我們的了",
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
        "\t[麻]時間到了選手請各自就位，我很期待各位的作品",
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
        "\t[梗](他是在看在下嗎？)",
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
        "\t[麻]旁邊這位會作為本次比賽的安檢員東方不敗，確保你們不會受傷。",
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
        "\t[梗](這個人的氣勢太可怕了)",
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
        "（東方不敗聽見後點了點頭)",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]接下來就交給我吧，我會證明給他們看二次元的力量的",
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
        "\t[梗]士郎，不要輸呀！我也開始燃起來了！",
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
        "\t[麻]那麼接下來我會公佈本次賽程，比賽分為兩部分",
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
        "\t[麻]第一部分會要求每組大致斷打出刀型然後交給我審核",
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
        "\t[麻]雖說如此這次比賽也不會限制各位選手對刀型的自由度追求，其後淘汰一位進度最差的",
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
        "\t[麻]畢竟在料理界時間可是金錢，達不到標準的人沒有存在的價值",
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
        "\t[麻]第二回合將會要求各位完善以及打磨到完整整把廚刀",
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
        "\t[麻]然後每組派出一位代表展示你們的刀的鋒利程度以及對刀的使用",
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
        "這時候，左邊傳來幾位少爺的嘲笑聲",
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
        "\t[唐三]都什麼時代了，我們煉器直接用我們魂環科技的設備就好了。",
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
        "\t[唐三]用火爐的原始人，哈哈哈！",
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
        "\t[唐三]隕鐵鋼材將會是我們的了！",
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
            "image": "keng_smile_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]少爺小組居然拿著高科技設備嘲笑我們的老風箱！",
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
        "\t[梗]士郎，給他們看看我們這幾天磨練出來的真正厲害！",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]鍛造的本質不在於機器有多先進，而在於對鋼材與料理心意。",
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
        "\t[梗]看我們直接在第一階段把他淘汰出去",
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
        "\t[東方不敗]3!2!1! Game Start!!!",
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
        "時間一分一秒的過去",
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
        "和設想的不同，左邊傳來的不是打鐵聲，右邊傳來的更只有吵架的聲音",
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
        "\t[梗]看起來有在認真打鐵的只有我們這組了，這裏還是鍛刀大賽嗎？",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]只要好好打鐵就能贏了！",
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
        "突然左邊傳來慘叫，連帶著爆炸聲以及燒焦的味道",
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
        "東方不敗閃身而過眨眼功夫便從評判席衝了向左邊的間隔",
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
        "\t[麻]唐家三少小組因為用具故障直接被抬離場了。",
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
        "\t[麻]只是技術性調整，沒有人會在這次比賽中受到傷害",
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
        "\t[麻]另外兩組可以直接進入第二階段",
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
        "與此同時右邊間隔的咒罵聲越發起勁",
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
        "梗平只能大概聽到什麼券、什麼藝術、什麼家人呀犧牲呀",
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
        "還有什麼指令呀之類的不明所以的東西",
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
        "\t[梗]相親相愛？看來只有內訌自爆的部分吧",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]呼，進度良好",
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
        "\t[梗]局勢大好呀，現在。已經完全沒有落敗的可能了",
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
        "時間已經到比賽的最後五分鐘",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]現在只差刀刃淬火的一步，只要成功了就完成了！",
        {
            "type": "showImage",
            "code": 30,
            "image": "shirou_blades.png",
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
        "\t[梗]過來讓我看看，完成度也太高了吧！",
        {
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
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
        "\t[梗]最後一步就由在下來吧",
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
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]畢竟在下什麼也沒有幫上忙，而且水淬之力我也不是沒有聽過",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]小心點，他還熱。最後一步就交給你了",
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
        "梗平輕輕的把刀刃慢慢從尖端浸入水中，雙刀慢慢冷卻了下來硬化",
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
        "水焠的過程不久，而士郎一眼便看出不幸地ㄧㄧ刀歪了",
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
        "是由於兩邊不均勻的冷卻導致的，都是運氣的問題",
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
        "完成的時候時間也剛好結束了",
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
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]怎麼辦好？這個可是比不上那把刀呀",
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
        "\t[梗]現在的時間也不夠再打一對刀出來",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]只能動用殺手鐧了嗎",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]接下來我將以紅色形態出擊！",
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
        "\t[梗]啊？",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]給我五...不，三分鐘！",
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
        "\t[麻]那麼請第一組的代表出來吧",
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
        "蜘蛛巢相親相愛一家親的代表滿身傷痕，拿著一把日本武士刀出列",
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
        "\t[良秀]在下良秀",
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
        "\t[麻]請蜘蛛巢相親相愛一家親小組的代表盡可能切開面前的豬肉，限時三分鐘",
        {
            "type": "showImage",
            "code": 30,
            "image": "tournament_katana.png",
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
        "良秀拔出了那把腰間的刀，透明的刀刃折射著背後的景色",
        {
            "type": "hideImage",
            "code": 30,
            "time": 0,
            "async": true
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
        "一刀，豬肉一分為二，如同切牛油般被斬開",
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
        "又一刀，在豬肉下落之前又分成再兩份",
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
        "三分鐘內無數的斬擊穿過豬肉，梗平不可置信的看着",
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
        "\t[梗]贏不了真的贏不了",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]Trace On!",
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
        "背後傳來一聲",
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
        "梗平轉過頭去發現士郎的左臂發出淡淡藍光",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"I am the bone of my sword.\"",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"Steel is my body, and fire is my blood.\"",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"I have created over a thousand blades.\"",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"Unknown to Death,\"\"Nor known to Life.\"",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"Have withstood pain to create many weapons.\"",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"Yet, those hands will never hold anything.\"",
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
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]你在做什麼呀！這是魔法嗎？",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]\"So as I pray, Unlimited Blade Works.\"",
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
        "隨後兩把比完美更完美的干將·莫邪從地上投影出來",
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
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]為什麼不一開始就用紅色形態呀！",
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
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]如果你能投影的話為什麼一開始還要打鐵呀！",
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
            "image": "shirou_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[士]不打鐵是不能體會到這種辛酸的，接下來就靠你了",
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
        "士郎，倒下",
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
            "image": "keng_panic_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗]士！郎！明明有這麼方便的東西你不一早拿出來用做什麼呀！",
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
        "\t[麻]那麼第二組的代表出來吧",
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
        "\t[梗]是要時候開始表演了嗎？我的瘋狗刀法...",
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
        "\t[麻]不，只要你們能展現出這把刀能一刀切開豬肉，你們就贏了",
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
        "\t[梗]？",
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
        "\t[麻]良秀的刀所斬過的食材似乎無法正常的食用以及烹飪並不能勝任作為廚刀",
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
        "梗平輕輕一劃，豬肉被切開了",
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
        "\t[麻]那麼你就是優勝者了，恭喜",
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
        "\t[東方不敗]恭喜",
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
        "\t[唐三]恭喜",
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
        "\t[良秀]恭喜",
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
        "大家拍著手圍著梗平，看來直到大家都力竭之前他會在眾人的擁戴下不能離去",
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
        "而倒下的士郎在之後也被送往醫院",
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('shirou_3'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({ id: 'shirou_4', title: '嶄新的節奏', locations: ['chinese_restaurant'], floorId: 'shirou_4', once: true }); }"
        }
    ]
}
