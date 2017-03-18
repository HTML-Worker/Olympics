var gulp = require('gulp');

var htmlhint = require('gulp-htmlhint');

var buildHtmlhint = function() {

	var htmlRule = {
		"src-not-empty": true,
		"id-unique": true,
		"tagname-lowercase": true,
		"tag-pair": true,
		"attr-value-double-quotes": true,
		"title-require": true,
		"doctype-first": false
	};

	return gulp.src('src/**/*.html')
		.pipe(htmlhint(htmlRule))
		.pipe(htmlhint.reporter());
};

module.exports = buildHtmlhint;
