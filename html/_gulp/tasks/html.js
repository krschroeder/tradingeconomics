import fs               from 'fs';
import gulp             from 'gulp';
import twig             from 'gulp-twig';
import data             from 'gulp-data';
import path             from 'path';
import config           from '../config';

 
const jsonData = (src) => JSON.parse(
    fs.readFileSync(
        path.join(
            process.env.INIT_CWD, 
            'src/template/data/', 
            src
        )
    ), 
    'utf8'
);

const jsData = (src) => {
    const module = require(
        path.join(
            process.env.INIT_CWD, 
            'src/template/data/', 
            src
        )
    );
 
    return module.default;
};

const getData = () => {

    return {
        global: jsData('global.js')
    }
}

const html = () => 
    gulp.src(config.paths.src.html.main)
        .pipe(data(getData))
        .pipe(twig({data: data(getData)}))
        .pipe(gulp.dest(config.paths.dest.root)
);

export default html;