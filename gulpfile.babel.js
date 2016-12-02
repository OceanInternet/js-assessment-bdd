'use strict';
import gulp from 'gulp';
import browser from 'browser-sync';
import cucumber from 'gulp-cucumber';
import report from 'cucumber-html-report';

var reportOptions = {
	source: 'results/app.json',  // source json
	dest:   'results',           // target directory (will create if not exists)
	name:   'index.html',        // report file name (will be index.html if not exists)
	title:  'js-assessment-bdd'//, // Title for default template. (default is Cucumber Report)
	// component: 'My Componen',       // Subtitle for default template. (default is empty)
};
var testReport    = new report(reportOptions);

function runCucumber() {

	return gulp
		.src('features/*')
		.pipe(
			cucumber(
				{
					'steps':  'features/steps/steps.js',
					'format': 'json:results/app.json'
				}
			)
		);
}

function reload(done) {
	browser.reload();
	done()
}

function sync() {

	// Serve files from the root of this project
	browser.init(
		{
			server: {
				baseDir: "results/"
			}
		}
	);

	gulp.watch('app/**/*.js', gulp.series(runCucumber, createReport, reload));
}

function createReport(done) {

	testReport.createReport() && done();
}

gulp.task('serve', gulp.series(runCucumber, createReport, sync));
gulp.task('default', gulp.series('serve'));
