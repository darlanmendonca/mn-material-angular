import gulp from 'gulp';
import bowerFiles from 'bower-files';
import path from 'path';
import {fonts} from './config.js';

gulp.task('fonts', fontsTask);

function fontsTask() {
  let dependencies = bowerFiles().relative(path.join(__dirname, '..'));
  let fontFiles = dependencies.ext('eot').files
    .concat(dependencies.ext('svg').files)
    .concat(dependencies.ext('ttf').files)
    .concat(dependencies.ext('woff').files)
    .concat(dependencies.ext('woff2').files);

  return gulp
    .src(fontFiles)
    .pipe(gulp.dest(fonts.dest));
}
