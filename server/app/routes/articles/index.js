'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');


router.param('id', function (req, res, next, id) {
    Article.findById(id).populate('user.articles')
    .then(article => {
        if (!article) {
            var err = new Error('Not found');
            err.status = 404;
            next(err);
        } else {
            req.article = article;
            next();
        }
    })
    .then(null, next);
});

router.get('/', function(req, res, next) {

  var query = {};

  //check for req.query
  if (req.query) {
    query = req.query;
  }

  Article.find(query).exec()
    .then(function(articles) {
      res.status(200).send(articles);
    })
    .then(null, next);

});

router.get('/:id', function (req, res, next) {
    res.status(200).send(req.article);
});

router.post('/', function(req, res, next) {
  var newArticle = new Article(req.body);
  newArticle.save()
    .then(function(savedArticle) {
      console.log('saved!')
      res.status(200).send(savedArticle);
    })
    .then(null, function(err) {
      res.status(500).send(err);
    });

});

router.put('/:id', function(req, res, next) {
    Object.keys(req.body).forEach(function (key) {
        req.article[key] = req.body[key];
    });
    req.article.save()
        .then(article => res.json(article))
        .then(null, next); 
});

router.delete('/:id', function(req, res, next) {
  Article.remove({
      _id: req.params.id
    })
    .then(function(dream) {
      res.status(204).end();
    })
});

module.exports = router;