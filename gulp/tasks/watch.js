module.exports = function () {
    $.gulp.task('watch', function() {
        $.gulp.watch('src/index.html', $.gulp.series('html'));
        $.gulp.watch('src/css/fonts/font.css', $.gulp.series('fonts'));
        $.gulp.watch('src/css/*.css', $.gulp.series('styles'));
        $.gulp.watch('src/js/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/normalize/normalize.css', $.gulp.series('normalize'));
        $.gulp.watch('src/video/*.mp4', $.gulp.series('normalize'));
    });
}