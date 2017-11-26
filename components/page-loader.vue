<template>
	<div :class='{isEnded: isEnded}' class="page-loader">
		<canvas class="js-canvas"/>
	</div>
</template>

<script>
import { TweenLite } from 'gsap'
import eventBus from '~/utilities/eventBus'
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('window', [
			'width',
			'height'
		])
	},
	data () {
		return {
			firstTime: true,
			isEnded: false
		}
	},
	created () {
		this.radius = 0
		this.radius2 = 0

		this.centerX = 0
		this.centerY = 0

		this.realCenterX = 0
		this.realCenterY = 0

		this.isAnim = false
		this.circleColor2 = '#0d49a3'
	},
	mounted () {
		this.$nextTick(() => {
			setTimeout(() => {
				this.$canvas = this.$el.querySelector('.js-canvas')
				this.ctx = this.$canvas.getContext('2d')

				window.addEventListener('mousemove', this.setCenter.bind(this), false)
				eventBus.$on('routeChanged', this.onRouteChanged)
				eventBus.$on('resize', this.resize)

				this.resize()
				this.load()
			}, 200)
		})
	},
	beforeDestroy () {
		window.removeEventListener('mousemove', this._setCenter, false)
		eventBus.$off('routeChanged', this.onRouteChanged)
		eventBus.$off('resize', this.resize)
	},
	methods: {
		onRouteChanged ({state, color}) {
			console.log(state, color)
			if (state) {
				this.circleColor2 = color || '#0d49a3'
				this.openCircle()
				this.request = requestAnimationFrame(this.update)
				console.log('__CUSTOM EVENT__', state)
			} else {
				this.load()
			}
		},
		resize () {
			console.log('resize')
			if (this.$canvas.width !== this.width || this.$canvas.height !== this.height) {
				this.$canvas.width = this.width
				this.$canvas.height = this.height
			}

			if (this.firstTime) {
				this.radius = this.radius2 = this.width

				this.centerX = this.width / 2
				this.centerY = this.height / 2

				this.realCenterX = this.centerX
				this.realCenterY = this.centerY

				this.ctx.beginPath()
				this.ctx.arc(this.realCenterX, this.realCenterY, this.radius2, 0, 2 * Math.PI, false)
				this.ctx.fillStyle = this.circleColor2
				this.ctx.fill()
				this.ctx.closePath()
			}
		},
		setCenter (e) {
			this.centerX = e.clientX
			this.centerY = e.clientY
		},
		update () {
			if (this.isAnim) {
				this.ctx.clearRect(0, 0, this.width, this.height)

				this.ctx.beginPath()
				this.ctx.arc(this.realCenterX, this.realCenterY, this.radius, 0, 2 * Math.PI, false)
				this.ctx.fillStyle = '#ffffff'
				this.ctx.fill()
				this.ctx.closePath()

				// draw second circle
				this.ctx.beginPath()
				this.ctx.arc(this.realCenterX, this.realCenterY, this.radius2, 0, 2 * Math.PI, false)
				this.ctx.fillStyle = this.circleColor2
				this.ctx.fill()
				this.ctx.closePath()
			}

			this.request = requestAnimationFrame(this.update)
		},
		openCircle () {
			this.radius = 0
			this.radius2 = 0
			this.isAnim = true
			this.isEnded = false

			this.realCenterX = this.centerX
			this.realCenterY = this.centerY

			const c1 = Math.pow(this.realCenterX, 2) + Math.pow(this.realCenterY, 2)
			const c2 = Math.pow(this.width - this.realCenterX, 2) + Math.pow(this.realCenterY, 2)
			const c3 = Math.pow(this.realCenterX, 2) + Math.pow(this.height - this.realCenterY, 2)
			const c4 = Math.pow(this.width - this.realCenterX, 2) + Math.pow(this.height - this.realCenterY, 2)

			const radius = Math.sqrt(Math.max(c1, c2, c3, c4))

			/* eslint-disable */
			TweenLite.to(this, 1, { radius: radius, ease: Quart.easeOut });
			TweenLite.to(this, 1, { radius2: radius, ease: Quart.easeOut, delay: 0.1,
				onComplete: () => {
					this.isAnim = false
					window.cancelAnimationFrame(this.request)
				}
			});
			/* eslint-enable */
		},
		load () {
			window.scrollTo(0, 0)
			this.isEnded = true
			this.firstTime = false
		}
	}
}
</script>

<style lang='stylus'>
@require '~assets/styles/global.styl'

.page-loader
	position fixed
	top 0
	left 0
	height 100vh
	width 100vw
	opacity 1
	visibility visible
	transition opacity, visibility
	transition-duration 0s
	transition-timing-function ease-in-out
	z-index 10

	&.isEnded
		opacity 0
		visibility hidden
		transition-duration .8s

	canvas
		position absolute
		top 0
		left 0
		size 100%
		display block
</style>
