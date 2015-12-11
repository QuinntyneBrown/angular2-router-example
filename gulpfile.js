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
  gulp.watch(['./app/**/*.ts', './app/**/*.html', './app/views/**'], ['bundle']);
});

var bundler = watchify(browserify({
    entries: ['./app/index.ts'],
    extensions: ['.ts'],
    debug: false,
    cache: {},
    packageCache: {}
  }))

  bundler.plugin(tsify)
  .transform(stringify(['.html']))
  .transform(babelify.configure({stage: 0, extensions: ['.ts']}));

gulp.task('bundle', ['style'], function() {
      function bundle() {
        return bundler.bundle()
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
