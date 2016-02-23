var router = require('express').Router();
var Sport = require('mongoose').model('Sport');


router.param('id', function (req, res, next, id) {
    Sport.findById(id).populate('article.sport')
    .then(sport => {
        if (!sport) {
            var err = new Error('Not found');
            err.status = 404;
            next(err);
        } else {
            req.sport = sport;
            next();
        }
    })
    .then(null, next);
});


router.get('/', function(req, res, next){
	Sport.find()
		.then(sports => res.json(sports))
		.then(null, next);
});

router.get('/:id', function (req, res, next) {
    res.status(200).send(req.sport);
});



module.exports = router;