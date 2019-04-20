const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api/commodity/opera',
        {
            target: 'http://172.16.42.212:1297/',
            pathRewrite: {
                '^/api': '',
            },
        }
    ));
    app.use(proxy('/api',
        {
            target: 'http://172.16.42.212:1297/',
            pathRewrite: {
                '^/api': '',
            },
        }
    ));
};
