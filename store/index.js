import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			counter: 0,
			loading: false
		},
		mutations: {
			increment (state) {
				state.counter += 1
			},
			showLoader (state) {
				state.loading = true
			},
			stopLoader (state) {
				state.loading = false
			}
		}
	})
}

export default createStore
