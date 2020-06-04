
const get = {
   newsList(mydb,req,res){
     mydb.getDbByName('newslist').list({ include_docs: true }, function(err, data) {
       console.log("호출");
       res.send(data);
     });
  },
   newsData(mydb,req,res){
     mydb.getDbByName('newsinfo').get(req.body.id, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
         res.send(data);
       });
  },
   productList(mydb,req,res){
     mydb.getDbByName('productlist').list({ include_docs: true }, function(err, data) {
       console.log("호출");
       res.send(data);
     });
  },
   productData(mydb,req,res){
     mydb.getDbByName('productinfo').get(req.body.id, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
         res.send(data);
       });
  }
};

module.exports.get = get;
