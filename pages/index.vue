<template>
	<section :class='{isLoaded: isLoaded}' class="main-page">
		<div class="container">
			<div class="clouds">
				<img class='cloud-1' src="~/assets/images/cool-cloud.svg" role='presentational'>
				<img class='cloud-2' src="~/assets/images/cool-cloud.svg" role='presentational'>
				<img class='cloud-3' src="~/assets/images/cool-cloud.svg" role='presentational'>
			</div>
			<img src="~/assets/images/cat1.jpg" alt="" class="main-page__img">
			<h1 class='main-page__title'>Океан путешествий</h1>
			<div class="main-page__list">
				<app-list />
			</div>
		</div>
		<slider/>
	</section>
</template>

<script>
import appList from '~/components/app-list.vue'
import eventBus from '~/utilities/eventBus'
import Slider from '~/components/slider.vue'

export default {
	components: {
		appList,
		Slider
	},
	data () {
		return {
			isLoaded: false
		}
	},
	created () {
		this.$nextTick(() => {
			setTimeout(() => {
				this.isLoaded = true
				eventBus.$emit('routeChanged', {state: false})
			}, 100)
		})
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.clouds
	position absolute
	top 80px
	left 50%
	transform translateX(-50%)
	width 1000px

.cloud-1
.cloud-2
.cloud-3
	position absolute

.cloud-1
	left 0
	top 48px
	width 200px

.cloud-2
	left 380px
	top 17px
	width 280px

.cloud-3
	right 10px
	top 30px
	width 220px

.main-page
	margin-top 120px
	// background-color #cd9f93

	.container
		max-width 1020px
		margin-x auto
		padding-top 50px

	&__title
		opacity 0
		transform translateY(50px) rotateY(-30deg) rotateX(-10deg) translateZ(0)
		transition transform .8s $ease-in-quad .08s, opacity .8s $ease-in-quad .08s

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__img
		max-width 100%
		display block
		height auto
		margin-x auto
		margin-top 50px
		margin-bottom 35px
		transform translateY(50px)
		opacity 0
		transition opacity .8s $ease-in-quad, transform .8s $ease-in-quad

		.isLoaded &
			opacity 1
			transform translateZ(0)

	&__list
		opacity 0
		transform translateY(50px)
		transition opacity .8s $ease-in-quad .16s, transform .8s $ease-in-quad .16s

		.isLoaded &
			opacity 1
			transform translateZ(0)
</style>
