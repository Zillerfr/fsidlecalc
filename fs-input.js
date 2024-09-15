function rarityChange(select) {
    var selectedValue = select.value;
    console.log ('rarity changed to ' + selectedValue);
}

function updateCharacterList() {
    var maxStage = $('#max-reached-stage').val();
    console.log("Mise à jour des personnages, échelon max : " + maxStage);
    initializeCharactersSheet();
}