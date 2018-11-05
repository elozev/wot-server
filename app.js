var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get('/', (req, res) =>{
    res.json('Hello there');
});

app.listen(port, () => {
   console.log("The server is running on port " + port);
});