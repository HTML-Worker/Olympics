var gulp = require('gulp');

var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var stylelint = require('stylelint');
var syntax_scss = require('postcss-scss');

var buildStylelint = function() {
	var stylelintConfig = {
		"rules": {
			// indent with 4-space
			"indentation": 4,
			"no-duplicate-selectors": true,
			"max-line-length": 120,
			"string-quotes": "double",
			"max-nesting-depth": 3,

			"block-opening-brace-space-before": "always",
			"declaration-colon-space-after": "always",
			"declaration-colon-space-before": "never",
			"value-list-comma-space-after": "always",
			"value-list-comma-space-before": "never",
			"declaration-block-trailing-semicolon": "always",

			//selector
			"selector-combinator-space-after": "always",
			"selector-combinator-space-before": "always",

			//declare
			"declaration-no-important": true,
			"declaration-block-properties-order": [
				"content",
				"position", "top", "right", "bottom", "left", "float", "display", "overflow",
				"border", "margin ", "padding ", "width", "height",
				"font", "line-height ", "text-align", "word-wrap",
				"background", "color", "transition", "list-style"
			],

			//number
			"number-leading-zero": "always",
			"number-no-trailing-zeros": true,
			//"number-zero-length-no-unit": "always",
			"length-zero-no-unit": true,

			//value
			"value-keyword-case": "lower",
			"shorthand-property-no-redundant-values": true,

			//color
			"color-hex-case": "lower",
			"color-hex-length": "short",
			"color-named": "never",

			//font
			"font-family-name-quotes": "always-where-required",
			"font-weight-notation": "numeric"

		}
	};

	var processors = [
		stylelint(stylelintConfig),
		// Pretty reporting config
		reporter({
			clearMessages: true,
			throwError: true
		})
	];

	return gulp.src(
		// Stylesheet source:
		[ 'src/styles/modules/**/*.scss', 'src/styles/**/*.scss']
		)
		.pipe(postcss(processors), {syntax: syntax_scss});
};

module.exports = buildStylelint;
