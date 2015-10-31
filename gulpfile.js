var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  var src = [
      'dist/js/angular-rating-face.js',
  ];

  return gulp.src(src)
    .pipe(concat('angular-rating-face.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
