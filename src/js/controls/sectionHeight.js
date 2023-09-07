

function addClassSectionFullpage() {
	const screenWidth = window.innerWidth;
	const sections = document.querySelectorAll('main .section');
	if (screenWidth >= 1024) {
		sections.forEach(section => {
			if (section.id !== 'hero')
				section.classList.add('fullpage')
		})
	} else {

		sections.forEach(section => {
			if (section.id !== 'hero') {
				section.classList.remove('fullpage')
			}
		})
	}
}

window.addEventListener('load', addClassSectionFullpage);
window.addEventListener('resize', addClassSectionFullpage);
