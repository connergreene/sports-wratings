var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true }, 
	articles: { type: [mongoose.Schema.Types.ObjectId], ref: 'Article' }
})


mongoose.model('Sport', schema);