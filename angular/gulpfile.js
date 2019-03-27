var gulp = require('gulp'),
rename = require('gulp-rename');

gulp.task('copy-assets', function(){
    return gulp.src(['./dist/angular/**/*','!./dist/angular/index.html'])
    .pipe(gulp.dest('../public/'))
});

gulp.task('copy-index', function(){
    return gulp.src('./dist/angular/index.html')
    .pipe(rename('home.html'))
    .pipe(gulp.dest('../app/templates/'))
});

gulp.task('watch', function(){
    gulp.watch('./dist/angular/index.html', gulp.series(['copy-index']));
    gulp.watch(['./dist/angular/**/*','!./dist/angular/index.html'], gulp.series(['copy-assets']));
});
