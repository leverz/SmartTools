/**
 * Created by Lever on 2015/11/26.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');

gulp.task('sass',function(){
    gulp.src('./angular/css/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./angular/css'))
        .pipe(reload({stream:true}));
});

gulp.task('serve',function(){
    browserSync.init({
        notify: false,
        port: 9001,
        server: {
            baseDir: "./"
        }
        //proxy: 'http://127.0.0.1:8080/angular/'
        //server: './'
    });
    return gulp.src([
        'libs/jquery/jquery/dist/jquery.js',

        'libs/angular/angular/angular.js',

        'libs/angular/angular-animate/angular-animate.js',
        'libs/angular/angular-aria/angular-aria.js',
        'libs/angular/angular-cookies/angular-cookies.js',
        'libs/angular/angular-messages/angular-messages.js',
        'libs/angular/angular-resource/angular-resource.js',
        'libs/angular/angular-sanitize/angular-sanitize.js',
        'libs/angular/angular-touch/angular-touch.js',
        'libs/angular/angular-material/angular-material.js',

        'libs/angular/angular-ui-router/release/angular-ui-router.js',
        'libs/angular/ngstorage/ngStorage.js',
        'libs/angular/angular-ui-utils/ui-utils.js',

        'libs/angular/angular-bootstrap/ui-bootstrap-tpls.js',

        'libs/angular/oclazyload/dist/ocLazyLoad.js',

        'libs/angular/angular-translate/angular-translate.js',
        'libs/angular/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'libs/angular/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
        'libs/angular/angular-translate-storage-local/angular-translate-storage-local.js',

        'angular/js/*.js',
        'angular/js/directives/*.js',
        'angular/js/services/*.js',
        'angular/js/filters/*.js',
        'angular/js/controllers/bootstrap.js'
    ])
        .pipe(concat('app.src.js'))
        .pipe(gulp.dest('angular/js/dist'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('angular/js/dist'))
        .pipe(reload({stream:true}))
});

gulp.task('watch',function(){
    gulp.watch([
        'angular/js/*.js',
        'angular/js/directives/*.js',
        'angular/js/services/*.js',
        'angular/js/filters/*.js',
        'angular/js/controllers/bootstrap.js'
    ],['serve']);
    gulp.watch('angular/css/scss/*.scss',['sass']);
});

gulp.task('start',['serve','watch']);