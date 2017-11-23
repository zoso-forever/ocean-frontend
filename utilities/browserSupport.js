const support = {
	touch: () => ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)
}

export default support
