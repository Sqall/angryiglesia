var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var ItemSchema = mongoose.Schema({
	id:{
		type: Number,
		index:true
	},
	name:{
		type: String,
	},
	size:{
		type: String
	},
	quantity:{
		type: String
	},
	maxStock:{
		type: Number
	}
});


var Item = module.exports = mongoose.model('Item',ItemSchema);

module.exports.getItems = function(callback){
	Item.find({},function(err,items){
		if(err){
			return callback(err);
		}
		return callback(null,items);
	});
};

module.exports.getItembyId = function(id,callback){
	Item.find({'_id':id},function(err,item){
		if(err){
			return callback(err);
		}
		return callback(null,item);
	});
};

module.exports.newItem = function(id,name,size,quan,stock){

	var query = new Item({
		id:id,
		name:name,
		size:size,
		quantity:quan,
		maxStock:stock
	});
	
	query.save(function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Item saved');
	});
};



/*
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
