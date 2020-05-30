const cloudant = require('./cloudantControl');

function appApiPathCreate(app){
  app.post("/api/visitors", function (req, res) {
    res.send('{ "name":"John" }');
  });
  app.get("/api/visitors", function (req,res) {
      res.send('{ "name":"John" }');
  });
  app.get("/api/test",function(req,res){
    res.send('{ "name":"John" }');
  });
  app.get("/api/newslist",function(req,res){
    cloudant.dbControl.getControl().get.newsList(cloudant.dbControl.getDbByName('aaa'));
  });
  app.get("/api/news",function(req,res){
    cloudant.dbControl.getControl().get.newsData('news');
  });
  app.get("/api/productList",function(req,res){
    cloudant.dbControl.getControl().get.nroductList('productList');
  });
  app.get("/api/product",function(req,res){
    cloudant.dbControl.getControl().get.nroductData('product');
  });
}

module.exports.app = appApiPathCreate;
