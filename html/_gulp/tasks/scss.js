import gulp                     from 'gulp';

import tap                      from 'gulp-tap';
import gulpIf                   from 'gulp-if';
import sourcemaps               from 'gulp-sourcemaps';
import browser                  from 'browser-sync';

import CleanCSS                 from 'clean-css';
import autoprefixer             from 'gulp-autoprefixer';
import gulpSass                 from 'gulp-sass';
import tildeImporter            from 'node-sass-tilde-importer';
import sass                     from 'sass';

import config    from '../config';

const cleanCss = (file) => {
    const minifiedCss = new CleanCSS({compatibility: 'ie11'})
        .minify(Buffer.from(file.contents).toString('utf8'));

    file.contents = Buffer.from(minifiedCss.styles);
}
const sassCompiler = gulpSass(sass);

const scss = () =>
    gulp.src(config.paths.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sassCompiler({
            importer: tildeImporter,
            quietDeps: true
        }).on('error', sassCompiler.logError))
        .pipe(autoprefixer())
        .pipe(gulpIf(config.PRODUCTION, tap(cleanCss)))
        .pipe(gulpIf(!config.PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest(config.paths.dest.css))
        .pipe(browser.reload({ stream: true })
    )
;

export default scss;