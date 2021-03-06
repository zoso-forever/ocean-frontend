import eventBus from '../utilities/eventBus'

const pageColors = {
	contacts: '#0d57d2',
	about: '#62D9A5',
	index: '#f8e885'
}

export default (context) => {
	const page = context.route.name
	eventBus.$emit('routeChanged', {state: true, color: pageColors[page]})
}
