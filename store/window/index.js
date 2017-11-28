import actions from './actions'
import mutations from './mutations'

const state = _ => ({
	width: 0,
	height: 0,
	scrollDirection: 1,
	scrollTop: 0,
	filled: false
})

const getters = {
	halfWidth: state => state.width / 2,
	halfHeight: state => state.height / 2,

	isMobile: state => state.isTouch && state.width < 768,
	isTablet: state => state.isTouch && state.width <= 1024
}

const store = {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

export default store
