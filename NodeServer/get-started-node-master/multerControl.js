var multer  = require('multer')

var profileStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log(req.files);
    cb(null, 'img/profile/'+ Date.now() +file.originalname);
  },
  filename: function(req, file, cb) {
    cb(null, '' );
  }
});

var certificationStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log(req.files);
    cb(null, 'img/certification/'+ Date.now() +file.originalname);
  },
  filename: function(req, file, cb) {
    cb(null, '' );
  }
});


const profile = multer({ storage: profileStorage });
const certification = multer({ storage: certificationStorage });
module.exports.profile =profile;
module.exports.certification =certification;
