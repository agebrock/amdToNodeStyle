var amdToNodeStyle = require('../'),
    gulp = require('gulp');

gulp.src('../test/**/*.js')
    .pipe(amdToNodeStyle())
    .pipe(gulp.dest('./out'));

