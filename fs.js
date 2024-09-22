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