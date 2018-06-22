/**
 * To Do:
 * 1. Add minification for html and css as well
 * 2. use proper folder structure for the project
 */
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('lib', function() {
    gulp.src('./*.js')
        .pipe(concat('makeDraggable.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['lib'], function() {
});
