import gulp from 'gulp'

gulp.task('default', [
  'views',
  'templates',
  'browser-sync',
  'styles',
  'scripts',
  'lint',
  'watch',
])
