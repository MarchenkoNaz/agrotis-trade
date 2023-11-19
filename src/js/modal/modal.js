const modalbackdrop = document.querySelector('.backdrop-wrapper');
const modal = document.querySelector('.modal')
const openModalButtons = document.querySelectorAll('.data-open-modal');
const closeModalButton = modal.querySelector('.close-form');

function openModal() {
	modalbackdrop.classList.add('active');
	modal.classList.add('active');
	document.body.style.overflow = 'hidden';
}

export function closeModal() {
	modalbackdrop.classList.remove('active');
	modal.classList.remove('active');
	document.body.style.overflow = '';

}
openModalButtons.forEach(button => button.addEventListener('click', openModal))

closeModalButton.addEventListener('click', closeModal);

modalbackdrop.addEventListener('click', (event) => {
	if (event.target === modalbackdrop) {
		closeModal();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeModal();
	}
});
