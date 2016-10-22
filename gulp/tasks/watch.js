var gulp = require('gulp'),
	watch = require("gulp-watch"),
	browserSync = require('browser-sync').create();

gulp.task("watch", function(done) {

	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});

	gulp.watch('./app/index.html').on('all', function(event, path, stats) {
		console.log('File ' + path + ' was ' + event + ', running tasks...');
		browserSync.reload();
	});

	gulp.watch('./app/assets/styles/**/*.css').on('all', gulp.series(styles, cssInject));

	gulp.watch('./app/assets/scripts/**/*.js').on('all', gulp.series('scripts', scriptsRefresh));

	done();

});

function cssInject(event, path, stats) {
	console.log('File ' + path + ' was ' + event + ', running cssInject...');
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
};

function scriptsRefresh(event, path, stats) {
	console.log('File ' + path + ' was ' + event + ', running scriptsRefresh...');
	browserSync.reload();
};