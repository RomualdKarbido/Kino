'use strict';

module.exports = function() {
  $.gulp.task('copy:content', function() {
    return $.gulp.src('./source/content/**/*.*', { since: $.gulp.lastRun('copy:content') })
      .pipe($.gulp.dest($.config.root + '/content'))
      .pipe($.browserSync.stream());
  });
};
