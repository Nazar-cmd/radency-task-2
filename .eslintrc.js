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
		"no-console": 1,
		"no-unused-vars": 1,
		"global-require": 0,
		"react/forbid-prop-types": 0,
		"react/require-default-props": 0,
		"react/jsx-filename-extension": 0,
		"react/no-array-index-key": 1,
		"jsx-a11y/click-events-have-key-events": 1,
		"jsx-a11y/no-noninteractive-element-interactions": 1,
		"jsx-a11y/label-has-associated-control": 1,
		"jsx-a11y/control-has-associated-label": 1,
		// "import/no-named-as-default": 2,
		// "import/named": 0,
		"import/no-dynamic-require": 0,
		"no-return-await": 2,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"import/prefer-default-export": 0,
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
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
