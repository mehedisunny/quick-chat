var sess = require('express-session');
module.exports = function (app) {
  app.use(sess({secret: '12345'}));

  app.get('/', function (req, res) {
    if (typeof sess.email == undefined || sess.email == "") {
      return res.redirect('/login');
    }
    res.render('chat/home');
  });
  
  app.post('/postComment', function (req, res) {
    var chatModel = require('../models/ChatModel');
    var data = {
      chatBody: "gekki"
    }
    chatModel.addComment(data);
  });
}