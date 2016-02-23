app.config(function($stateProvider) {
  $stateProvider.state('Basketball', {
    url: '/sports/:name',
    templateUrl: 'js/article/article.html',
    controller: 'articleCtrl', 
    resolve: {
      article: function(ArticleFactory, $stateParams) {
        return ArticleFactory.getArticle($stateParams.articleId)
          .then(null, console.error.bind(console)); 
      }
    }
  })
})


app.controller('articleCtrl', function($scope, article) {
          $scope.article = article
}); 