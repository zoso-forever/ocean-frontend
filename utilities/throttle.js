const throttle = (func, wait, immediate) => {
	let timeout
	return () => {
		let context = this
		let args = arguments

		let later = () => {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		let callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

export default throttle
