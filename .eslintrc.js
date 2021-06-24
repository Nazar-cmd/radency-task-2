module.exports = {
	extends: ["airbnb", "prettier"],
	root: true,
	parser: "babel-eslint",
	plugins: ["import", "babel", "react", "react-hooks", "prettier"],
	settings: {
		react: {
			version: "17.0.2"
		},
		"import/resolver": {
			node: {
				moduleDirectory: ["node_modules", "/"],
				paths: ["src"]
			}
		}
	},
	env: {
		browser: true,
		node: true
	},
	rules: {
		// semi: [2, "never"],
		// 'no-console': 'error',
		"react/forbid-prop-types": 0,
		"react/require-default-props": 0,
		"react/jsx-filename-extension": 0,
		"import/no-named-as-default": 0,
		"no-return-await": 2,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": [
			"error",
			{
				noUndef: false,
				singleQuote: false,
				trailingComma: "none",
				semi: true,
				bracketSpacing: true,
				jsxBracketSameLine: true,
				printWidth: 80,
				tabWidth: 2,
				useTabs: true
			}
		]
	}
};
