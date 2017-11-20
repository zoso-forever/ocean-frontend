<template>
	<section class="container">
		<h1>О нас</h1>
	</section>
</template>

<script>
export default {
	head () {
		return {
			title: 'О нас',
			meta: [
				{ hid: 'description', name: 'description', content: 'about content' }
			]
		}
	}
}
</script>

<style scoped lang="stylus">
.container
	background-color #93cccd
</style>

