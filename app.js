var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// require mongoose for database integration
var mongoose = require('mongoose');
// auth packages
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;

//route variables to call upon
var routes = require('./routes/index');
var users = require('./routes/users');
var edit = require('./routes/edit');
var auth = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use flash to show messges if needed
app.use(flash());

app.use(session({
  secret: 'Assignment2 auth',
  resave: true,
  saveUninitialized: false
}));

// use the created account model
var Account = require('./models/account');
passport.use(Account.createStrategy());
passport.use(new LocalStrategy(Account.authenticate()));

// methods which will enable us to access session data
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// get the routes for our pages
app.use('/', routes);
app.use('/users', users);
app.use('/edit', edit);
app.use('/auth', auth);

//db connection
var db = mongoose.connnection;

db.on('error', console.error.bind(console, 'DB error:'));

db.once('open', function(callback){
  console.log('Connected to mlab');
});

// read db connection from config/db.js
var configDb = require('./config/db.js');
mongoose.connect(configDb.url);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
