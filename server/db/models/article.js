var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  Sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sport'
    //add required
  }
});


mongoose.model('Article', schema);
