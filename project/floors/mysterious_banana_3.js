main.floors.mysterious_banana_3=
{
    "floorId": "mysterious_banana_3",
    "title": "神秘香蕉人：好感度3",
    "name": "神秘香蕉人：好感度3",
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
            "name": "banana_elevator_bg.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "eachArrive": [
        {
            "type": "showImage",
            "code": 20,
            "image": "banana_sad.png",
            "loc": [
                "portraitSpeakerX",
                "portraitSpeakerY"
            ]
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "banana_eevee_belt.jpg",
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
        "\t[神秘香蕉人]水伊布被擄走了，請幫幫我找回他。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 0
        },
        {
            "type": "choices",
            "text": "要不要協助神秘香蕉人？",
            "choices": [
                {
                    "text": "協助",
                    "action": [
                        "\t[梗平]好，告訴我你需要什麼幫助。"
                    ]
                },
                {
                    "text": "拒絕",
                    "action": [
                        "\t[梗平]我還是先離開這裡吧。"
                    ]
                }
            ]
        },
        {
            "type": "showImage",
            "code": 30,
            "image": "banana_muscle_keng.jpg",
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
        {
            "type": "comment",
            "text": "source: project/story/神秘香蕉人.txt lines 332-619"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.addAkibaEvent({ id: 'mysterious_banana_4', title: '好感度4', locations: ['park'], floorId: 'mysterious_banana_4', once: true }); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.completeAkibaEvent('mysterious_banana_3'); }"
        },
        {
            "type": "function",
            "function": "function () { core.plugin.returnToAkiba(); }"
        }
    ]
}
