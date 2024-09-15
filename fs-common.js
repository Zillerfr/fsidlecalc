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