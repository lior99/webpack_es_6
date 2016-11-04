let gulp = require('gulp');
let babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('src/main2.js')
		.pipe(babel())
		.pipe(gulp.dest('build'));
});