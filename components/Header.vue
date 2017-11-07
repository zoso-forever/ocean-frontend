<template>
	<header>
		<nav>
			<nuxt-link to='/'>Main</nuxt-link>
			<nuxt-link to='/about'>About</nuxt-link>
			<nuxt-link to='/contacts'>Contacts</nuxt-link>
		</nav>
	</header>
</template>

<style lang="stylus">
@require '~assets/styles/global.styl'

header
	padding 20px
	background-color #f5f5f5

nav
	max-width 920px
	margin-x auto

	a
		text-decoration none
		color #2b2b2b
		font-size 16px

		&.nuxt-link-exact-active
			color #4291c9

		&:not(:last-child)
			margin-right 17px

</style>
