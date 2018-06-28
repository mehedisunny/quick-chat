var sess = require('express-session');
var contactModel = require('../models/ContactModel');

module.exports = function (app) {

  //var modelContact = contactModel(app);

  app.use(sess({secret: '12345'})); // initializing session
  app.get('/', function (req, res) {
    if (typeof sess.email == undefined || sess.email == "") {
      return res.redirect('/login');
    }
    res.render('contact/contact-info');
  });

  app.get('/login', function (req, res) {
    if (sess.email !== "") {
      return res.redirect('/');
    }
    res.render('contact/login');
  });

  app.post('/login', function (req, res) {
    if (req.body.email === "mhhassan@iquantile.com" && req.body.password === "123") {
      sess.email = "mhhassan@iquantile.com";
      var response = {
        status: 200,
        msg: "valid user"
      };
      res.send(response);
    } else {
      var response = {
        status: 401,
        msg: "invalid user"
      };
      res.send(response);
    }
  });

  app.get('/sign-up', function (req, res) {
    res.render('contact/sign-up');
  });

  app.post('/sign-up', function (req, res) {
    contactModel.addContact(req.body);
    var response = {
      status: 200,
      msg: "valid user"
    };
    res.send(response);
  });

  app.get('/logout', function (req, res) {
    if (typeof sess.email !== undefined && sess.email != "") {
      sess.email = "";
      return res.redirect('/login');
    } else {
      return res.redirect('/');
    }
  });
};