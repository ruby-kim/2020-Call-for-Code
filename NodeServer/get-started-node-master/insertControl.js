const set = {
   login(mydb,req,res){
     console.log(req.body.id + " / " + req.body.password +  " / " + req.body.name);
      mydb.getDbByName('login').insert({_id: req.body.id, password : req.body.password,
        name : req.body.name ,maxPoint:0, point:0,path:"https://getstartednode-balanced-quokka-og.mybluemix.net/img/basic.jpg"},
    function(err, data) {
      if(!err) res.send("Success");
      else res.send("Fail");
      });
    },
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
   postlist(mydb,req,res){
     mydb.getDbByName('postlist').insert({
       userName: req.body.userName ,  description : req.body.description, dateTime: 'dateTime' , path:'/path' },
     function(err, data) {


        console.log("Error" ,err);
        console.log('Data:', data);
    });
    res.send("send");
  },
  postinfo(mydb,req,res){
    mydb.getDbByName('postinfo').insert({
     postid: req.body.id, user: req.body.user , message : req.body.message, dateTime: 'dateTime' },
    function(err, data) {
      if(!err){}
       console.log("Error", err);
       console.log('Data:', data);
   });
   res.send("send");
 },
};

module.exports.set = set;
