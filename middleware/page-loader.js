
export default (context) => {
	console.log(context)
	const { store } = context

	store.commit('showLoader')
}
