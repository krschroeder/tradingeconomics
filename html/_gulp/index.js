import gulp                 from 'gulp'
import scss                 from "./tasks/scss";
import html                 from './tasks/html';
import clean                from './tasks/clean';
import scripts              from './tasks/scripts';
import staticAssets         from './tasks/staticAssets';
import server               from './tasks/server';
import watch                from './tasks/watch';
 

const buildTasks = gulp.series(
    clean,
    gulp.parallel(
        html,
        scss,
        scripts,
        staticAssets
    )
)

const devTasks = gulp.parallel(
    server,
    watch
);

gulp.task('default', gulp.series(
    buildTasks,
    devTasks
));