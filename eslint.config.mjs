import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginTailwindCss from 'eslint-plugin-tailwindcss'
import eslintPluginVue from 'eslint-plugin-vue'

export default withNuxt(
	eslintConfigPrettier,
	...eslintPluginTailwindCss.configs['flat/recommended'],
	...eslintPluginVue.configs['flat/recommended'],
	{
		plugins: {
			prettier: eslintPluginPrettier,
			tailwindcss: eslintPluginTailwindCss,
			vue: eslintPluginVue,
		},
		rules: {
			'vue/html-self-closing': 'off',
			'tailwindcss/no-custom-classname': 'off',
			'tailwindcss/classnames-order': ['warn'],
			'vue/html-indent': [
				'error',
				'tab',
				{
					attribute: 1,
					baseIndent: 1,
					closeBracket: 0,
					alignAttributesVertically: true,
					ignores: [],
				},
			],
			'vue/html-closing-bracket-newline': [
				'error',
				{
					singleline: 'never',
					multiline: 'never',
					selfClosingTag: {
						singleline: 'never',
						multiline: 'never',
					},
				},
			],
			'prettier/prettier': [
				'error',
				{
					printWidth: 100,
					tabWidth: 2,
					useTabs: true,
					singleQuote: true,
					trailingComma: 'all',
					quoteProps: 'as-needed',
					bracketSpacing: true,
					bracketSameLine: true,
					arrowParens: 'always',
					proseWrap: 'always',
					htmlWhitespaceSensitivity: 'css',
					vueIndentScriptAndStyle: true,
					endOfLine: 'lf',
					semi: false,
					embeddedLanguageFormatting: 'auto',
					singleAttributePerLine: true,
				},
			],
		},
	},
	{
		files: ['error.vue', 'app.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
)
