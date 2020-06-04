const cloudant = require('./cloudantControl');

function appApiPathCreate(app){
  app.post("/api/visitors", function (req, res) {
    res.send('{ "name":"John" }');
  });
  app.get("/api/visitors", function (req,res) {
      res.send('{ "name":"John" }');
  });

  app.get("/api/test",function(req,res){
    cloudant.dbControl.getControl().get.newsData(cloudant.dbControl,req,res);
  });
  app.get("/api/newslist",function(req,res){
    cloudant.dbControl.getControl().get.newsList(cloudant.dbControl,req,res);
  });
  app.post("/api/news",function(req,res){
    cloudant.dbControl.getControl().get.newsData(cloudant.dbControl,req,res);
  });
  app.get("/api/productList",function(req,res){
    cloudant.dbControl.getControl().get.productList(cloudant.dbControl,req,res);
  });
  app.get("/api/product",function(req,res){
    cloudant.dbControl.getControl().get.productInfo(cloudant.dbControl,req,res);
  });

  app.post("/api/newsinsert",function(req,res){
    cloudant.dbControl.getInsertControl().set.newsList(cloudant.dbControl,req,res);
  });
  app.post("/api/productinsert",function(req,res){
    cloudant.dbControl.getInsertControl().set.productList(cloudant.dbControl,req,res);
  });
}

module.exports.app = appApiPathCreate;
