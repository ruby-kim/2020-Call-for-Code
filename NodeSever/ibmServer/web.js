//express 라이브러리를 가지고 옴 안될 경우 npm install express
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.use(function(req, res, next) {
  next();
});

app.get('/api/',function(req,res){
    res.send('hello')
});

//포트 번호 및 server 변수 할당.
var server = app.listen(3000, function(){
    console.log('============= 서버 시작 ===========' + new Date());
});
