var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log(req.files);
    cb(null, 'img/'+ Date.now() +file.originalname);
  },
  filename: function(req, file, cb) {
    cb(null, '' );
  }
});

const upload = multer({ storage: storage });

module.exports.upload =upload;
