const query = {
   "include_docs":true,
   "limit": 6,
   "skip": 0
 };

const get = {
  login(mydb,req,res){
      console.log(req.body.id);
    mydb.getDbByName('login').get(req.body.id, function(err, data) {

      if(!err){
        if(data.password == req.body.password)
            res.send(data)
        else
            res.send("Fail");
      }
      else
          res.send("Fail");
    });
 },
   newsList(mydb,req,res){
     query.skip = req.body.skip;
     console.log(req.body);
     mydb.getDbByName('newslist').list(query, function(err, data) {
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
    query.skip = req.body.skip;
     mydb.getDbByName('productlist').list(query, function(err, data) {
       console.log(data);
       res.send(data);
     });
  },
   productData(mydb,req,res){
     mydb.getDbByName('productinfo').get(req.body.id, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
         res.send(data);
       });
  },
   postlist(mydb,req,res){
    query.skip = req.body.skip;
     mydb.getDbByName('postlist').list(query, function(err, data) {
       console.log(data);
       res.send(data);
     });
  },
   postinfo(mydb,req,res){
     var query = {"selector": {"postid" : req.body.id}};
     mydb.getDbByName('postinfo').find(query, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
         res.send(data);
     });
  },


};

module.exports.get = get;
