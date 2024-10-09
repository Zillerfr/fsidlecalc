function rarityChange(id, value) {
    saveToStorage(id, value);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        // Appel de la fonction souhaitée
        switch (event.target.id) {
            case "max-reached-stage" :
                updateCharacterList();
                break;
            case "void-crystal" :
                updateGearList();
                break;
            case "soul-shard" :
                updateStoneList();
                break;
            case "ethereal-shard" :
                updateJewelsList();
                break;
        }
    }
}

function updateGearList() {
    var voidCrystal = $('#void-crystal').val();
    if (!voidCrystal) voidCrystal = 0;
    saveToStorage('void-crystal', voidCrystal);
    initGearUpgrade()
}

function updateStoneList() {
    var soulShard = $('#soul-shard').val();
    if (!soulShard) soulShard = 0;
    saveToStorage('soul-shard', soulShard);
    initStoneUpgrade()
}

function updateJewelsList() {
    var etherealShard = $('#ethereal-shard').val();
    if (!etherealShard) etherealShard = 0;
    saveToStorage('ethereal-shard', etherealShard);
    initJewelUpgrade()
}

function updateCharacterList() {
    $(".custom-options").removeClass('show');
    var maxStage = $('#max-reached-stage').val();
    if (!maxStage) maxStage = 0;
    saveToStorage('max-reached-stage', maxStage);
    selectCharacter(toDOMElement($('#character-selection')));
}

function characterSelection(checkbox) {
    var checkedState = checkbox.prop('checked');
    saveToStorage(checkbox.attr('id'), checkedState);
    updateCharacterList()
}

function customSelectClick(select) {
    var classToAdd = true;
    if (select.siblings('.custom-options').hasClass('show')) {
        classToAdd = false;
    }
    $(".custom-options").removeClass('show');
    
    if (classToAdd) {
        select.siblings('.custom-options').addClass('show');
    } else {
        select.siblings('.custom-options').removeClass('show');
    }
}

function forceMaxValue(inputField, rarityValue) {

    newMaxValue = dataInformation.rarities[rarityValue].maxLevel;
    if (inputField.val() > newMaxValue) inputField.val(newMaxValue);
}

function customOptionClick(option) {
    var value = option.data('value');
    var container = option.closest('.custom-select-container');
    var select = container.find('.custom-select');
    var customOptions = option.closest('.custom-select-container').find('.custom-options');
    var image = option.closest('.custom-select-container').find('.select-image');
    var inputContainer = container.siblings('.input-with-control');
    var inputField = inputContainer.find('.input-gear-level');
    forceMaxValue(inputField, value);
    select.val(value);
    rarityChange(select.attr("id"), value);
    changeRarityClass(image, value);
    changeRarityClass(container, value);
    changeRarityBorderClass(inputContainer, value);
    customOptions.removeClass('show');
}

function selectCharacter(select) {
    $(".custom-options").removeClass('show');
    $('.character-title').hide();
    $('.character-gear').hide();    
    if (select.value > -1) {
        $('#character-title-' + select.value).show();
        $('#character-gear-' + select.value).show();
    } else if (select.value == -2) {
        var maxStage = dataInput['max-reached-stage'];
        $.each(dataInformation.characters, function (i, character) {
            var selectionCheckId = "character-select-" + character.code;
            if (character.god || character.merc) {
                if (dataInput[selectionCheckId]) {
                    $('#character-title-' + i).show();
                    $('#character-gear-' + i).show();
                }
            } else {
                if (character.unlockStage <= maxStage) {
                    $('#character-title-' + i).show();
                    $('#character-gear-' + i).show();
                }
            }
        });
    } else {
        $('.character-title').show();
        $('.character-gear').show();
    }
}