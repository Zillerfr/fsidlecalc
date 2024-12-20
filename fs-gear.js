var wmSelection = null;

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
 
            if (itemRarity > 0) {

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
                        item.effect, numberFormat(itemBoost), numberFormat(itemBoostNextLevel), numberFormat(itemUpgradeNextLevel), numberFormat(upgradeCost),
                        numberFormat(upgradeRating), [itemLevelId, itemTier]]);
                }
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
            { title: 'Valeur Amélioration' },
            { 
                title: 'Action',
                render: function (data, type, row) {
                    if (type === 'display') {
                        return '<button class="button small-button btn-plus" data-id="' + data[0] + '" data-tier="' + data[1] + '">Upgrade</button>';
                    }
                    return data;
                }
            }

        ],
        pageLength: 10,
        responsive: true,
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
 
            if (itemRarity > 0) {
                
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
                        item.effect, numberFormat(itemBoost), numberFormat(itemBoostNextLevel), numberFormat(itemUpgradeNextLevel), numberFormat(upgradeCost), 
                        numberFormat(upgradeRating), [itemLevelId, itemTier]]);
                }
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
            { title: 'Valeur Amélioration' },
            { 
                title: 'Action',
                render: function (data, type, row) {
                    if (type === 'display') {
                        return '<button class="button small-button btn-plus" data-id="' + data[0] + '" data-tier="' + data[1] + '">Upgrade</button>';
                    }
                    return data;
                }
            }
        ],
        pageLength: 10,
        responsive: true,        
        data: dataWM
    } );   
}

function calculateDataJewel() {

    var dataWM = [];

    $.each(dataInformation.characters, function (i, character) {
        var maxEtherealShard = dataInput['ethereal-shard'];

        // Character Gear
        $.each(dataInformation['jewels'], function (i, item) {     
            var itemLevelId  = character.code + '-jewels-' + item.code + '-level';
            var itemRarityId = character.code + '-jewels-' + item.code + '-rarity';
            var itemLevel  = dataInput[itemLevelId];
            if (!itemLevel) itemLevel = 0;
            var itemRarity = dataInput[itemRarityId];
            if (!itemRarity) itemRarity = 0;
            var itemMaxLevel = dataInformation.rarities[itemRarity].maxLevel;
            var itemTier = 'tier' + item.tier;
            var wmId = character.code + '-WM';
 
            if (itemRarity > 0) {
                
                var itemUpgradeEffect = dataInformation.jewelUpgradeEffect[itemLevel];
                var itemRarityEffect = dataInformation.rarities[itemRarity].baseEffectJewel;
    
                var itemBoost = 0;
                if (itemRarity > 0) {
                    itemBoost = itemRarityEffect + itemUpgradeEffect;
                }
    
                var itemNextUpgradeEffect = 0;
                var itemBoostNextLevel = 0;
                var itemUpgradeNextLevel = 0;
                if (itemLevel < itemMaxLevel && itemRarity > 0) {
                    itemNextUpgradeEffect = dataInformation.jewelUpgradeEffect[itemLevel + 1];
                    itemBoostNextLevel = itemRarityEffect + itemNextUpgradeEffect;
                    itemUpgradeNextLevel = itemBoostNextLevel - itemBoost;
                }
    
                var upgradeCost = 0;
                var upgradeRating = 0;
                if (itemLevel < itemMaxLevel && itemRarity > 0) {
                    upgradeCost = dataInformation.jewelUpgradeCost[itemTier][itemLevel];
                    upgradeRating = itemUpgradeNextLevel * 100 / upgradeCost;
    
                }
    
                if (wmSelection == null || wmSelection == dataInput[wmId]) {                    
                    if (upgradeCost <= maxEtherealShard && upgradeCost > 0) {
                        dataWM.push([wmId, [character.code, character.name], [item.code, dataInformation.rarities[itemRarity].code, item.name], itemLevel, itemMaxLevel,
                            item.effect, numberFormat(itemBoost), numberFormat(itemBoostNextLevel), numberFormat(itemUpgradeNextLevel), numberFormat(upgradeCost), 
                            numberFormat(upgradeRating), [itemLevelId, itemTier]]);
                    }
                }

            }



        });
    });
    return dataWM;
}

function createWMRadio(value, wmName, vmImageAsset) {
    var inputImage = $('<div></div>').addClass('data-item-data-line-item-element');
    var imgWM = $('<img></img>').addClass('radio-image image-wm');
    imgWM.attr('src', 'assets/' + vmImageAsset);
    imgWM.attr('alt', wmName);
    imgWM.attr('data-value', value);
    inputImage.append(imgWM);
    var divWMName = $('<div></div>').text(wmName);
    inputImage.append(divWMName);
    return inputImage;
}

function filterByWM(value) {
    wmSelection = value;
    initJewelUpgrade()
}

function initJewelUpgrade() {
    var dataWM = calculateDataJewel();

    if ( $.fn.DataTable.isDataTable('#wmTableJewel') ) {
        $('#wmTableJewel').DataTable().destroy();
    }

    $('#wmTableJewel').DataTable( {
        language: {
            url: 'datatables_fr-FR.json',
        },
        columns: [
            { 
                title: 'Machine',
                render: function (data, type) {                    
                    var imageUrl = "assets/tank.svg";
                    var machineName = "Aucun";
                    if (dataInput[data] > 0) {
                        imageUrl = "assets/" + dataInformation.warmachines[dataInput[data]-1].code + ".webp";
                        machineName = dataInformation.warmachines[dataInput[data]-1].name;
                    }
                    if (type === 'display') {
                        return '<div class="data-item-data-line-values"><img class="char-pic" src="' + imageUrl + '"></img><span>' + machineName + '</span></div>';
                    }
                    if (type === 'sort' || type === 'type') {
                        return machineName;
                    }
                    return data;
                },
                orderDataType: 'dom-text'
            },
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
            { title: 'Valeur Amélioration' },
            { 
                title: 'Action',
                render: function (data, type, row) {
                    if (type === 'display') {
                        return '<button class="button small-button btn-plus" data-id="' + data[0] + '" data-tier="' + data[1] + '">Upgrade</button>';
                    }
                    return data;
                }
            }
        ],
        pageLength: 10,
        responsive: true,        
        data: dataWM
    } );   
}

$('body').on('click', '.btn-plus', function() {
    var id = $(this).data('id');
    var tier = $(this).data('tier');
    incrementValue(id, tier); // Passez l'ID ou une autre valeur en paramètre
});

function incrementValue(itemLevelId, itemTier) {
    var itemLevel = dataInput[itemLevelId];
    var itemRarityId = itemLevelId.replace("-level", "-rarity");
    var itemRarity = dataInput[itemRarityId];
    var rarityMaxLevel = dataInformation.rarities[parseInt(itemRarity)].maxLevel

    if (itemLevel < rarityMaxLevel) {
        saveToStorage(itemLevelId, itemLevel + 1);
        $('#' + itemLevelId).val(itemLevel + 1);
        if (itemLevelId.includes('-gears-')) {            
            var crystalTotal = $('#void-crystal').val();
            var upgradeCost = dataInformation.gearUpgradeCost[itemTier][parseInt(itemLevel)];
            var newTotal = crystalTotal - upgradeCost;
            $('#void-crystal').val(newTotal);
            updateGearList();
        } else if (itemLevelId.includes('-soulstones-')) {
            var shardTotal = $('#soul-shard').val();
            var upgradeCost = dataInformation.soulStoneUpgradeCost[itemTier][parseInt(itemLevel)];
            var newTotal = shardTotal - upgradeCost;
            $('#soul-shard').val(newTotal);
            updateStoneList();
        } else if (itemLevelId.includes('-jewels-')) {
            var shardTotal = $('#ethereal-shard').val();
            var upgradeCost = dataInformation.jewelUpgradeCost[itemTier][parseInt(itemLevel)];
            var newTotal = shardTotal - upgradeCost;
            $('#ethereal-shard').val(newTotal);
            updateJewelsList();
        }
    }
}

function searchGearList(searchTerm) {
    if (searchTerm == 'gains or') {
        searchTerm = '"' + searchTerm + '"';
    }
    var table = $('#wmTableGear').DataTable();
    $('input.dt-input[aria-controls="wmTableGear"]').val(searchTerm);
    table.search(searchTerm).draw();
}

function searchJewelList(searchTerm) {
    var table = $('#wmTableJewel').DataTable();
    $('input.dt-input[aria-controls="wmTableJewel"]').val(searchTerm);
    table.search(searchTerm).draw();
}

function searchStoneList(searchTerm) {
    if (searchTerm == 'gains or') {
        searchTerm = '"' + searchTerm + '"';
    }
    var table = $('#wmTableStone').DataTable();
    $('input.dt-input[aria-controls="wmTableStone"]').val(searchTerm);
    table.search(searchTerm).draw();
}

function showHideTable(viewWrapper, secondViewWrapper = null) {
    $('#' + viewWrapper).toggle();
    if (secondViewWrapper) {
        $('#' + secondViewWrapper).toggle();
    }
}