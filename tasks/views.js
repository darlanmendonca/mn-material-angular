import gulp from 'gulp';
import gutil from 'gulp-util';
import jade from 'gulp-jade';
import flatten from 'gulp-flatten';
import {views} from './config.js';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';

gulp.task('views', viewsTask);

function viewsTask() {
  return gulp
    .src(views.src)
    .pipe(changed(views.dest))
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(gulp.dest(views.dest));
}

function onError(err) {
	let message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
	gutil.beep();
}
