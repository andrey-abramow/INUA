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
exports.getFactoryTypes = function (req,res) {
  req.getConnection(function(err, connection) {

    if (err) {
    res.statusCode = 503;
    res.send({
      err:    err.code
    });
    console.log('Can`t connect to db in getProblemId API call\n' + err +"\n");
  } else {
    connection.query('SELECT * FROM FactoryTypes',function(err1, rows) {
      if (err1) {
         res.statusCode = 500;
        res.send({
          err1: err1.code
        });
      }else{
        res.send({
          FactoryTypes: rows
        });

      }
      });



  }
  });

}
exports.getFactories = function (req,res) {
  req.getConnection(function(err, connection) {

    if (err) {
      res.statusCode = 503;
      res.send({
        err:    err.code
      });
      console.log('Can`t connect to db in getProblemId API call\n' + err +"\n");
    } else {
      connection.query('SELECT * FROM Factories',function(err1, rows) {
        if (err1) {
          res.statusCode = 500;
          res.send({
            err1: err1.code
          });
        }else{
          res.send({
            Factories: rows
          });

        }
      });



    }
  });

}
