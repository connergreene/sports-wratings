var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: [{
 		type: String,
 	}],
	sport: { type: [mongoose.Schema.Types.ObjectId], ref: 'Sport' }
})


mongoose.model('Players', schema);