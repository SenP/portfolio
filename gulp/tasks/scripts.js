var gulp = require('gulp'),
	webpack = require('webpack');

gulp.task('scripts', gulp.series(modernizrTask, function(cb) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		cb();
	});
}));