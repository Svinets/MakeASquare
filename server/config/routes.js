var express = require('express');
var router = express.Router();
var controller = require('./controllers');

//add grunt or gulp files maybe

router.get('/squares', controller.getImage);
router.post('/make', controller.submitImage);
router.put('/square', controller.addGuess);

module.exports = router;