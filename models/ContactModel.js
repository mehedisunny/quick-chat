var dbConnection = require('./DBConnect');
module.exports = {
  addContact: function (data) {
    var connection = dbConnection();
    var success = null;
    connection.connect(function(err) {
      if (err) throw err;

      var sql = "INSERT INTO contact (email,phone,password) VALUES ?";
      var values = [
        [data.email, data.phone, data.password],
      ];
      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });
  }
}