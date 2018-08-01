var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var HistoricoSchema = mongoose.Schema({
	id:{
		type:Number,
		index:true
	},
	fecha:{
		type:Date
	},
	:{
		type:Number,
	}
});