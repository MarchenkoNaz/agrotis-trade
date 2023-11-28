import { sendMessageTelegram } from '../api/telegram.js';
import notifications from '../helpers/notification.js'
import * as EmailValidator from 'email-validator';

const form = document.querySelector('.js-from');


export function formValidator(UserData) {

	const nameField = form.elements.fname;
	const emailField = form.elements.email;
	const mobileField = form.elements.phone;


	const correctMail = EmailValidator.validate(UserData.email);
	const regexUserName = new RegExp('^(?=[а-яА-Я]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$');

	if (!UserData.name && !UserData.email && !UserData.phone) {
		addStatusField('warning', [nameField, emailField, mobileField], 'Заповніть всі поля', 'Потрібно заповнити всі поля форми!')
	}
	else if (!UserData.name.match(regexUserName)) {
		addStatusField('error', [nameField], "Введіть правильне ім'я українською", "Ім'я не може складатися з цифр, '.' , '-' , '_'  ")
	}
	else if (!correctMail) {
		addStatusField('error', [emailField], 'Введіть коректну пошта')
	}
	else if (UserData.phone.length !== 17) {
		addStatusField('error', [mobileField], 'Введіть коректний номер телефону')
	}
	else {
		sendMessageTelegram(UserData)
	}
}


function addStatusField(status, fields, ErrorMessage, Message) {
	const delay = 3000

	fields.map(field => {
		field.classList.add('uncorrected');
		setTimeout(function () {
			field.classList.remove('uncorrected');
		}, delay);
	})


	return notifications(`${status}`, `${ErrorMessage}`, `${Message || ''}`)
}