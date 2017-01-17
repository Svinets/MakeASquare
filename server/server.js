var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/myTestDB');

var reviews = require('./config/routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('../client'));

app.use('/api', reviews);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000);