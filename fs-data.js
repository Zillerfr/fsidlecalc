/**
 * ===================================
 * Local Storage name
 * ===================================
 */
const localStorageItemName = 'firestoneIdleRPGCalculator';

/**
 * ===================================
 * Saved inputs
 * ===================================
 */
var dataInput = {};

/**
 * ===================================
 * Game base data
 * ===================================
 */
const itemTypes = ['gears', 'jewels', 'soulstones'];

const dataInformation = {
	'specList': [
        {
            'name': 'Destructeur',
            'wmStatBonus': {
                'damage': 40,
                'health': 0,
                'armor': 0
            }
        },
        {
            'name': 'Tank',
            'wmStatBonus': {
                'damage': 0,
                'health': 0,
                'armor': 40
            }
        },
        {
            'name': 'Guérisseur',
            'wmStatBonus': {
                'damage': 0,
                'health': 40,
                'armor': 0
            }
        }
    ],
    'characters' : [
        {
            'name': 'Talia',
            'merc': false,
            'spec': 0,
            'unlockStage': 2
        },
        {
            'name': 'Burt',
            'merc': false,
            'spec': 0,
            'unlockStage': 4
        },
        {
            'name': 'Solaine',
            'merc': false,
            'spec': 0,
            'unlockStage': 7
        },
        {
            'name': 'Boris',
            'merc': false,
            'spec': 1,
            'unlockStage': 30
        },
        {
            'name': 'Benedictus',
            'merc': false,
            'spec': 2,
            'unlockStage': 50
        },
        {
            'name': 'Léo',
            'merc': false,
            'spec': 1,
            'unlockStage': 150
        },
        {
            'name': 'Muriel',
            'merc': false,
            'spec': 0,
            'unlockStage': 275
        },
        {
            'name': 'Blaze',
            'merc': false,
            'spec': 0,
            'unlockStage': 400
        },
        {
            'name': 'Luana',
            'merc': false,
            'spec': 2,
            'unlockStage': 550
        },
        {
            'name': 'Valerius',
            'merc': false,
            'spec': 1,
            'unlockStage': 700
        },
        {
            'name': 'Astrid',
            'merc': false,
            'spec': 0,
            'unlockStage': 800
        },
        {
            'name': 'Ina',
            'merc': false,
            'spec': 0,
            'unlockStage': 900
        },
        {
            'name': 'Fini',
            'merc': false,
            'spec': 0,
            'unlockStage': 1050
        },
        {
            'name': 'Asmondai',
            'merc': false,
            'spec': 1,
            'unlockStage': 1300
        },
        {
            'name': 'Danysa',
            'merc': false,
            'spec': 1,
            'unlockStage': 1550
        },
        {
            'name': 'Iseris',
            'merc': false,
            'spec': 0,
            'unlockStage': 1800
        },
        {
            'name': 'Belien',
            'merc': false,
            'spec': 2,
            'unlockStage': 2050
        },
        {
            'name': 'Sely',
            'merc': false,
            'spec': 0,
            'unlockStage': 2300
        },
        {
            'name': 'Randal',
            'merc': false,
            'spec': 1,
            'unlockStage': 2550
        },
        {
            'name': 'Molly',
            'merc': false,
            'spec': 0,
            'unlockStage': 2800
        },
        {
            'name': 'Layla',
            'merc': false,
            'spec': 2,
            'unlockStage': 3050
        },
        {
            'name': 'Joe',
            'merc': false,
            'spec': 0,
            'unlockStage': 3300
        },
        {
            'name': 'Hongyu',
            'merc': false,
            'spec': 0,
            'unlockStage': 3600
        },
        {
            'name': 'Amun',
            'merc': false,
            'spec': 0,
            'unlockStage': 3900
        },
        {
            'name': 'Panko',
            'merc': true,
            'spec': 1
        },
        {
            'name': 'Cirilo',
            'merc': true,
            'spec': 0
        },
        {
            'name': 'Vilon',
            'merc': true,
            'spec': 0
        },
        {
            'name': 'Zelea',
            'merc': true,
            'spec': 0
        },
        {
            'name': 'Yavo',
            'merc': true,
            'spec': 2
        },
        {
            'name': 'Anzo',
            'merc': true,
            'spec': 1
        },
        {
            'name': 'Zoruk',
            'merc': true,
            'spec': 2
        },
        {
            'name': 'Rickie',
            'merc': true,
            'spec': 0
        },
        {
            'name': 'Jess',
            'merc': true,
            'spec': 0
        }
    ],
    'rarities' : [
        {
            'name': 'Aucun',
            'maxLevel' : 0,
            'baseEffectGear' : {
                'tier1' : 0,
                'tier2' : 0,
                'ring' : 0,
                'relic' : 0
            },
            'baseEffectJewel' : 0,
            'baseEffectSoulstone' : {
                'tier1' : 0,
                'wisdom' : 0,
                'faith' : 0,
                'charisma' : 0
            },
        },
        {
            'name': 'Ordinaire',
            'maxLevel' : 2,
            'baseEffectGear' : {
                'tier1' : 4,
                'tier2' : 3,
                'ring' : 2.5,
                'relic' : 8.5
            },
            'baseEffectJewel' : 200
        },
        {
            'name': 'Extraordinaire',
            'maxLevel' : 4,
            'baseEffectGear' : {
                'tier1' : 10,
                'tier2' : 8,
                'ring' : 5.5,
                'relic' : 23.5
            },
            'baseEffectJewel' : 400
        },
        {
            'name': 'Rare',
            'maxLevel' : 6,
            'baseEffectGear' : {
                'tier1' : 28,
                'tier2' : 21,
                'ring' : 15,
                'relic' : 68.5
            },
            'baseEffectJewel' : 800
        },
        {
            'name': 'Épique',
            'maxLevel' : 8,
            'baseEffectGear' : {
                'tier1' : 88,
                'tier2' : 62,
                'ring' : 42,
                'relic' : 203.5
            },
            'baseEffectJewel' : 1600
        },
        {
            'name': 'Légendaire',
            'maxLevel' : 10,
            'baseEffectGear' : {
                'tier1' : 244,
                'tier2' : 183,
                'ring' : 123,
                'relic' : 608.5
            },
            'baseEffectJewel' : 3200
        },
        {
            'name': 'Mythique',
            'maxLevel' : 12,
            'baseEffectGear' : {
                'tier1' : 730,
                'tier2' : 548,
                'ring' : 366,
                'relic' : 1823.5
            },
            'baseEffectJewel' : 6400
        },
        {
            'name': 'Titan',
            'maxLevel' : 14,
            'baseEffectGear' : {
                'tier1' : 2188,
                'tier2' : 1641,
                'ring' : 1095,
                'relic' : 5468.5
            },
            'baseEffectJewel' : 12800
        }
    ],
    'gears' : [
        {
            'name': 'Arme',
            'code': 'weapon',
            'tier': 1,
            'position': 1,
            'allCharacters': false,
            'rarityUpgrade': 'tier1',
            'damage': 1,
            'health': 0,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Torse',
            'tier': 1,
            'position': 2,
            'allCharacters': false,
            'rarityUpgrade': 'tier1',
            'damage': 0,
            'health': 1,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Bottes',
            'tier': 1,
            'position': 3,
            'allCharacters': false,
            'rarityUpgrade': 'tier1',
            'damage': 0,
            'health': 0,
            'resistance': 1,
            'gold' : 0
        },
        {
            'name': 'Poignet',
            'tier': 2,
            'position': 1,
            'allCharacters': true,
            'rarityUpgrade': 'tier2',
            'damage': 1,
            'health': 0,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Épaule',
            'tier': 2,
            'position': 2,
            'allCharacters': true,
            'rarityUpgrade': 'tier2',
            'damage': 0,
            'health': 1,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Ceinture',
            'tier': 2,
            'position': 3,
            'allCharacters': true,
            'rarityUpgrade': 'tier2',
            'damage': 0,
            'health': 0,
            'resistance': 1,
            'gold' : 0
        },
        {
            'name': 'Anneau',
            'tier': 3,
            'position': 1,
            'allCharacters': false,
            'rarityUpgrade': 'ring',
            'damage': 0,
            'health': 0,
            'resistance': 0,
            'gold' : 1
        },
        {
            'name': 'Relique',
            'tier': 3,
            'position': 2,
            'allCharacters': true,
            'rarityUpgrade': 'relic',
            'damage': 1,
            'health': 1,
            'resistance': 1,
            'gold' : 0
        }
    ],
	'jewels' : [
        {
            'name': 'Ânkh',
            'tier': 1,
            'position': 1,
            'damage': 1,
            'health': 0,
            'armor': 0
        },
        {
            'name': 'Rune',
            'tier': 1,
            'position': 2,
            'damage': 0,
            'health': 1,
            'armor': 0
        },
        {
            'name': 'Idole',
            'tier': 1,
            'position': 3,
            'damage': 0,
            'health': 0,
            'armor': 1
        },
        {
            'name': 'Talisman',
            'tier': 2,
            'position': 1,
            'damage': 1,
            'health': 1,
            'armor': 0
        },
        {
            'name': 'Collier',
            'tier': 2,
            'position': 2,
            'damage': 1,
            'health': 0,
            'armor': 1
        },
        {
            'name': 'Babiole',
            'tier': 2,
            'position': 3,
            'damage': 0,
            'health': 1,
            'armor': 1
        }
    ],
    'soulstones' : [
        {
            'name': 'Concentration',
            'tier': 1,
            'position': 1,
            'rarityUpgrade': 'tier1',
            'damage': 1,
            'health': 0,
            'resistance': 0,
            'firestones': 0,
            'gold' : 0
        },
        {
            'name': 'Endurance',
            'tier': 1,
            'position': 2,
            'rarityUpgrade': 'tier1',
            'damage': 0,
            'health': 1,
            'resistance': 0,
            'firestones': 0,
            'gold' : 0
        },
        {
            'name': 'Courage',
            'tier': 1,
            'position': 3,
            'rarityUpgrade': 'tier1',
            'damage': 0,
            'health': 0,
            'resistance': 1,
            'firestones': 0,
            'gold' : 0
        },
        {
            'name': 'Sagesse',
            'tier': 2,
            'position': 1,
            'rarityUpgrade': 'wisdom',
            'damage': 0,
            'health': 0,
            'resistance': 0,
            'firestones': 0,
            'gold' : 1
        },
        {
            'name': 'Foi',
            'tier': 2,
            'position': 2,
            'rarityUpgrade': 'faith',
            'damage': 0,
            'health': 0,
            'resistance': 0,
            'firestones': 1,
            'gold' : 0
        },
        {
            'name': 'Charisme',
            'tier': 2,
            'position': 3,
            'rarityUpgrade': 'charisma',
            'damage': 1,
            'health': 1,
            'resistance': 1,
            'firestones': 0,
            'gold' : 0
        }
    ],    
    'gearUpgradeEffect' : [0, 2, 4, 8, 15, 30, 60, 120, 250, 500, 1000, 2000, 4000, 8000, 16000],
    'gearUpgradeCost' : {
        'tier1' : [30, 60, 120, 240, 480, 960, 1920, 3840, 5760, 8640, 12960, 19440, 38880, 77760],
        'tier2' : [60, 120, 240, 480, 960, 1920, 3840, 7680, 11520, 17280, 25920, 38880, 77760, 155520],
        'tier3' : [120, 240, 480, 960, 1920, 3840, 7680, 15360, 23040, 34560, 51840, 77760, 155520, 311040]
    },
    'jewelUpgradeEffect' : [0, 150, 200, 300, 400, 600, 800, 1200, 1600, 2200, 3200, 4800, 6400, 9600, 12800],
    'jewelUpgradeCost' : {
        'tier1' : [30, 60, 120, 240, 480, 960, 1920, 3840, 5760, 8640, 12960, 19440, 38880, 77760],
        'tier2' : [60, 120, 240, 480, 960, 1920, 3840, 7680, 11520, 17280, 25920, 38880, 77760, 155520]
    },
    'soulStoneUpgradeEffect' : [0, 150, 200, 300, 400, 600, 800, 1200, 1600, 2200, 3200, 4800, 6400, 9600, 12800],
    'soulStoneUpgradeCost' : {
        'tier1' : [30, 60, 120, 240, 480, 960, 1920, 3840, 5760, 8640, 12960, 19440, 38880, 77760],
        'tier2' : [120, 240, 480, 960, 1920, 3840, 7680, 15360, 23040, 34560, 51840, 77760, 155520, 311040]
    }
};

/*

Formulas

- Gear : https://firestone-idle-rpg.fandom.com/wiki/Gear
    effect = (rarities[itemRarity].baseEffectGear.[currentItem.rarityUpgrade] * gearUpgradeEffect[itemLevel] - 1) * 100%

- Jewel : https://firestone-idle-rpg.fandom.com/wiki/Jewels
    effect = rarities[itemRarity].baseEffectJewel + jewelUpgradeEffect[jewelLevel]

- Soulstones : https://firestone-idle-rpg.fandom.com/wiki/Soulstones
    effect = (rarities[itemRarity].baseEffectSoulstone.[currentItem.rarityUpgrade] * soulStoneUpgradeEffect[itemLevel] - 1) * 100%

*/