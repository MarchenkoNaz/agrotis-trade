import { sendMessageTelegram } from '../api/telegram.js';
import notifications from '../helpers/notification.js'
import * as EmailValidator from 'email-validator';

const form = document.querySelector('.js-from');


export function formValidator(UserData) {
	const delay = 3000

	const nameField = form.elements.fname
	const emailField = form.elements.email

	const correctMail = EmailValidator.validate(UserData.email);

	if (!UserData.name || !UserData.email || UserData.phone.length !== 17) {
		return notifications('warning', 'Заповніть всі поля', 'Потрібно заповнити всі поля форми!')
	}
	else
		if (!isNaN(Number(UserData.name))) {

			nameField.classList.add('uncorrected');

			setTimeout(function () {
				nameField.classList.remove('uncorrected');
			}, delay);

			return notifications('error', "Введіть правильне ім'я", "Ім'я не може складатися з цифр")
		}
		else
			if (!correctMail) {
				emailField.classList.add('uncorrected');

				setTimeout(function () {
					emailField.classList.remove('uncorrected');
				}, delay);

				return notifications('error', 'Введіть коректну пошта', 'Неправильно введена пошта!')
			}
			else {
				sendMessageTelegram(UserData)
			}
}