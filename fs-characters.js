function changeRarityClass(div, rarityValue) {
    $.each(dataInformation.rarities, function (i, rarity) {
        div.removeClass("color-" + rarity.code);    
    });
    
    
    div.addClass("color-" + dataInformation.rarities[rarityValue].code);
}

function changeWMImage(div, wmNumber) {
    if (wmNumber == 0) {
        div.attr("src", "assets/tank.svg");
    } else {
        div.attr("src", "assets/" + dataInformation.warmachines[wmNumber-1].code + ".webp");
    }
}

function changeRarityBorderClass(div, rarityValue) {
    $.each(dataInformation.rarities, function (i, rarity) {
        div.removeClass("border-color-" + rarity.code);    
    });
    
    
    div.addClass("border-color-" + dataInformation.rarities[rarityValue].code);
}

function selectRarityAddOptions(select) {
    
    $.each(dataInformation.rarities, function (i, item) {
        select.append($('<option>', { 
            value: i,
            text : item.name 
        }));
    });
}

function selectWMAddOptions(select) {
    select.append($('<option>', { 
        value: 0,
        text : "Aucune" 
    })); 
    $.each(dataInformation.warmachines, function (i, warmachine) {
        select.append($('<option>', { 
            value: i + 1,
            text : warmachine.name 
        }));
    });
}

function addItems(parentDiv, itemType, characterName, currentTier) {

    $.each(dataInformation[itemType], function (i, item) {     
        if (item.tier == currentTier)  {
            parentDiv.append(addItemLine(itemType, characterName, item.code, currentTier)); 
        }       
    });
}

function addWMList(characterCode) {
    var selectId = characterCode + "-WM"
    var imageUrl = "assets/tank.svg";
    if (dataInput[selectId] && dataInput[selectId] > 0) {
        imageUrl = "assets/" + dataInformation.warmachines[dataInput[selectId]-1].code + ".webp"
    }

    // Select Rarity Item Container
    var divItemLine = $('<div></div>').addClass('custom-select-container wm-selector');
    // Item picto
    var divItemLinePicto = $('<img></img>').addClass('item-svg select-image image-wm');
    divItemLinePicto.attr("src", imageUrl);
    divItemLine.append(divItemLinePicto);
    
    var divItemCustomOptions = $('<div></div>').addClass('custom-options data-item-data-grid data-item-data-grid-gears');
    var divDataGearTierLine1 = $('<div></div>').addClass('data-item-tier tier1');
    var divDataGearTierLine2 = $('<div></div>').addClass('data-item-tier tier2');
    var divDataGearTierLine3 = $('<div></div>').addClass('data-item-tier tier3');
    var divOptionNone = $('<div></div>').addClass('option');
    divOptionNone.attr("data-value", "0");
    var divItemLinePictoOption0 = $('<img></img>').addClass('item-svg');
    divItemLinePictoOption0.attr("src", "assets/tank.svg");
    divOptionNone.append(divItemLinePictoOption0).append(dataInformation.rarities[0].name);
    divDataGearTierLine1.append(divOptionNone);

    $.each(dataInformation.warmachines, function (i, warmachine) {

        var divOptionCommon = $('<div></div>').addClass('option');
        divOptionCommon.attr("data-value", i + 1);
        var divItemLinePictoOption = $('<img></img>').addClass('item-svg');
        divItemLinePictoOption.attr("src", "assets/" + warmachine.code + ".webp");
        divOptionCommon.append(divItemLinePictoOption).append(warmachine.name);
        
        if (i < 3) {
            divDataGearTierLine1.append(divOptionCommon);
        } else  if (i < 8) {
            divDataGearTierLine2.append(divOptionCommon);
        } else {
            divDataGearTierLine3.append(divOptionCommon);
        }

    });
    
    divItemCustomOptions.append(divDataGearTierLine1);
    divItemCustomOptions.append(divDataGearTierLine2);
    divItemCustomOptions.append(divDataGearTierLine3);

    divItemLine.append(divItemCustomOptions);

    // Custom Select
    var selectWM = $('<select id="' + selectId + '"></select>').addClass('custom-select');
    selectWM.attr("style", "display: none;");
    selectWMAddOptions(selectWM);
    divItemLine.append(selectWM);

    return divItemLine;
}

function addItemLine(itemType, characterName, itemName, currentTier) {
    
    // Récupération informations
    var rarityId = characterName + "-" + itemType + "-" + itemName + "-rarity";
    var itemId = characterName + "-" + itemType + "-" + itemName + "-level";

    var itemRarity = dataInput[rarityId];

    var rarityCode = "none";
    if (itemRarity) {
        dataInformation.rarities[itemRarity].code;        
    }    
    
    // item global container
    var divItemGlobalContainer = $('<div></div>').addClass('data-item-gears-tier' + currentTier + '-' + itemName + ' data-item-container');

    // Select Rarity Item Container
    var divItemLine = $('<div></div>').addClass('custom-select-container item-selector color-' + rarityCode);

    // Item picto
    var divItemLinePicto = $('<img></img>').addClass('item-svg select-image color-' + rarityCode);
    divItemLinePicto.attr("src", "assets/" + itemName + ".svg");
    divItemLine.append(divItemLinePicto);

    // Selecteur de rareté
    var divItemCustomOptions = $('<div></div>').addClass('custom-options data-item-data-grid data-item-data-grid-gears');

    var divDataGearTierLine1 = $('<div></div>').addClass('data-item-tier tier1');
    
    var divOptionNone = $('<div></div>').addClass('option');
    divOptionNone.attr("data-value", "0");
    var divItemLinePictoOption0 = $('<img></img>').addClass('item-svg color-none');
    divItemLinePictoOption0.attr("src", "assets/" + itemName + ".svg");
    divOptionNone.append(divItemLinePictoOption0).append(dataInformation.rarities[0].name);
    divDataGearTierLine1.append(divOptionNone);

    var divOptionCommon = $('<div></div>').addClass('option');
    divOptionCommon.attr("data-value", "1");
    var divItemLinePictoOption1 = $('<img></img>').addClass('item-svg color-common');
    divItemLinePictoOption1.attr("src", "assets/" + itemName + ".svg");
    divOptionCommon.append(divItemLinePictoOption1).append(dataInformation.rarities[1].name);
    divDataGearTierLine1.append(divOptionCommon);

    var divOptionUncommon = $('<div></div>').addClass('option');
    divOptionUncommon.attr("data-value", "2");
    var divItemLinePictoOption2 = $('<img></img>').addClass('item-svg color-uncommon');
    divItemLinePictoOption2.attr("src", "assets/" + itemName + ".svg");
    divOptionUncommon.append(divItemLinePictoOption2).append(dataInformation.rarities[2].name);
    divDataGearTierLine1.append(divOptionUncommon);

    var divDataGearTierLine2 = $('<div></div>').addClass('data-item-tier tier2');

    var divOptionRare = $('<div></div>').addClass('option');
    divOptionRare.attr("data-value", "3");
    var divItemLinePictoOption3 = $('<img></img>').addClass('item-svg color-rare');
    divItemLinePictoOption3.attr("src", "assets/" + itemName + ".svg");
    divOptionRare.append(divItemLinePictoOption3).append(dataInformation.rarities[3].name);
    divDataGearTierLine2.append(divOptionRare);

    var divOptionEpic = $('<div></div>').addClass('option');
    divOptionEpic.attr("data-value", "4");
    var divItemLinePictoOption4 = $('<img></img>').addClass('item-svg color-epic');
    divItemLinePictoOption4.attr("src", "assets/" + itemName + ".svg");
    divOptionEpic.append(divItemLinePictoOption4).append(dataInformation.rarities[4].name);
    divDataGearTierLine2.append(divOptionEpic);

    var divOptionLegendary = $('<div></div>').addClass('option');
    divOptionLegendary.attr("data-value", "5");
    var divItemLinePictoOption5 = $('<img></img>').addClass('item-svg color-legendary');
    divItemLinePictoOption5.attr("src", "assets/" + itemName + ".svg");
    divOptionLegendary.append(divItemLinePictoOption5).append(dataInformation.rarities[5].name);
    divDataGearTierLine2.append(divOptionLegendary);

    var divDataGearTierLine3 = $('<div></div>').addClass('data-item-tier tier3');
    
    var divOptionMythic = $('<div></div>').addClass('option');
    divOptionMythic.attr("data-value", "6");
    var divItemLinePictoOption6 = $('<img></img>').addClass('item-svg color-mythic');
    divItemLinePictoOption6.attr("src", "assets/" + itemName + ".svg");
    divOptionMythic.append(divItemLinePictoOption6).append(dataInformation.rarities[6].name);
    divDataGearTierLine3.append(divOptionMythic);

    var divOptionTitan = $('<div></div>').addClass('option');
    divOptionTitan.attr("data-value", "7");
    var divItemLinePictoOption7 = $('<img></img>').addClass('item-svg color-titan');
    divItemLinePictoOption7.attr("src", "assets/" + itemName + ".svg");
    divOptionTitan.append(divItemLinePictoOption7).append(dataInformation.rarities[7].name);
    divDataGearTierLine3.append(divOptionTitan);

    divItemCustomOptions.append(divDataGearTierLine1);
    divItemCustomOptions.append(divDataGearTierLine2);
    divItemCustomOptions.append(divDataGearTierLine3);

    divItemLine.append(divItemCustomOptions);

    // Custom Select
    var selectRarity = $('<select id="' + rarityId + '"></select>').addClass('custom-select');
    selectRarity.attr("style", "display: none;");
    selectRarityAddOptions(selectRarity);
    divItemLine.append(selectRarity);

    divItemGlobalContainer.append(divItemLine);

    // Niveau    
    var divLevelControl = $('<div></div>').addClass('input-with-control vertical-control border-color-' + rarityCode);
    var minusButton = $('<button></button>').addClass('value-control').text("−");
    minusButton.attr("onClick", "valueUpdate('" + itemId + "',false)");
    
    var divLevelInput = $('<div></div>');
    var levelInput = $('<input id="' + itemId + '"></input>').addClass('input-gear-level controlled-input auto-width');
    levelInput.attr("type", "number");
    levelInput.attr("disabled", true);    
    divLevelInput.append(levelInput);

    var plusButton = $('<button></button>').addClass('value-control').text("+");
    plusButton.attr("onClick", "valueUpdate('" + itemId + "', true)");
    
    divLevelControl.append(plusButton);
    divLevelControl.append(divLevelInput);    
    divLevelControl.append(minusButton);

    divItemGlobalContainer.append(divLevelControl);

    return divItemGlobalContainer;
}


function addItemBox(itemType, characterName) {
    var boxTitle = "";

    // Titre
    var divBoxData = $('<div></div>').addClass('data-item-data-line flex-gear');
    var divBoxDataTitle = $('<div></div>').addClass('data-item-data-line-title').text(itemTypes[itemType].name);
    divBoxData.append(divBoxDataTitle);

    // Item line
    var divDataGearBox = $('<div></div>').addClass('data-item-data-grid data-item-data-grid-gears');


    // Tier line
    for (i = 0; i < itemTypes[itemType].nbTier; i++) {
        var divDataGearTierLine = $('<div></div>').addClass('data-item-tier tier' + (i+1));
        addItems(divDataGearTierLine, itemType, characterName, i+1)
        divDataGearBox.append(divDataGearTierLine);
    }
    divBoxData.append(divDataGearBox);

    return divBoxData;
}

function addCharacterSelect(characterCode, characterName, characterType) {
    var characterSelectId = "character-select-" + characterCode;

    // Character Select line
    var divSelectLine = $('<div></div>');

    // Character Select Input

    var inputLine = $('<div></div>').addClass('inline-checkbox no-border');
    var selectInput = $('<input></input>');
    selectInput.attr("type", "checkbox").addClass('character-select-box');
    selectInput.attr("id", characterSelectId);
    selectInput.attr("name", characterSelectId);
    inputLine.append(selectInput);
    var divImgLine = $('<div></div>');
    var imgChar = $('<img></img>').addClass('char-pic');
    imgChar.attr('src', 'assets/' + characterCode + '.webp');
    divImgLine.append(imgChar);
    inputLine.append(divImgLine);
    divSelectLine.append(inputLine);
    var selectInputLabel = $('<label></label>').text(characterName);
    divSelectLine.append(selectInputLabel);

    $("#" + characterType + "-selection").append(divSelectLine);
}

function initializeCharactersSheet() {
    $charactersBox = $("#characters-box");
    $charactersSelect = $("#character-selection");

    $.each(dataInformation.characters, function (i, character) {

        var characterTitleId = "character-title-" + i;
        var characterGearsId = "character-gear-" + i;        

        // Character title
        var divLineTitle = $('<div id="' + characterTitleId + '"></div>').addClass('data-title title-alone title-online-drop title-flex character-title');
        var divImgLine = $('<div></div>');
        var imgChar = $('<img></img>').addClass('char-pic');
        imgChar.attr('src', 'assets/' + character.code + '.webp');
        divImgLine.append(imgChar);
        divLineTitle.append(divImgLine);
        var divCharName = $('<div></div>').addClass('character-name').text(character.name);
        divLineTitle.append(divCharName);
        var divCharWM = $('<div></div>')
        divCharWM.append(addWMList(character.code));
        divLineTitle.append(divCharWM);

        //$charactersBox.append(divLineTitle);
        // Character Data Box
        var divLineBox = $('<div id="' + characterGearsId + '"></div>').addClass('data-category-title item-border character-gear');
        divLineBox.append(divLineTitle);
        var divLineData = $('<div></div>').addClass('data-items data-items-flex data-items-grid');
        // Character Gear
        for(var itemType in itemTypes){
            divLineData.append(addItemBox(itemType, character.code));
		}

        // Composing box
        divLineBox.append(divLineData);
        $charactersBox.append(divLineBox);

        $charactersSelect.append($('<option>', { 
            value: i,
            text : character.name 
        }));

        // Add Select box
        var characterType = "";
        if (character.god) characterType = "god";
        if (character.merc) characterType = "mercenary";
        addCharacterSelect(character.code, character.name, characterType);

    });


}


// récup avatars : https://firestone-idle-rpg.fandom.com/wiki/Avatar#Hero_avatars