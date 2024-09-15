function firstInit() {
	console.log('first init');
}

function loadFromStorage() {
	var retrievedObject = localStorage.getItem(localStorageItemName);
	if (retrievedObject) {
		dataInput = JSON.parse(retrievedObject);


		$("input").each(function() {
			if (this.id != "") {
				if (!dataInput.hasOwnProperty(this.id)) {
					completeUnknownValue(this.id);
				}
				if (this.classList.contains('pet-check') || this.classList.contains('hero-check') || this.classList.contains('numberFormat')) {
					$(this).prop('checked', dataInput[this.id]);
				} else {
					if (parseFloat(dataInput[this.id]) < parseFloat(minValues[this.id])) {
						dataInput[this.id] = minValues[this.id];
					}
					var numberDigits = 0;
					if (this.classList.contains('input-real')) {
						numberDigits = 1;
					} else if (this.classList.contains('input-real-crit')) {
						numberDigits = 2;
					} else if (this.classList.contains('input-real-extended')) {
						numberDigits = 5;
					}

					if (this.type == "number") {
						this.value = dataInput[this.id];
					} else {
						this.value = formatBase(dataInput[this.id], numberDigits);
					}
				}
				$('#' + this.id + '-text').text(formatCount(dataInput[this.id]));
			}
		})

	} else {
		firstInit();
	}
}

function valueUpdate(idObject, isPositive) {

	var newValue = parseFloat($("#" + idObject).val());
	if (!newValue) newValue = 0;
	if (isPositive) {
		newValue += 1;
	} else {
		newValue -= 1;
	}

	var maxValue = 14; // to do, récup max value from type
	var minValue = 0;  // to do, récup min value from type

	// switch (idObject) {
	// 	case 'fight-boss-level' :
	// 		var bossType = $('.select-boss-type').val();
	// 		if (bossType == "1") {
	// 			maxValue = dataInformation.caps.loyalistLevel;
	// 		} else {
	// 			maxValue = dataInformation.caps.mordekLevel;
	// 		}			
	// 		break;
	// 	case 'bonus-speed' :
	// 		maxValue = dataInformation.caps.speed;
	// 		break;
	// 	case 'sanctum-defense' :
	// 		maxValue = dataInformation.caps.stoneskin;
	// 		break;
	// 	case 'building-gold-rank' :
	// 	case 'building-wood-rank' :
	// 	case 'building-stone-rank' :
	// 	case 'building-metal-rank' :
	// 	case 'building-gem-rank' :
	// 		maxValue = dataInformation.caps.rebuildSteps;
	// 		break;
	// 	case 'bonus-craft' :
	// 		maxValue = dataInformation.caps.minimumCraft;
	// 		break;
	// 	case 'craft-ring-level' :
	// 	case 'craft-ring-target' :
	// 	case 'craft-armor-level' :
	// 	case 'craft-armor-target' :
	// 	case 'craft-sword-level' :
	// 	case 'craft-sword-target' :
	// 		maxValue = dataInformation.caps.craftlevel;
	// 		break;
	// 	case 'bird-level' :
	// 	case 'dog-level' :
	// 	case 'snake-level' :
	// 	case 'fox-level' :
	// 	case 'pinguin-level' :
	// 	case 'turtle-level' :
	// 	case 'cat-level' :
	// 	case 'mordek-level' :
	// 		maxValue = dataInformation.caps.petlevel[idObject.replace('-level', '')];
	// 		break;
	// 	case 'mira-evolve' :
	// 	case 'rex-evolve' :
	// 	case 'leo-evolve' :
	// 	case 'sylvie-evolve' :
	// 	case 'anantha-evolve' :
	// 		maxValue = dataInformation.caps.heroLevel;
	// 		break;
	// }
	if (maxValue > 0 && newValue > maxValue) newValue = maxValue;
	if (newValue < minValue) newValue = minValue;

	// saveToStorage(idObject, newValue);
	$("#" + idObject).val(newValue);
	// processInputChange(idObject, newValue);
}