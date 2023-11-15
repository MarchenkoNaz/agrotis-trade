import IMask from 'imask';
import { formValidator } from './validateForm';



const form = document.querySelector('.js-from');
const formBtn = document.querySelector('.form__button')


const onSubmit = (e) => {
	e.preventDefault();
	mask.updateValue();
	const { fname, email, phone, additInfo } = Object.fromEntries(new FormData(form).entries());

	const UserData = {
		name: fname,
		email: email,
		phone: phone,
		additInfo: additInfo
	}
	formValidator(UserData)

}

formBtn.addEventListener('click', (e) => {
	onSubmit(e)
})

const inputPhone = document.getElementById('phone');
const maskOptions = {
	mask: '+{38}(000)000-00-00',
	lazy: false,
};
const mask = IMask(inputPhone, maskOptions);


