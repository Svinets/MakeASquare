var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var squareSchema = new mongoose.Schema({
  artist: String, //the name of the artist
  URI: String, //the dataURI of the canvas
  subject: String, //the subject of the image
  solved: Boolean, //whether the square has been guessed correctly
  guesses: Array //an array containing all guesses directed towards the image
});

module.exports = mongoose.model('Square', squareSchema);