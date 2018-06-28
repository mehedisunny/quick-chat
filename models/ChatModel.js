var dbConnection = require('./DBConnect');
module.exports = {
  addComment: function (data) {
    var connection = dbConnection();
    var success = null;
    connection.connect(function(err) {
      if (err) throw err;

      var sql = "INSERT INTO chat (chat_body, contact_id) VALUES ?";
      var values = [
        [data.chatBody, sess.userId]
      ];
      connection.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });
  }
}