var gulp = require('gulp');
var sass = require('gulp-sass');
var css = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  gulp.src('./app/sass/app.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(css())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./assets/'));
});

var ie_dependencies = [
  'node_modules/es6-shim/es6-shim.min.js',
  'node_modules/systemjs/dist/system-polyfills.js',
  'node_modules/angular2/es6/prod/src/testing/shims_for_IE.js',
]

var dependencies = [
  'node_modules/angular2/bundles/angular2-polyfills.min.js',
  'node_modules/systemjs/dist/system.js',
  'node_modules/rx-lite/rx.lite.min.js',
  'node_modules/angular2/bundles/router.min.js',
  'node_modules/angular2/bundles/angular2.min.js',
]

gulp.task('ie_scripts', function() {
  gulp.src(ie_dependencies)
    .pipe(concat('app.polyfills.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/'))
});

gulp.task('scripts', function() {
  gulp.src(dependencies)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/'))
});

gulp.task('default', function() {
  gulp.watch('./app/sass/*.sass', ['sass']);
  gulp.watch(ie_dependencies, ['ie_scripts']);
  gulp.watch(dependencies, ['scripts']);
  gulp.watch('./**/*.ts', function() {
    exec("tsc", puts);
  });
});