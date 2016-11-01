var mysql = require('mysql');

var TEST_DATABASE = 'test';
var TEST_TABLE = 'user';

//创建连接
var client = mysql.createConnection({
  user: 'root',
  password: '123456'
});

client.connect();
client.query("use " + TEST_DATABASE);

getData = function () {
  client.query(
    'SELECT * FROM ' + TEST_TABLE,
    function selectCb (err, results, fields) {
      if (err) {
        throw err;
      }

      if (results) {
        for (var i = 0; i < results.length; i++) {
          console.log("%d\t%s\t", results[ i ].name, results[ i ].age);
        }
      }
      client.end();
    }
  );
}
//getData();
insertData = function () {
   client.query('insert into user set name = 5,age = 2' ,
   function(err, results) {
     if (err) {
       throw err;
     }
     console.log(results);
     client.end();
   });
}
//insertData();
updateData = function () {
  client.query('update user set age = 4 where name = 1',
  function(err, results) {
    if(err){
      throw err;
    }
    console.log(results);
    client.end();
  })
}
//updateData();
deleteData = function () {
  client.query('delete from user where name = 1',
  function(err, results) {
    if(err){
      throw err;
    }
    console.log(results);
    client.end();

  })
}
deleteData();
