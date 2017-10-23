var gulp = require('gulp'),
    connect = require('gulp-connect'),
    webserver = require('gulp-webserver');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('connect', function() {
  connect.server({
    debug : true
  });
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

//-------------------------------------------------------------
// more sample

var morgan = require('morgan');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

gulp.task("ts1", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("js"));
});

gulp.task("ts2", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("js"));
});

const BLACK = '\x1b[30m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW ='\x1b[33m';
const BLUE = '\x1b[34m';
const MAGENTA = '\x1b[35m';
const CYAN = '\x1b[36m';
const WHITE = '\x1b[37m';
const CLEAR_COLOR = '\x1b[0m';

var logger = morgan(CYAN + ':method :status' + CLEAR_COLOR + ' (:response-time ms) [:date[clf]] :url (size: :res[content-length])');
//var logger = morgan(':method :status (:response-time ms) :url (size: :res[content-length])');
gulp.task('ws2', function() {
  gulp.src('.')
    .pipe(webserver({
      port:8080,
      host:"0.0.0.0",
      livereload: false,
      directoryListing: false,
      open: false,
      middleware: logger
    }));
});

