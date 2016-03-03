var gulp = require('gulp');
var sass = require('gulp-sass');
var css = require('gulp-minify-css');

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

gulp.task('default',function() {
  gulp.watch('./app/sass/*.sass', ['sass']);
  gulp.watch('./**/*.ts', function() {
    exec("tsc", puts);
  });
});