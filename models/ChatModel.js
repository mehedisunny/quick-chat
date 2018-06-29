var dbConnection = require('./DBConnect');

var result = null;
module.exports = {

  insert: function(chat, callback){
    var sql = "INSERT INTO chat VALUES (null, ?)";
    dbConnection.executeGetId(sql, [chat.chatBody], function(id){
      if(id <= 0)
      {
        callback(false);
      }
      else
      {
        callback(true);
      }
    });
  },

  getComments: function(callback){
    var sql = "SELECT * FROM chat ORDER BY id DESC";
    dbConnection.getResult(sql, null, function(result){
      callback(result);
    });
  }
}