import gulp                     from 'gulp';
import gulpClean                from 'gulp-clean';

import config        from '../config';

const clean = () =>
    gulp.src(config.paths.dest.root, {
        allowEmpty: true,
        read: false
    })
    .pipe(gulpClean())
;

export default clean;