<template>
	<header class='app-header'>
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
import {mapMutations} from 'vuex'

export default {
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
	background-color #f5f5f5

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
