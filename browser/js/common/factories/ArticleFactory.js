app.factory('ArticleFactory', function($http) {

  return {
    getArticles: function() {
      return $http.get('/api/articles')
        .then(response => response.data)
    }, 
    getArticle: function(articleId){
      return $http.get('/api/articles/' + articleId)
      .then(response => response.data)
      .then(null, console.error.bind(console));
    },
    addArticle: function(article) {
      return $http.post('/api/articles', article)
        .then(response => response.data); 
    } 
  }; 

})