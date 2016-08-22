// grab our gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('css/scss/main-layout.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('css/scss/**/*.scss', ['sass']);
});
