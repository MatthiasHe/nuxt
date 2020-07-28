module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'max-len': ['error', {
			code: 120,
			tabWidth: 2,
			ignoreComments: true,
		}],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'max-len': ['error', {
			code: 120,
			tabWidth: 2,
			ignoreComments: true,
		}],
	},
}
