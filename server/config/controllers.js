var Squares = require('./models');

module.exports = {
  getImage: function(req, res, next) {
    Squares.find().then(function(squares) {
      res.json(squares);
    })
  },

  submitImage: function(req, res, next) {
    Squares.create(req.body, function(err, obj) {
      if (err) console.error(err);
    });
  },

  addGuess: function(req, res, next) {
    Squares.update(req.body, function(err, obj) {
      if (err) console.error(err);
    });
  }
}