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
//node demo_db_connection.js
/* output :
Connection success
Connection end
The solution is:  [ RowDataPacket {
    id: 2,
    created_at: 2019-06-29T19:22:16.000Z,
    designation: 'java Developer',
    expertise: 'Spring MVC',
    name: 'pallavi' } ]
  */