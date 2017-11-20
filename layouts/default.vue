<template>
	<div class='page'>
		<UiHeader />
		<main class="page__content">
			<nuxt/>
		</main>
		<UiFooter />
	</div>
</template>
<script>
import UiHeader from '~/components/UiHeader.vue'
import UiFooter from '~/components/UiFooter.vue'

export default {
	components: {
		UiHeader,
		UiFooter
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.page
	display flex
	flex-direction column
	min-height 100vh

	&__content
		flex 1 0 auto
		position relative

</style>
