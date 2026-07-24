main.floors.main_ch2_3=
{
    "floorId": "main_ch2_3",
    "title": "主線 CH2 2-3 遊戲中心",
    "name": "2-3",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "scene_street.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        },
        {
            "name": "keng_portrait.png",
            "canvas": "fg",
            "x": 28,
            "y": 210,
            "disabled": true
        },
        {
            "name": "suou_sad_portrait.png",
            "canvas": "fg",
            "x": 260,
            "y": 185,
            "disabled": true
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
            0
        ]
    ],
    "width": 13,
    "height": 13,
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setText",
            "position": "down",
            "offset": 8,
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
            "textfont": 20,
            "lineHeight": 30,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "playBgm",
            "name": "warped_surreal.mp3"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_street.png",
            "loc": [
                0,
                0
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
            "code": 11,
            "time": 0,
            "async": true
        },
        "【主線 CH2 2-3 遊戲中心】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_tournament.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "【背景：遊戲中心】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "警察帶著梗平走進了秋葉原的遊戲中心，並在一個小鋼珠機台前坐了下來",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[警察]借我一張",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]好",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平不假思索的把錢包裡最後僅剩的一張一千円拿了出來",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]「好像哪裡不太對」",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "警察隨後把那一千円投入了機台當中",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平的理智隨著珠子滾動的聲音一起跌到谷底",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[警察]喔，來了來了！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "伴隨著「yeeeee」的聲效出現的昭和特攝修卡動畫出現在梗平眼前",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "然後？然後什麼都沒出",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[警察]太可惜了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我最後的1000円啊！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平一邊怒吼著，一邊對著警察使用了德式背摔",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "\t[警察]啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "警察在原地暈死了過去",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我的錢啊！！！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "這時候的梗平終於想起了他出來是為了什麼的",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]對啊，要幫IB找哥哥才行",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]......",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]算了，還是去書店A一趟吧",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "失去了太多了梗平獨自一人，走向了大門緊閉的書店A",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 30,
            "time": 150
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "scene_street.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 250
        },
        "【背景：書店A】",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平站在了書店A的大門前方，開始了自言自語",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]我......在怎麼說也是個大人啊",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_smile_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]明知這裡有危險還是要上啊，假面騎士可不能臨陣脫逃啊",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]更何況，我可不能讓孩子們遭遇危險啊",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "下定了決心的梗平，其實早在第一次來時就發現了四樓有一扇半開的窗戶，然後......",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "誒？徒手爬了進去，真的假的",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_neutral_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]還好還有開的地方",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "剛翻進了窗戶的梗平就看見了兩個肥宅朝他衝了過來",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "showImage",
            "code": 10,
            "image": "keng_panic_portrait.png",
            "loc": [
                28,
                "textTop"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]等等，你們要做什麼，不要過來啊！",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "肥宅們無視了梗平的話，並直直地朝他撞了過來",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        "梗平失去了戰鬥能力，他倒下了",
        {
            "type": "hideImage",
            "code": 10,
            "time": 0,
            "async": true
        },
        {
            "type": "hideImage",
            "code": 11,
            "time": 0,
            "async": true
        },
        {
            "type": "playTransitionVideo"
        },
        {
            "type": "changeFloor",
            "floorId": "main_ch2_4",
            "loc": [
                6,
                10
            ],
            "direction": "up",
            "time": 0
        }
    ],
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
    "fgmap": []
}
