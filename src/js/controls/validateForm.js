import IMask from 'imask';
import notifications from '../helpers/notification.js'
import * as EmailValidator from 'email-validator';


const form = document.querySelector('.js-from');
const { fname, email, phone, additInfo, submitBtn } = form.elements
const onSubmit = (e) => {
	e.preventDefault();
	mask.updateValue();
	const delay = 3000
	const correctMail = EmailValidator.validate(email.value);

	const UserData = {
		name: fname.value,
		email: email.value,
		phone: phone.value,
		additInfo: additInfo.value
	}

	if (!fname.value || !email.value || !phone.value || !phone.value.length === 17) {
		return notifications('warning', 'Заповніть всі поля', 'Потрібно заповнити всі поля форми!')

	}
	else if (!correctMail) {
		email.classList.add('uncorrected');

		setTimeout(function () {
			email.classList.remove('uncorrected');
		}, delay);

		return notifications('error', 'Введіть коректну пошта', 'Неправильно введена пошта!')
	}
	else {
		form.reset()
		console.log(UserData);
		return notifications('success', 'Дані відправлені', 'Очікуйте на дзвінок найближчим часом!')
	}
}



submitBtn.addEventListener('click', (e) => {
	onSubmit(e)
})

const inputPhone = document.getElementById('phone');
const maskOptions = {
	mask: '+{38}(000)000-00-00',
	lazy: false,
};
const mask = IMask(inputPhone, maskOptions);
