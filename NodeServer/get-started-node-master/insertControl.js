
const set = {
   newsList(mydb){
     mydb.insert({ newsId:'200528title', title:'title', dateTime: 'dateTime' , description : 'description' ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   newsData(mydb){
     mydb.insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   productList(mydb){
     mydb.insert({ productId:'title+dataTime', title: 'qwer',dateTime:'dateTime', description: 'description' ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   productData(mydb){
     mydb.insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
     });
  }
};

module.exports.set = set;
