function vmEffectFormat(number) {
    const numberFormatter = new Intl.NumberFormat(navigator.languages[0], { maximumFractionDigits: 0, useGrouping: true });
	return numberFormatter.format(number);
}


function calculateDataWM() {

    var dataWM = {
        'dataVMCurrent': [],
        'dataVMMax': [],
        'dataVMMix': []
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

        $.each(dataInformation['jewels'], function (i, jewel) {     
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
        });

        damageBoost = damageBoost * charDamageBonus;
        healthBoost = healthBoost * charHealthBonus;
        armorBoost  = armorBoost  * charArmorBonus;
        damageMaxBoost = damageMaxBoost * charDamageBonus;
        healthMaxBoost = healthMaxBoost * charHealthBonus;
        armorMaxBoost  = armorMaxBoost  * charArmorBonus;

        if (damageBoost > 0 || healthBoost > 0 || armorBoost > 0) {
            dataWM.dataVMCurrent.push([i, character.name, specList[character.spec].name, vmEffectFormat(damageBoost), vmEffectFormat(healthBoost), vmEffectFormat(armorBoost), vmEffectFormat(healthBoost + armorBoost)]);
        }        
        if (damageMaxBoost > 0 || healthMaxBoost > 0 || armorMaxBoost > 0) {
            dataWM.dataVMMax.push([i, character.name, specList[character.spec].name, vmEffectFormat(damageMaxBoost), vmEffectFormat(healthMaxBoost), vmEffectFormat(armorMaxBoost), vmEffectFormat(healthMaxBoost + armorMaxBoost)]);
        }
        if (damageBoost > 0 || healthBoost > 0 || armorBoost > 0 || damageMaxBoost > 0 || healthMaxBoost > 0 || armorMaxBoost > 0) {
            dataWM.dataVMMix.push([i, character.name, specList[character.spec].name, vmEffectFormat(damageBoost), vmEffectFormat(damageMaxBoost), vmEffectFormat(healthBoost), vmEffectFormat(healthMaxBoost), vmEffectFormat(armorBoost), vmEffectFormat(armorMaxBoost), vmEffectFormat(healthBoost + armorBoost), vmEffectFormat(healthMaxBoost + armorMaxBoost)]);
        }
    });

    return dataWM;

}

function initDataTable() {

    var dataWM = calculateDataWM();

    if ( $.fn.DataTable.isDataTable('#wmTable') ) {
        $('#wmTable').DataTable().destroy();
    }

    if ( $.fn.DataTable.isDataTable('#wmTablePotential') ) {
        $('#wmTablePotential').DataTable().destroy();
    }

    if ( $.fn.DataTable.isDataTable('#wmTableMix') ) {
        $('#wmTableMix').DataTable().destroy();
    }

    $('#wmTable').DataTable( {
        language: {
            url: 'datatables_fr-FR.json',
        },
        columns: [
            { title: '' },
            { title: 'Personnage' },
            { title: 'Spécialité' },
            { title: 'Dégâts' },
            { title: 'Santé' },
            { title: 'Résistance' },
            { title: 'Santé + Résistance' }
        ],
        pageLength: 50,
        data: dataWM.dataVMCurrent
    } );

    $('#wmTablePotential').DataTable( {
        language: {
            url: 'datatables_fr-FR.json',
        },
        columns: [
            { title: '' },
            { title: 'Personnage' },
            { title: 'Spécialité' },
            { title: 'Dégâts' },
            { title: 'Santé' },
            { title: 'Résistance' },
            { title: 'Santé + Résistance' }
        ],
        pageLength: 50,
        data: dataWM.dataVMMax
    } );

    $('#wmTableMix').DataTable( {
        language: {
            url: 'datatables_fr-FR.json',
        },
        columns: [
            { title: '' },
            { title: 'Nom' },
            { title: 'Spéc' },
            { title: 'Dégâts' },
            { title: 'Dégâts Pot.' },
            { title: 'Santé' },
            { title: 'Santé Pot.' },
            { title: 'Résist' },
            { title: 'Résist Pot.' },
            { title: 'Santé/Résist' },
            { title: 'Santé/Résist Potentiel' }
        ],
        pageLength: 50,
        data: dataWM.dataVMMix
    } );
}