var gulp = require('gulp'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
mainBowerFiles = require('main-bower-files');

gulp.task('bower', function(){
    return gulp.src(mainBowerFiles())
    .pipe(concat('deps.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('copy-js', function(){
    return gulp.src(['./angular/src/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('copy-index', function(){
    return gulp.src('./angular/src/index.html')
    .pipe(rename('home.html'))
    .pipe(gulp.dest('./app/templates/'));
});

gulp.task('build', gulp.series(['bower','copy-js', 'copy-index']));

gulp.task('watch', function(){
    gulp.watch('./bower_components/**/*.*', gulp.series(['bower']));
    gulp.watch('./angular/src/index.html', gulp.series(['copy-index']));
    gulp.watch(['./angular/src/**/*.js','!./dist/angular/index.html'], gulp.series(['copy-js']));
});