<template>
	<div class='page'>
		<app-header />
		<main v-bind:class='{isLoaded: loaded}'class="page__content">
			<nuxt/>
		</main>
		<app-footer />
		<page-loader />
	</div>
</template>

<script>
import appHeader from '~/components/app-header.vue'
import appFooter from '~/components/app-footer.vue'
import pageLoader from '~/components/page-loader.vue'

export default {
	components: {
		appHeader,
		appFooter,
		pageLoader
	},
	computed: {
		loaded () {
			return !this.$store.state.loading
		}
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
