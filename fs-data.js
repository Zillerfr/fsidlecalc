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
const itemTypes = {
    'gears': {
        'nbTier': 3,
        'name': "Équipement"
    }, 
    'jewels' : {
        'nbTier': 2,
        'name': "Bijoux"
    },
    'soulstones' : {
        'nbTier': 2,
        'name': "Pierres d'âme"
    }
};

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
    'warmachines' : [
        {
            'name': 'Goliath',
            'code': 'goliath'
        },
        {
            'name': 'Forteresse',
            'code': 'fortress'
        },
        {
            'name': 'Briseterre',
            'code': 'earthshatterer'
        },
        {
            'name': 'Sentinelle',
            'code': 'sentinel'
        },
        {
            'name': 'Chasseur',
            'code': 'hunter'
        },
        {
            'name': 'Conservateur',
            'code': 'curator'
        },
        {
            'name': 'Coup de tonnerre',
            'code': 'thunderclap'
        },
        {
            'name': 'Jugement',
            'code': 'judgement'
        },
        {
            'name': 'Moissonneuse',
            'code': 'harvester'
        },
        {
            'name': 'Talos',
            'code': 'talos'
        },
        {
            'name': 'Feu d\'artfice',
            'code': 'firecracker'
        },
        {
            'name': 'Poing céleste',
            'code': 'cloudfist'
        },
        {
            'name': 'Egide',
            'code': 'aegis'
        }
    ],
    'characters' : [
        {
            'name': 'Talia',
            'code': 'talia',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 2
        },
        {
            'name': 'Burt',
            'code': 'burt',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 4
        },
        {
            'name': 'Solaine',
            'code': 'solaine',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 7
        },
        {
            'name': 'Boris',
            'code': 'boris',
            'merc': false,
            'god': false,
            'spec': 1,
            'unlockStage': 30
        },
        {
            'name': 'Benedictus',
            'code': 'benedictus',
            'merc': false,
            'god': false,
            'spec': 2,
            'unlockStage': 50
        },
        {
            'name': 'Léo',
            'code': 'leo',
            'merc': false,
            'god': false,
            'spec': 1,
            'unlockStage': 150
        },
        {
            'name': 'Muriel',
            'code': 'muriel',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 275
        },
        {
            'name': 'Blaze',
            'code': 'blaze',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 400
        },
        {
            'name': 'Luana',
            'code': 'luana',
            'merc': false,
            'god': false,
            'spec': 2,
            'unlockStage': 550
        },
        {
            'name': 'Valerius',
            'code': 'valerius',
            'merc': false,
            'god': false,
            'spec': 1,
            'unlockStage': 700
        },
        {
            'name': 'Astrid',
            'code': 'astrid',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 800
        },
        {
            'name': 'Ina',
            'code': 'ina',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 900
        },
        {
            'name': 'Fini',
            'code': 'fini',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 1050
        },
        {
            'name': 'Asmondai',
            'code': 'asmondai',
            'merc': false,
            'god': false,
            'spec': 1,
            'unlockStage': 1300
        },
        {
            'name': 'Danysa',
            'code': 'danysa',
            'merc': false,
            'god': false,
            'spec': 1,
            'unlockStage': 1550
        },
        {
            'name': 'Iseris',
            'code': 'iseris',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 1800
        },
        {
            'name': 'Belien',
            'code': 'belien',
            'merc': false,
            'god': false,
            'spec': 2,
            'unlockStage': 2050
        },
        {
            'name': 'Sely',
            'code': 'sely',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 2300
        },
        {
            'name': 'Randal',
            'code': 'randal',
            'merc': false,
            'god': false,
            'spec': 1,
            'unlockStage': 2550
        },
        {
            'name': 'Molly',
            'code': 'molly',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 2800
        },
        {
            'name': 'Layla',
            'code': 'layla',
            'merc': false,
            'god': false,
            'spec': 2,
            'unlockStage': 3050
        },
        {
            'name': 'Joe',
            'code': 'joe',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 3300
        },
        {
            'name': 'Hongyu',
            'code': 'hongyu',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 3600
        },
        {
            'name': 'Amun',
            'code': 'amun',
            'merc': false,
            'god': false,
            'spec': 0,
            'unlockStage': 3900
        },
        {
            'name': 'Panko',
            'code': 'panko',
            'merc': true,
            'god': false,
            'spec': 1
        },
        {
            'name': 'Yavo',
            'code': 'yavo',
            'merc': true,
            'god': false,
            'spec': 2
        },
        {
            'name': 'Cirilo',
            'code': 'cirilo',
            'merc': true,
            'god': false,
            'spec': 0
        },
        {
            'name': 'Vilon',
            'code': 'vilon',
            'merc': true,
            'god': false,
            'spec': 0
        },
        {
            'name': 'Anzo',
            'code': 'anzo',
            'merc': true,
            'god': false,
            'spec': 1
        },
        {
            'name': 'Zelea',
            'code': 'zelea',
            'merc': true,
            'god': false,
            'spec': 0
        },
        {
            'name': 'Zoruk',
            'code': 'zoruk',
            'merc': true,
            'god': false,
            'spec': 2
        },
        {
            'name': 'Rickie',
            'code': 'rickie',
            'merc': true,
            'god': false,
            'spec': 0
        },
        {
            'name': 'Jess',
            'code': 'jess',
            'merc': true,
            'god': false,
            'spec': 0
        },
        {
            'name': 'Ledra',
            'code': 'ledra',
            'merc': false,
            'god': true,
            'spec': 2,
            'unlockStage': 0
        },
        {
            'name': 'Yamanoth',
            'code': 'yamanoth',
            'merc': false,
            'god': true,
            'spec': 1,
            'unlockStage': 0
        },
        {
            'name': 'Kramatak',
            'code': 'kramatak',
            'merc': false,
            'god': true,
            'spec': 0,
            'unlockStage': 0
        }
    ],
    'rarities' : [
        {
            'name': 'Aucun',
            'code': 'none',
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
            }
        },
        {
            'name': 'Ordinaire',
            'code': 'common',
            'maxLevel' : 2,
            'baseEffectGear' : {
                'tier1' : 4,
                'tier2' : 3,
                'ring' : 2.5,
                'relic' : 8.5
            },
            'baseEffectJewel' : 200,
            'baseEffectSoulstone' : {
                'tier1' : 4,
                'wisdom' : 2.5,
                'faith' : 2,
                'charisma' : 8.5
            }
        },
        {
            'name': 'Extraordinaire',
            'code': 'uncommon',
            'maxLevel' : 4,
            'baseEffectGear' : {
                'tier1' : 10,
                'tier2' : 8,
                'ring' : 5.5,
                'relic' : 23.5
            },
            'baseEffectJewel' : 400,
            'baseEffectSoulstone' : {
                'tier1' : 10,
                'wisdom' : 5.5,
                'faith' : 4,
                'charisma' : 23.5
            }
        },
        {
            'name': 'Rare',
            'code': 'rare',
            'maxLevel' : 6,
            'baseEffectGear' : {
                'tier1' : 28,
                'tier2' : 21,
                'ring' : 15,
                'relic' : 68.5
            },
            'baseEffectJewel' : 800,
            'baseEffectSoulstone' : {
                'tier1' : 28,
                'wisdom' : 15,
                'faith' : 10,
                'charisma' : 68.5
            }
        },
        {
            'name': 'Épique',
            'code': 'epic',
            'maxLevel' : 8,
            'baseEffectGear' : {
                'tier1' : 88,
                'tier2' : 62,
                'ring' : 42,
                'relic' : 203.5
            },
            'baseEffectJewel' : 1600,
            'baseEffectSoulstone' : {
                'tier1' : 88,
                'wisdom' : 42,
                'faith' : 28,
                'charisma' : 203.5
            }
        },
        {
            'name': 'Légendaire',
            'code': 'legendary',
            'maxLevel' : 10,
            'baseEffectGear' : {
                'tier1' : 244,
                'tier2' : 183,
                'ring' : 123,
                'relic' : 608.5
            },
            'baseEffectJewel' : 3200,
            'baseEffectSoulstone' : {
                'tier1' : 244,
                'wisdom' : 123,
                'faith' : 82,
                'charisma' : 608.5
            }
        },
        {
            'name': 'Mythique',
            'code': 'mythic',
            'maxLevel' : 12,
            'baseEffectGear' : {
                'tier1' : 730,
                'tier2' : 548,
                'ring' : 366,
                'relic' : 1823.5
            },
            'baseEffectJewel' : 6400,
            'baseEffectSoulstone' : {
                'tier1' : 730,
                'wisdom' : 366,
                'faith' : 244,
                'charisma' : 1823.5
            }
        },
        {
            'name': 'Titan',
            'code': 'titan',
            'maxLevel' : 14,
            'baseEffectGear' : {
                'tier1' : 2188,
                'tier2' : 1641,
                'ring' : 1095,
                'relic' : 5468.5
            },
            'baseEffectJewel' : 12800,
            'baseEffectSoulstone' : {
                'tier1' : 2188,
                'wisdom' : 1095,
                'faith' : 730,
                'charisma' : 5468.5
            }
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
            'effect': 'Dégâts perso',
            'damage': 1,
            'health': 0,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Torse',
            'code': 'chest',
            'tier': 1,
            'position': 2,
            'allCharacters': false,
            'rarityUpgrade': 'tier1',
            'effect': 'Santé perso',
            'damage': 0,
            'health': 1,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Bottes',
            'code': 'boots',
            'tier': 1,
            'position': 3,
            'allCharacters': false,
            'rarityUpgrade': 'tier1',
            'effect': 'Résistance perso',
            'damage': 0,
            'health': 0,
            'resistance': 1,
            'gold' : 0
        },
        {
            'name': 'Poignet',
            'code': 'wrist',
            'tier': 2,
            'position': 1,
            'allCharacters': true,
            'rarityUpgrade': 'tier2',
            'effect': 'Dégâts tous',
            'damage': 1,
            'health': 0,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Épaule',
            'code': 'shoulder',
            'tier': 2,
            'position': 2,
            'allCharacters': true,
            'rarityUpgrade': 'tier2',
            'effect': 'Santé tous',
            'damage': 0,
            'health': 1,
            'resistance': 0,
            'gold' : 0
        },
        {
            'name': 'Ceinture',
            'code': 'belt',
            'tier': 2,
            'position': 3,
            'allCharacters': true,
            'rarityUpgrade': 'tier2',
            'effect': 'Résistance tous',
            'damage': 0,
            'health': 0,
            'resistance': 1,
            'gold' : 0
        },
        {
            'name': 'Anneau',
            'code': 'ring',
            'tier': 3,
            'position': 1,
            'allCharacters': false,
            'rarityUpgrade': 'ring',
            'effect': 'Gains or',
            'damage': 0,
            'health': 0,
            'resistance': 0,
            'gold' : 1
        },
        {
            'name': 'Relique',
            'code': 'relic',
            'tier': 3,
            'position': 2,
            'allCharacters': true,
            'rarityUpgrade': 'relic',
            'effect': 'Dégâts Santé Résistance tous',
            'damage': 1,
            'health': 1,
            'resistance': 1,
            'gold' : 0
        }
    ],
	'jewels' : [
        {
            'name': 'Ânkh',
            'code': 'ankh',
            'effect': 'Dégâts',
            'tier': 1,
            'position': 1,
            'damage': 1,
            'health': 0,
            'armor': 0
        },
        {
            'name': 'Rune',
            'code': 'rune',
            'effect': 'Santé',
            'tier': 1,
            'position': 2,
            'damage': 0,
            'health': 1,
            'armor': 0
        },
        {
            'name': 'Idole',
            'code': 'idol',
            'effect': 'Résistance',
            'tier': 1,
            'position': 3,
            'damage': 0,
            'health': 0,
            'armor': 1
        },
        {
            'name': 'Talisman',
            'code': 'talisman',
            'effect': 'Dégâts / Santé',
            'tier': 2,
            'position': 1,
            'damage': 1,
            'health': 1,
            'armor': 0
        },
        {
            'name': 'Collier',
            'code': 'necklace',
            'effect': 'Dégâts / Résistance',
            'tier': 2,
            'position': 2,
            'damage': 1,
            'health': 0,
            'armor': 1
        },
        {
            'name': 'Babiole',
            'code': 'trinket',
            'effect': 'Santé / Résistance',
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
            'code': 'focus',
            'tier': 1,
            'position': 1,
            'rarityUpgrade': 'tier1',
            'effect': 'Dégâts perso',
            'damage': 1,
            'health': 0,
            'resistance': 0,
            'firestones': 0,
            'gold' : 0
        },
        {
            'name': 'Endurance',
            'code': 'stamina',
            'tier': 1,
            'position': 2,
            'rarityUpgrade': 'tier1',
            'effect': 'Santé perso',
            'damage': 0,
            'health': 1,
            'resistance': 0,
            'firestones': 0,
            'gold' : 0
        },
        {
            'name': 'Courage',
            'code': 'courage',
            'tier': 1,
            'position': 3,
            'rarityUpgrade': 'tier1',
            'effect': 'Résistance perso',
            'damage': 0,
            'health': 0,
            'resistance': 1,
            'firestones': 0,
            'gold' : 0
        },
        {
            'name': 'Sagesse',
            'code': 'wisdom',
            'tier': 2,
            'position': 1,
            'rarityUpgrade': 'wisdom',
            'effect': 'Gains or',
            'damage': 0,
            'health': 0,
            'resistance': 0,
            'firestones': 0,
            'gold' : 1
        },
        {
            'name': 'Foi',
            'code': 'faith',
            'tier': 2,
            'position': 2,
            'rarityUpgrade': 'faith',
            'effect': 'Gains Firestones',
            'damage': 0,
            'health': 0,
            'resistance': 0,
            'firestones': 1,
            'gold' : 0
        },
        {
            'name': 'Charisme',
            'code': 'charisma',
            'tier': 2,
            'position': 3,
            'rarityUpgrade': 'charisma',
            'effect': 'Dégâts Santé Résistance tous',
            'damage': 1,
            'health': 1,
            'resistance': 1,
            'firestones': 0,
            'gold' : 0
        }
    ],    
    'gearUpgradeEffect' : [1, 2, 4, 8, 15, 30, 60, 120, 250, 500, 1000, 2000, 4000, 8000, 16000],
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
    'soulStoneUpgradeEffect' : [1, 2, 4, 8, 15, 30, 60, 120, 250, 500, 1000, 2000, 4000, 8000, 16000],
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