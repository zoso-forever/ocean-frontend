<template>
	<header :class='{maximized: maximized, hidden: hidden}' class='app-header'>
		<div class="app-header__container">
			<nav>
				<ul>
					<li><nuxt-link to='/'>Главная</nuxt-link></li>
					<li><nuxt-link to='/about'>О нас</nuxt-link></li>
					<li><nuxt-link to='/contacts'>Контакты</nuxt-link></li>
				</ul>
			</nav>
			<button
				type='button'
				@click='OPEN_POPUP'
				class="button order">
				Оставить заявку
			</button>
		</div>
	</header>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
	data () {
		return {
			treshold: 80
		}
	},
	computed: {
		...mapState('window', [
			'scrollTop',
			'scrollDirection'
		]),
		maximized () {
			return this.scrollTop > this.treshold
		},
		hidden () {
			return this.scrollDirection === 1 && this.scrollTop > 10
		}
	},
	methods: {
		...mapMutations('popup', [
			'OPEN_POPUP'
		])
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/global.styl'

.app-header
	padding 15px
	position fixed
	left 0
	right 0
	top 0
	z-index 9
	background-color #ffffff
	transition transform .6s cubic-bezier(0.48, 0, 0.12, 1)

	&.maximized
		box-shadow 0 2px 2px -2px rgba(0, 0, 0, .17)
		// border-bottom 1px solid #878787

	&.hidden
		transform translateY(-100%)
		box-shadow none

	&__container
		display flex
		justify-content space-between
		align-items center
		max-width 1200px
		margin-x auto

	.button
		padding-x 30px
		letter-spacing .05em
		font-size 12px

nav

	a
		text-decoration none
		color #2b2b2b
		font-size 16px

		&.nuxt-link-exact-active
			color #4291c9

	ul
		display flex

	li
		&:not(:last-child)
			margin-right 17px

</style>
