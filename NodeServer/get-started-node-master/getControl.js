
const getControl = {
   getNewsList(mydb){
    mydb.get('news', function(err, data) {
      console.log('Data:', data);
    });
  },
   getNewsData(mydb){
    mydb.get('news', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });
  },
   getProductList(mydb){
    mydb.get('item', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });
  },
   getProductData(mydb){
    mydb.get('item', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });
  }
};

module.exports.getControl = getControl;
