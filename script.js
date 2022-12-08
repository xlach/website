/* Please ❤ this if you like it! */


(function ($) {
	"use strict";

	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}();

	//getCode

	var getCode = function () {
		var date = new Date();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var year = date.getFullYear();

		const finalDays = [`${year}-12-13`, `${year}-12-14`, `${year}-12-15`, `${year}-12-16`, `${year + 1}-5-30`, `${year + 1}-5-31`, `${year + 1}-06-01`];

		const reviewDays = [`${year}-12-12`];

		const fetchData = async () => {
			const response = await fetch(`https://bell.dev.harker.org/api/schedule?month=${month}&day=${day}&year=${year}`);
			if (!response.ok) {
				throw new Error('Data coud not be fetched!')
			} else {
				return response.json()
			}
		}

		if (date.getDay() === 0 || date.getDay() === 6) {
			return (`weekend`)
		}
		else if (fetchData().code === ' ') {
			return (`no school!`);
		}
		else if (reviewDays.includes(`${year}-${month}-${day}`)) {
			return (`GO REVIEW!`);
		}
		else if (finalDays.includes(`${year}-${month}-${day}`)) {
			return (`finals :(`);
		}
		else {
			return (`${fetchData().code} - `);
		}
	}();

})(jQuery);