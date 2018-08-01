var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://angrydante:angrydan@ds125048.mlab.com:25048/angryiglesia');

var RopaSchema = mongoose.Schema({
	nombre:{
		type:String,
	},
	talle:{
		type:String,
		index:true
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


var Ropa = module.exports = mongoose.model('Ropa',RopaSchema);

module.exports.getHome = function(callback){
	Ropa.find({},function(err,items){
		if(err){
			return callback(err);
		}
		return callback(null,items);
	});
};

module.exports.getRopas = function(callback){
	Ropa.find({},function(err,items){
		if(err){
			return callback(err);
		}
		return callback(null,items);
	});
};

module.exports.getRopabyId = function(id,callback){
	Ropa.find({'_id':id},function(err,ropa){
		if(err){
			return callback(err);
		}
		return callback(null,ropa);
	});
};

module.exports.newRopa = function(name,tall,cant,smax,smin,ssec,pllevar,callback){

	var query = new Ropa({
		nombre:name,
		talle:tall,
		cantidad:cant,
		stockmax:smax,
		stockmin:smin,
		stocksec:ssec,
		parallevar:pllevar
	});
	
	query.save(function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Ropa guardada correctamente');
	});
};

module.exports.deleteRopa = function(id,callback){
	Ropa.findOneAndRemove({'_id':id},function(err){
		return callback("Ropa borrada con exito");
	});
};

module.exports.editRopa = function(id,name,smax,smin,ssec,callback){
	Ropa.findOneAndUpdate({'_id':id},{nombre: name, stockmax: smax, stockmin:smin, stocksec:ssec},function(err){
		return callback("Ropa modificada con exito");
	});
};


