
module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('contact/contact-info');
  });

  app.get('/login', function (req, res) {
    res.render('contact/login');
  });

  app.post('/login', function (req, res) {
    console.log(req.body);

    if (req.body.email === "mhhassan@iquantile.com" && req.body.password === "123") {
      return res.redirect('/');
    } else {
      var data = {
        status: 403,
        msg: "Invalid credential given"
      };
      res.render('contact/login', {er: data})
    }
  });

  app.get('/sign-up', function (req, res) {
    res.render('contact/sign-up');
  });

  app.post('/sign-up', function (req, res) {
    res.render('contact/success');
  });
};