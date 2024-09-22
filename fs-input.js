function rarityChange(id, value) {
    saveToStorage(id, value);
}

function updateCharacterList() {
    $(".custom-options").removeClass('show');
    var maxStage = $('#max-reached-stage').val();
    if (!maxStage) maxStage = 0;
    saveToStorage('max-reached-stage', maxStage);
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
    if (select.value > -1) {
        $('.character-title').hide();
        $('.character-gear').hide();
        $('#character-title-' + select.value).show();
        $('#character-gear-' + select.value).show();
    } else {
        $('.character-title').show();
        $('.character-gear').show();
    }
}