var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var reviewSchema = new mongoose.Schema({
  author: String,
  title: {type: String, required: true},
  score: {type: Number, required: true},
  votes: Number,
  text: {type: String, required: true}
});

var canvasSchema = new mongoose.Schema({
  URI: String
});

module.exports = {
  reviewModel: mongoose.model('Review', reviewSchema),
  canvasModel: mongoose.model('Canvas', canvasSchema)
}