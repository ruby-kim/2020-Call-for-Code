const cloudant = require('./cloudantControl');
const certification  = require('./multerControl').certification;
const profile  = require('./multerControl').profile;



function appApiPathCreate(app){

  app.post('/profile', profile.single('uploaded_file'), function (req, res) {
    cloudant.dbControl.getCertificationControl().set.profile(cloudant.dbControl,req,res);
  });
  app.post('/certificationbyimg', certification.single('uploaded_file'), function (req, res) {
     cloudant.dbControl.getCertificationControl().set.certification(cloudant.dbControl,req,res);
  });
  app.post("/api/createlogin",function(req,res){
    cloudant.dbControl.getInsertControl().set.login(cloudant.dbControl,req,res);
  });

  app.post("/api/login",function(req,res){
    cloudant.dbControl.getControl().get.login(cloudant.dbControl,req,res);
  });

  app.get("/api/product",function(req,res){
    cloudant.dbControl.getControl().get.productInfo(cloudant.dbControl,req,res);
  });

  app.get("/api/postinfo",function(req,res){
    cloudant.dbControl.getControl().get.postinfo(cloudant.dbControl,req,res);
  });

  app.post("/api/newslist",function(req,res){
    cloudant.dbControl.getControl().get.newsList(cloudant.dbControl,req,res);
  });
  app.post("/api/news",function(req,res){
    cloudant.dbControl.getControl().get.newsData(cloudant.dbControl,req,res);
  });
  app.post("/api/productList",function(req,res){
    cloudant.dbControl.getControl().get.productList(cloudant.dbControl,req,res);
  });
  app.post("/api/postlist",function(req,res){
    cloudant.dbControl.getControl().get.postlist(cloudant.dbControl,req,res);
  });


  app.post("/api/newsinsert",function(req,res){
    cloudant.dbControl.getInsertControl().set.newsList(cloudant.dbControl,req,res);
  });
  app.post("/api/productinsert",function(req,res){
    cloudant.dbControl.getInsertControl().set.productList(cloudant.dbControl,req,res);
  });
  app.post("/api/postinfo",function(req,res){
    cloudant.dbControl.getInsertControl().set.postinfo(cloudant.dbControl,req,res);
  });
  app.post("/api/postinsert",function(req,res){
    cloudant.dbControl.getInsertControl().set.productList(cloudant.dbControl,req,res);
  });
}

module.exports.app = appApiPathCreate;
