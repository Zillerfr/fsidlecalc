/**
 * ==================================
 * Main
 * ==================================
 */
(function($, undefined) {

	"use strict";

	// When ready.
	$(function() {

		loadFromStorage();

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
						updateNumberFormat();
						break;
					case "tab_craft" :
						updateCraftTab();
						updateCraftPurchases();
						break;
					case "tab_pet" :
						updatePets();
						break;
					case "tab_mordek" :
						updateBossFight();
						break;
					case "tab_drop" :
						updateDropTab();
						break;
					case "tab_rebuild" :
						updateRebuild();
						break;
					default:
						break;
				}
			})
		})

	});
})(jQuery);