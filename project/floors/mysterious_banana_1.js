main.floors.mysterious_banana_1=
{
    "floorId": "mysterious_banana_1",
    "title": "神秘香蕉人：好感度1",
    "name": "神秘香蕉人：好感度1",
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
    "images": [
        {
            "name": "banana_grass_bg.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "eachArrive": [
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_normal.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "banana_eevee_speed.png",
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
            "code": 30,
            "time": 0,
            "async": true
        },
        "\t[梗平]按照套路，接下來肯定會從草叢跳出邪惡組織的怪人。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        "\t[神秘香蕉人]所以……你知道嗎？",
        {
            "type": "choices",
            "text": "你知道嗎？",
            "choices": [
                {
                    "text": "恩，我知道",
                    "action": [
                        "\t[神秘香蕉人]來吧，和我一起前往天堂吧。"
                    ]
                },
                {
                    "text": "不，你是指甚麼？",
                    "action": [
                        "\t[神秘香蕉人]相逢即是有緣，下次再來吧。"
                    ]
                }
            ]
        },
        {
            "type": "comment",
            "text": "source: project/story/神秘香蕉人.txt lines 3-164; remaining unsupported CG names are tracked in TODO"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({ id: 'mysterious_banana_2', title: '好感度2', locations: ['park'], floorId: 'mysterious_banana_2', once: true }); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('mysterious_banana_1'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
