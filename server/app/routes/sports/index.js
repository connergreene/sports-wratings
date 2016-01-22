var router = require('express').Router();
var Sport = require('mongoose').model('Sport');

router.get('/', function(req, res, next){
	Sport.find()
		.then(sports => res.json(sports))
		.then(null, next);
});

module.exports = router;