(() => {
	const headerMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const burgerMenu = document.querySelector('.burger-menu-btn');

	const openMenu = () => {
		headerMenu.classList.add('menu-open');
		burgerMenu.classList.add('active');
		document.addEventListener('click', closeMenuOnOutsideClick);
	};

	const closeMenu = () => {
		headerMenu.classList.remove('menu-open');
		burgerMenu.classList.remove('active');
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
		if (!headerMenu.contains(event.target) && event.target !== openMenuBtn && event.target !== burgerMenu) {
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

	burgerMenu.addEventListener('click', (event) => {
		event.stopPropagation();
		toggleMenu();
	});
})();
