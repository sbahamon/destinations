const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* get all projects */
app.get('/', function(req, res) {
  res.send("connected");
});

app.use('/destinations', require('./controllers/destinations'));

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('server is twerking');
});

module.exports = server;
