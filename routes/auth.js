var express = require('express');
var router = express.Router();

// auth packages
var passport = require('passport');
var mongoose = require('mongoose');
var configDb = require('../config/db.js');
var Account = require('../models/account');

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(user, done){
  Account.findById(id, function(err,user){
      done(err, user);
  });
});

// GET sign in page
router.get('/signIn', function(req, res, next){
  var messages = req.session.messages || [];
  req.session.messages = [];
  if(req.isAuthenticated()){
    res.redirect('/edit');
  }
  // if the user doesn't exist, or there is an error. Show a message.
  else{
  res.render('auth/signIn', {title: 'Sign In', user: req.user, messages: messages
    });
  }
});

// if they successfully login, take them to the edit page, otherwise take them back to signIn and show an error message
router.post('/signIn', passport.authenticate('local', {
  successRedirect: '/edit',
  failureRedirect: 'auth/signIn',
  failureMessage: 'Invalid Login'
}));

// GET sign up page
router.get('/signUp', function(req, res, next){
  res.render('auth/signUp', {title: 'Sign Up'});
});

//Once a user signs up, take them to the signIn form, otherwise return the signUp page.
router.post('/signUp', function(req, res, next){
  Account.register(new Account({username: req.body.username}), req.body.password, function(err, account){
    if (err){
      return res.render('auth/signUp',{title: 'Sign Up'});
    }
    else{
      res.redirect('auth/signIn');

    }
  });
});

// once they logout redirect them to the home page.
router.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
});

// create our isLoggedIn function.
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/auth/signIn');
  }
}

//make it live for everyone to see
module.exports = router, passport;
