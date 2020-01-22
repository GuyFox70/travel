module.exports = function () {
    $.gulp.task('video', function () {
        return $.gulp.src('./src/video/*.mp4')

        .pipe($.gulp.dest('./build/video/'))

        .on('end',$.browserSync.reload);

    });
}