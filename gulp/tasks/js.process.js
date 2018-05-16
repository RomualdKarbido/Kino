'use strict';



module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src('./source/js/**/*.js')
 
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.browserSync.stream());
  })
};
