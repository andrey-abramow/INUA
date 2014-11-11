var mysql = require('mysql'),
  express = require('express'),
  jwt = require('jsonwebtoken'),
  crypto = require('crypto'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  myConnection = require('express-myconnection'),
  http = require('http'),
  app = express(),
  server = http.createServer(app),
  routes = require('./routes.js'),

  location = require('./config.js');


 var connectionPool = {
  host :'localhost',
  user :'root',
  password:'root',
  database:'inua'
};

 app.use(bodyParser());
 app.use(cookieParser());
 app.use(bodyParser());
 app.use(myConnection(mysql, connectionPool, 'pool'));
 app.use('/',express.static(location));
 app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  if ('OPTIONS' === req.method) return res.send(200);
  next();
});


////////api
//user


app.get('/api/factory/:id',routes.getFactory);
app.get('/api/factoryTypes',routes.getFactoryTypes);
app.get('/api/factory',routes.getFactories);





server.listen(8080);

console.log('Rest Demo Listening on port 8090');
