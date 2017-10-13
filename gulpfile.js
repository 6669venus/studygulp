var gulp = require('gulp'), connect = require('gulp-connect'), webserver = require('gulp-webserver');
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      port:8080,
      host:"0.0.0.0",
      livereload: false,
      directoryListing: false,
      open: false
    }));
});

gulp.task('default', ['connect']);
gulp.task('ws', ['webserver']);
