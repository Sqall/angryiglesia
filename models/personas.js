var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ComidaSchema = mongoose.Schema({
	Nombre:{
		type:String,
		index:true
	},
	cantidad:{
		type:String
	},
	descripcion:{
		type:String
	}
});


var Comida = module.exports = mongoose.model('Comida',ComidaSchema);

module.exports.getComidas = function(callback){
	Comida.find({},function(err,items){
		if(err){
			return callback(err);
		}
		return callback(null,items);
	});
};

module.exports.getComidabyId = function(id,callback){
	Comida.find({'_id':id},function(err,ropa){
		if(err){
			return callback(err);
		}
		return callback(null,ropa);
	});
};

module.exports.newComida = function(cat,cant,descrip,callback){

	var query = new Ropa({
		categoria:cat,
		cantidad:cant,
		descripcion:descrip
	});
	
	query.save(function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Comida agregada correctamente');
	});
};
