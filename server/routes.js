var express = require('express');
var router = express.Router();
var reviewController = require('./reviews/reviewController')

//add grunt or gulp files maybe

router.get('/reviews', reviewController.getAllReviews);
router.post('/reviews', reviewController.submitReview);

module.exports = router;