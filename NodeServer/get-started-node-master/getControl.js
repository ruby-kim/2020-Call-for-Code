
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
     mydb.getDbByName('aaa').list({ include_docs: true }, function(err, body) {
       if (!err) {
          res.send(body);
         body.rows.forEach(function(row) {
            console.log(row);
           if(row.doc.name)
             console.log(row.doc.name);
         });
       }
     });
  },
   productData(mydb,req,res){
     mydb.getDbByName('aaa').list({ include_docs: true }, function(err, body) {
       if (!err) {
         body.rows.forEach(function(row) {
            console.log(row);
           if(row.doc.name)
             console.log(row.doc.name);
         });
       }
     });
  }
};

module.exports.get = get;
