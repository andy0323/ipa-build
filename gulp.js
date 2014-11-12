var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha'); 

gulp.task('test', function (cb) {
  gulp.src(['lib/**/*.js'])
    .pipe(istanbul()) // Covering files
    .on('finish', function () {
      gulp.src(['lib/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('default',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});

gulp.task('watch',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});