// Gestion thèmes
function initTheme() {
	const localStorageTheme = localStorage.getItem("theme");
	const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
	var theme = "light";
	if (localStorageTheme !== null) {
		theme = localStorageTheme;
	} else if (systemSettingDark.matches) {
		theme = "dark";
	}
	document.querySelector("html").setAttribute("data-theme", theme);
	$('.select-theme').val(theme);
}

function updateTheme() {

	var newTheme = $('.select-theme').val();
	document.querySelector("html").setAttribute("data-theme", newTheme);
	localStorage.setItem("theme", newTheme);
}

// Gestion sauvegarde des données
var minValues = {};

function generateMinValues() {
	dataInformation.characters.forEach(function (character, index) {
		var charName = character.code;

		for(var itemType in itemTypes){
			dataInformation[itemType].forEach(function(item, index) {
				var rarityId = charName + "-" + itemType + "-" + item.code + "-rarity";
				var itemId = charName + "-" + itemType + "-" + item.code + "-level";
				
				minValues[rarityId] = 0;
				minValues[itemId] = 0;


			});
		}

	 });
	 minValues["max-reached-stage"] = 0;

}

/* Import */
function updateValuesFromObject(dataObject) {

	dataInput = {};

	for (var key in minValues) {
		if (dataObject.hasOwnProperty(key)) {
			dataInput[key] = dataObject[key];
		}
	}
	localStorage.setItem(localStorageItemName, JSON.stringify(dataInput));
}

// Initialisation
function firstInit() {
	$("input").each(function() {
		completeUnknownValue(this.id);
	})
	saveAllToStorage();
}

function completeUnknownValue(id) {
	saveToStorage(id, minValues[id]);
}

function saveToStorage(id, value) {
	if (id != "") {
		dataInput[id] = value;
		localStorage.setItem(localStorageItemName, JSON.stringify(dataInput));
	}
}

function saveAllToStorage() {
	$("input").each(function() {
		switch (this.id) {
			case "id-for-checkbox-input" :
				// TODO : à compléter une fois les checkbox en place
				dataInput[this.id] = $(this).prop("checked");
				break;
			default:
				dataInput[this.id] = this.value.replace(',','.');
		}
	})
	localStorage.setItem(localStorageItemName, JSON.stringify(dataInput));
}

function getStorageValues() {
	var retrievedObject = localStorage.getItem(localStorageItemName);
	if (retrievedObject) {
		dataInput = JSON.parse(retrievedObject);
	}
}

function loadFromStorage() {
	if (!jQuery.isEmptyObject(dataInput)) {

		$("input").each(function() {
			if (this.id != "") {
				if (!dataInput.hasOwnProperty(this.id) || dataInput[this.id] == '') {
					completeUnknownValue(this.id);
				}
				if (this.classList.contains('class-for-checkbox-input')) {
					// TODO : à compléter une fois les checkbox en place
					$(this).prop('checked', dataInput[this.id]);
				} else if (this.classList.contains('select-input')) {
					$(this).val(dataInput[this.id]);
				} else {
					if (parseFloat(dataInput[this.id]) < parseFloat(minValues[this.id])) {
						dataInput[this.id] = minValues[this.id];
					}
					this.value = dataInput[this.id];
				}
			}
		})
		$("select").each(function() {
			if (this.id != "") {
				if (!dataInput.hasOwnProperty(this.id) || dataInput[this.id] == '') {
					completeUnknownValue(this.id);
				}
				if (this.classList.contains('custom-select')) {
					$(this).val(dataInput[this.id]);
					if (dataInput[this.id] > 0) {
						var container = $(this).closest('.custom-select-container');
						var image = $(this).closest('.custom-select-container').find('.select-image');
						var inputContainer = container.siblings('.input-with-control')
						changeRarityClass(image, dataInput[this.id]);
						changeRarityClass(container, dataInput[this.id]);
						changeRarityBorderClass(inputContainer, dataInput[this.id]);
					}
				}
			}
		})		
	} else {
		firstInit();
	}
}

function valueUpdate(idObject, isPositive) {

	$(".custom-options").removeClass('show');

	var newValue = parseFloat($("#" + idObject).val());
	var objectRarity = $("#" + idObject).closest('.data-item-container').find('.custom-select').val();
	var isGearLevelInput = $("#" + idObject).hasClass("input-gear-level");

	if (!newValue) newValue = 0;
	if (isPositive) {
		newValue += 1;
	} else {
		newValue -= 1;
	}
	var minValue = 0;
	var maxValue = 14;

	if (isGearLevelInput) {
		maxValue = dataInformation.rarities[objectRarity].maxLevel;
	}

	if (maxValue >= 0 && newValue > maxValue) newValue = maxValue;
	if (newValue < minValue) newValue = minValue;

	saveToStorage(idObject, newValue);
	$("#" + idObject).val(newValue);
}