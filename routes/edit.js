var express = require('express');
var router = express.Router();

// grab our node modules and our pub model for database interaction
var mongoose = require('mongoose');
var Pub = require('../models/pubs');
var passport = require('passport');

// Get our authPubList table
router.get('/', isLoggedIn ,function(req, res, next){
  // Use the pubs model to retrieve the info
//console.log('log test');
  // Pub.find(function(err, pubs){

    //if there's an issue, log it in the console. otherwise render the authPubList.
    // if (err) {
    //   console.log(err);
    //   res.end(err);
    // }
    // else {
      // console.log('it gets to here');
      res.render('edit/authPubList', {
      //{
         title: 'Authenticated Pub List',
      //    pubs: pubs
      // });
  });
  // });
});

// Create our add page for authenticated users
console.log('log test');
router.get('/addPub', isLoggedIn ,function(req, res, next){
  // not getting to second log - ^ problem
  console.log('It gets here');
  res.render('edit/addPub', {title: 'Add A Pub',
  });
});

// post the info from the form to the database, and redirect the user to the home page
// router.post('/addPub', function(req, res, next){
//   Pub.create({
//     name: req.body.name,
//     phone: req.body.phone,
//     address: req.body.address,
//     owner: req.body.owner,
//     email: req.body.email
//   });
//   res.redirect('/');
// });

// Use the pub id to grab the info for our update page
router.get('/updateList', isLoggedIn , function(req, res, next){
  // var id = req.params.id;
  //
  // //if there's an issue, log it in the console. otherwise redirect to the update page.
  // Pub.findById(id, function(err, pub){
  //   if (err) {
  //     console.log(err);
  //     res.end(err)
  //   }
  //   else{
      res.render('edit/updateList',{
        title: 'Update List',
      //  pub: pub
      });
    //}
  //});
});

// Post the updated info to the database
// router.post('/:id', function(req, res, next){
//   var id = req.params.id;
//   var pub = new Pub({
//     _id: id,
//     name: req.body.name,
//     phone: req.body.phone,
//     address: req.body.address,
//     owner: req.body.owner,
//     email: req.body.email
//   });

// If there's an issue, log the error in the console. otherwise redirect the user to the home page.
//   Pub.update({_id: id}, pub, function(err){
//     if(err) {
//       console.log(err);
//       res.end(err);
//     }
//     else{
//       res.redirect('/');
//     }
//   });
// });

// authorization check
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/auth/signIn');
  }
}

module.exports = router;
