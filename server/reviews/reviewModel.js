var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var reviewSchema = new mongoose.Schema({
  author : String,
  title : {type: String, required: true},
  score : {type: Number, required: true},
  votes : Number,
  text : {type: String, required: true}
});

module.exports = mongoose.model('Review', reviewSchema);