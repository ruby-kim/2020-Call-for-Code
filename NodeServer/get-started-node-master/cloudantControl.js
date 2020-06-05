var Cloudant = require('@cloudant/cloudant');

const insertControl = require('./insertControl');
const getControl = require('./getControl');
let cloudant = Cloudant("https://0e629378-636f-46ff-8639-14e1cc9b43f7-bluemix:c76f90f2ada09c44789d322f89e5f9249632487f5bacae039eecebadd3b0c412@0e629378-636f-46ff-8639-14e1cc9b43f7-bluemix.cloudantnosqldb.appdomain.cloud");

if(!cloudant)
  console.log("접속 에러");

const dbControl = {
  createTable(dbName){
  },
  getDbByName(dbName){
   cloudant.db.create(dbName);
   mydb = cloudant.db.use(dbName);
   return mydb;
  },
  getInsertControl(){
    return insertControl;
  },
  getControl(){
    return getControl;
  }
}

module.exports.dbControl = dbControl;
