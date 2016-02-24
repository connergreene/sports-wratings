app.config(function ($stateProvider) {
    $stateProvider.state('add-article', {
        url: '/add-article',
        templateUrl: 'js/add-article/add-article.html',
    	  controller: 'nbaCtrl',
        resolve: {
      			player: function(NbaFactory, $stateParams){
      				return NbaFactory.getPlayerObj("lebron james");
      			},
                playerList: function(NbaFactory, $stateParams){
                    return NbaFactory.getPlayerList();
                }
        }
    });
});



app.controller('nbaCtrl', function($scope, player, playerList, $q){
        $scope.article = {};
        $scope.statList = ["points", "rebounds", "assists", "steals", "blocks"];
        $scope.setup = function(element) {
          element.attr('mentio', 'mentio');
          element.attr('mentio-typed-term', 'typedTerm');
          element.attr('mentio-require-leading-space', 'true');
          element.attr('mentio-id', "'htmlContent'");
        };

        $scope.searchPeople = function(term) {
            $scope.players = playerList;
            return playerList;
        };

        $scope.getPeopleText = function(item) {
          return '<strong>' + item.label + '</strong>';
        };

        $scope.getPeopleTextRaw = function(item) {
          return '[@' + item.name + '~' + item.id + ']';
        };



});
