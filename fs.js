/**
 * ==================================
 * Main
 * ==================================
 */
(function($, undefined) {

	"use strict";

	// When ready.
	$(function() {

		/**
		 * Initialisation 
		 */
		$('#spinner').show();
		initTheme();
		generateMinValues()
		getStorageValues();
		initializeCharactersSheet();
		loadFromStorage();
		$('#spinner').hide();

		// custom image select
		$('.select-image').on('click', function() {
			customSelectClick($(this));			
		});
		
		$('.option').on('click', function() {
			customOptionClick($(this));

		});

		// checkbox character select
		$('.character-select-box').on('click', function() {
			characterSelection($(this));
		});

		$('.radio-image').on('click', function(){
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
				filterByWM(null);
			} else {
				$('.radio-image').removeClass('selected');
				$(this).addClass('selected');
				filterByWM($(this).data('value'));
			}
		});

		/**
		 * ==================================
		 * Tabs management
		 * ==================================
		 */
		var tabs = document.querySelectorAll(".tabs_wrap ul li");
		var allTabs = document.querySelectorAll(".tab_item_wrap");

		tabs.forEach((tab)=>{
			tab.addEventListener("click", ()=>{
				tabs.forEach((tab)=>{
					tab.classList.remove("active");
				});
				tab.classList.add("active");
				var tabval = tab.getAttribute("data-tabs");

				allTabs.forEach((item)=>{
					item.classList.remove("active");
				});

				var activeTab = document.querySelectorAll("." + tabval);
				activeTab.forEach((item)=>{
					item.classList.add("active");
				});

				switch (tabval) {
					case "tab_data" :
						break;
					case "tab_wmpower" :
						initWMPower();
						break;
					case "tab_gearupgrade" :
						initGearUpgrade();
						initStoneUpgrade();
						updateJewelsList();
						break;
					default:
						break;
				}
			})
		})

	});
})(jQuery);