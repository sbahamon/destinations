const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

/* get all projects */
app.get('/', function(req, res) {
  db.destinations.findAll()
    .then(function(destinations) {
      res.status(200).json(destinations);
    })
    .catch(function(error) {
      res.json(error);
    });});

//app.use('/destinations', require('./controllers/destinations'));

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('server is twerking');
});

module.exports = server;
