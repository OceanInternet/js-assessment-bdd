'use strict';
import gulp from 'gulp';
import browser from 'browser-sync';
import cucumber from 'gulp-cucumber';

function runCucumber() {

    return gulp
        .src('features/*')
        .pipe(cucumber({
            'steps': 'features/steps/steps.js',
            'format': 'json:results/app.json'
        }));
}

function reload(done) {
    browser.reload();
    done()
}

function sync () {

    // Serve files from the root of this project
    browser.init({
        server: {
            baseDir: "./"
        }
    });

    // add browser.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('app/**/*.js', gulp.series('js-watch'));
}

gulp.task('js-watch', gulp.series(runCucumber, reload));
gulp.task('serve', gulp.series(runCucumber, sync));
gulp.task('default', gulp.series('serve'));
