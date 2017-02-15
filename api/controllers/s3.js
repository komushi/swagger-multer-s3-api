
var s3helper = require('../helpers/s3helper');

function getObject(req, res) {
  s3helper.getObject(req, res);
}

// var putObject = global.s3helper.putObject.array('file');
module.exports = {getObject : getObject};

