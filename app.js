'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

/******/
// var upload  = require('multer')({ dest: 'uploads/' });

var s3helper = require('./api/helpers/s3helper');
/******/

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // app.use(upload.fields([{name: "file"}]));
  app.use(s3helper.putObject.fields([{name: "file"}]));

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
