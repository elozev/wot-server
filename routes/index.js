'use strict'

const routes = [
    require('./users')
];

module.exports = function router(router, db) {
    return routes.forEach((route) => {
        route(router, db);
    });
};