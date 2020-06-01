
const get = {
   newsList(mydb,req,res){
     mydb.list({ include_docs: true }, function(err, body) {
       if (!err) {
         body.rows.forEach(function(row) {
           console.log(row);
           if(row.doc.name)
             console.log(row.doc.name);
         });
       }
     });
  },
   newsData(mydb,req,res){
     mydb.get('9b8e4f818f74abe7609bac7e014d34b1', function(err, data) {
         console.log("======================================");
         console.log('Error:', err);
         console.log('Data:', data);
         doc = data;
       });
       /*
     mydb.get({ include_docs: true }, function(err, body) {
       if (!err) {
         body.rows.forEach(function(row) {
            console.log(row);
           if(row.doc.name)
             console.log(row.doc.name);
         });
       }
     });*/
  },
   productList(mydb,req,res){
     mydb.list({ include_docs: true }, function(err, body) {
       if (!err) {
         body.rows.forEach(function(row) {
            console.log(row);
           if(row.doc.name)
             console.log(row.doc.name);
         });
       }
     });
  },
   productData(mydb,req,res){
     mydb.list({ include_docs: true }, function(err, body) {
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
