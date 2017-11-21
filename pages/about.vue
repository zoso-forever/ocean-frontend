<template>
	<section v-bind:class='{isActive: loaded}' class="page-about">
		<h1>О нас</h1>
		<app-list />
	</section>
</template>

<script>
import axios from 'axios'
import appList from '~/components/app-list.vue'

export default {
	components: {
		appList
	},
	head () {
		return {
			title: 'О нас',
			meta: [
				{ hid: 'description', name: 'description', content: 'about content' }
			]
		}
	},
	computed: {
		loaded () {
			return !this.$store.state.loading
		}
	},
	async asyncData (blob) {
		// test
		const id = 'YOUR_CLIENT_ID'
		const secret = 'YOUR_SECRET_ID'
		const params = `?client_id=${id}&client_secret=${secret}`
		const username = 'DNLHC'
		let { data } = await axios.get(`https://api.github.com/users/${username}${params}`)
		console.log(data)
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

.page-about
	background-color #93cccd
	page-content()
</style>

