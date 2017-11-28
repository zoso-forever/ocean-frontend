<template>
	<header :class='{fixed: fixed, hidden: hidden}' class='app-header'>
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
			treshold: 200
		}
	},
	computed: {
		...mapState('window', [
			'scrollTop',
			'scrollDirection'
		]),
		fixed () {
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
	padding 20px
	position absolute
	left 0
	right 0
	top 0
	z-index 9
	background-color #f5f5f5
	transition transform .5s $ease-in-quad

	&.fixed
		position fixed

	&.hidden
		transform translateY(-100%)

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
