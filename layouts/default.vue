<template>
	<div class='page'>
		<app-header />
		<main class="page__content">
			<nuxt/>
		</main>
		<app-footer />
		<popup v-bind:state='open' v-on:closePopup='CLOSE_POPUP'/>
		<page-loader />
	</div>
</template>

<script>
import AppHeader from '~/components/app-header.vue'
import AppFooter from '~/components/app-footer.vue'
import Popup from '~/components/popup.vue'
import PageLoader from '~/components/page-loader.vue'
import {mapState, mapMutations} from 'vuex'

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
		])
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
		flex 1 0 auto
		position relative

</style>
