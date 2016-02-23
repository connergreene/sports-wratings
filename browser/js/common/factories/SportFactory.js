app.factory('SportFactory', function($http) {

  return {
    getSport: function(sportId){
      return $http.get('/api/sports/' + sportId)
      .then(response => response.data)
      .then(null, console.error.bind(console));
    }
  }; 

})