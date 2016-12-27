var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var prefix 		= require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/** * Build the Jekyll Site */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/** Rebuild Jekyll & do page reload when watched files change */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('build/src/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('src/css'));
});

/** Wait for jekyll-build, then launch the Server */
gulp.task('serve', ['sass', 'jekyll-build'], function() {
    browserSync.init({
        server: "build/"
    });
});

/** Watch all files for changes, except the build and other unneccessary folders */
gulp.task('watch', function () {
    gulp.watch('_scss/*.*', ['sass']);
    gulp.watch(['**/*.*', '!build/**/*', '!node_modules/**/*','!.sass-cache/**/*' ], ['jekyll-rebuild']);
});

/**Default task, running just `gulp` will compile the jekyll site, launch BrowserSync & watch files. */
gulp.task('default', ['serve', 'watch']);
