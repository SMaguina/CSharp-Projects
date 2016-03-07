/// <binding />
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
        'wwwroot/bootstrap.min.js',
        'wwwroot/jquery.min.js'
    ])
    .pipe(concat('third-party.js'))
    .pipe(gulp.dest('wwwroot/lib'))
});

gulp.task('copyCss', function () {
    gulp.src([
        'wwwroot/bootstrap.min.css',
        'wwwroot/blog.css'
    ])
    .pipe(uglifyCss())
    .pipe(concat('site.css'))
    .pipe(gulp.dest('wwwroot/lib'))
});

gulp.task('clean', function () {
    return del(['wwwroot/lib']);
})

//Remove for now to avoid default task runner conflict
//gulp.task('default', ['clean', 'copyCss', 'copyJavascript']);
