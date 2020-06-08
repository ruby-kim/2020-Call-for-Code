const app = require('./app');
let mydb, cloudant;

var dbName = 'mydb';

var insertOne = {};
var getAll = {};

insertOne.cloudant = function(doc, response) {
  mydb.insert(doc, function(err, body, header) {
    if (err) {
      console.log('[mydb.insert] ', err.message);
      response.send("Error");
      return;
    }
    doc._id = body.id;
    response.send(doc);
  });
}


const getNewsList = () =>{
  mydb.get('news', function(err, data) {
    console.log('Data:', data);
    doc = data;
  });
}

const getNewsData = () =>{
  mydb.get('news', function(err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    doc = data;
  });
}

const getProductList = () =>{
  mydb.get('item', function(err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    doc = data;
  });
}

const getProductData = () =>{
  mydb.get('item', function(err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    doc = data;
  });
}

getAll.cloudant = function(response) {
  var names = [];
  mydb.get('aaa', function(err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    // keep a copy of the doc so you know its revision token
    doc = data;
    //callback(err, data);
  });

  mydb.list({ include_docs: true }, function(err, body) {
    console.log(body.rows[0].doc)
    if (!err) {
      body.rows.forEach(function(row) {
        if(row.doc.name)
          names.push(row.doc.name);
      });
      response.json(names);
    }
  });
  //return names;
}

let collectionName = 'mycollection'; // MongoDB requires a collection name.

  // Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');
cloudant = Cloudant("https://0e629378-636f-46ff-8639-14e1cc9b43f7-bluemix:c76f90f2ada09c44789d322f89e5f9249632487f5bacae039eecebadd3b0c412@0e629378-636f-46ff-8639-14e1cc9b43f7-bluemix.cloudantnosqldb.appdomain.cloud");
if(cloudant) {
  //database name
  dbName = 'newsinfo';
  // Create a new "mydb" database.''
  /*
  var doc = { "name" : "c" };
  cloudant.db.create(dbName, function(err, data) {
    if(!err) //err if database doesn't already exists
      console.log("Created database: " + dbName);
  });*/
  mydb = cloudant.db.use(dbName);

/*
  mydb.insert(doc, function(err, body, header) {
     if (err) {
       return console.log('[mydb.insert] ', err.message);
     }
   });*/
/*
   var names = [];
   mydb.list({ include_docs: true }, function(err, body) {
     if (!err) {
       body.rows.forEach(function(row) {
         if(row.doc.name)
           console.log(row.doc.name);
       });
     }
   });*/
/*
  mydb.list(function(er, body) {
  	  if (er)
  		  return console.log('Error listing docs')
  		  body.rows.forEach(function(doc) {
  			     console.log(doc);
  		  })
    })*/
/*
    mydb.list(function(er, body) {
	  if (er)
		  return console.log('Error listing docs')
		  body.rows.forEach(function(doc) {
			  if ( doc.id.substring(0,7) != '_design') {
				  console.log('deleting id: %s, rev: %s', doc.id, doc.value.rev)
				  mydb.destroy(doc.id, doc.value.rev, function(er, body){
					  if (er) console.log('ERROR: %s', er)
					  else console.log(body)
				  })
			  }
		  })
  })*/
    /*
  mydb.db.destroy('aaa', function(err, data) {
      console.log('Error:', err);
      console.log('Data:', data);
    });


  mydb.get('b', function(err, data) {
      console.log("======================================");
      console.log('Error:', err);
      console.log('Data:', data);
      doc = data;
    });*/

}
