main.floors.kelukai_4=
{
    "floorId": "kelukai_4",
    "title": "指名",
    "name": "指名",
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
    "images": [],
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
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3",
            "keep": true
        },
        {
            "type": "showImage",
            "code": 5,
            "image": "ms_bg_police_station.png",
            "loc": [
                0,
                0,
                544,
                416
            ]
        },
        "\t[藍衣警察]這個要怎麼處理？",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]什麼？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 603: 藍衣警察把一張紀錄放到桌上"
        },
        "\t[藍衣警察]附近店員來反映。",
        "\t[藍衣警察]最近有個男人一直在店門口等她。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]有動手？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]沒有。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]威脅？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]也沒有。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]財物損失？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]沒有。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]那你拿給我幹嘛？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]因為她說很害怕啊。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]你去。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]我還有別的事。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]那就做完再去。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]你看什麼？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]沒什麼。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]只是在下第一次看到有人把工作推給上司還這麼理直氣壯。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]這叫合理分工。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]這叫找死。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]好吧。",
        "\t[藍衣警察]那我晚點——",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]等一下。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]？",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]紀錄給我。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 650: 可露凱重新拿起紀錄"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]「每天都在店門口」是幾天？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]不知道。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]「跟著她走」是跟多遠？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]也不知道。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]對方知道她住哪？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]……",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]你到底問了什麼？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]她很害怕。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]這句是她自己說的。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]對。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 674: 可露凱起身"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]走。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]去哪？",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]把你漏掉的東西問完。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]在下呢？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]你不是很閒？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]在下剛才一句都沒有說吧！？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 688: 場景切換"
        },
        {
            "type": "comment",
            "text": "source line 689: 地點:秋葉原・店鋪前"
        },
        {
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3",
            "keep": true
        },
        "\t[店員]就是他。",
        {
            "type": "comment",
            "text": "source line 694: 鏡頭:街道另一側站著一名男子"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]真的站在那裡耶。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]多久了？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]最近幾次下班都會看到他。",
        "\t[店員]我繞路，他也會跟。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]知道你住哪嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]……可能知道。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]為什麼？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]有一次我快到家才發現他還在後面。",
        {
            "type": "comment",
            "text": "source line 711: 停頓"
        },
        "\t[藍衣警察]這個妳剛剛怎麼沒說？",
        "\t[店員]我……",
        "\t[店員]我以為沒有被打、沒有被搶，就不算什麼。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]誰跟你說的？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]沒有人。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]那就不要自己幫他找理由。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 724: 可露凱朝男子走去"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]她是不是有點生氣？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]她一直都那樣。",
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]也是。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 732: 場景短暫切換"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]證件。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[男子]我只是站在這裡。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]我知道。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]證件。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[男子]我又沒犯法。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]那你應該很樂意配合。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[男子]……",
        {
            "type": "comment",
            "text": "source line 747: 停頓"
        },
        "事情最後沒有變成什麼大案子。",
        "沒有逮捕，也沒有值得特別寫上一筆的功勞。",
        "男人在被警告與確認身分後離開，附近巡邏也多了一個需要注意的人。",
        {
            "type": "comment",
            "text": "source line 753: 場景切換"
        },
        {
            "type": "comment",
            "text": "source line 754: 地點:秋葉原警察局・值班區"
        },
        {
            "type": "playBgm",
            "name": "bossa_casual_shop.mp3",
            "keep": true
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]浪費時間。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[藍衣警察]至少人家安心了。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]這又不會記功。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]妳真的每次都要算這個喔。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]不然算什麼？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source line 767: SE:警察局大門打開"
        },
        "\t[店員]那個……",
        {
            "type": "comment",
            "text": "source line 771: 店員走進來"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]又怎麼了？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]沒、沒有出事。",
        "\t[店員]我是想說，剛才忘記跟妳道謝。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]謝謝妳。",
        "\t[店員]我本來一直覺得，是不是要真的出了什麼事，警察才會管。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]他還沒做什麼能直接抓人的事。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]我知道。",
        "\t[店員]可是妳有來。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]所以……",
        "\t[店員]如果之後又有事情，我可以再找妳嗎？",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]報案不是點名制度。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]喔……",
        {
            "type": "comment",
            "text": "source line 797: 店員明顯有些失望"
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]但是你可以說之前的紀錄在我這裡。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]真的嗎？",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]這樣比較快。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[店員]好。",
        "\t[店員]謝謝妳，可露凱警官。",
        {
            "type": "comment",
            "text": "source line 810: 店員離開"
        },
        {
            "type": "comment",
            "text": "source line 812: 停頓"
        },
        "\t[藍衣警察]被指名了耶。",
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]閉嘴。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]這有功勞嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]沒有。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]能升官嗎？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]不能。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]那好像也不是什麼都沒拿到。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]至少人家記得妳。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]記得我有什麼用？",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]不知道。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "keng_neutral_portrait.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[梗平]不過她剛才看到妳的時候，好像就沒那麼怕了。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]……",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 20,
            "image": "kelukai_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        "\t[可露凱]那是她的事。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "comment",
            "text": "source: project/story/可露凱.txt lines 595-end; full transcription"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('kelukai_4'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
