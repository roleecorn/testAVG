main.floors.mapo_1_5=
{
    "floorId": "mapo_1_5",
    "title": "麻婆豆腐篇 1-5",
    "name": "1-5",
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [
        {
            "name": "scene_mapo_shop.png",
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
    "bgm": "bgm.mp3",
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
            "background": "winskin.png",
            "titlefont": 22,
            "textfont": 20,
            "lineHeight": 30,
            "time": 10,
            "letterSpacing": 0,
            "animateTime": 120
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
        "\t[旁白]兩人順著地址來到了一間小餐館，有大量的男人整齊地「躺」在店門口。",
        {
            "type": "showImage",
            "code": 20,
            "image": "scene_mapo_cg.png",
            "sloc": [
                0,
                0,
                416,
                416
            ],
            "loc": [
                0,
                0,
                416,
                416
            ],
            "opacity": 1,
            "time": 300
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
        "\t[CG]麻婆豆腐店門口。",
        {
            "type": "hideImage",
            "code": 20,
            "time": 300
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
        {
            "type": "showImage",
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]人像沙丁魚一樣躺在這裡啊！",
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
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]秋葉原就是這樣的啦。",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]等等？我好像看到失去聯絡的人了。",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]不好，這家店就是修卡的據點！快，變身！",
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
            "code": 11,
            "image": "suou_sad_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]原來是吃飯吃到失聯啊，他們。",
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
            "image": "keng_surprised_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]等一下，我已經完全明白 A 之前喊救命的原因了，是好吃到喊救命。",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]東京居然有這種等級的料理嗎？難道它會發光？",
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
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]表妹你第一次來東京，表哥來請你吃頓好的。",
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
            "code": 11,
            "image": "suou_surprised_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]那你點什麼我就吃什麼。",
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
            "image": "keng_serious_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]既然是中華料理店，那肯定是要...",
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
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]服務員！請先來兩份免費的幸運餅乾！",
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
        "\t[麻婆店長]本店沒有提供那種東西。",
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
            "image": "keng_surprised_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]你說...什麼。",
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
            "code": 11,
            "image": "suou_angry_portrait.png",
            "loc": [260, 185],
            "opacity": 1,
            "time": 0
        },
        "\t[表妹]那應該在美國吧…仔細一看這菜單背面還寫著挑戰菜單啊…",
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
            "image": "keng_angry_portrait.png",
            "loc": [28, 210],
            "opacity": 1,
            "time": 0
        },
        "\t[梗平]假面騎士不畏懼任何挑戰！老闆，我要點這個。",
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
        "\t[旁白]隨後，一碗紅色的、看起來很不妙的麻婆豆腐被端了上來。",
{
            "type": "choices",
            "text": "\t[旁白]面對特製麻婆豆腐，梗平決定？",
            "choices": [
                {
                    "text": "假面騎士的意志啊啊啊啊啊！",
                    "action": [
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
                            "image": "keng_angry_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]爆發吧我的小宇宙，哦哦哦哦哦！",
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
                        "\t[旁白]梗平一口一口的吃下麻婆豆腐，假面騎士（？）的意志扛住了紅色醬汁的侵襲。",
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
                        "\t[路人A]那可是特製麻婆豆腐，他吃了不只一口，而是足足三口！",
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
                        "\t[路人B]大人我敬愛你呀。",
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
                        "\t[麻婆店長]吼吼，居然是承受我七成功力的好苗子，這位兄弟有沒有興趣精進麻婆道？",
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
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]請指導我吧！",
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
                            "code": 11,
                            "image": "suou_goofy_portrait.png",
                            "loc": [260, 185],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]這個人到底在說甚麼呢。",
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
                        "\t[旁白]經過了這樣那樣的訓練，充滿汗水、淚水、相遇、離別。",
                        {
                            "type": "showImage",
                            "code": 19,
                            "image": "scene_tournament.png",
                            "sloc": [
                                0,
                                0,
                                416,
                                416
                            ],
                            "loc": [
                                0,
                                0,
                                416,
                                416
                            ],
                            "opacity": 1,
                            "time": 300
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
                        "\t[旁白]隔天，梗平代表麻婆豆腐店出陣，參加殺你全家斷你手腳廚藝大賽。",
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
                        "\t[麻婆店長]記住我說過的話嗎？",
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
                            "image": "keng_angry_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]料理界不是殺就是被殺。",
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
                        "\t[麻婆店長]沒錯，我們抵達的正是時候，你看。",
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
                        "\t[旁白]群眾的歡呼使整個空間在震動。會場上方的大螢幕顯示目前正在對決的兩位料理人。",
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
                        "\t[螢幕]現代最強麵包師 迪奧\n對陣\n史上最強生魚片職人 宿儺",
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
                        "\t[迪奧]怎麼可能，我迪奧，居然會敗給區區的海鮮。",
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
                        "\t[宿儺]這就是你的敗因，抱著你的麵包溺死吧。",
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
                        "\t[迪奧]咕哇阿阿阿阿！",
                        {
                            "type": "screenFlash",
                            "color": [
                                255,
                                255,
                                255,
                                1
                            ],
                            "time": 300,
                            "times": 1
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
                        "\t[芹澤]我們的第一位選手不幸的敗下陣來，希望下一位選手會更好。",
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
                        "\t[麻婆店長]還是太輕敵了，他本可以早早結束比賽的。",
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
                        "\t[旁白]隨後一陣激烈的下水餃，到場的廚師們一一被宿儺大廚擊敗。",
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
                        "\t[記者]比賽現在進入中場休息。你認為剩下的選手中有誰有望衝擊宿儺大廚？",
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
                        "\t[迪奧]嗯？梗平吧？",
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
                        "\t[李嚴]要視具體情況而定，不過我認為是梗平。",
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
                        "\t[哥吉拉]應該是梗平吧？如果把宿儺手指也計算在內的話可能會有不一樣。",
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
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]除了我和表妹以外的某人吧。",
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
                        "\t[麻婆店長]梗平，你去打敗宿儺。",
                        {
                            "type": "animate",
                            "name": "hand",
                            "loc": [
                                6,
                                6
                            ]
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
                        "\t[芹澤]中場結束，接下來是備受期待的下半場首戰。",
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
                        "\t[芹澤]東邊，代表麻婆豆腐店出戰的梗平廚師！",
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
                            "image": "keng_surprised_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]......我打宿儺？真的假的？",
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
                        "\t[芹澤]西邊，最強！最兇！最狂！常勝無敗，刀尖上的藝術，宿儺！",
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
                        "\t[宿儺]別讓我無聊，凡種。",
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
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]會贏哦。",
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
                        "\t[旁白]梗平朝著宿儺大廚發起了衝鋒。結果是毫不令人意外的。",
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
                        "\t[旁白]梗平，滿身瘡痍。",
                        {
                            "type": "showImage",
                            "code": 20,
                            "image": "scene_badend.png",
                            "sloc": [
                                0,
                                0,
                                416,
                                416
                            ],
                            "loc": [
                                0,
                                0,
                                416,
                                416
                            ],
                            "opacity": 0.75,
                            "time": 300
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
                        "\t[CG]2.5 梗平。",
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
                            "image": "keng_serious_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]到此為止了嗎？拼盡全力無法戰勝。",
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
                        "\t[？]你不是還有生命嗎？",
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
                        "\t[旁白]並不存在的回憶，在梗平腦海中湧現。",
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
                            "image": "keng_serious_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]我跟著師傅學習了數十年的麻婆道，在這個過程，有太多的人將他的意志託付給了我。",
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
                            "image": "keng_serious_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]大師兄在吃下第一口麻婆豆腐時，因為承受不住離去了。",
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
                            "image": "keng_serious_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]二師兄也因為在煮醬時候，不小心揉到了眼睛早早退場。",
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
                            "image": "keng_serious_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]我的表妹，也在修行的過程中離開了我們。",
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
                            "code": 11,
                            "image": "suou_angry_portrait.png",
                            "loc": [260, 185],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]我沒死哦。",
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
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]安靜，這部分很重要。",
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
                            "image": "keng_surprised_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]說到哪來著？......不行，想不起來了。",
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
                            "image": "keng_angry_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]不管了，爆發吧我的小宇宙，哦哦哦哦哦！",
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
                        "\t[宿儺]什麼，不可能，竟然是失傳已久的天使麻婆豆腐！",
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
                            "image": "keng_angry_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]接下吧，這就是我跟大家的羈絆啊！！！",
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
                        "\t[芹澤]恭喜梗平選手擊敗了宿儺大廚，獲得本大賽提供的特殊獎品。",
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
                            "image": "keng_surprised_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]難不成...是假面騎士腰帶嗎？",
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
                        "\t[芹澤]恭喜他獲得了為期七天的宿儺大廚一對一教學體驗。",
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
                            "image": "keng_surprised_portrait.png",
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]不對，我還要參加 Comi…",
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
                        "\t[芹澤]該獎品無法拒絕，也不能夠轉讓。",
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
                        "\t[宿儺]好了，我們現在就開始吧。",
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
                            "loc": [28, 210],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[梗平]不要啊！",
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
                        "\t[旁白]梗平渡過了有如地獄一般的七天。等參加完 Comike 的朋友們再次發現梗平時，他已經完全燃盡了。",
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
                        "\t[BE3]食神。",
                        {
                            "type": "hideImage",
                            "code": 19,
                            "time": 200,
                            "async": true
                        },
                        {
                            "type": "hideImage",
                            "code": 20,
                            "time": 200
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "mapo_1_5",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 500
                        }
                    ]
                },
                {
                    "text": "麻婆豆腐強如怪物，梗平拚盡全力無法戰勝",
                    "action": [
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
                        "\t[旁白]梗平夾起了豆腐。",
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
                        "\t[旁白]梗平把麻婆豆腐送進了自己口中。",
                        {
                            "type": "screenFlash",
                            "color": [
                                255,
                                0,
                                0,
                                0.55
                            ],
                            "time": 300,
                            "times": 1
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
                        "\t[旁白]梗平倒下了，重複一遍，梗平倒下了。",
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
                        "\t[旁白]麻婆豆腐，勝。",
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
                        "\t[旁白]與此同時的表妹用盡最後一絲力氣擊敗了麻婆豆腐。",
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
                            "code": 11,
                            "image": "suou_angry_portrait.png",
                            "loc": [260, 185],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]差點死在這裡，這不愧是東京。",
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
                            "code": 11,
                            "image": "suou_smile_portrait.png",
                            "loc": [260, 185],
                            "opacity": 1,
                            "time": 0
                        },
                        "\t[表妹]對了，老闆，請問這裡可以拍照嗎？",
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
                        "\t[麻婆店長]你隨意。",
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
                        "\t[旁白]表妹用手機跟死掉的梗平合照了一張。",
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
                        "\t[旁白]然後看著他被客人們抬出店外，加入了躺在門口的行列。",
                        {
                            "type": "changeFloor",
                            "floorId": "mapo_1_6",
                            "loc": [
                                6,
                                10
                            ],
                            "direction": "up",
                            "time": 500
                        }
                    ]
                }
            ]
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


