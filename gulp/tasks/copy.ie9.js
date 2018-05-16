
'use strict';

module.exports = function() {
  $.gulp.task('copy:ie9', function() {
    return $.gulp.src('./source/css/less/**/*.css', { since: $.gulp.lastRun('copy:ie9') }) 
      .pipe($.gulp.dest($.config.root + '/css/css'))
      .pipe($.browserSync.stream()); 
  });
};