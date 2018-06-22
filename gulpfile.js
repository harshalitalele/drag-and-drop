var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('lib', function() {
    gulp.src('./src/*.js')
        .pipe(concat('makeDraggable.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['lib'], function() {
});