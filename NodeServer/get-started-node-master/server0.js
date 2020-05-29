var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const appProcess = require('./app');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//기본 웹 연결될 주소 (/views 안 index html.)
app.use(express.static(__dirname + '/views'));

appProcess.app(app);

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server Start" + port);
});
