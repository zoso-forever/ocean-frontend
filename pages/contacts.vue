<template>
	<section class="page-contacts">
		<h1>Контакты</h1>
		<app-list />
	</section>
</template>

<script>
import appList from '~/components/app-list.vue'

export default {
	components: {
		appList
	},
	head () {
		return {
			title: 'Контакты',
			meta: [
				{ hid: 'description', name: 'description', content: 'contacts content' }
			]
		}
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
<style lang="stylus">
@require '~assets/styles/global.styl'

.page-contacts
	background-color #9ccd93
	page-content()

</style>
