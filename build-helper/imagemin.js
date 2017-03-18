var gulp = require('gulp');
var imagemin = require('gulp-imagemin');


var buildImage = function(rootPath,dev){
    var stream = gulp.src('./source/html/guide/**/*.png');

        stream.pipe(imagemin())
            .pipe(gulp.dest(rootPath+'/html/guide'));

}


module.exports = buildImage;
