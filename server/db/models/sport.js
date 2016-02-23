var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: [{
 		type: String
 	}],
	articles: { type: [mongoose.Schema.Types.ObjectId], ref: 'Article' },
	players: [{
		type: String
	}]
})


mongoose.model('Sport', schema);