'use strict'

const constants = require('./constants');
// const bcrypt = require('bcrypt');
const Sequelize = require("sequelize");
const sequelize = new Sequelize('workontime', 'elozev', 'wotthebest', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000
    }
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection successfully established!');
    }).catch((err) => {
    console.error('Unable to establish connection', err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.constants = constants;

//TODO: add models to db
db.users = require('../models/user')(sequelize, Sequelize);

//TODO: define relations between models

module.exports = db;