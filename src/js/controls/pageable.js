const footer = document.querySelector('.footer')
const sections = document.querySelectorAll('main .section')
const navigation = document.querySelector('.navigation-list')
const navLinks = document.querySelectorAll('.navigation-link')

let pageable;

function setActiveSection() {
	let activeSection = null;

	sections.forEach(section => {
		const rect = section.getBoundingClientRect();

		if (rect.top <= 0 && rect.bottom >= 0) {
			activeSection = section;
		}
	});
	if (activeSection) {
		const activeSectionId = activeSection.getAttribute('id');

		navLinks.forEach(navLink => {
			if (navLink.id.includes(activeSectionId)) {
				navLink.classList.add('active');
			}
			else {
				navLink.classList.remove('active')
			}
		})
	}
	return activeSection;
}




const initPageable = () => {
	sections.forEach(section => {
		const attribute = `${section.id}`
		section.setAttribute('data-anchor', attribute)
	})
	navigation.classList.add('anchors')

	pageable = new Pageable("#container", {
		childSelector: "[data-anchor]", // CSS3 selector string for the pages
		pips: false, // display the pips
		animation: 500, // the duration in ms of the scroll animation
		delay: 0, // the delay in ms before the scroll animation starts
		throttle: 200, // the interval in ms that the resize callback is fired
		orientation: "vertical", // or horizontal
		freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to the next page
		navPrevEl: true, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
		navNextEl: true, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
		infinite: false, // enable infinite scrolling (from 0.4.0)

		events: {
			wheel: true, // enable / disable mousewheel scrolling
			mouse: false, // enable / disable mouse drag scrolling
			touch: true, // enable / disable touch / swipe scrolling
			keydown: true, // enable / disable keyboard navigation
		},
		easing: function (currentTime, startPos, endPos, interval) {
			return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
		},
		onInit: function () {
			// do something when the instance is ready
		},
		onUpdate: function () {

		},
		onBeforeStart: function () {
			// do something before scrolling begins
		},
		onStart: function () {
			// do something when scrolling begins
		},
		onScroll: function () {
			footer.classList.remove("visible")
		},
		onFinish: function () {
			footer.classList.add("visible")
			setActiveSection()

		},
	});
}

const destroyPageable = () => {
	pageable.destroy();
	pageable = null;
	sections.forEach(section => {
		const attribute = `${section.id}`
		section.removeAttribute('data-anchor', attribute)
	})
	navigation.classList.remove('anchors')
}

function checkWindowSize() {
	if (window.innerWidth >= 1024) {
		if (!pageable) {
			initPageable()
		}
	} else {
		if (pageable) {
			destroyPageable()
		}
	}
}

function handleOrientationChange() {
	if (window.orientation === 0) {
		if (pageable) {
			destroyPageable()
		}
	} else {
		if (!pageable) {
			initPageable()
		}
	}
}

document.addEventListener('DOMContentLoaded', checkWindowSize);
window.addEventListener('resize', checkWindowSize);
window.addEventListener('orientationchange', handleOrientationChange);
