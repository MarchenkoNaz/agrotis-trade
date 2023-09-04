(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');
	const burgerMenu = document.querySelector('.burger-menu-btn')

	const toggleMenu = () => {
		const isMenuOpen = mobileMenu.classList.contains('menu-open');

		if (isMenuOpen) {
			mobileMenu.classList.remove('menu-open');
			burgerMenu.classList.remove('active');


		} else {
			mobileMenu.classList.add('menu-open');
			burgerMenu.classList.add('active');
		}
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
	burgerMenu.addEventListener('click', toggleMenu);

})();