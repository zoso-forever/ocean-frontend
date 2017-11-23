<template>
	<section v-bind:class='{isLoaded: isLoaded}' class="main-page">
		<div class="container">
			<img src="~/assets/images/cat1.jpg" alt="" class="main-page__img">
			<h1 class='main-page__title'>Океан путешествий</h1>
			<div class="main-page__list">
				<app-list />
			</div>
		</div>
	</section>
</template>

<script>
import appList from '~/components/app-list.vue'
import eventBus from '~/utilities/eventBus'

export default {
	components: {
		appList
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
				eventBus.$emit('customEvent', {state: false})
			}, 100)
		})
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.main-page
	// background-color #cd9f93
	page-content()

	.container
		max-width 1020px
		margin-x auto

	&__title
		opacity 0
		transform translateY(45px) rotateY(-30deg) rotateX(-10deg) translateZ(0)
		transition transform .8s $ease-in-quad .08s, opacity .8s $ease-in-quad .08s

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__img
		max-width 100%
		display block
		height auto
		margin-x auto
		margin-bottom 35px
		transform translateY(45px)
		opacity 0
		transition opacity .8s $ease-in-quad, transform .8s $ease-in-quad

		.isLoaded &
			opacity 1
			transform translateZ(0)

	&__list
		opacity 0
		transform translateY(45px)
		transition opacity .8s $ease-in-quad .16s, transform .8s $ease-in-quad .16s

		.isLoaded &
			opacity 1
			transform translateZ(0)
</style>
