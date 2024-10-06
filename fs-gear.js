function calculateDataGear() {

    var dataWM = [];

    $.each(dataInformation.characters, function (i, character) {
        var maxVoidCrystal = dataInput['void-crystal'];

        // Character Gear
        $.each(dataInformation['gears'], function (i, item) {     
            var itemLevelId  = character.code + '-gears-' + item.code + '-level';
            var itemRarityId = character.code + '-gears-' + item.code + '-rarity';
            var itemLevel  = dataInput[itemLevelId];
            if (!itemLevel) itemLevel = 0;
            var itemRarity = dataInput[itemRarityId];
            if (!itemRarity) itemRarity = 0;
            var itemMaxLevel = dataInformation.rarities[itemRarity].maxLevel;
            var itemTier = 'tier' + item.tier;
 
            var itemUpgradeEffect = dataInformation.gearUpgradeEffect[itemLevel];

            var itemRarityEffect = 0;
            if (item.code === 'ring') {
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectGear.ring;
            } else if (item.code === 'relic') {
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectGear.relic;
            } else {
                
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectGear[itemTier];
            }

            var itemBoost = 0;
            if (itemRarity > 0) {
                itemBoost = (itemRarityEffect * itemUpgradeEffect - 1) * 100;
            }

            var itemNextUpgradeEffect = 0;
            var itemBoostNextLevel = 0;
            var itemUpgradeNextLevel = 0;
            if (itemLevel < itemMaxLevel && itemRarity > 0) {
                itemNextUpgradeEffect = dataInformation.gearUpgradeEffect[itemLevel + 1];
                itemBoostNextLevel = (itemRarityEffect * itemNextUpgradeEffect - 1) * 100;
                itemUpgradeNextLevel = itemBoostNextLevel - itemBoost;
            }

            var upgradeCost = 0;
            var upgradeRating = 0;
            if (itemLevel < itemMaxLevel && itemRarity > 0) {
                upgradeCost = dataInformation.gearUpgradeCost[itemTier][itemLevel];
                upgradeRating = itemUpgradeNextLevel / upgradeCost;

            }

            if (upgradeCost <= maxVoidCrystal && upgradeCost > 0) {
                dataWM.push([[character.code, character.name], [item.code, dataInformation.rarities[itemRarity].code, item.name], itemLevel, itemMaxLevel,
                    item.effect, numberFormat(itemBoost), numberFormat(itemBoostNextLevel), numberFormat(itemUpgradeNextLevel), numberFormat(upgradeCost), numberFormat(upgradeRating)]);
            }


        });
    });
    return dataWM;
}

function initGearUpgrade() {
    var dataWM = calculateDataGear();

    if ( $.fn.DataTable.isDataTable('#wmTableGear') ) {
        $('#wmTableGear').DataTable().destroy();
    }

    $('#wmTableGear').DataTable( {
        language: {
            url: 'datatables_fr-FR.json',
        },
        columns: [
            { 
                title: 'Personnage',
                render: function (data, type) {
                    if (type === 'display') {
                        return '<div class="data-item-data-line-values"><img class="char-pic" src="assets/' + data[0] + '.webp"></img><span>' + data[1]+ '</span></div>';
                    }
                    return data;
                }
            },
            { 
                title: 'Objet',
                render: function (data, type) {
                    if (type === 'display') {
                        return '<div class="data-item-data-line-values"><img class="item-svg char-pic color-' + data[1] + '" src="assets/' + data[0] + '.svg"></img><span>' + data[2]+ '</span></div>';
                    }
                    return data;
                }
            },            
            { title: 'Niveau Objet' },
            { title: 'Niveau Max Objet' },
            { title: 'Effet' },
            { title: 'Boost Niveau Actuel' },
            { title: 'Boost Prochain Niveau' },
            { title: 'Gain Prochain Niveau' },
            { title: 'Coût Amélioration' },
            { title: 'Valeur Amélioration' }
        ],
        pageLength: 10,
        data: dataWM
    } );   
}

function calculateDataStone() {

    var dataWM = [];

    $.each(dataInformation.characters, function (i, character) {
        var maxSoulShard = dataInput['soul-shard'];

        // Character Gear
        $.each(dataInformation['soulstones'], function (i, item) {     
            var itemLevelId  = character.code + '-soulstones-' + item.code + '-level';
            var itemRarityId = character.code + '-soulstones-' + item.code + '-rarity';
            var itemLevel  = dataInput[itemLevelId];
            if (!itemLevel) itemLevel = 0;
            var itemRarity = dataInput[itemRarityId];
            if (!itemRarity) itemRarity = 0;
            var itemMaxLevel = dataInformation.rarities[itemRarity].maxLevel;
            var itemTier = 'tier' + item.tier;
 
            var itemUpgradeEffect = dataInformation.soulStoneUpgradeEffect[itemLevel];

            var itemRarityEffect = 0;
            if (item.code === 'wisdom') {
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectSoulstone.wisdom;
            } else if (item.code === 'faith') {
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectSoulstone.faith;
            } else if (item.code === 'charisma') {
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectSoulstone.charisma;
            } else {
                
                itemRarityEffect  = dataInformation.rarities[itemRarity].baseEffectSoulstone[itemTier];
            }

            var itemBoost = 0;
            if (itemRarity > 0) {
                itemBoost = (itemRarityEffect * itemUpgradeEffect) * 100;
            }

            var itemNextUpgradeEffect = 0;
            var itemBoostNextLevel = 0;
            var itemUpgradeNextLevel = 0;
            if (itemLevel < itemMaxLevel && itemRarity > 0) {
                itemNextUpgradeEffect = dataInformation.soulStoneUpgradeEffect[itemLevel + 1];
                itemBoostNextLevel = (itemRarityEffect * itemNextUpgradeEffect) * 100;
                itemUpgradeNextLevel = itemBoostNextLevel - itemBoost;
            }

            var upgradeCost = 0;
            var upgradeRating = 0;
            if (itemLevel < itemMaxLevel && itemRarity > 0) {
                upgradeCost = dataInformation.soulStoneUpgradeCost[itemTier][itemLevel];
                upgradeRating = itemUpgradeNextLevel / upgradeCost;

            }

            if (upgradeCost <= maxSoulShard && upgradeCost > 0) {
                dataWM.push([[character.code, character.name], [item.code, dataInformation.rarities[itemRarity].code, item.name], itemLevel, itemMaxLevel,
                    item.effect, numberFormat(itemBoost), numberFormat(itemBoostNextLevel), numberFormat(itemUpgradeNextLevel), numberFormat(upgradeCost), numberFormat(upgradeRating)]);
            }


        });
    });
    return dataWM;
}

function initStoneUpgrade() {
    var dataWM = calculateDataStone();

    if ( $.fn.DataTable.isDataTable('#wmTableStone') ) {
        $('#wmTableStone').DataTable().destroy();
    }

    $('#wmTableStone').DataTable( {
        language: {
            url: 'datatables_fr-FR.json',
        },
        columns: [
            { 
                title: 'Personnage',
                render: function (data, type) {
                    if (type === 'display') {
                        return '<div class="data-item-data-line-values"><img class="char-pic" src="assets/' + data[0] + '.webp"></img><span>' + data[1]+ '</span></div>';
                    }
                    return data;
                }
            },
            { 
                title: 'Objet',
                render: function (data, type) {
                    if (type === 'display') {
                        return '<div class="data-item-data-line-values"><img class="item-svg char-pic color-' + data[1] + '" src="assets/' + data[0] + '.svg"></img><span>' + data[2]+ '</span></div>';
                    }
                    return data;
                }
            },            
            { title: 'Niveau Objet' },
            { title: 'Niveau Max Objet' },
            { title: 'Effet' },
            { title: 'Boost Niveau Actuel' },
            { title: 'Boost Prochain Niveau' },
            { title: 'Gain Prochain Niveau' },
            { title: 'Coût Amélioration' },
            { title: 'Valeur Amélioration' }
        ],
        pageLength: 10,
        data: dataWM
    } );   
}