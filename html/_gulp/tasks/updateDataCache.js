import gulp     from 'gulp';
import tap      from 'gulp-tap';
 
import config    from '../config';

const reloadCache = (pathToModule) => {
    // Reload require module along with all of its submodules.
    const requireCache = require.cache;
    
    for (let k in requireCache) {
        if (({}).hasOwnProperty.call(requireCache, k)) {
            if (k.search(pathToModule) === 0) {
                console.log('Ok', k)
                delete requireCache[k];
            }
        }
    }
};

const updateDataCache = () =>
    gulp.src(config.paths.src.html.data)
        .pipe(tap((file) => {reloadCache(file.path)})
    )
;

export default updateDataCache;