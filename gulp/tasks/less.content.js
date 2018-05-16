'use strict';





module.exports = function() {
  $.gulp.task('less.copy', function() {
    return $.gulp.src('./source/style/**/*.less')

      .pipe($.gulp.dest($.config.root + '/less'))
      .pipe($.browserSync.stream());
  })
};

