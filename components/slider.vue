<template>
	<div :class='{isInitialised: sliderInitialized}' class="slider">
		<div class="slider__wrapper">
			<div class="slider__titles">
				<h2
					v-for='(slide, index) in slides'
					:key='index'
					class="slider__title"
				>{{slide.title}}</h2>
			</div>
			<div class="slider__list">
				<div
					v-for='(slide, index) in slides'
					:key='index'
					class="slider__list-item">
					<img :src="slide.image" alt="">
				</div>
			</div>
			<div class="slider__panels-wrapper">
				<button
					@click='nextSlide'
					type='button'
					class="slider__next">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M97.137,29.56C97.714,28.984,98,28.229,98,27.475s-0.286-1.51-0.863-2.085c-1.152-1.152-3.018-1.152-4.169,0L50,68.356  L7.031,25.39c-1.149-1.152-3.015-1.152-4.169,0c-1.15,1.152-1.15,3.018,0,4.17L47.917,74.61c1.15,1.152,3.015,1.152,4.17,0  L97.137,29.56z"/></svg>
				</button>
				<div class="slider__panels">
					<div
						v-for='(slide, index) in slides'
						:class='{
							showContent: showPanelContent && currentIndex === index
						}'
						:key='index'
						class="slider__panel">
						<div class="slider__panel-inner">
							<h2 class='slider__panel-title'>{{slide.title}}</h2>
							<p class="slider__panel-text">{{slide.text}}</p>
							<nuxt-link to='/about'>О нас</nuxt-link>
						</div>
					</div>
				</div>
				<div class="slider__tabs app_visible-on-tablet-and-up">
					<button
						type='button'
						class='slider__tab'
						v-for='(slide, index) in slides'
						:key='index'
						:class='{isActive: currentIndex === index}'
						@click='changeSlide(index)'>
						<span>{{slide.title}}</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {TimelineLite} from 'gsap'

export default {
	data () {
		return {
			currentIndex: 0,
			prevIndex: 0,
			showPanelContent: true,
			isAnimating: false,
			sliderInitialized: false
		}
	},
	created () {
		this.slides = [
			{
				image: require('~/assets/images/slider1.jpg'),
				text: 'Товарищи! дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа существенных финансовых и административных условий. Равным образом консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий.',
				title: 'Товарищи'
			},
			{
				image: require('~/assets/images/slider2.jpg'),
				text: 'Товарищи! дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа существенных финансовых и административных условий. Равным образом консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий.',
				title: 'Мир труд май'
			},
			{
				image: require('~/assets/images/slider3.jpg'),
				text: 'Товарищи! дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа существенных финансовых и административных условий. Равным образом консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий.',
				title: 'Народ и армия'
			},
			{
				image: require('~/assets/images/slider4.jpg'),
				text: 'Товарищи! дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа существенных финансовых и административных условий. Равным образом консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий.',
				title: 'Партия'
			},
			{
				image: require('~/assets/images/slider5.jpg'),
				text: 'Товарищи! дальнейшее развитие различных форм деятельности позволяет оценить значение форм развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа существенных финансовых и административных условий. Равным образом консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий.',
				title: 'Ленин'
			}
		]
	},
	mounted () {
		this.$nextTick(() => {
			setTimeout(() => {
				this.slidesEl = this.$el.querySelectorAll('.slider__list-item')
				this.panels = this.$el.querySelectorAll('.slider__panel')
				this.titles = this.$el.querySelectorAll('.slider__title')
				this.slideHeight = this.slidesEl[0].offsetHeight
				this.panelHeight = this.panels[0].offsetHeight + 20
				this.titleHeight = this.titles[0].offsetHeight

				this.initSlides()
			}, 100)
		})
	},
	methods: {
		changeSlide (index) {
			if (this.isAnimating || this.currentIndex === index) {
				return
			}

			/* eslint-disable */
			this.isAnimating = true
			const newIndex = index > this.slides.length - 1 ? 0 : index

			const tl = new TimelineLite({
				onComplete: () => {
					this.isAnimating = false
				}
			})
			const currSlide = this.slidesEl[newIndex]
			const prevSlide = this.slidesEl[this.currentIndex]
			const currPanel = this.panels[newIndex]
			const prevPanel = this.panels[this.currentIndex]
			const prevTitle = this.titles[this.currentIndex]
			const currTitle = this.titles[newIndex]

			this.prevIndex = this.currentIndex
			this.currentIndex = newIndex
			const ease = Power3.easeInOut
			const duration = 0.7
			this.showPanelContent = false

			tl
				.to(prevPanel, 0.35, {scale: 0.8, ease})
				.to(prevSlide, duration, {y: '-100%', ease}, 'slide')
				.fromTo(currSlide, duration, {y: '100%'}, {y: '0%', ease}, 'slide')
				.to(currPanel, duration, {y: '0%', ease}, 'slide')
				.to(prevTitle, duration, {y: '-150%', opacity: 0, ease}, 'slide')
				.fromTo(currTitle, duration, {opacity: 0, y: '150%'}, {opacity: 1, y: '0%', ease}, 'slide')
				.set(prevPanel, {y: '108%'})
				.to(currPanel, 0.35, {scale: 1, ease,
					onStart: () => {
						this.showPanelContent = true
					}
				}, '-=0.08')
		},
		initSlides () {
			const tl = new TimelineLite({
				onComplete: () => {
					this.sliderInitialized = true
				}
			})
			tl.set(this.slidesEl[0], {y: 0})
			tl.set(this.panels[0], {scale: 1, y: 0})
			tl.set(this.titles[0], {y: 0, opacity: 1})
		},
		nextSlide () {
			this.changeSlide(this.currentIndex + 1)
		}
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.slider
	margin-top 80px
	padding-top 60px
	padding-bottom 80px
	overflow hidden
	position relative
	opacity 0
	transition opacity .3s ease

	@media tablet-and-up
		padding-top 120px
		padding-bottom 150px

	&.isInitialised
		opacity 1

	&__list
		overflow hidden
		position absolute
		top 0
		left 0
		size 100%

	&__list-item
		position absolute
		top 0
		left 0
		size 100%
		transform translateY(100%)

	img
		position absolute
		top 0
		left 0
		object-fit cover
		size 100%

	&__next
		clear-button-defaults()

		position absolute
		left 50%
		transform translateX(-50%)
		size 70px
		bottom - (@height / 2)
		background-color #fff
		z-index 5
		box-shadow 0px 0px 40px 0px rgba(0,0,0,0.12), 0px 6px 12px rgba(0,0,0,0.08)

		svg
			size 28px
			position absolute
			top 55%
			left 50%
			transform translate(-50%, -50%)

		@media desktop-and-up
			size 85px
			bottom -42.5px


	&__tabs
		position absolute
		left 50%
		transform translateX(-50%)
		display flex
		bottom 100%
		white-space nowrap
		z-index 4

	&__tab
		clear-button-defaults()

		font-size 14px
		letter-spacing 0.02em
		text-transform uppercase
		padding 4px 8px
		border 1px solid black
		transition background-color .3s ease-in-out 0s

		@media tablet-and-up
			padding 6px 10px

		@media desktop-and-up
			font-size 15px
			padding 7px 14px

		&:not(:first-child)
			border-left 0


		&.isActive
			background-color #FDEA99
			transition-delay 1.1s

	&__panels-wrapper
		size 88vw
		min-width 280px
		max-width 440px
		max-height 440px
		min-height 280px
		margin-x auto
		position relative
		z-index 2

		@media tablet-and-up
			size 540px
			max-width none
			min-width 0
			max-height none
			min-height 0

		@media desktop-and-up
			width 80vh
			height 74vh
			min-width 540px
			max-width 620px
			min-height 540px
			max-height 620px

	&__panels
		position absolute
		top 50%
		left 0
		size 100%
		transform translateY(-50%)

	&__titles
		position absolute
		left 20px
		right 20px
		top 50px
		font-weight 70
		z-index 3
		width 100%
		pointer-events none

		@media tablet-and-up
			top 40%
			left 11%
			right auto

		@media desktop-l-and-up
			left 14%

		@media desktop-hd-and-up
			left 15%

	&__title
		position absolute
		left 20px
		right 20px
		width 80vw
		bottom 0
		text-align center
		white-space nowrap
		font-size 32px
		color #1b1b1b
		transform translateY(100%)
		opacity 0
		font-weight 700
		text-transform uppercase
		letter-spacing -0.05em

		@media tablet-and-up
			left 0
			bottom 0
			width auto
			right auto
			font-size 48px

		@media desktop-and-up
			font-size 57px

	&__panel
		position absolute
		top 0
		left 0
		size 100%
		padding 15%
		background-color #fff
		transform scale(.8) translate(0, 135%)
		transition box-shadow .2s ease
		box-shadow 0 0 40px 0 transparent, 0 6px 18px transparent

		&.showContent
			box-shadow 0px 0px 40px 0px rgba(0,0,0,0.24), 0px 6px 18px rgba(0,0,0,0.12)

	&__panel-inner
		opacity 0
		transition opacity .25s ease-in-out
		will-change opacity

		.showContent &
			transition-delay 0.15s
			opacity 1

	&__panel-text
		font-size 15px
		line-height 1.2
		margin-bottom 10px

		@media tablet-and-up
			font-size 16px
			line-height 1.3

		@media desktop-and-up
			line-height 1.38
			font-size 18px

	&__panel-title
		font-size 18px
		font-weight 700
		margin-bottom 10px

		@media tablet-and-up
			font-size 22px
			margin-bottom 15px

		@media desktop-and-up
			font-size 26px
			margin-bottom 20px
</style>
