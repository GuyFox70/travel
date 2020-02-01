const configCss = [
    './src/css/core.css',
    './src/css/fonts.css',
    './src/css/header.css',
    './src/css/travel_around.css',
    './src/css/gallery_amazing.css',
    './src/css/amazing_places.css',
    './src/css/videos.css',
    './src/css/small_video.css',
    './src/css/travel_categories.css',
    './src/css/experience.css',
    './src/css/traveller.css',
    './src/css/media.css'
]

module.exports = function () {
    $.gulp.task('styles', function () {
        return $.gulp.src(configCss)
    
        .pipe($.sourcemaps.init())
    
        .pipe($.concatCss('style.css'))
        .pipe($.autoprefixer({
            cascade: false
        }))
    
        .on("error", $.notify.onError({
            message: "Error: Something happended",
            title: "style"
        }))
    
        .pipe($.cleanCSS({
            level: 2
        }))
    
        .pipe($.sourcemaps.write())
    
        .pipe($.gulp.dest('./build/css/'))
    
        .pipe($.browserSync.reload({
            stream: true
        }));
    });
}