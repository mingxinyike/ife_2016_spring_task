var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect');


gulp.task('sass', function () {
    return sass('./task_2_33/main.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./task_2_33'));
});

gulp.task('connect', function() {
    connect.server();
});

gulp.task('watch',function() {
    gulp.watch('./task_2_33/*.scss', function(){
        gulp.run('sass');
    });
})

gulp.task('default',['sass','watch','connect'],function(){

})
