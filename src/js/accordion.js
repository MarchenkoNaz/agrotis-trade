const accordion = document.querySelectorAll('.services-list-item');

accordion.forEach((element) => {
	let heading = element.querySelector('.services-list-item__title');
	let description = element.querySelector('.services-list-item__text');
	// description.style.height = '0px';

	heading.addEventListener('click', () => {
		element.classList.toggle('services-list-item--active');
		if (element.classList.contains('services-list-item--active')) {
			description.style.height = `${description.scrollHeight}px`;
		} else {
			description.style.height = '0px';
		}

		accordion.forEach((item) => {
			if (item !== element) {
				item.classList.remove('services-list-item--active');
				let otherDescription = item.querySelector('.services-list-item__text');
				otherDescription.style.height = '0px';
			}
		});
	});
});
