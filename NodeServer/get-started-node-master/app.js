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
  });
  app.post("/api/getInsertControl",function(req,res){
    cloudant.dbControl.getInsertControl().set.newsList(cloudant.dbControl.getDbByName('aaa'),req,res);
    console.log("전송 성공");
  });
  app.get("/api/newslist",function(req,res){
    //res.send('{"total_rows":4,"offset":0,"rows":[{"id":"758df986c3ea62513ead6fc39c1586f7","key":"758df986c3ea62513ead6fc39c1586f7","value":{"rev":"1-76f32966a4ca1f24b97b5ca597d2dff0"},"doc":{"_id":"758df986c3ea62513ead6fc39c1586f7","_rev":"1-76f32966a4ca1f24b97b5ca597d2dff0","title":"testCode","dateTime":"dateTime","description":"test is best","path":"/path"}},{"id":"758df986c3ea62513ead6fc39c2c9466","key":"758df986c3ea62513ead6fc39c2c9466","value":{"rev":"1-4046a233db08ede777a30e70b31ff77e"},"doc":{"_id":"758df986c3ea62513ead6fc39c2c9466","_rev":"1-4046a233db08ede777a30e70b31ff77e","title":"success News Update","dateTime":"dateTime","description":"news update is success ! how pretty","path":"/path"}},{"id":"b31a2c19f1e985ecb4bbaff1cafbe172","key":"b31a2c19f1e985ecb4bbaff1cafbe172","value":{"rev":"1-665719a0d5ab648bdbfdcdaf98b736e2"},"doc":{"_id":"b31a2c19f1e985ecb4bbaff1cafbe172","_rev":"1-665719a0d5ab648bdbfdcdaf98b736e2","title":"oh!","dateTime":"dateTime","description":"wow","path":"/path"}},{"id":"fad71edfbbe85baaddfafe25ac5a6b11","key":"fad71edfbbe85baaddfafe25ac5a6b11","value":{"rev":"1-4046a233db08ede777a30e70b31ff77e"},"doc":{"_id":"fad71edfbbe85baaddfafe25ac5a6b11","_rev":"1-4046a233db08ede777a30e70b31ff77e","title":"success News Update","dateTime":"dateTime","description":"news update is success ! how pretty","path":"/path"}}]}');
    cloudant.dbControl.getControl().get.newsList(cloudant.dbControl.getDbByName('aaa'),req,res);
        console.log("데이터 겟!");
  });
  app.post("/api/news",function(req,res){
    console.log("eee");
    console.log(req.body.id);
    cloudant.dbControl.getControl().get.newsData(cloudant.dbControl.getDbByName('aaa'),req,res);
  });
  app.get("/api/productList",function(req,res){
    cloudant.dbControl.getControl().get.productList('productList',req,res);
  });
  app.get("/api/product",function(req,res){
    cloudant.dbControl.getControl().get.productData('product',req,res);
  });
}

module.exports.app = appApiPathCreate;
