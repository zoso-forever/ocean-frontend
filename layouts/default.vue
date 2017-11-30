<template>
	<div class='page'>
		<app-header />
		<main class="page__content">
			<nuxt/>
		</main>
		<app-footer />
		<popup :state='open' @closePopup='CLOSE_POPUP'/>
		<page-loader />
	</div>
</template>

<script>
import AppHeader from '~/components/app-header.vue'
import AppFooter from '~/components/app-footer.vue'
import Popup from '~/components/popup.vue'
import PageLoader from '~/components/page-loader.vue'
import throttle from '~/utilities/throttle'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
	components: {
		AppHeader,
		AppFooter,
		Popup,
		PageLoader
	},
	computed: {
		...mapState('popup', [
			'open'
		])
	},
	methods: {
		...mapMutations('popup', [
			'OPEN_POPUP',
			'CLOSE_POPUP'
		]),
		...mapMutations('window', [
			'FILLED'
		]),
		...mapActions('window', [
			'resize',
			'scroll'
		])
	},
	mounted () {
		this.$nextTick(() => {
			window.addEventListener('resize', throttle(this.resize), false)
			document.addEventListener('scroll', this.scroll, false)

			this.resize()
		})
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.page
	display flex
	flex-direction column
	min-height 100vh

	&__content
		padding-top 60px
		flex 1 0 auto
		position relative

</style>
