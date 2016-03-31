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

router.get('/signIn', function(req, res, next){
  res.render('auth/signIn', {title: 'Sign In'});
});

router.get('/signUp', function(req, res, next){
  res.render('auth/signUp', {title: 'Sign Up'});
});

router.get('/updateList', function(req, res, next){
  res.render('edit/updateList', {title: 'Update List'});
});

router.get('/addPub', function(req, res, next){
  res.render('edit/addPub', {title: 'Add A Pub'});
});

router.get('/authPubList', function(req, res, next){
  rs.render('authPubList', {title: 'Authenticated Pub List'})
});


module.exports = router;
