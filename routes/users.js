'use strict'
// const User = require('../models/user');
// const express = require('express');
// const router = express.Router();
//
//
// /**
//  * TODO: for development purposes only
//  */
// router.get('/', function (req, res, next) {
//     res.json("GET users/");
// });
//
// router.post('/', (req, res, next) => {
//     res.json({message: "Creating user"});
//
// });
//
// module.exports = router;


module.exports = (router, db) => {
    /**
     * TODO: for development purposes only
     */
    router.get('/', function (req, res, next) {
        res.json("GET users/");
    });

    router.post('/', (req, res, next) => {

        db.users.create({
            first_name: "Sasho",
            last_name: "Testov",
            password: "123456",
            bio: null,
        });
        // res.json({message: "Creating user"});

    });

};