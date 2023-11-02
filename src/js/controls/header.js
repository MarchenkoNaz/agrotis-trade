const defaultOffset = 200;
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.navigation');
const burgerButton = document.querySelector('.burger-menu-btn');

const screenWidth = () => window.innerWidth || document.documentElement.clientWidth;
let lastScroll = 0;

const toggleHeader = () => {
	const scrollPosition = window.scrollY || document.documentElement.scrollTop;
	const isHeaderHidden = header.classList.contains('hide');
	if (scrollPosition > lastScroll && !isHeaderHidden && scrollPosition > defaultOffset) {
		header.classList.add('hide');
		headerMenu.classList.remove('menu-open');
		burgerButton.classList.remove('active');
	} else if (scrollPosition < lastScroll && isHeaderHidden) {
		header.classList.remove('hide');
	}
	lastScroll = scrollPosition;
};

const handleScroll = () => {
	if (screenWidth() <= 1024) {
		toggleHeader();
	}
};

window.addEventListener('scroll', handleScroll);

// Викликаємо функцію при завантаженні сторінки, щоб ініціалізувати стан заголовка
if (screenWidth() <= 1024) {
	toggleHeader();
}
