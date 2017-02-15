
var s3helper = require('../helpers/s3helper');

function getObject(req, res) {
  s3helper.getObject(req, res);
}


var multer  = require('multer'),
    multerS3 = require('multer-s3'),
    AWS = require('aws-sdk');


AWS.config.loadFromPath('./config/s3_config.json');
var s3 = new AWS.S3();


function generateMulter(req, res){
  var bucket = req.swagger.params.bucket.value;
  res.status(200).end();
  
  return multer({
    storage: multerS3({
        s3: s3,
        bucket: function (req, file, cb) {
          console.log("swagger");
          console.log(req.files);
          cb(null, bucket);
        },
        metadata: function (req, file, cb) {
          console.log("file");
          console.log(file);
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, Date.now().toString() + '_' + file.originalname);
        }
    })
  }).array('file');
}

var getMulter =  
   multer({
    storage: multerS3({
        s3: s3,
        bucket: function (req, file, cb) {
          console.log("swagger");
          console.log(req.swagger.params.bucket.value);
          cb(null, req.swagger.params.bucket.value);
        },
        metadata: function (req, file, cb) {
          console.log("file");
          console.log(file);
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, Date.now().toString() + '_' + file.originalname);
        }
    })
  });


// var putObject = global.s3helper.putObject.array('file');
module.exports = {getObject : getObject, putObject : generateMulter};

