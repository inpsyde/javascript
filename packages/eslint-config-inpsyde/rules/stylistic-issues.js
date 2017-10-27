module.exports = {
	rules: {
		'array-bracket-newline': 0,
		'array-bracket-spacing': 0,
		'array-element-newline': 0,
		'block-spacing': 2,
		'brace-style': 2,
		'camelcase': [ 2, {
			properties: 'never'
		} ],
		'capitalized-comments': [ 2, 'always' ],
		'comma-dangle': 0,
		'comma-spacing': 2,
		'comma-style': 2,
		'computed-property-spacing': [ 2, 'always' ],
		'consistent-this': 0,
		'eol-last': 2,
		'func-call-spacing': 2,
		'func-name-matching': 1,
		'func-names': [ 1, 'as-needed' ],
		'func-style': [ 2, 'declaration', {
			allowArrowFunctions: true
		} ],
		'function-paren-newline': [ 2, 'multiline' ],
		'id-blacklist': 0,
		'id-length': 0,
		'id-match': 0,
		'indent': [ 2, 'tab', {
			SwitchCase: 1
		} ],
		'jsx-quotes': 2,
		'key-spacing': 2,
		'keyword-spacing': 2,
		'line-comment-position': [ 2, {
			position: 'above'
		} ],
		'linebreak-style': 2,
		'lines-around-comment': [ 2, {
			beforeLineComment: true,
			allowArrayStart: true,
			allowBlockStart: true,
			allowClassStart: true,
			allowObjectStart: true
		} ],
		'lines-between-class-members': 2,
		'max-depth': 1,
		'max-len': [ 2, {
			code: 120,
			tabWidth: 4,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		} ],
		'max-lines': [ 1, {
			max: 300,
			skipBlankLines: true,
			skipComments: true
		} ],
		'max-nested-callbacks': 0,
		'max-params': [ 1, 4 ],
		'max-statements': [ 1, 12 ],
		'max-statements-per-line': 1,
		'multiline-comment-style': [ 1, 'starred-block' ],
		'multiline-ternary': [ 2, 'always-multiline' ],
		'new-cap': 2,
		'new-parens': 2,
		'newline-per-chained-call': 0,
		'no-array-constructor': 2,
		'no-bitwise': 2,
		'no-continue': 2,
		'no-inline-comments': 2,
		'no-lonely-if': 2,
		'no-mixed-operators': [ 2, {
			groups: [
				[ '+', '-', '*', '/', '%', '**' ],
				[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
				[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
				[ '&&', '||' ],
				[ 'in', 'instanceof' ]
			]
		} ],
		'no-mixed-spaces-and-tabs': 2,
		'no-multi-assign': 2,
		'no-multiple-empty-lines': [ 2, {
			max: 1,
			maxEOF: 1
		} ],
		'no-negated-condition': 0,
		'no-nested-ternary': 2,
		'no-new-object': 2,
		'no-plusplus': 0,
		'no-restricted-syntax': [ 2, 'DebuggerStatement', 'ForInStatement', 'LabeledStatement', 'WithStatement', ],
		'no-tabs': 0,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 0,
		'no-unneeded-ternary': 2,
		'no-whitespace-before-property': 2,
		'nonblock-statement-body-position': [ 2, 'below' ],
		'object-curly-newline': [ 2, {
			multiline: true,
			consistent: true
		} ],
		'object-curly-spacing': [ 2, 'always' ],
		'object-property-newline': 2,
		'one-var': [ 2, 'never' ],
		'one-var-declaration-per-line': [ 2, 'always' ],
		'operator-assignment': 2,
		'operator-linebreak': [ 2, 'before' ],
		'padded-blocks': [ 2, 'never' ],
		'padding-line-between-statements': [ 2, {
			blankLine: 'always',
			prev: 'directive',
			next: '*'
		}, {
			blankLine: 'any',
			prev: 'directive',
			next: 'directive'
		}, {
			blankLine: 'always',
			prev: '*',
			next: 'return'
		} ],
		'quote-props': [ 2, 'as-needed' ],
		'quotes': [ 2, 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true
		} ],
		'require-jsdoc': [ 2, {
			require: {
				ClassDeclaration: false,
				FunctionDeclaration: true,
				MethodDefinition: false
			}
		} ],
		'semi': 2,
		'semi-spacing': 2,
		'semi-style': 0,
		'sort-keys': 0,
		'sort-vars': 0,
		'space-before-blocks': 2,
		'space-before-function-paren': [ 2, {
			anonymous: 'always',
			named: 'never'
		} ],
		'space-in-parens': [ 2, 'always' ],
		'space-infix-ops': 2,
		'space-unary-ops': [ 2, {
			overrides: {
				'!': true
			}
		} ],
		'spaced-comment': [ 2, 'always', {
			exceptions: [ '+', '-', '*', '/' ]
		} ],
		'switch-colon-spacing': 2,
		'unicode-bom': 2,
		'wrap-regex': 0
	}
};
