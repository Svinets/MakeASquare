var express = require('express');
var router = express.Router();
var controller = require('./controllers');

//add grunt or gulp files maybe

router.get('/squares', controller.getImage);
router.post('/squares', controller.submitImage);
//router.post('/square', )

module.exports = router;