var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://angrydante:angrydan@ds125048.mlab.com:25048/angryiglesia');

var ItemSchema = mongoose.Schema({
	categoria:{
		type:String,
		index:true
	},
	direccion:{
		type:String
	},
	descripcion:{
		type:String
	},
	imagenes: []
});


var Item = module.exports = mongoose.model('Item',ItemSchema);


module.exports.getHome = function(callback){
	Item.find({},function(err,items){
		if(err){
			return callback(err);
		}
		return callback(null,items);
	});
};

module.exports.newItem = function(cat,address,descrip,callback){

	var query = new Item({
		categoria:cat,
		direccion:address,
		descripcion:descrip
	});
	
	query.save(function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Item guardado correctamente');
	});
};


/*
module.exports.getPropiedades = function(text,callback){
	Propiedad.find({'categoria':text},function(err,propiedadades){
		if(err){
			return callback(err);
		}
		return callback(null,propiedadades);
	});
};

//Subcategorias difieren en todos
module.exports.getPropiedadesbyCategoria = function(subcategoria,callback){
	Propiedad.find({'subcategoria':subcategoria},function(err,propiedadades){
		if(err){
			return callback(err);
		}
		return callback(null,propiedadades);
	});
};

module.exports.getPropiedadbyId = function(id,callback){
	Propiedad.find({'_id':id},function(err,propiedad){
		if(err){
			return callback(err);
		}
		return callback(null,propiedad[0]);
	});
};


module.exports.deletePropiedad = function(id,callback){
	Propiedad.findOneAndRemove({'_id':id},function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'sucess');
	});
};

module.exports.deleteImage = function(id,imageid,callback){
	Propiedad.findOneAndUpdate({'_id':id},{$pull: {imagenes: imageid}},function(err){
		if(err){
			return callback(err);
		}
		else{
			return callback(null,'sucess');
		}
	});
};

module.exports.addImage = function(id,imageid,callback){
	Propiedad.update({'_id':id},{$push:{imagenes:imageid}},function(err){
		if(err){
			return callback(err);
		}
		else{
			return callback(null,'sucess');
		}
	});
};

module.exports.updatePropiedad = function(id,address,cat,subcat,price,descrip,callback){
	Propiedad.findOne({'_id':id},function(err,doc){
		if(err){
			return callback(err);
		}
		else{
			doc.direccion = address;
			doc.precio = price;
			doc.categoria = cat;
			doc.subcategoria = subcat;
			doc.descripcion = descrip;
			doc.save();
			return callback(null,'success');
		}
	});
};*/
