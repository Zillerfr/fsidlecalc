function calculateDataGear() {

    var dataWM = {
        'dataVMGear': [],
        'dataVMJewel': [],
        'dataVMStone': []
    };

    $.each(dataInformation.characters, function (i, character) {
        var specList = dataInformation['specList'];
        var damageBoost = 0;
        var healthBoost = 0;
        var armorBoost  = 0;
        var damageMaxBoost = 0;
        var healthMaxBoost = 0;
        var armorMaxBoost  = 0;
        var charDamageBonus = 1 + (specList[character.spec].wmStatBonus.damage / 100);
        var charHealthBonus = 1 + (specList[character.spec].wmStatBonus.health / 100);
        var charArmorBonus  = 1 + (specList[character.spec].wmStatBonus.armor  / 100);
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
                dataWM.dataVMGear.push([[character.code, character.name], [item.code, dataInformation.rarities[itemRarity].code, item.name], itemLevel, itemMaxLevel,
                    item.effect, numberFormat(itemBoost), numberFormat(itemBoostNextLevel), numberFormat(itemUpgradeNextLevel), numberFormat(upgradeCost), numberFormat(upgradeRating)]);
            }


        });

        /*$.each(dataInformation['jewels'], function (i, jewel) {     
            var jewelLevelId  = character.code + '-jewels-' + jewel.code + '-level';
            var jewelRarityId = character.code + '-jewels-' + jewel.code + '-rarity';
            var jewelLevel  = dataInput[jewelLevelId];
            if (!jewelLevel) jewelLevel = 0;
            var jewelRarity = dataInput[jewelRarityId];
            if (!jewelRarity) jewelRarity = 0;
            var jewelMaxLevel = dataInformation.rarities[jewelRarity].maxLevel;

            var jewelDamageMultipler = jewel.damage;
            var jewelHealthMultipler = jewel.health;
            var jewelArmorMultipler  = jewel.armor;
            var jewelUpgradeEffect = dataInformation.jewelUpgradeEffect[jewelLevel];
            var jewelMaxUpgradeEffect = dataInformation.jewelUpgradeEffect[jewelMaxLevel];
            var jewelRarityEffect  = dataInformation.rarities[jewelRarity].baseEffectJewel;

            var jewelEffect = jewelRarityEffect + jewelUpgradeEffect
            var jewelMaxEffect = jewelRarityEffect + jewelMaxUpgradeEffect

            damageBoost += jewelDamageMultipler * jewelEffect;
            healthBoost += jewelHealthMultipler * jewelEffect;
            armorBoost  += jewelArmorMultipler  * jewelEffect;
            damageMaxBoost += jewelDamageMultipler * jewelMaxEffect;
            healthMaxBoost += jewelHealthMultipler * jewelMaxEffect;
            armorMaxBoost  += jewelArmorMultipler  * jewelMaxEffect;
        });*/

        /*damageBoost = damageBoost * charDamageBonus;
        healthBoost = healthBoost * charHealthBonus;
        armorBoost  = armorBoost  * charArmorBonus;
        damageMaxBoost = damageMaxBoost * charDamageBonus;
        healthMaxBoost = healthMaxBoost * charHealthBonus;
        armorMaxBoost  = armorMaxBoost  * charArmorBonus;*/

        /*if (damageBoost > 0 || healthBoost > 0 || armorBoost > 0) {
            dataWM.dataVMCurrent.push([character.code, character.name, specList[character.spec].name, vmEffectFormat(damageBoost), vmEffectFormat(healthBoost), vmEffectFormat(armorBoost), vmEffectFormat(healthBoost + armorBoost)]);
        }        
        if (damageMaxBoost > 0 || healthMaxBoost > 0 || armorMaxBoost > 0) {
            dataWM.dataVMMax.push([character.code, character.name, specList[character.spec].name, vmEffectFormat(damageMaxBoost), vmEffectFormat(healthMaxBoost), vmEffectFormat(armorMaxBoost), vmEffectFormat(healthMaxBoost + armorMaxBoost)]);
        }
        if (damageBoost > 0 || healthBoost > 0 || armorBoost > 0 || damageMaxBoost > 0 || healthMaxBoost > 0 || armorMaxBoost > 0) {
            dataWM.dataVMMix.push([character.code, character.name, specList[character.spec].name, vmEffectFormat(damageBoost), vmEffectFormat(damageMaxBoost), vmEffectFormat(healthBoost), vmEffectFormat(healthMaxBoost), vmEffectFormat(armorBoost), vmEffectFormat(armorMaxBoost), vmEffectFormat(healthBoost + armorBoost), vmEffectFormat(healthMaxBoost + armorMaxBoost)]);
        }*/
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
        data: dataWM.dataVMGear
    } );

   

   
}