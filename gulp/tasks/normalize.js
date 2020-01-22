module.exports = function () {
    $.gulp.task('normalize', function () {
        return $.gulp.src(['./src/normalize/*.css'])
    
        .pipe($.sourcemaps.init())
    
        .pipe($.concatCss('normalize.css'))
        .pipe($.autoprefixer({
            cascade: false
        }))
    
        .on("error", $.notify.onError({
            message: "Error: Something happended",
            title: "normalize"
        }))
    
        .pipe($.cleanCSS({
            level: 2
        }))
    
        .pipe($.sourcemaps.write())
    
        .pipe($.gulp.dest('./build/normalize'))
    
        .pipe($.browserSync.reload({
            stream: true
        }));
    });
}