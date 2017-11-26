const mutations = {
	SET_WIDTH: (state, val) => {
		state.width = val
	},
	SET_HEIGHT: (state, val) => {
		state.height = val
	},
	SET_ISTOUCH: (state, val) => {
		state.isTouch = val
	},
	SET_SCROLLTOP: (state, val) => {
		state.scrollTop = val
	},
	SET_SCROLLDIRECTION: (state, val) => {
		state.scrollDirection = val
	},
	FILLED: (state) => {
		state.filled = true
	}
}

export default mutations
