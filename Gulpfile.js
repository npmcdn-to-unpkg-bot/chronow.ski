var gulp = require('gulp');
var sass = require('gulp-sass');
var css = require('gulp-minify-css');
var rename = require('gulp-rename');

var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

gulp.task('sass', function() {
  gulp.src('./client/app/sass/app.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(css())
    .pipe(rename("app.min.css"))
    .pipe(gulp.dest('./client/assets/'));
});

gulp.task('default', function() {
  gulp.watch('./client/app/sass/*.sass', ['sass']);
  gulp.watch('./client/**/*.ts', function() {
    exec("tsc", puts);
  });
});
