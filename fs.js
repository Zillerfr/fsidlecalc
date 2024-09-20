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
		initTheme();
		getStorageValues();
		initializeCharactersSheet();
		generateMinValues()
		loadFromStorage();

		// custom image select
		$('.select-image').on('click', function() {
			$(this).siblings('.custom-options').toggleClass('show');
		});
		
		$('.option').on('click', function() {
			var value = $(this).data('value');
			var container = $(this).closest('.custom-select-container');
			var select = container.find('.custom-select');
			var customOptions = $(this).closest('.custom-select-container').find('.custom-options');
			var image = $(this).closest('.custom-select-container').find('.select-image');
			var inputContainer = container.siblings('.input-with-control')
			select.val(value);
			rarityChange(select.attr("id"), value);
			changeRarityClass(image, value);
			changeRarityClass(container, value);
			changeRarityBorderClass(inputContainer, value);
			customOptions.removeClass('show');
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
						console.log("ouverture onglet informations");						
						break;
					case "tab_showitems" :
						console.log("ouverture onglet à voir 1");
						break;
					case "tab_todo2" :
						console.log("ouverture onglet à voir 2");
						break;
					case "tab_todo3" :
						console.log("ouverture onglet à voir 3");
						break;
					default:
						break;
				}
			})
		})

	});
})(jQuery);