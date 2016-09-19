module.exports = {
	extends: [
		'./rules/possible-errors',
		'./rules/best-practices',
		'./rules/variables',
		'./rules/nodejs-and-commonjs',
		'./rules/stylistic-issues'
	].map( require.resolve ),
	parserOptions: {
		ecmaVersion: 5,
		sourceType: 'script'
	},
	rules: {
		'no-template-curly-in-string': 0,
	}
};
