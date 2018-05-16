'use strict';

module.exports = function() {
  $.gulp.task('copy:dist', function() {
    return $.gulp.src('./source/dist/**/*.*', { since: $.gulp.lastRun('copy:dist') })
      .pipe($.gulp.dest($.config.root + '/dist'))
      .pipe($.browserSync.stream());
  });
};
