import gulp                 from 'gulp'
import scss                 from "./scss";
import html                 from './html';
import scripts              from './scripts';
import updateDataCache      from './updateDataCache';
import { reload }           from './server';

import config               from '../config';

const { paths } = config;

const watch = (done) => {
    if (!config.PRODUCTION) {
        gulp.watch(paths.src.html.all).on('all', gulp.series(updateDataCache, html, reload));
        gulp.watch(paths.src.scss).on('all', gulp.series(scss));
        gulp.watch(paths.src.js.all).on('all', gulp.series(scripts, reload));
    }

    done();
};

export default watch;