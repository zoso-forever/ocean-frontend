const state = {
	loading: false
}

const mutations = {
	SHOW_LOADER (state) {
		state.loading = true
	},
	HIDE_LOADER (state) {
		state.loading = false
	}
}

const store = {
	namespaced: true,
	state,
	mutations
}

export default store
