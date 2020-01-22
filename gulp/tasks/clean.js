module.exports = function () {
    $.gulp.task('clean', function () {
        return $.gulp.src('build/img/*', {read: false})
            .pipe($.clean())
    });
    
}