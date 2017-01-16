var Review = require('./reviewModel');

module.exports = {
  getAllReviews: function(req, res, next) {
    Review.find().then(function(reviews) {
      res.json(reviews);
    })
  },

  submitReview: function(req, res, next) {
    Review.create(req.body, function(err, obj) {
      if (err) console.error(err);
    });
  }
}