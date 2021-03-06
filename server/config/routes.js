var express = require('express');
var router = express.Router();
var controller = require('./controllers');

router.get('/squares', controller.getImage);
router.post('/make', controller.submitImage);
router.get('/square', controller.getGuesses);
router.put('/square', controller.addGuess);
router.put('/done', controller.solve);

module.exports = router;