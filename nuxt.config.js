module.exports = {
	head: {
		title: 'Океан путешествий',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Описание' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: false,
	css: [
		'~/assets/styles/index.styl'
	],
	router: {
		middleware: 'page-loader'
	},
	build: {
		vendor: [
			'axios'
		],
		postcss: [
			require('autoprefixer')()
		],
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
