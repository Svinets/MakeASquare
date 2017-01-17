var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
  reviewSchema: new mongoose.Schema({
    author: String,
    title: {type: String, required: true},
    score: {type: Number, required: true},
    votes: Number,
    text: {type: String, required: true}
  }),

  canvasSchema: new mongoose.Schema({
    URI: String
  })
}