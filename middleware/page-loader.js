import eventBus from '../utilities/eventBus'
const pageColors = {
	contacts: '#0d57d8',
	about: '#db739a',
	index: '#3388dd'
}
export default (context) => {
	console.log(context)
	const page = context.route.name
	eventBus.$emit('customEvent', {state: true, color: pageColors[page]})
}
