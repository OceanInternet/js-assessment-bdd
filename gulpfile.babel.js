'use strict';
import gulp from 'gulp';
import browser from 'browser-sync';
import cucumber from 'gulp-cucumber';
import Report from 'cucumber-html-report';
import del from 'del';

const reportOptions = {
    source: 'results/app.json',   // source json
    dest: 'results',              // target directory (will create if not exists)
    name: 'index.html',           // report file name (will be index.html if not exists)
    title: 'js-assessment-bdd'//, // Title for default template. (default is Cucumber Report
//  component: 'My Component',    // Subtitle for default template. (default is empty)
};

let testReport = new Report(reportOptions);

function clean() {

    return del('results/**/*');
}

function runCucumber(done) {

    gulp
        .src('features/*')
        .pipe(cucumber({
            'format': 'json:results/app.json',
            'emitErrors': false
        }));

    done();
}

function reload(done) {
    browser.reload();
    done()
}

function sync(done) {

    let originalKeys = Object.keys(require.cache);

    browser.init({
        server: {
            baseDir: "results/"
        }
    });

    gulp.watch(['app/**/*.js', 'features/**/*'], function (done) {

        let newKeys = Object.keys(require.cache);
        while (newKeys.length > originalKeys.length) {
            delete require.cache[newKeys.pop()];
        }

        runCucumber(done);
    });
    gulp.watch(['results/**/*.json'], gulp.series(createReport, reload));

    runCucumber(done);
}

function createReport(done) {

    testReport.createReport() && done();
}

gulp.task('serve', gulp.series(clean, sync));
gulp.task('default', gulp.series('serve'));
