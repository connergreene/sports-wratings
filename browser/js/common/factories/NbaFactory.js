app.factory('NbaFactory', function($http) {

  return {
    getStats: function(){
    	console.log("whyyy")
    	return $http.get("https://www.kimonolabs.com/api/5hcro30w?apikey=GgaFrecw5mDSCzN4hHheJUMFVzescaSS")
    		.then(res => res.data)
        	.then(null, err => console.error(err));
	},

	getPlayerObj: function(playerName){
    	return $http.get("https://www.kimonolabs.com/api/5hcro30w?apikey=GgaFrecw5mDSCzN4hHheJUMFVzescaSS")
    		.then(res => res.data)
    		.then(function(res){
    			var arr = res.results.collection1;
    			for(var i = 0; i < arr.length; i++){
    				var player = arr[i];
    				if(playerName.toLowerCase() === player.player.text.toLowerCase()){
    					return player;
    				}
    			}
    			return "Player not found";
    			
    		})
        	.then(null, err => console.error(err));
	},

    getPlayerList: function(){
        return $http.get("https://www.kimonolabs.com/api/5hcro30w?apikey=GgaFrecw5mDSCzN4hHheJUMFVzescaSS")
            .then(res => res.data)
            .then(function(res){
                var arr = res.results.collection1;
                var arrNames = [];
                for(var i = 0; i < arr.length; i++){
                    var player = arr[i];
                    arrNames.push(player.player.text);
                }
                return arrNames;
                
            })
            .then(null, err => console.error(err));
    }
	
	}

})