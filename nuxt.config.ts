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
		pageTransition: { name: 'slide', mode: 'default' },
		layoutTransition: { name: 'layout', mode: 'default' },
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
	colorMode: {
		preference: 'system', // default value of $colorMode.preference
		fallback: 'dark', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
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
