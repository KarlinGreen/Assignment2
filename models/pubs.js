//mongoose link
var mongoose = require('mongoose');

// pub schema (how the data will be puut intoo the table)
var pubSchema = new mongoose.Schema({
  name:{
    type: String,
    default: '',
    trim: true,
    rquired: 'Whats the pubs name?'
  },
  phone:{
    type: Number,
    min: 10,
    max: 14,
    required: 'Whats their phone number'
  },
  address:{
    type: String,
    default: '',
    required: 'Where is it located?'
  },
  owner:{
    type: String,
    default: '',
    required: 'Who is the owner?'
  },
  email:{
    type: String,
    default: '',
    trim: true,
    required: 'What is the pubs contact email?'
  }
});

//make it public
module.exports = mongoose.model('Pub', pubSchema);
