var mysql = require('mysql');


var factoryTypes = ['Меблі', 'Сувеніри', 'Взуття', 'Одяг', 'Білизна'];




var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'inua'
  });



function fillFactoryTypes() {
  for (i = 0; i < factoryTypes.length; i++) {
    connection.query('INSERT INTO FactoryTypes SET ?', { Name: factoryTypes[i] });
  }
}



 fillFactoryTypes();

 connection.end();




