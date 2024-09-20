function rarityChange(id, value) {
    saveToStorage(id, value);
}

function updateCharacterList() {
    var maxStage = $('#max-reached-stage').val();
    if (!maxStage) maxStage = 0;
    saveToStorage('max-reached-stage', maxStage);
}