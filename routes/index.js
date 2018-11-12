'use strict'

const routes = [
    require('./users')
];


//TODO: router.use('/users', routes[0])
module.exports = function router(router, db) {
    return routes.forEach((route) => {
        route(router, db);
    });
};