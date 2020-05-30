
const get = {
   newsList(mydb){
    mydb.get('news', function(err, data) {
      console.log('Data:', data);
    });
  },
   newsData(mydb){
    mydb.get('news', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });
  },
   productList(mydb){
    mydb.get('item', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });
  },
   productData(mydb){
    mydb.get('item', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });
  }
};

module.exports.get = get;
