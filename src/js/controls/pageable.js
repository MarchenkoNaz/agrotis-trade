const footer = document.querySelector('.footer')
const sections = document.querySelectorAll('main .section')
const navigation = document.querySelector('.navigation-list')

let pageable;

const initPageable = () => {
	sections.forEach(section => {
		const attribute = `${section.id}`
		section.setAttribute('data-anchor', attribute)
	})
	navigation.classList.add('anchors')


	pageable = new Pageable("#container", {
		childSelector: "[data-anchor]", // CSS3 selector string for the pages
		anchors: ['hero', 'services', 'buying', 'advantages', 'about-us', 'contacts'], // define the page anchors
		pips: false, // display the pips
		animation: 500, // the duration in ms of the scroll animation
		delay: 0, // the delay in ms before the scroll animation starts
		throttle: 50, // the interval in ms that the resize callback is fired
		orientation: "vertical", // or horizontal
		// swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
		freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
		navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
		navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
		infinite: false, // enable infinite scrolling (from 0.4.0)

		events: {
			wheel: true, // enable / disable mousewheel scrolling
			keydown: true, // enable / disable keyboard navigation
		},
		easing: function (currentTime, startPos, endPos, interval) {
			// the easing function used for the scroll animation
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