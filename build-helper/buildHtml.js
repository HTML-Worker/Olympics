
var fs = require('fs');
var gulp = require('gulp');

var sass = require('gulp-sass');
var es = require('event-stream');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var htmlbuild   = require('gulp-htmlbuild');

var replace = require('gulp-replace');

var buildHtml = function(rootPath, isDev){
	var stream = gulp.src('./app/index.html');
	var loginStream =    gulp.src('./app/login.html');
	if(isDev)
	{
		stream.pipe(replace('{min}','')).pipe(gulp.dest(rootPath)) ;
        loginStream.pipe(replace('{min}','')).pipe(gulp.dest(rootPath));
		return;
	}

	var gulpSrc = function (opts) {
		var paths = es.through();
		var files = es.through();
		paths.pipe(es.writeArray(function (err, srcs) {
			for(var i=0;i<srcs.length;i++)
			{
				srcs[i]='./app/'+ srcs[i];
			}
			gulp.src(srcs, opts).pipe(files);
		}));

		return es.duplex(paths, files);
	};
	stream.pipe(replace('{min}','.min'));
    loginStream.pipe(replace('{min}','.min'));

	stream.pipe(htmlbuild({
		js: htmlbuild.preprocess.js(function (block) {

			block.pipe(gulpSrc())
				.pipe(concat('app.min.js'))
				//.pipe(uglify())
				.pipe(gulp.dest(rootPath+'/js'));



			block.end('js/app.min.js');


		}),
		css: htmlbuild.preprocess.css(function (block) {

			block.pipe(gulpSrc());
			block.end('css/index-all.min.css');

		})

	}));

	stream.pipe(gulp.dest(rootPath));
    loginStream.pipe(htmlbuild({
		js: htmlbuild.preprocess.js(function (block) {
			block.pipe(gulpSrc())
				.pipe(concat('home.min.js'))
				//.pipe(uglify())
				.pipe(gulp.dest(rootPath+'/js'));
			block.end('js/home.min.js');


		})
    }));
    loginStream.pipe(gulp.dest(rootPath));
};

module.exports  = buildHtml;