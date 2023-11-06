import Notify from 'simple-notify'

const notifications = (type, title, text) => new Notify({
	status: `${type}`,
	title: `${title}`,
	text: `${text}`,
	effect: 'slide',
	speed: 300,
	customClass: '',
	customIcon: '',
	showIcon: true,
	showCloseButton: true,
	autoclose: true,
	autotimeout: 3000,
	gap: 20,
	distance: 20,
	type: 1,
	position: 'right top'
})

export default notifications

