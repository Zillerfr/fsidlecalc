function rarityChange(select) {
    var selectedValue = select.value;
    saveToStorage(select.id, select.value);
}

function updateCharacterList() {
    var maxStage = $('#max-reached-stage').val();
    if (!maxStage) maxStage = 0;
    saveToStorage('max-reached-stage', maxStage);
}