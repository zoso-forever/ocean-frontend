<template>
	<ul class="app-list">
		<li class="app-list__item">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa ullam minus. Ipsam obcaecati at inventore nihil quaerat, explicabo esse?</p>
		</li>
		<li class="app-list__item">
			<p>Similique vero nulla exercitationem optio eaque perspiciatis voluptates atque non dicta esse. Illum et quae voluptates blanditiis a harum expedita?</p>
		</li>
		<li class="app-list__item">
			<p>Ad doloribus dolores error sed eligendi ex magnam cumque expedita tenetur possimus voluptatum odit quae deserunt, est provident, impedit quod.</p>
		</li>
	</ul>
</template>

<script>
export default {

}
</script>


<style lang='stylus'>
@require '~assets/styles/global.styl'

.app-list
	margin-top 55px
	display flex
	font-size 18px
	justify-content space-between
	max-width 920px
	margin-left auto
	margin-right auto

	&__item
		line-height 1.4
		width calc(33% - 20px)
</style>
