
const set = {
   newsList(mydb,req,res){
     var description = req.body.description;
     if(description.length >= 40)
        description = description.substr(0,40);
     mydb.getDbByName('newslist').insert({ title: req.body.title , subTitle : description, dateTime: 'dateTime' },
     function(err, data) {
       if(!err){
         mydb.getDbByName('newsinfo').insert({_id:data.id, description : req.body.description ,path:'/path'},
         function(er, da) {
           console.log(da);
         });}
         console.log("Error" ,err);
        console.log('Data:', data);
    });
    res.send("dz");
  },
   newsData(mydb,req,res){
     mydb.getDbByName('aaa').insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   productList(mydb,req,res){
     mydb.getDbByName('aaa').insert({ title: 'qwer',dateTime:'dateTime', description: 'description' ,path:'/path'},
     function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
    });
  },
   productData(mydb,req,res){
     mydb.getDbByName('aaa').insert({ _id: 'mydoc', a: 1, b: 'two' }, function(err, data) {
         console.log('Error:', err);
         console.log('Data:', data);
     });
  }
};

module.exports.set = set;
