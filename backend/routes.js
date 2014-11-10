var jwt          = require('jsonwebtoken'),
  crypto       = require('crypto'),
  bodyParser   = require('body-parser'),
  cookieParser = require('cookie-parser'),
  myConnection = require('express-myconnection'),
  location = require('./config.js');

exports.getFactory = function(req,res){
   req.getConnection(function(err, connection) {
    if (err) {
      res.statusCode = 503;
      res.send({
        err:    err.code
      });
      console.log('Can`t connect to db in getProblemId API call\n' + err +"\n");
    } else {

    }
  });
};
