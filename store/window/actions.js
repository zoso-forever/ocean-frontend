import support from '../../utilities/browserSupport'
import eventBus from '../../utilities/eventBus'

let oldScrollTop = 0
let scrollTop = 0

const actions = {
	resize: (context) => {
		// if (!context.state.filled) {
		// 	return
		// }
		console.log('resize')
		context.commit('SET_WIDTH', window.innerWidth)
		context.commit('SET_HEIGHT', window.innerHeight)
		context.commit('SET_ISTOUCH', support.touch())

		eventBus.$emit('resize')
	},

	scroll: (context) => {
		// if (!context.state.filled) {
		// 	return
		// }
		scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

		context.commit('SET_SCROLLTOP', scrollTop)

		if (scrollTop > oldScrollTop) {
			context.commit('SET_SCROLLDIRECTION', 1)
		} else if (scrollTop !== oldScrollTop) {
			context.commit('SET_SCROLLDIRECTION', -1)
		}

		oldScrollTop = scrollTop
	}
}

export default actions
