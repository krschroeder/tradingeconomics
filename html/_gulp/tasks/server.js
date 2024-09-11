import browser   from 'browser-sync';
import config    from '../config';

const server = (done) => {
    if (!config.PRODUCTION) {
        browser.init(config.settings.server);
    }

    done();
};

export const reload = (done) => {
    browser.reload();
    done();
};

export default server;