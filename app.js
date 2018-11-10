'use strict'
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;
const routes = require("./routes/index");

app.use('/', routes);

app.use((req, res, next) => {
    let error = new Error("404 Not Found! Resource doesn\'t exists!");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({errorCode: err.status, message: err.message});
});

app.listen(port, () => {
    console.log("Express is running on port: " + port);
});