var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Leaflet Demo Fall 2017 CartViz' });
});

module.exports = router;
