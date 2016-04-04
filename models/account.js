var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require();

// create the account schema
var Account = new schema({
  username: String;
  password: String
});

Account.plugin();

// Make the schema public to the rest of the app
module.exports = mongoose.model('Account',  Account);
