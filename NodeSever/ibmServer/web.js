//express 라이브러리를 가지고 옴 안될 경우 npm install express
const express = require('express');
const bodyParser = require('body-parser');

const EventControl = require('./EventControl');

var cors = require('cors');
var app = express();

var cpUpload = require('./ftpControl').upload;
var cpEditPost = require('./ftpControl').editPost;

app.use(cors());
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("access-control-allow-origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/api/login',function(req,res){
   EventControl.eventControl.loginCheck(req,res);
});


app.post('/api/updateGellaryPost', cpEditPost, function (req, res) {
  console.log("updateEdit");
  EventControl.eventControl.updateGellaryPost(req,res);
  if(req.body.fileName != req.body.beforeFileName)
  {
      var EasyFtp = require('easy-ftp');
      var ftp = new EasyFtp();
      var config = {
        host: 'sbj3834.cafe24.com',
        port: 21,
        user: 'sbj3834',
        password: 'ha23690!',
        type : 'ftp'
      };
      ftp.connect(config);
      ftp.rm("/www/images/"+req.body.beforeFileName, function(err){});
      ftp.close();
  }
});


app.post('/api/insertGellaryPost', cpUpload, function (req, res) {
  console.log("테스트냐구 제엔자앙");
  res.send("erwer");
   EventControl.eventControl.insertGellaryPost(req,res);
});

//======Select ==========
app.post('/api/selectETCPost',function(req,res){
    EventControl.eventControl.selectAllPost(req,res);
});

app.post('/api/selectPostAll',function(req,res){
    EventControl.eventControl.selectAllPost(req,res);
});

app.post('/api/selectPostByArea',function(req,res){
    EventControl.eventControl.selectPostByArea(req,res);
});

app.post('/api/selectPostByWeather',function(req,res){
    EventControl.eventControl.selectPostByWeather(req,res);
});

app.post('/api/selectPostBySearch',function(req,res){
    EventControl.eventControl.selectPostBySearch(req,res);
});

app.post('/api/selectPostById',function(req,res){
    EventControl.eventControl.selectPostById(req,res);
});
//=========================

app.post('/api/deletePost',function(req,res){
    EventControl.eventControl.deletePost(req,res);
});

app.post('/update',function(req,res){
    EventControl.eventControl.updateManger(req,res);
});

app.get('/api/',function(req,res){
    EventControl.eventControl.connectToHome(req,res);
});


//포트 번호 및 server 변수 할당.
var server = app.listen(8001, function(){
    console.log('============= 서버 시작 ===========' + new Date());
});
