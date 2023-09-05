let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.navigation');
const burgerButton = document.querySelector('.burger-menu-btn');

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

const screenWidth = () => window.innerWidth || document.documentElement.clientWidth;

const toggleHeader = () => {

	if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {

		header.classList.add('hide');
		headerMenu.classList.remove('menu-open');
		burgerButton.classList.remove('active');

	}
	else if (scrollPosition() < lastScroll && containHide()) {
		header.classList.remove('hide');

	}
	lastScroll = scrollPosition();
};

window.addEventListener('scroll', () => {
	if (screenWidth() <= 1024) {
		toggleHeader();
	}
});


if (screenWidth() <= 1024) {
	toggleHeader();
}
