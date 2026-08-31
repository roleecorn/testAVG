main.floors.main_ch8_bonus=
{
    "floorId": "main_ch8_bonus",
    "title": "通關連動特典：200万￥の女",
    "name": "CH8 Bonus",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "ms_bg_maid_cafe.png",
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
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        {
            "type": "comment",
            "text": "【本段無BGM】"
        },
        {
            "type": "comment",
            "text": "【背景：ms_bg_maid_cafe】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "ms_bg_maid_cafe.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
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
        "\t[東山]不行了差距甚大啊…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_lance_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[蘭斯]東湊西湊別說200了，這才100出頭…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_chris_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[克莉絲]多出來的竟然還有將近一半是沒忍住嘲諷去投了兩道小鋼珠…",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "ms_portrait_tongzhi_maid_normal.png",
            "expression": "normal",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[桶至學長(女僕)]一群窮鬼怎麼可能在一天之類拿出兩百萬啊笑",
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
        "\t[東山]不管了！就這麼地吧！",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI001】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI001.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【下面4句不使用立繪】"
        },
        "\t[眼神死掉的人]累到懷疑人生",
        "\t[眼神死掉的人]這日子啥時是個頭啊",
        "\t[眼神死掉的人]希望撿到的本子能填補一些秋葉原的赤字吧…",
        "\t[眼神死掉的人]晚安…馬卡巴卡…",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 500
        },
        {
            "type": "comment",
            "text": "【BGM：BGMDLCIKAZUCHI】"
        },
        {
            "type": "playBgm",
            "name": "BGMDLCIKAZUCHI.mp3"
        },
        {
            "type": "comment",
            "text": "【用BGMEDLCIKAZUCHI剩餘時間平均控制下方幻燈片，播放至BGM結束；不進行淡入淡出，兩張圖不重疊】"
        },
        {
            "type": "comment",
            "text": "【顯示一張全黑image固定在後方】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_black_curtain.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "endingSlideshow",
            "code": 2,
            "images": [
                "DLCIKAZUCHI002.png",
                "DLCIKAZUCHI003.png",
                "DLCIKAZUCHI004.png",
                "DLCIKAZUCHI005.png",
                "DLCIKAZUCHI006.png",
                "DLCIKAZUCHI007.png",
                "DLCIKAZUCHI008.png",
                "DLCIKAZUCHI009.png",
                "DLCIKAZUCHI010.png",
                "DLCIKAZUCHI011.png",
                "DLCIKAZUCHI012.png",
                "DLCIKAZUCHI013.png",
                "DLCIKAZUCHI014.png",
                "DLCIKAZUCHI015.png",
                "DLCIKAZUCHI016.png",
                "DLCIKAZUCHI017.png",
                "DLCIKAZUCHI018.png",
                "DLCIKAZUCHI019.png",
                "DLCIKAZUCHI020.png",
                "DLCIKAZUCHI021.png",
                "DLCIKAZUCHI022.png",
                "DLCIKAZUCHI023.png",
                "DLCIKAZUCHI024.png",
                "DLCIKAZUCHI025.png",
                "DLCIKAZUCHI026.png",
                "DLCIKAZUCHI027.png",
                "DLCIKAZUCHI028.png",
                "DLCIKAZUCHI029.png",
                "DLCIKAZUCHI030.png",
                "DLCIKAZUCHI031.png",
                "DLCIKAZUCHI032.png",
                "DLCIKAZUCHI033.png",
                "DLCIKAZUCHI034.png",
                "DLCIKAZUCHI035.png",
                "DLCIKAZUCHI036.png",
                "DLCIKAZUCHI037.png",
                "DLCIKAZUCHI038.png",
                "DLCIKAZUCHI039.png",
                "DLCIKAZUCHI040.png",
                "DLCIKAZUCHI041.png",
                "DLCIKAZUCHI042.png",
                "DLCIKAZUCHI043.png",
                "DLCIKAZUCHI044.png"
            ],
            "width": 544,
            "height": 416,
            "x": 0,
            "y": 0,
            "transition": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI002】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI002.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI003】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI003.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI004】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI004.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI005】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI005.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI006】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI006.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI007】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI007.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI008】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI008.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI009】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI009.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI010】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI010.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI011】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI011.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI012】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI012.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI013】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI013.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI014】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI014.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI015】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI015.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI016】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI016.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI017】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI017.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI018】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI018.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI019】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI019.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI020】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI020.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI021】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI021.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI022】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI022.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI023】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI023.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI024】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI024.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI025】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI025.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI026】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI026.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI027】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI027.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI028】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI028.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI029】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI029.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI030】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI030.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI031】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI031.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI032】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI032.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI033】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI033.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI034】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI034.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI035】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI035.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI036】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI036.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI037】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI037.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI038】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI038.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI039】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI039.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI040】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI040.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI041】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI041.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI042】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI042.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI043】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI043.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI044】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI044.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "comment",
            "text": "【停止BGM】"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "comment",
            "text": "【在BGM結束時停止3秒進入白色慢速過場】"
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 2000
        },
        {
            "type": "comment",
            "text": "【背景：DLCIKAZUCHI045】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "DLCIKAZUCHI045.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                0
            ],
            "time": 2000
        },
        {
            "type": "comment",
            "text": "【下句台詞沒有立繪且為大字】"
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
            "textfont": 32,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "\t[眼神死掉的人]……………",
        {
            "type": "comment",
            "text": "【下句台詞沒有立繪且為更大字】"
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
            "textfont": 40,
            "lineHeight": 22,
            "fixedLines": 2,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
        },
        "\t[眼神死掉的人]誰再說組活要做遊戲我就砍誰",
        {
            "type": "comment",
            "text": "【顯示一張全黑image，跳出白色大字寫著\"真的沒了\"】"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "lance_black_curtain.png",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        "真的沒了",
        {
            "type": "sleep",
            "time": 1000,
            "noSkip": true
        },
        {
            "type": "comment",
            "text": "【返回標題畫面】"
        },
        {
            "type": "restart"
        }
    ]
}
