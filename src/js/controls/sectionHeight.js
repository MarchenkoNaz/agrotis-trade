

function addClassSectionFullpage() {
	const screenWidth = window.innerWidth;
	const sections = document.querySelectorAll('main .section');

	if (screenWidth >= 1024) {
		sections.forEach(section => section.classList.add('fullpage'))
	} else {
		sections.forEach(section => section.classList.remove('fullpage'))

	}
}

window.addEventListener('load', addClassSectionFullpage);
window.addEventListener('resize', addClassSectionFullpage);
