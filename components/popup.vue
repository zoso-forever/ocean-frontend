<template>
	<div :class='{
			isActive: state,
			isAnimating: animClass
		}'
		role='dialog'
		class="popup">
		<canvas class="js-canvas-bg" />
		<div class="popup__inner">
			<div class="popup__wrapper">
				<button
					type='button'
					@click='closePopup'
					class="popup__close">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><path d="M87.8,12.8c-1-1-2.6-1-3.5,0L50.5,46.5L15.8,11.7c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5L47,50L12.2,84.8c-1,1-1,2.6,0,3.5   c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7l34.8-34.8l33.7,33.7c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5L54.1,50   l33.7-33.7C88.7,15.3,88.7,13.7,87.8,12.8z"/></g></svg>
				</button>
				<div class="popup__content">
					<h1 class="popup__title">Оставить заявку</h1>
					<form class="popup__form">
						<div class="popup__form-row">
							<input placeholder='Почта' type="text" class="app-input">
						</div>
						<div class="popup__form-row">
							<input placeholder='Имя Фамилия' type="text" class="app-input">
						</div>
						<div class="popup__form-row">
							<textarea placeholder='Валяй' name="ept" cols="30" rows="6" class="app-textarea"></textarea>
						</div>
						<button class="popup__form-submit button">Отправить</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { TweenLite } from 'gsap'
import { mapState } from 'vuex'
import eventBus from '~/utilities/eventBus'

export default {
	props: {
		state: {
			type: Boolean,
			required: true
		}
	},
	data () {
		return {
			content: null,
			animClass: false
		}
	},
	computed: {
		...mapState('window', {
			winWidth: 'width',
			winHeight: 'height'
		})
	},
	created () {
		this.isAnim = false
		this.radius = 0
	},
	mounted () {
		this.$nextTick(() => {
			setTimeout(() => {
				this.canvas = this.$el.querySelector('.js-canvas-bg')
				this.ctx = this.canvas.getContext('2d')
				this.$body = document.querySelector('body')

				eventBus.$on('resize', this.resize)
				this.resize()
			}, 100)
		})
	},
	beforeDestroy () {
		eventBus.$off('resize', this.resize)
	},
	watch: {
		state (newValue) {
			if (newValue) {
				this.openPopup()
				this.$body.classList.add('app_no-scroll')
			} else {
				this.onPopupClose()
				this.$body.classList.remove('app_no-scroll')
			}
		}
	},
	methods: {
		closePopup () {
			this.$emit('closePopup')
			// this.radius = 0
			// this.ctx.clearRect(0, 0, this.winWidth, this.winHeight)
		},
		resize () {
			this.canvas.width = this.winWidth
			this.canvas.height = this.winHeight

			this.targetRadius = Math.sqrt(Math.pow(this.winWidth, 2) + Math.pow(this.winHeight, 2))

			if (this.state && !this.isAnim) {
				this.radius = this.targetRadius
			}

			this.ctx.beginPath()
			this.ctx.arc(this.winWidth, 0, this.radius, 0, 2 * Math.PI, false)
			this.ctx.fillStyle = '#ffffff'
			this.ctx.fill()
		},
		update () {
			if (this.isAnim) {
				this.ctx.clearRect(0, 0, this.winWidth, this.winHeight)
				this.ctx.beginPath()
				this.ctx.arc(this.winWidth, 0, this.radius, 0, 2 * Math.PI, false)
				this.ctx.fillStyle = '#ffffff'
				this.ctx.fill()
			}
			this.animation = requestAnimationFrame(this.update)
		},
		onPopupClose () {
			this.animClass = true
			this.animation = requestAnimationFrame(this.update)

			this.$nextTick(() => {
				this.closePopup()
				/* eslint-disable */
				TweenLite.to(this, 0.7, {
					radius: 0,
					ease: Quint.easeOut,
					delay: 0.2,
					onStart: () => {
						this.isAnim = true
					},
					onComplete: () => {
						this.isAnim = false
						this.animClass = false
						window.cancelAnimationFrame(this.animation)
					}
				})
				/* eslint-enable */
			})
		},
		openPopup () {
			this.animation = requestAnimationFrame(this.update)
			this.isAnim = true
			/* eslint-disable */
			TweenLite.to(this, 1.1, { radius: this.targetRadius, ease: Quint.easeOut,
				 onStart: () => {
					this.isAnim = true;
				},
				onComplete: () => {
					this.isAnim = false;
					window.cancelAnimationFrame(this.animation)
				}
			})
			/* eslint-enable */
		}
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'
$duration = 1.2s

.popup
	position fixed
	top 0
	left 0
	height 100vh
	width 100vw
	opacity 1
	pointer-events none
	z-index 10

	canvas
		position absolute
		top 0
		left 0
		size 100%

	&__inner
		position absolute
		top 0
		left 0
		z-index 2
		size 100%
		display flex
		justify-content center
		align-items center

		pointer-events auto
		opacity 0
		visibility hidden
		z-index 10

		.isAnimating &
			transition opacity .6s $ease-out-quint, visibility .6s $ease-out-quint

		.isActive &
			transition opacity $duration $ease-out-quint .2s, visibility $duration $ease-out-quint .2s
			opacity 1
			visibility visible

	&__wrapper
		position relative
		width 50%
		max-width 560px
		min-height 50%

	&__close
		clear-button-defaults()

		position absolute
		top -100px
		right -100px
		size 50px
		color #555
		fill currentColor
		border 1px solid
		border-radius 50%
		padding 12px
		opacity .6
		transition opacity .2s

		&:hover
			opacity 1

	&__title
		margin-bottom 55px
		transform translateY(35px) rotateY(20deg) rotateX(15deg) translateZ(0)
		transition opacity $duration $ease-out-quint .08s, transform $duration $ease-out-quint .08s

		.isActive &
			opacity 1
			transform translateZ(0)

	&__form-row
		opacity 0
		transform translateY(35px) rotateY(20deg) rotateX(15deg) translateZ(0)

		.isActive &
			opacity 1
			transform translateZ(0)

		&:not(:last-child)
			margin-bottom 2px

	&__form-input
	&__form-textarea
		border 2px solid #2155a3
		width 100%
		outline 0
		font-size 18px
		// border-radius 2px
		padding 16px 10px

	&__form-row:nth-child(1)
		transition opacity $duration $ease-out-quint .16s, transform $duration $ease-out-quint .16s
	&__form-row:nth-child(2)
		transition opacity $duration $ease-out-quint .24s, transform $duration $ease-out-quint .24s
	&__form-row:nth-child(3)
		transition opacity $duration $ease-out-quint .32s, transform $duration $ease-out-quint .32s

	&__form-submit
		background-color #2759a3
		color #fff
		font-size 14px
		padding-x 55px
		margin-top 25px
		padding-top 20px
		padding-bottom 20px
		opacity 0
		transform translateY(35px) rotateY(20deg) rotateX(15deg) translateZ(0)
		transition opacity $duration $ease-out-quint .4s, transform $duration $ease-out-quint .4s

		.isActive &
			opacity 1
			transform translateZ(0)

	&__form
		text-align center
</style>
