module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src('src/img/*.svg')
    
        .pipe($.svgmin({
            js2svg: {
                pretty: true
            }
        }))

        .pipe($.cheerio({
            run: function ($) {
                $('fill').removeAttr('fill');
                $('stroke').removeAttr('stroke');
                $('style').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))

        .pipe($.replace('&gt;', '>'))

        .pipe($.gulp.dest('build/img'))

        // .on('end',$.browserSync.reload);
    });
}