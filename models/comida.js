var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ComidaSchema = mongoose.Schema({
	nombre:{
		type:String,
		index:true
	},
	peso:{
		type:Number,
	},
	precio:{
		type:Number,
	},
	cantidad:{
		type:Number,
	},	
	stockmax:{
		type:Number,
	},
	stockmin:{
		type:Number,
	},
	stocksec:{
		type:Number,
	},
	parallevar:{
		type:Number,
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

module.exports.newComida = function(name,weight,price,cant,smax,smin,ssec,pllev,callback){

	var query = new Comida({
		nombre:name,
		peso:weight,		
		precio:price,
		cantidad:cant,
		stockmax:smax,
		stockmin:smin,
		stocksec:ssec,
		parallevar:pllev
	});

	query.save(function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Comida agregada correctamente');
	});
};

module.exports.deleteComida = function(id,callback){
	Comida.remove({'_id':id},function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Comida borrada correctamente');
	});
};

module.exports.editComida = function(id,weight,price,cant,smax,smin,ssec,pllev,callback){
	Comida.findOneAndUpdate({'_id':id},{peso:weight,precio:price,cantidad:cant,stockmax:smax,stockmin,smin,stocksec:ssec,parallevar:pllev},function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Comida editada correctamente');
	});
};
