<template>
	<section v-bind:class='{isLoaded: isLoaded}' class="page-about">
		<h1 class='page-about__title'>О нас</h1>
		<div class="page-about__list">
			<app-list />
		</div>
		<div class="page-about__gallery">
			<img src="~/assets/images/cat4small.jpg" alt="" class="page-about__img">
			<img src="~/assets/images/cat2small.jpg" alt="" class="page-about__img">
			<img src="~/assets/images/cat3small.jpg" alt="" class="page-about__img">
		</div>
		<h1 class='page-about__title'>О нас</h1>
		<div class="page-about__list">
			<app-list />
		</div>
		<div class="page-about__gallery">
			<img src="~/assets/images/cat4small.jpg" alt="" class="page-about__img">
			<img src="~/assets/images/cat2small.jpg" alt="" class="page-about__img">
			<img src="~/assets/images/cat3small.jpg" alt="" class="page-about__img">
		</div>
		<h1 class='page-about__title'>О нас</h1>
		<div class="page-about__list">
			<app-list />
		</div>
		<div class="page-about__gallery">
			<img src="~/assets/images/cat4small.jpg" alt="" class="page-about__img">
			<img src="~/assets/images/cat2small.jpg" alt="" class="page-about__img">
			<img src="~/assets/images/cat3small.jpg" alt="" class="page-about__img">
		</div>
	</section>
</template>

<script>
// import axios from 'axios'
import appList from '~/components/app-list.vue'
import eventBus from '~/utilities/eventBus'

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
	data () {
		return {
			isLoaded: false
		}
	},
	// async asyncData (blob) {
	// 	// test
	// 	const id = 'YOUR_CLIENT_ID'
	// 	const secret = 'YOUR_SECRET_ID'
	// 	const params = `?client_id=${id}&client_secret=${secret}`
	// 	const username = 'DNLHC'
	// 	let { data } = await axios.get(`https://api.github.com/users/${username}${params}`)
	// 	console.log(data)
	// },
	created () {
		this.$nextTick(() => {
			console.log('EVENTHUB', eventBus)
			setTimeout(() => {
				this.isLoaded = true
				eventBus.$emit('customEvent', {state: false})
			}, 100)
		})
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/global.styl'

.page-about
	margin-top 120px
	// background-color #93cccd

	&__title
		opacity 0
		transform translateY(50px) rotateY(-30deg) rotateX(-10deg) translateZ(0)
		transition transform .8s $ease-in-quad, opacity .8s $ease-in-quad

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__list
		opacity 0
		transform translateY(50px)
		transition transform .8s $ease-in-quad .08s, opacity .8s $ease-in-quad .08s

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__gallery
		max-width 1200px
		margin-top 45px
		margin-x auto
		display flex
		justify-content space-between
		opacity 0
		transform translateY(50px)
		transition transform .8s $ease-in-quad .16s, opacity .8s $ease-in-quad .16s

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__img
		width calc(33.3333% - 10px)
		height 400px
		object-fit cover
</style>

