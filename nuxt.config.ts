// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: isDev },
	runtimeConfig: {
		public: {
			apiBase: 'http://localhost:3001/api',
		},
	},
	app: {
		pageTransition: { name: 'page', mode: 'default' },
		layoutTransition: { name: 'layout', mode: 'default' },
		head: {
			bodyAttrs: {
				class: 'dark:bg-[#09090b]',
			},
		},
	},
	css: ['@/assets/css/tailwind.css'],

	modules: [
		'@nuxtjs/tailwindcss',
		'@formkit/auto-animate',
		'@vueuse/nuxt',
		'nuxt-swiper',
		'@dargmuesli/nuxt-cookie-control',
		'nuxt-lodash',
		'@pinia/nuxt',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'@nuxt/eslint',
	],

	shadcn: {
		prefix: 'Shadcn',
		componentDir: './components/Shadcn',
	},
	pinia: {
		storesDirs: ['./stores/**', './stores'],
	},
	eslint: {},
	imports: {
		autoImport: true,
		dirs: ['~/components', '~/features/**/*', '~/widgets/**/*', '~/stores/**'],
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
		{
			path: '~/features',

			pathPrefix: false,
		},
		{
			path: '~/shared',

			pathPrefix: false,
		},
		{
			path: '~/widgets',

			pathPrefix: false,
		},
	],
})
