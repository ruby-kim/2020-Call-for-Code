
const get = {
   newsList(mydb){
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
   newsData(mydb){
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
   productList(mydb){
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
   productData(mydb){
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
