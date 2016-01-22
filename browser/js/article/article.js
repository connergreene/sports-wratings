app.config(function($stateProvider) {
  $stateProvider.state('Article', {
    url: '/articles/:articleId',
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