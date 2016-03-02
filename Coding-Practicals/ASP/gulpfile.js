/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifyCss = require('gulp-uglifycss'),
    del = require('del');

gulp.task('copyJavascript', function () {
    gulp.src([
        'wwwroot/lib/bootstrap.min.js',
        'wwwroot/lib/jquery.min.js'
    ])
    .pipe(concat('third-party.js'))
    .pipe(gulp.dest('wwwroot/lib'))
});

gulp.task('copyCss', function () {
    gulp.src([
        'wwwroot/lib/bootstrap.min.css',
        'wwwroot/lib/blog.css'
    ])
    .pipe(uglifyCss())
    .pipe(concat('site.css'))
    .pipe(gulp.dest('wwwroot/lib'))
});

gulp.task('clean', function () {
    return del(['wwwroot/lib']);
})

gulp.task('default', ['clean', 'copyCss', 'copyJavascript']);