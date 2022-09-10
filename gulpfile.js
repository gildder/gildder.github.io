var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');


gulp.task('sass', async function() {
    return gulp.src('./sass/layout.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify', async function() {
  gulp.src('./css/layout.css')
    .pipe(minify({keepBreaks: true}))
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./css/'))
});


gulp.task('run', gulp.series('sass', 'minify'));

gulp.task('watch', function() {
    gulp.watch('./sass/*.sass', gulp.series(['sass']));
    gulp.watch('./css/*.css', gulp.series(['minify']));
});

gulp.task('default', gulp.series('watch', 'run'));