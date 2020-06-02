
const set = {
   newsList(mydb,req,res){
     console.log("dd");
     mydb.insert({ title: req.body.title, dateTime: 'dateTime' , description : req.body.description ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   newsData(mydb,req,res){
     mydb.insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   productList(mydb,req,res){
     mydb.insert({ title: 'qwer',dateTime:'dateTime', description: 'description' ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   productData(mydb,req,res){
     mydb.insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
     });
  }
};

module.exports.set = set;
