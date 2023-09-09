(() => {
	const headerMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const burgerBtn = document.querySelector('.burger-menu-btn');

	const openMenu = () => {
		headerMenu.classList.add('menu-open');
		burgerBtn.classList.add('active');
		document.addEventListener('click', closeMenuOnOutsideClick);
	};
	console.dir(headerMenu);
	const closeMenu = () => {
		headerMenu.classList.remove('menu-open');
		burgerBtn.classList.remove('active');
		document.removeEventListener('click', closeMenuOnOutsideClick);
	};

	const toggleMenu = () => {
		if (headerMenu.classList.contains('menu-open')) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	const closeMenuOnOutsideClick = (event) => {
		if (!headerMenu.contains(event.target) && event.target !== openMenuBtn && event.target !== burgerBtn) {
			closeMenu();
		}
	};

	openMenuBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		toggleMenu();
	});

	closeMenuBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		toggleMenu();
	});

	burgerBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		toggleMenu();
	});
})();
