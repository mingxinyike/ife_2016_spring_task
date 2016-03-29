var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect');


gulp.task('sass', function () {
    return sass('./task_1_8/main.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./task_1_8'));
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('watch',function() {
    gulp.watch('./task_1_8/*.scss', function(){
        gulp.run('sass');
    });
})

gulp.task('default',['sass','watch','connect'],function(){

})
