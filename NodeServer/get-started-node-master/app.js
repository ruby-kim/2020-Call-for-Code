const cloudant = require('./cloudantControl');

function appApiPathCreate(app){
  app.post("/api/visitors", function (req, res) {
    res.send('{ "name":"John" }');
  });
  app.get("/api/visitors", function (req,res) {
      res.send('{ "name":"John" }');
  });


  app.get("/api/test",function(req,res){
    cloudant.dbControl.getControl().get.newsData(cloudant.dbControl.getDbByName('aaa'),req,res);
    res.send('{ "name":"John" }');
  });
  app.post("/api/getInsertControl",function(req,res){
    cloudant.dbControl.getInsertControl().set.newsList(cloudant.dbControl.getDbByName('aaa'),req,res);
    res.send("success");
  });
  app.get("/api/newslist",function(req,res){
    cloudant.dbControl.getControl().get.newsList(cloudant.dbControl.getDbByName('aaa'),req,res);
    res.send("success");
  });
  app.get("/api/news",function(req,res){
    cloudant.dbControl.getControl().get.newsData('news',req,res);
  });
  app.get("/api/productList",function(req,res){
    cloudant.dbControl.getControl().get.productList('productList',req,res);
  });
  app.get("/api/product",function(req,res){
    cloudant.dbControl.getControl().get.productData('product',req,res);
  });
}

module.exports.app = appApiPathCreate;
