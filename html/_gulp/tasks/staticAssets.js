import gulp      from 'gulp';
import flatten   from 'gulp-flatten';
import config    from '../config';

const staticAssets = () => 
    gulp.src(config.paths.src.static)
        .pipe(flatten({ includeParents: 1}))
        .pipe(gulp.dest(config.paths.dest.static)
    )
;

export default staticAssets;
