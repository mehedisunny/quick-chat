var express = require('express');

var app = express();

app.set('view engine', 'ejs'); // setting up view engine
app.use('/assets', express.static('public')); // making assets accessible

// contact controller
var contactController = require('./controllers/ContactController');
contactController(app);



app.listen(3000);