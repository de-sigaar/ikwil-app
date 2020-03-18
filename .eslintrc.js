module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	plugins: ["react", "prettier"],
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		"linebreak-style": ["error", "unix"],
		"no-console": "warn",
		camelcase: "warn",
		"no-unused-vars": ["warn", { argsIgnorePattern: "^__", varsIgnorePattern: "^__" }],
		"no-case-declarations": "warn",
		"no-undef": "off",
		"no-useless-escape": "warn",
		"no-redeclare": "warn",
		"no-prototype-builtins": "warn",
		"no-empty": "warn",
		"no-constant-condition": "warn",
		"no-func-assign": "warn",
		"@typescript-eslint/no-explicit-any": "off",
		"prettier/prettier": [
			"error",
			{
				trailingComma: "all",
				arrowParens: "avoid",
				bracketSpacing: true,
				printWidth: 120,
				semi: true,
				singleQuote: false,
				tabWidth: 2,
				useTabs: true,
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};