'use strict'
const express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    db = require('./config/db'),
    router = require('./routes/index');


const port = process.env.PORT || 3000;
const app = express();


//TODO: research about Morgan
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header('Content-type', 'application/json');
});

app.use((req, res, next) => {
    let error = new Error("404 Not Found! Resource doesn\'t exists!");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({errorCode: err.status, message: err.message});
});

router(app, db);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Express is running on port: " + port);
    });
});
