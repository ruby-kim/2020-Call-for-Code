const set = {
   certification(mydb,req,res){
     console.log(req.body);
     mydb.getDbByName('login').get(req.body.id, function(err, data) {
       console.log("====================================");
       console.log(data);
       if(!err && data.password == req.body.password){
         var user = {
            "_id": req.body.id,
            "_rev": data._rev,
            "password":data.password,
            "name":data.name,
            "maxPoint" : (Number(data.point) + 10 > Number(data.maxPoint) ? Number(data.point) : Number(data.maxPoint)).toString(),
            "point" : (Number(data.point) + 10).toString(),
            "path":data.path
         };
         console.log("============================");
         console.log(user.point + " " +data.point + " "+ data.maxPoint) ;
         mydb.getDbByName('login').insert(user, function(err, data) {
           console.log(err);
           if(!err) res.send(data);
           else res.send("Fail");
         });
       }
       else
           res.send("Fail");
     });
    },
   profile(mydb,req,res){
      mydb.getDbByName('login').get(req.body.id, function(err, data) {
        if(!err && data.password == req.body.password){
          console.log("================");
          console.log(data);
          var user = {
             "_id": req.body.id,
             "_rev": data._rev,
             "password":data.password,
             "name":data.name,
             "maxPoint" : data.maxPoint.toString(),
             "point" : data.point.toString(),
             "path":req.body.path
          };

          mydb.getDbByName('login').insert(user, function(err, data) {
            console.log(data);
            if(!err) res.send(data);
            else res.send("Fail");
          });
        }
        else
            res.send("Fail");
      });
     },
};

module.exports.set = set;
