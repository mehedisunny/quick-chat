var sess = require('express-session');
var escape = require('escape-html');
module.exports = function (app) {
  app.use(sess({secret: '12345'}));

  app.get('/', function (req, res) {
    if (typeof sess.email == undefined || sess.email == "") {
      return res.redirect('/login');
    }
    res.render('chat/chatInfo');
  });
  
  app.post('/postComment', function (req, res) {
    var chatModel = require('../models/ChatModel');
    var chat = {
      chatBody: escape(req.body.chatBody)
    };

    chatModel.insert(chat, function(success){
      if(success)
      {
        res.sendStatus(200);
      }
      else
      {
        res.send('Error inserting data');
      }
    });

  });

  app.get('/comments', function (req, res) {
    var chatModel = require('../models/ChatModel');
    chatModel.getComments(function(result){
      var data = {
        chatBody: result
      };
      res.send(data);
    });
  });
}