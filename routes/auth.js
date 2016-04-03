var express = require('express');
var router = express.Router();

// GET sign in page
router.get('/signIn', function(req, res, next){
  res.render('auth/signIn', {title: 'Sign In'});
});

// GET sign up page
router.get('/signUp', function(req, res, next){
  res.render('auth/signUp', {title: 'Sign Up'});
});


module.exports = router;
