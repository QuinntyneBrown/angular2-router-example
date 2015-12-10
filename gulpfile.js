var gulp = require('gulp');
var app = require('./package.json');
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var stringify = require('stringify');
var history = require('connect-history-api-fallback');
var watchify = require('watchify');
var tsify = require('tsify');

function handleError(error) {
  console.log("Error: " + error.message);
  this.emit('end');
}

gulp.task('default', ['connect', 'data', 'bundle'], function() {
  gulp.watch(['./app/**/*.js', './app/**/*.html', './app/views/**'], ['bundle']);
});

gulp.task('bundle', ['style'], function() {
    var b = browserify({
        entries: ['./app/index.js'],
        extensions: ['ts'],
        debug: true,
        cache: {},
        packageCache: {}
      })
      .plugin(tsify)
      .transform(babelify.configure({stage: 0, extensions: ['.ts']}))
      .transform(stringify(['.html']));

      b = watchify(b);

      function bundle() {
        b.bundle()
         .on("error", handleError)
         .pipe(source('bundle.js'))
         .pipe(buffer())
         .pipe(sourcemaps.init({loadMaps: true}))
         .pipe(sourcemaps.write('./'))
         .on("error", handleError)
         .pipe(gulp.dest('./dist/'));
      }

      return bundle();
});

gulp.task('data', function() {
    return gulp.src([
            'data/**/*'
          ])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('style', function() {
    return gulp.src([
            'assets/**/*',
            'node_modules/bootstrap/dist/css/**',
            'views/index.html'
          ])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080,
    middleware: function(connect, opt) {
      return [
        history()
      ]
    }
  });
});
