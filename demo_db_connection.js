var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sm'
});
 
connection.connect();
 console.log("Connection success");
connection.query('SELECT * from employees', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
console.log("Connection end");
connection.end();

//Execute the following query in MYSQL Workbench
/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
*/