var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupation', mainCtrl.getOccupations);
app.get('/occupation/latest', mainCtrl.getOccupationLast);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamily);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurants);


app.listen(3000,function() {
  console.log('Always watching');
});
