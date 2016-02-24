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



app.controller('nbaCtrl', function($scope, player, playerList){
        $scope.article = {};
        $scope.playerList = playerList;
        $scope.statList = ["points", "rebounds", "assists", "steals", "blocks"];
        $scope.people = [
    { label: 'Joe'},
    { label: 'Mike'},
    { label: 'Diane'}
]


});
