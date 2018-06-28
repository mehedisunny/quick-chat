var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // setting up view engine
app.use('/assets', express.static('public')); // making assets accessible


// contact controller
var contactController = require('./controllers/ContactController');
contactController(app);



app.listen(3000);