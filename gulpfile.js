'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  rimraf: require('del'),
  merge: require('merge-stream'),
  browserify : require('browserify'),
  source : require('vinyl-source-stream'),
  buffer : require('vinyl-buffer'),
  babel : require('babelify'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'less',
    //'less:bootstrap',
    'copy:dist',
    'copy:fonts',
    'copy:less',
    //'copy:ie9',
    'fileinclude',
    'copy:image',
    'copy:scripts'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
