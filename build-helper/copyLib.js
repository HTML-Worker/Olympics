
var gulp = require('gulp');
var copyLib = function(rootPath, isDev){

	if(isDev)
	{
        gulp.src('./libs/*.*').pipe(gulp.dest(rootPath+'/libs'));
		gulp.src(['./libs/angular-1.2.30/angular.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        // gulp.src(['./libs/angular-1.2.30/angular-animate.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        gulp.src(['./libs/angular-1.2.30/angular-route.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        // gulp.src(['./libs/angular-1.2.30/angular-sanitize.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        gulp.src(['./libs/angular-1.2.30/angular-cookies.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        // gulp.src(['./libs/jquery-loadmask/**/*.*']).pipe(gulp.dest(rootPath+'/libs/jquery-loadmask'));
        gulp.src(['./libs/bootstrap-datetimepicker/**/*.*']).pipe(gulp.dest(rootPath+'/libs/bootstrap-datetimepicker'));
        gulp.src(['./libs/rem/rem.js']).pipe(gulp.dest(rootPath+'/libs/rem'));

        gulp.src(['./bower_components/jquery/dist/*.*']).pipe(gulp.dest(rootPath+'/libs/jquery/dist'));
        gulp.src(['./bower_components/bootstrapValidator/dist/**/*']).pipe(gulp.dest(rootPath+'/libs/bootstrapValidator/dist'));

        gulp.src(['./bower_components/bootstrap/dist/**/*']).pipe(gulp.dest(rootPath+'/libs/bootstrap/dist'));
        gulp.src(['./bower_components/bootbox.js/bootbox.js']).pipe(gulp.dest(rootPath+'/libs/bootbox'));
		gulp.src(['./bower_components/font-awesome/css/**/*']).pipe(gulp.dest(rootPath+'/libs/font-awesome/css'));
		gulp.src(['./bower_components/font-awesome/fonts/**/*']).pipe(gulp.dest(rootPath+'/libs/font-awesome/fonts'));


		gulp.src(['./bower_components/zTree/css/zTreeStyle/**/*.*']).pipe(gulp.dest(rootPath+'/libs/zTree/css/zTreeStyle'));
		gulp.src(['./bower_components/zTree/js/jquery.ztree.all.js']).pipe(gulp.dest(rootPath+'/libs/zTree/js'));


        gulp.src(['./bower_components/es5-shim/es5-shim.min.js']).pipe(gulp.dest(rootPath+'/libs/es5-shim'));
        gulp.src(['./bower_components/es5-shim/es5-sham.min.js']).pipe(gulp.dest(rootPath+'/libs/es5-shim'));
		gulp.src(['./bower_components/html5shiv/dist/html5shiv.min.js']).pipe(gulp.dest(rootPath+'/libs/html5shiv'));
		gulp.src(['./bower_components/respond/dest/respond.min.js']).pipe(gulp.dest(rootPath+'/libs/respond'));

	}
	else{
        gulp.src('./libs/*.*').pipe(gulp.dest(rootPath+'/libs'));
        gulp.src(['./libs/angular-1.2.30/angular.min.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        // gulp.src(['./libs/angular-1.2.30/angular-animate.min.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        gulp.src(['./libs/angular-1.2.30/angular-route.min.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        // gulp.src(['./libs/angular-1.2.30/angular-sanitize.min.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        gulp.src(['./libs/angular-1.2.30/angular-cookies.min.js']).pipe(gulp.dest(rootPath+'/libs/angular'));
        // gulp.src(['./libs/jquery-loadmask/**/*.*']).pipe(gulp.dest(rootPath+'/libs/jquery-loadmask'));
        gulp.src(['./libs/bootstrap-datetimepicker/**/*.*']).pipe(gulp.dest(rootPath+'/libs/bootstrap-datetimepicker'));
        gulp.src(['./libs/rem/rem.min.js']).pipe(gulp.dest(rootPath+'/libs/rem'));

        gulp.src(['./bower_components/jquery/dist/jquery.min.js']).pipe(gulp.dest(rootPath+'/libs/jquery/dist'));

        gulp.src(['./bower_components/bootstrap/dist/**/*']).pipe(gulp.dest(rootPath+'/libs/bootstrap/dist'));
        gulp.src(['./bower_components/bootstrapValidator/dist/**/*']).pipe(gulp.dest(rootPath+'/libs/bootstrapValidator/dist'));
        gulp.src(['./bower_components/bootbox.js/bootbox.js']).pipe(gulp.dest(rootPath+'/libs/bootbox'));
        gulp.src(['./bower_components/font-awesome/css/**/*']).pipe(gulp.dest(rootPath+'/libs/font-awesome/css'));
        gulp.src(['./bower_components/font-awesome/fonts/**/*']).pipe(gulp.dest(rootPath+'/libs/font-awesome/fonts'));


        gulp.src(['./bower_components/zTree/css/zTreeStyle/**/*.*']).pipe(gulp.dest(rootPath+'/libs/zTree/css/zTreeStyle'));
        gulp.src(['./bower_components/zTree/js/jquery.ztree.all.js']).pipe(gulp.dest(rootPath+'/libs/zTree/js'));


        gulp.src(['./bower_components/es5-shim/es5-shim.min.js']).pipe(gulp.dest(rootPath+'/libs/es5-shim'));
        gulp.src(['./bower_components/es5-shim/es5-sham.min.js']).pipe(gulp.dest(rootPath+'/libs/es5-shim'));
        gulp.src(['./bower_components/html5shiv/dist/html5shiv.min.js']).pipe(gulp.dest(rootPath+'/libs/html5shiv'));
        gulp.src(['./bower_components/respond/dest/respond.min.js']).pipe(gulp.dest(rootPath+'/libs/respond'));

	}


};


module.exports = copyLib;