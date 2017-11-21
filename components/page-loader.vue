<template>
	<div
		class="page-loader"
		v-bind:class='{active: loading}'>
	</div>
</template>

<script>
export default {
	computed: {
		loading () {
			return this.$store.state.loading
		}
	},
	created () {
		this.$store.commit('stopLoader')
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.page-loader
	position fixed
	top 0
	left 0
	height 100vh
	width 100vw
	background-color #fbd587
	z-index 10
	transform scaleX(0)
	transform-origin 100% 0
	transition transform .6s cubic-bezier(.48,0,.12,1)

	&.active
		transform scaleX(1)
		transform-origin 0 0
</style>
