var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pub = require('../models/pubs');
var passport = require('passport');

router.get('/', function(req, res, next){
  Pub.find(function(err, pubs){
    if (err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.render('edit/authPubList', {
         title: 'Authenticated Pub List',
         pub: pub
      });
    }
  });
});

router.get('/addPub', function(req, res, next){
  res.render('edit/addPub', {title: 'Add A Pub'});
});

router.post('/addPub', function(req, res, next){
  Pub.create({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    owner: req.body.owner,
    email: req.body.email
  });
  res.redirect('/edit');
});

router.get('/:id', function(req, res, next){
  var id = req.params.id;

  Pub.findById(id, function(err, pub){
    if (err) {
      console.log(err);
      res.end(err)
    }
    else{
      res.render('edit/updateList',{
        title: 'Update List',
        pub: pub
      });
    }
  });
});

router.post('/:id', function(req, res, next){
  var id = req.params.id;
  var pub = new Pub({
    _id: id,
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    owner: req.body.owner,
    email: req.body.email
  });

  Pub.update({_id: id}, pub, function(err){
    if(err) {
      console.log(err);
      res.end(err);
    }
    else{
      res.redirect('/edit');
    }
  });
});

module.exports = router;
