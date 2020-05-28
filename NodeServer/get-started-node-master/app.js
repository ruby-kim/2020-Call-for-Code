var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/api/visitors", function (req, res) {
  res.send('{ "name":"John" }');
});

app.get("/api/visitors", function (req,res) {
    res.send('{ "name":"John" }');
});

app.get("/api/test",function(req,res){
  res.send('{ "name":"John" }');
});

app.use(express.static(__dirname + '/views'));


var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("Server Start" + port);
});

module.exports.app = app;
