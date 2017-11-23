<template>
	<section v-bind:class='{isLoaded: isLoaded}' class="page-contacts">
		<h1 class='page-contacts__title'>Контакты</h1>
		<p class="page-contacts__head-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid expedita nostrum aspernatur commodi explicabo omnis temporibus totam.</p>
		<img src="~/assets/images/cat2.jpeg" alt="" class="page-contacts__img">
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
				this.isLoaded = true
				eventBus.$emit('customEvent', {state: false})
			}, 100)
		})
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/global.styl'

.page-contacts
	// background-color #9ccd93
	page-content()

	&__img
		max-width 100%
		display block
		margin-x auto
		opacity 0
		transform translateY(60px)
		transition transform .8s $ease-in-quad .16s, opacity .8s $ease-in-quad .16s

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__title
		margin-bottom 45px
		opacity 0
		transform translateY(60px) rotateY(-30deg) rotateX(-10deg) translateZ(0)
		transition transform .8s $ease-in-quad, opacity .8s $ease-in-quad

		.isLoaded &
			transform translateZ(0)
			opacity 1

	&__head-desc
		font-size 22px
		max-width 600px
		line-height 1.6
		text-align center
		display block
		margin-x auto
		margin-bottom 75px
		opacity 0
		transform translateY(60px)
		transition transform .8s $ease-in-quad .08s, opacity .8s $ease-in-quad .08s

		.isLoaded &
			transform translateZ(0)
			opacity 1

</style>
