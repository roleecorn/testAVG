var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop)"
			},
			{
				"type": "comment",
				"text": "解除引用前勿删除此事件"
			},
			{
				"type": "comment",
				"text": "玩家在快捷列表（V键）中可以使用本公共事件"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]你有多余的钥匙想要出售吗？",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"color": [
									255,
									255,
									0,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（50金币）",
								"color": [
									0,
									0,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"Akiba地點互動": [
			{
				"type": "comment",
				"text": "秋葉原地點事件入口。arg1=x, arg2=y, arg3=floorId, arg4=前景層素材編號；店名由 project/location-mappings.json 維護。"
			},
			{
				"type": "waitAsync"
			},
			{
				"type": "setValue",
				"name": "flag:akiba_last_x",
				"operator": "=",
				"value": "flag:arg1"
			},
			{
				"type": "setValue",
				"name": "flag:akiba_last_y",
				"operator": "=",
				"value": "flag:arg2"
			},
			{
				"type": "setValue",
				"name": "flag:akiba_last_floorId",
				"operator": "=",
				"value": "flag:arg3"
			},
			{
				"type": "setValue",
				"name": "flag:akiba_last_blockId",
				"operator": "=",
				"value": "flag:arg4"
			},
			{
				"type": "setValue",
				"name": "flag:akiba_last_tileNumber",
				"operator": "=",
				"value": "flag:arg4"
			},
			{
				"type": "function",
				"function": "function () {\n\tvar x = core.getFlag('arg1', core.getHeroLoc('x'));\n\tvar y = core.getFlag('arg2', core.getHeroLoc('y'));\n\tvar floorId = core.getFlag('arg3', core.status.floorId);\n\tvar info = core.plugin.getLocationInfo(floorId, x, y);\n\tcore.setFlag('akiba_last_locationId', info.id);\n\tcore.setFlag('akiba_last_placeName', info.name);\n\tcore.setFlag('akiba_last_locationInfo', info);\n}"
			},
			{
				"type": "function",
				"function": "function () {\n\tcore.plugin.showAkibaLocationEventChoices();\n}"
			}
		]
	}
}
