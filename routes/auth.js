var express = require('express');
var router = express.Router();

// auth packages
var passport = require('passport');
var mongoose = require('mongoose');
var configDb = require('../config/db.js');

// GET sign in page
router.get('/signIn', function(req, res, next){
  res.render('auth/signIn', {title: 'Sign In'});
});

// GET sign up page
router.get('/signUp', function(req, res, next){
  res.render('auth/signUp', {title: 'Sign Up'});
});

//make it live for everyone to see
module.exports = router;
