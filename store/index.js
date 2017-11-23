import Vuex from 'vuex'
import moduleWindow from './window'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			window: moduleWindow
		},
		strict: true
	})
}

export default createStore
