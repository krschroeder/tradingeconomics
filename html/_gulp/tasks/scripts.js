import gulp                     from 'gulp';

import uglify                   from 'gulp-uglify';
import named                    from 'vinyl-named';
import webpack                  from 'webpack';
import webpackStream            from 'webpack-stream';

import config                   from '../config';

const scripts = () =>
    gulp.src(config.paths.src.js.main)
        .pipe(named())
        .pipe(webpackStream(config.settings.webpack, webpack))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.dest.js)
    )
;

export default scripts;