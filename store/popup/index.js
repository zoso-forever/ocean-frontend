const state = _ => ({
	open: false
})

const mutations = {
	OPEN_POPUP (state) {
		state.open = true
	},
	CLOSE_POPUP (state) {
		state.open = false
	}
}

const store = {
	namespaced: true,
	state,
	mutations
}

export default store
