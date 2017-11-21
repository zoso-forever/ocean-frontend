<template>
	<section class="main-page">
		<h1>Океан путешествий</h1>
		<app-list />
	</section>
</template>

<script>
import appList from '~/components/app-list.vue'

export default {
	components: {
		appList
	},
	created () {
		this.$nextTick(() => {
			setTimeout(() => {
				this.$store.commit('stopLoader')
			}, 150)
		})
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.main-page
	background-color #cd9f93
	page-content()
</style>
