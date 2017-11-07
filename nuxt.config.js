module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'ocean frontend',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#4291c9' },
	css: [
		'@/assets/styles/index.styl'
	],
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		verndor: [
			'axios'
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
