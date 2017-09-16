var gulp = require('gulp'), connect = require('gulp-connect');
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('default', ['connect']);

