module.exports = function () {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "12345",
    database: "contact_chat"
  });

  return con;
}