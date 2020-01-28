module.exports = function () {
    $.gulp.task('library', function () {
        return $.gulp.src('./src/library/*.*')
    
        .pipe($.gulp.dest('./build/library'))
    
        // .on('end',$.browserSync.reload);
    });
}