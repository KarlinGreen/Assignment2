var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pub Stop' });
});

//GET Pub List
router.get('/pubList', function(req, res, next){
  res.render('pubList', { title: 'Pub List'});
});

module.exports = router;
