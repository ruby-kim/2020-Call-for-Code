
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
    res.send("send");
  },
   productList(mydb,req,res){
     mydb.getDbByName('productlist').insert({
       title: req.body.title, price : req.body.price , subTitle : req.body.subTitle, dateTime: 'dateTime' },
     function(err, data) {
       if(!err){
         mydb.getDbByName('productinfo').insert({_id:data.id, description : req.body.description ,path:'/path'},
         function(er, da) {
           console.log(da);
         });}
         console.log("Error" ,err);
        console.log('Data:', data);
    });
    res.send("send");
  },
};

module.exports.set = set;
