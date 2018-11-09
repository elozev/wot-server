'use strict'
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json('Hello there');
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

app.listen(port, () => {
    console.log("Express is running on port: " + port);
});