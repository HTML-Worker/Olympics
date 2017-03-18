var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");


var buildSass = function(rootPath, isDev){
	var stream = gulp.src([
		'./app/css/index_all.scss'
	]);

	if(!isDev)
	{
		stream.pipe(sass.sync().on('error',sass.logError));
		stream.pipe(rename(function (path) {
			path.extname = ".min.css"
		}));
	}
	else{
		stream.pipe(sass.sync().on('error',sass.logError));
	}
	stream.pipe(gulp.dest(rootPath+'/css'));
};
module.exports = buildSass;
