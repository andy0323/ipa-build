require('shelljs/global');
var gulp = require('gulp');

var runner = __dirname + '/bin/ipa-build -v ';

var NO_POD_PATH = __dirname + '/test/nopod';
var POD_PATH    = __dirname + '/test/pod';


gulp.task('nopod', function () {
  exec(runner + NO_POD_PATH);
});

gulp.task('pod', function () {
  exec(runner + POD_PATH);
});