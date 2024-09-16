function selectRarityAddOptions(select) {
    
    $.each(dataInformation.rarities, function (i, item) {
        select.append($('<option>', { 
            value: i,
            text : item.name 
        }));
    });
}

function addItems(parentDiv, itemType, characterName) {

    $.each(dataInformation[itemType], function (i, item) {        
        parentDiv.append(addItemLine(itemType, characterName, item.name));

    });

}

function addItemLine(itemType, characterName, itemName) {
    
    // Item line
    var divItemLine = $('<div></div>').addClass('data-item-data-line-gear-item');

    // Titre
    var divItemTitle = $('<div></div>').addClass('data-item-data-line-crafting-title').text(itemName);
    divItemLine.append(divItemTitle);

    // Rareté
    var rarityId = characterName + "-" + itemType + "-" + itemName + "-rarity";
    var divRarity = $('<div></div>').addClass('data-item-data-line-item-element');
    var divRarityTitle = $('<div></div>').text('Rareté');
    divRarity.append(divRarityTitle);
    var divRaritySelect = $('<div></div>').addClass('select_box small-select_box select_box-rarity');
    var selectRarity = $('<select id="' + rarityId + '"></select>').addClass('button_select select-theme select-input');
    selectRarity.attr("onChange", "rarityChange(this)");
    selectRarityAddOptions(selectRarity);
    divRaritySelect.append(selectRarity);
    divRarity.append(divRaritySelect);
    divItemLine.append(divRarity);

    // Niveau
    var itemId = characterName + "-" + itemType + "-" + itemName + "-level";
    var divLevel = $('<div></div>').addClass('data-item-data-line-crafting-item-element');
    var divLevelTitle = $('<div></div>').text('Niveau');
    divLevel.append(divLevelTitle);
    var divLevelControl = $('<div></div>').addClass('input-with-control');
    var minusButton = $('<button></button>').addClass('value-control').text("−");
    minusButton.attr("onClick", "valueUpdate('" + itemId + "',false)");
    divLevelControl.append(minusButton);
    var divLevelInput = $('<div></div>');
    var levelInput = $('<input id="' + itemId + '"></input>').addClass('input-int-pet-evolve controlled-input auto-width');
    levelInput.attr("type", "number");
    levelInput.attr("disabled", true);
    divLevelInput.append(levelInput);

    divLevelControl.append(divLevelInput);
    var plusButton = $('<button></button>').addClass('value-control').text("+");
    plusButton.attr("onClick", "valueUpdate('" + itemId + "', true)");
    divLevelControl.append(plusButton);

    divLevel.append(divLevelControl);
    divItemLine.append(divLevel);

    return divItemLine;
}


function addItemBox(itemType, characterName) {
    var boxTitle = "";
    switch (itemType) {
        case 'gears' :
            boxTitle = "Équipement";    
            break;
        case 'jewels' :
            boxTitle = "Bijoux";    
            break;
        case 'soulstones' :
            boxTitle = "Pierres d'âme";    
            break;
    }

    // Titre
    var divBoxData = $('<div></div>').addClass('data-item-data-line flex-gear');
    var divBoxDataTitle = $('<div></div>').addClass('data-item-data-line-title item-border item-no-border-bottom').text(boxTitle);
    divBoxData.append(divBoxDataTitle);

    // Item line
    var divDataGearBox = $('<div></div>').addClass('data-item-data-line-craft item-border');
    addItems(divDataGearBox, itemType, characterName)
    divBoxData.append(divDataGearBox);

    return divBoxData;
}

function initializeCharactersSheet() {
    $charactersBox = $("#characters-box");

    dataInformation.characters
    $.each(dataInformation.characters, function (i, character) {

        // Character title
        var divLineTitle = $('<div></div>').addClass('data-title title-alone item-border title-online-drop title-flex').text(character.name);
        $charactersBox.append(divLineTitle);
        // Character Data Box
        var divLineBox = $('<div></div>').addClass('data-category-title item-border');
        var divLineData = $('<div></div>').addClass('data-items data-items-flex');
        // Character Gear
        divLineData.append(addItemBox('gears', character.name));
        // Character Jewels
        divLineData.append(addItemBox('jewels', character.name));
        // Character SoulStones
        divLineData.append(addItemBox('soulstones', character.name));

        // Composing box
        divLineBox.append(divLineData);
        $charactersBox.append(divLineBox);


    });


}