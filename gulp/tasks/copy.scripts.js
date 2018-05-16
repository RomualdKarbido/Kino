'use strict';

module.exports = function() {
  $.gulp.task('copy:scripts', function() {
    return $.gulp.src('./source/scripts/**/*.*', { since: $.gulp.lastRun('copy:scripts') })
      .pipe($.gulp.dest($.config.root + '/scripts'))
      .pipe($.browserSync.stream());
  });
};
