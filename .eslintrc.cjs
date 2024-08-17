module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:jsx-a11y/recommended',
		'plugin:import/typescript',
		'plugin:import/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		indent: ['error', 'tab'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-tabs': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-newline': 'off',
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"no-shadow": "off",
    "@typescript-eslint/no-shadow": "error"
	},
};
