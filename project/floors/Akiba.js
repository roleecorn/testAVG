main.floors.Akiba=
{
    "floorId": "Akiba",
    "title": "秋葉原",
    "name": "秋葉原",
    "width": 25,
    "height": 25,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "15,0": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Apple 專賣店\"]);\n}"
                }
            ]
        },
        "16,0": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Apple 專賣店\"]);\n}"
                }
            ]
        },
        "7,1": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"怪談洞窟\"]);\n}"
                }
            ]
        },
        "8,1": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"怪談洞窟\"]);\n}"
                }
            ]
        },
        "11,1": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"竹林低價店\"]);\n}"
                }
            ]
        },
        "12,1": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"竹林低價店\"]);\n}"
                }
            ]
        },
        "15,1": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Apple 專賣店\"]);\n}"
                }
            ]
        },
        "16,1": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Apple 專賣店\"]);\n}"
                }
            ]
        },
        "7,2": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"怪談洞窟\"]);\n}"
                }
            ]
        },
        "8,2": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"怪談洞窟\"]);\n}"
                }
            ]
        },
        "11,2": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"竹林低價店\"]);\n}"
                }
            ]
        },
        "12,2": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"竹林低價店\"]);\n}"
                }
            ]
        },
        "22,3": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"集合住宅\"]);\n}"
                }
            ]
        },
        "23,3": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"集合住宅\"]);\n}"
                }
            ]
        },
        "22,4": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"集合住宅\"]);\n}"
                }
            ]
        },
        "23,4": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"集合住宅\"]);\n}"
                }
            ]
        },
        "17,5": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"櫻花料亭\"]);\n}"
                }
            ]
        },
        "18,5": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"櫻花料亭\"]);\n}"
                }
            ]
        },
        "11,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"麻雀館\"]);\n}"
                }
            ]
        },
        "12,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"麻雀館\"]);\n}"
                }
            ]
        },
        "14,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"馬券看板\"]);\n}"
                }
            ]
        },
        "15,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"馬券看板\"]);\n}"
                }
            ]
        },
        "17,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"櫻花料亭\"]);\n}"
                }
            ]
        },
        "18,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"櫻花料亭\"]);\n}"
                }
            ]
        },
        "11,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"麻雀館\"]);\n}"
                }
            ]
        },
        "12,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"麻雀館\"]);\n}"
                }
            ]
        },
        "14,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"馬券看板\"]);\n}"
                }
            ]
        },
        "15,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"馬券看板\"]);\n}"
                }
            ]
        },
        "6,8": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"古本屋\"]);\n}"
                }
            ]
        },
        "7,8": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"古本屋\"]);\n}"
                }
            ]
        },
        "6,9": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"古本屋\"]);\n}"
                }
            ]
        },
        "7,9": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"古本屋\"]);\n}"
                }
            ]
        },
        "10,9": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"女僕咖啡\"]);\n}"
                }
            ]
        },
        "11,9": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"女僕咖啡\"]);\n}"
                }
            ]
        },
        "10,10": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"女僕咖啡\"]);\n}"
                }
            ]
        },
        "11,10": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"女僕咖啡\"]);\n}"
                }
            ]
        },
        "14,10": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"探偵事務所\"]);\n}"
                }
            ]
        },
        "15,10": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"探偵事務所\"]);\n}"
                }
            ]
        },
        "6,11": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"寶くじ売場\"]);\n}"
                }
            ]
        },
        "7,11": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"寶くじ売場\"]);\n}"
                }
            ]
        },
        "10,11": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"錢湯\"]);\n}"
                }
            ]
        },
        "11,11": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"錢湯\"]);\n}"
                }
            ]
        },
        "14,11": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"探偵事務所\"]);\n}"
                }
            ]
        },
        "15,11": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"探偵事務所\"]);\n}"
                }
            ]
        },
        "6,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"寶くじ売場\"]);\n}"
                }
            ]
        },
        "7,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"寶くじ売場\"]);\n}"
                }
            ]
        },
        "10,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"錢湯\"]);\n}"
                }
            ]
        },
        "11,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"錢湯\"]);\n}"
                }
            ]
        },
        "14,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"景品交換所\"]);\n}"
                }
            ]
        },
        "15,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"景品交換所\"]);\n}"
                }
            ]
        },
        "17,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Restaurant\"]);\n}"
                }
            ]
        },
        "18,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Restaurant\"]);\n}"
                }
            ]
        },
        "22,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"雑貨屋\"]);\n}"
                }
            ]
        },
        "23,12": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"雑貨屋\"]);\n}"
                }
            ]
        },
        "14,13": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"景品交換所\"]);\n}"
                }
            ]
        },
        "15,13": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"景品交換所\"]);\n}"
                }
            ]
        },
        "17,13": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Restaurant\"]);\n}"
                }
            ]
        },
        "18,13": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"Restaurant\"]);\n}"
                }
            ]
        },
        "22,13": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"雑貨屋\"]);\n}"
                }
            ]
        },
        "23,13": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"雑貨屋\"]);\n}"
                }
            ]
        },
        "7,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"音樂展演館\"]);\n}"
                }
            ]
        },
        "8,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"音樂展演館\"]);\n}"
                }
            ]
        },
        "9,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"音樂展演館\"]);\n}"
                }
            ]
        },
        "11,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"青本書店\"]);\n}"
                }
            ]
        },
        "12,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"青本書店\"]);\n}"
                }
            ]
        },
        "15,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"GAME 中心\"]);\n}"
                }
            ]
        },
        "16,15": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"GAME 中心\"]);\n}"
                }
            ]
        },
        "1,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"鳥居入口\"]);\n}"
                }
            ]
        },
        "2,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"鳥居入口\"]);\n}"
                }
            ]
        },
        "7,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"音樂展演館\"]);\n}"
                }
            ]
        },
        "8,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"音樂展演館\"]);\n}"
                }
            ]
        },
        "9,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"音樂展演館\"]);\n}"
                }
            ]
        },
        "11,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"青本書店\"]);\n}"
                }
            ]
        },
        "12,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"青本書店\"]);\n}"
                }
            ]
        },
        "15,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"GAME 中心\"]);\n}"
                }
            ]
        },
        "16,16": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"GAME 中心\"]);\n}"
                }
            ]
        },
        "1,17": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"鳥居入口\"]);\n}"
                }
            ]
        },
        "2,17": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"鳥居入口\"]);\n}"
                }
            ]
        },
        "7,18": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"公園\"]);\n}"
                }
            ]
        },
        "8,18": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"公園\"]);\n}"
                }
            ]
        },
        "22,18": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"高架電車\"]);\n}"
                }
            ]
        },
        "23,18": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"高架電車\"]);\n}"
                }
            ]
        },
        "7,19": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"公園\"]);\n}"
                }
            ]
        },
        "8,19": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"公園\"]);\n}"
                }
            ]
        },
        "11,19": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"メロン店\"]);\n}"
                }
            ]
        },
        "12,19": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"メロン店\"]);\n}"
                }
            ]
        },
        "22,19": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"高架電車\"]);\n}"
                }
            ]
        },
        "23,19": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"高架電車\"]);\n}"
                }
            ]
        },
        "4,20": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"兔子伴手禮\"]);\n}"
                }
            ]
        },
        "5,20": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"兔子伴手禮\"]);\n}"
                }
            ]
        },
        "11,20": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"メロン店\"]);\n}"
                }
            ]
        },
        "12,20": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"メロン店\"]);\n}"
                }
            ]
        },
        "17,20": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"商務旅館\"]);\n}"
                }
            ]
        },
        "18,20": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"商務旅館\"]);\n}"
                }
            ]
        },
        "4,21": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"兔子伴手禮\"]);\n}"
                }
            ]
        },
        "5,21": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"兔子伴手禮\"]);\n}"
                }
            ]
        },
        "17,21": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"商務旅館\"]);\n}"
                }
            ]
        },
        "18,21": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"商務旅館\"]);\n}"
                }
            ]
        },
        "12,22": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"24 小時便利店\"]);\n}"
                }
            ]
        },
        "13,22": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"24 小時便利店\"]);\n}"
                }
            ]
        },
        "15,22": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"交番\"]);\n}"
                }
            ]
        },
        "16,22": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"交番\"]);\n}"
                }
            ]
        },
        "17,22": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"交番\"]);\n}"
                }
            ]
        },
        "18,22": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"交番\"]);\n}"
                }
            ]
        },
        "12,23": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"24 小時便利店\"]);\n}"
                }
            ]
        },
        "13,23": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"24 小時便利店\"]);\n}"
                }
            ]
        },
        "15,23": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"交番\"]);\n}"
                }
            ]
        },
        "16,23": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"交番\"]);\n}"
                }
            ]
        },
        "6,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"中華料理\"]);\n}"
                }
            ]
        },
        "6,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"中華料理\"]);\n}"
                }
            ]
        },
        "7,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"中華料理\"]);\n}"
                }
            ]
        },
        "7,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"中華料理\"]);\n}"
                }
            ]
        },
        "8,6": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"中華料理\"]);\n}"
                }
            ]
        },
        "8,7": {
            "trigger": "action",
            "enable": true,
            "noPass": false,
            "displayDamage": false,
            "data": [
                {
                    "type": "function",
                    "function": "function () {\n\tvar x = core.getHeroLoc('x'), y = core.getHeroLoc('y');\n\tcore.insertCommonEvent('Akiba地點互動', [x, y, core.status.floorId, core.getBlockId(x, y), \"中華料理\"]);\n}"
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30008,30009,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,30112,30113,  0,  0,30006,30007,  0,  0,30020,30021,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,30124,30125,  0,  0,30018,30019,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30010,30011,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30022,30023,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30075,30076,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30038,30039,30040,  0,  0,30078,30079,  0,30081,30082,  0,30087,30088,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30050,30051,30052,  0,  0,30090,30091,  0,30093,30094,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30146,30147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30158,30159,  0,  0,30072,30073,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30084,30085,  0,  0,30149,30150,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30006,30007,  0,  0,30044,30045,  0,  0,30161,30162,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,30018,30019,  0,  0,30056,30057,  0,  0,30115,30116,  0,30078,30079,  0,  0,  0,30155,30156,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30127,30128,  0,30090,30091,  0,  0,  0,30167,30168,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,30192,30193,30194,  0,30008,30009,  0,  0,30008,30009,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30000,30001,  0,  0,  0,  0,30204,30205,30206,  0,30020,30021,  0,  0,30020,30021,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30012,30013,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,30112,30113,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30117,30118,  0],
    [  0,  0,  0,  0,  0,  0,  0,30124,30125,  0,  0,30006,30007,  0,  0,  0,  0,  0,  0,  0,  0,  0,30129,30130,  0],
    [  0,  0,  0,  0,30155,30156,  0,  0,  0,  0,  0,30018,30019,  0,  0,  0,  0,30149,30150,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,30167,30168,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30161,30162,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30146,30147,  0,30144,30145,30173,30174,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30158,30159,  0,30156,30157,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,313,311,311],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,313,311,311],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,300,300,313,300,300],
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,313,311,311],
    [305,305,305,305,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [305,305,305,305,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [305,305,305,305,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [305,305,305,305,311,305,305,305,305,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [305,305,305,305,311,305,305,305,305,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [305,305,305,305,311,305,305,305,305,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,311,313,311,311],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [300,300,300,300,311,300,300,300,300,311,300,300,300,311,300,300,311,300,300,311,313,313,313,313,313],
    [ 16, 16, 16, 16, 16, 16,300,300,300,311,300,300,300,311,300,300,311, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

]
}