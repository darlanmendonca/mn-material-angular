import browserSync from 'browser-sync'
import yargs from 'yargs'

module.exports = {
  lint: [
    './gulpfile.babel.js',
    './karma.js',
    './test/**/*.js',
    './sources/angular/**/*.js',
    './tasks/**/*.js',
  ],
  views: {
    src: './sources/views/*.jade',
    watch: './sources/views/**/*.jade',
    dest: './public/',
  },
  fonts: {
    dest: './public/fonts',
  },
  templates: {
    src: './sources/angular/**/*.template.jade',
    dest: './public/templates/',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './public/styles/',
  },
  scripts: {
    src: [
      './sources/angular/**/*.js',
      '!./sources/angular/**/*.spec.js',
    ],
    dest: './public/scripts/',
  },
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: './public',
    },
    notify: false,
    reloadDelay: 100,
    open: yargs.argv.open,
  },
}
