import Vuex from 'vuex'
import moduleWindow from './window'
import modulePoppup from './popup'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			window: moduleWindow,
			popup: modulePoppup
		},
		strict: true
	})
}

export default createStore
