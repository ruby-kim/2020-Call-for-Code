
const insertControl = {
   insertNewsList(mydb){
     mydb.insert({ _id: 'news',newsId:'200528title', title:'title', dateTime: 'dateTime' , description : 'description' ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   insertNewsData(mydb){
     mydb.insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   insertProductList(mydb){
     mydb.insert({ _id: 'product',productId:'title+dataTime', title: 'qwer',dateTime:'dateTime', description: 'description' ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   insertProductData(mydb){
     mydb.insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
     });
  }
};

module.exports.insertControl = insertControl;
