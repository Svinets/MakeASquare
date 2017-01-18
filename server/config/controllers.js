var Squares = require('./models');

module.exports = {
  getImage: function(req, res, next) {
    Squares.find().then(function(squares) {
      res.json(squares);
    });
  },

  submitImage: function(req, res, next) {
    Squares.create(req.body, function(err, obj) {
      if (err) console.error(err);
    });
  },

  getGuesses: function(req, res, next) {
    Squares.findById(req.query, function(err, guesses) {
      if (err) console.error(err);
      res.json(guesses);
    });
  },

  addGuess: function(req, res, next) {
    Squares.findByIdAndUpdate(
      {_id: req.body._id },
      { $push: { guesses: req.body.guess } },
      function(err, guess) {
        if (err) console.error(err);
      }
    );
  },

  solve: function(req, res, next) {
    Squares.findByIdAndUpdate(
      {_id: req.body._id },
      { $set: { solved: true } },
      function(err, guess) {
        if (err) console.error(err);
      }
    );
  },
}