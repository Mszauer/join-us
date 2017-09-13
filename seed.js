var mysql = require('mysql');
var faker = require('faker');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mszauer',  //your username
  database : 'join_us'         //the nme of your db
});

var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();
