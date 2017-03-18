var gulp = require('gulp');
// var clean = require('gulp-clean');
var gls = require('gulp-live-server');

var plumber = require('gulp-plumber');
var fs = require('fs');
var path = require('path');

var buildSass = require('./build-helper/buildSass');
var buildHtml = require('./build-helper/buildHtml');
var copyLib = require('./build-helper/copyLib');

var copyAppFiles = function(rootPath, isDev){
    
    if(isDev)
    {
        gulp.src([
            './app/**/*.*',
            '!./app/*.html',
            '!./app/css/**/*'
        ]).pipe(gulp.dest(rootPath));
        gulp.src(['./app/business/**/*.*']).pipe(gulp.dest(rootPath+'/business'));
        gulp.src(['./app/css/index_all.scss']).pipe(gulp.dest(rootPath+'/css'));
    }
    else {
        gulp.src([
            './app/*.*',
            '!./app/*.html'
        ]).pipe(gulp.dest(rootPath));
        gulp.src('./app/business/**/*.html').pipe(gulp.dest(rootPath+'/business'));
        gulp.src(['./app/business/imgs/**/*.*']).pipe(gulp.dest(rootPath+'/business/imgs'));
    }
    gulp.src('./app/imgs/**/*.*').pipe(gulp.dest(rootPath+'/imgs'));

};

gulp.task('test',function(){
    gulp.src(
        // ['app/business/directives/**/*.js']
        // ['app/business/filters/**/*.js']
        ['app/business/modules/home/*.js']
        // ['app/business/services/**/*.js']
        // ['app/business/*.js']
    )
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format(reporter, function(results) {
                fs.writeFileSync(path.join(__dirname+'/style-check-report', 'reports' + new Date().getTime() + '.html'), results);
            })
        );
});

// gulp.task('clean', function() {
//     return gulp.src(["build"], {read: false})
//         .pipe(clean());
// });
// gulp.task('clean-dist', function() {
//     return gulp.src(["dist"], {read: false})
//         .pipe(clean());
// });

gulp.task('default', function () {
    var rootPath = './build';
    var server = gls.static(rootPath, 6050);
    copyLib(rootPath, true);
    copyAppFiles(rootPath, true);
    
    buildSass(rootPath, true);
    buildHtml(rootPath, true);

    gulp.watch(['./app/**/*'], function (file) {
        console.log('watching....');
        // copyLib(rootPath, true); //这个一般不会更改
        copyAppFiles(rootPath, true);
        buildSass(rootPath, true);
        buildHtml(rootPath, true);
        console.log('rebuild success....');
        server.notify.apply(server, [file]);
    });
    server.start();
});

gulp.task('dist', function () {
    var rootPath = './dist';
    copyLib(rootPath);
    copyAppFiles(rootPath);
    buildSass(rootPath, false);
    buildHtml(rootPath);
});

gulp.task('dist-test', function () {
    var rootPath = './dist';
    copyLib(rootPath);
    copyAppFiles(rootPath);
    buildSass(rootPath, false);
    buildHtml(rootPath);
    var server = gls.static('./dist', 6050);
    server.start();
});


