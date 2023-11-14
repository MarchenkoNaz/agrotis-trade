import dotenv from 'dotenv'
import notifications from '../helpers/notification.js'

dotenv.config()

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

export const sendMessageTelegram = async (formData) => {
	const form = document.querySelector('.js-from');

	const { name, email, phone, additInfo } = formData

	const addInfo = additInfo ? `Додаткова інформація: ${additInfo}` : ''

	const message = `ЗАЯВКА ВІД\nІм'я: ${name}\nПошта: ${email}\nНомер телефону: ${phone}\n${addInfo}`
	if (message.length > 0) {
		try {
			const response = await fetch(TELEGRAM_API, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: TELEGRAM_CHAT_ID,
					text: message,
				})
			})

			if (response.ok) {
				form.reset()
				return notifications('success', 'Дані відправлені', 'Очікуйте на дзвінок найближчим часом!')
			} else {
				throw new Error(response.statusText)
			}
		}
		catch (error) {
			console.error(error);
			notifications('error', 'Помилка', `${error.message}`)
		}
	} else {
		console.error('Message text is empty');
	}

}