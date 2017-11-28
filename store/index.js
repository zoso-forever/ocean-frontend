import Vuex from 'vuex'
import moduleWindow from './window'
import modulePopup from './popup'

const createStore = () => {
	return new Vuex.Store({
		modules: {
			window: moduleWindow,
			popup: modulePopup
		},
		strict: true
	})
}

export default createStore
