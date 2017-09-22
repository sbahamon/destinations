const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.get('/', function(req, res) {
  db.destinations.findAll()
  .then(function(destinations) {
    res.status(200).json(destinations);
  })
  .catch(function(error) {
    res.json(error);
  });
});

router.get('/:id', function(req, res) {
  db.destinations.findById(req.params.id)
  .then(function(project) {
    if (!project) throw Error();
    res.status(200).json(project);
  })
  .catch(function(error) {
    res.json(error);
  });
});

router.post('/', function(req, res) {
  db.destinations.create({
    location: req.body.location
  })
  .then(function(destination) {
    res.status(200).json(destination);
  })
  .catch(function(error) {
    res.json(error);
  });
});

router.put('/:id', function(req, res){
  db.destinations.findById(req.params.id)
  .then(function(d) {
    return destination = d.updateAttributes(req.body);
  })
  .then(function(d) {
    res.status(200).json(d);
  })
  .catch(function(err) {
    res.status(500).json(err);
  });
});

// delete projects/:id - delete a specific project
router.delete('/:id', function(req, res){
  db.destinations.destroy({
    where: { id: req.params.id }
  })
  .then(function(destination){
    res.status(200).json(destination);
  })
  .catch(function(err){
    res.status(500).json(err);
  });
});

module.exports = router;
