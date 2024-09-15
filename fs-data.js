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
            'spec': 0
        },
        {
            'name': 'Burt',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Solaine',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Boris',
            'merc': false,
            'spec': 1
        },
        {
            'name': 'Benedictus',
            'merc': false,
            'spec': 2
        },
        {
            'name': 'Léo',
            'merc': false,
            'spec': 1
        },
        {
            'name': 'Muriel',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Blaze',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Luana',
            'merc': false,
            'spec': 2
        },
        {
            'name': 'Valerius',
            'merc': false,
            'spec': 1
        },
        {
            'name': 'Astrid',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Ina',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Fini',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Asmondai',
            'merc': false,
            'spec': 1
        },
        {
            'name': 'Danysa',
            'merc': false,
            'spec': 1
        },
        {
            'name': 'Iseris',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Belien',
            'merc': false,
            'spec': 2
        },
        {
            'name': 'Sely',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Randal',
            'merc': false,
            'spec': 1
        },
        {
            'name': 'Molly',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Layla',
            'merc': false,
            'spec': 2
        },
        {
            'name': 'Joe',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Hongyu',
            'merc': false,
            'spec': 0
        },
        {
            'name': 'Amun',
            'merc': false,
            'spec': 0
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
            'baseEffectJewel' : 0
        },
        {
            'name': 'Ordinaire',
            'maxLevel' : 2,
            'baseEffectJewel' : 200
        },
        {
            'name': 'Extraordinaire',
            'maxLevel' : 4,
            'baseEffectJewel' : 400
        },
        {
            'name': 'Rare',
            'maxLevel' : 6,
            'baseEffectJewel' : 800
        },
        {
            'name': 'Épique',
            'maxLevel' : 8,
            'baseEffectJewel' : 1600
        },
        {
            'name': 'Légendaire',
            'maxLevel' : 10,
            'baseEffectJewel' : 3200
        },
        {
            'name': 'Mythique',
            'maxLevel' : 12,
            'baseEffectJewel' : 6400
        },
        {
            'name': 'Titan',
            'maxLevel' : 14,
            'baseEffectJewel' : 12800
        }
    ],
	'jewel' : [
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
    'jewelUpgradeEffect' : [0, 150, 200, 300, 400, 600, 800, 1200, 1600, 2200, 3200, 4800, 6400, 9600, 12800],
    'jewelUpgradeCost' : {
        'tier1' : [30, 60, 120, 240, 480, 960, 1920, 3840, 5760, 8640, 12960, 19440, 38880, 77760],
        'tier2' : [60, 120, 240, 480, 960, 1920, 3840, 7680, 11520, 17280, 25920, 38880, 77760, 155520]
    }
};