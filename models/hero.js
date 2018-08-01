var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var HeroSchema = mongoose.Schema({
	id:{
		type:Number,
		index:true
	},
	name:{
		type:String,
	},
	location:{
		type:String
	},
	needs:[String]
});

var Hero = module.exports = mongoose.model('Hero',HeroSchema);

module.exports.getHeroes = function(callback){
	Hero.find({}).toArray(function(err,items){
		if(err){
			//return callback(err);
			handleError(res, err.message, "Failed to get Heroes");
		}else{
			//return callback(null,items);
			res.status(200).json(items);
		}
		
	});
};

db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });

module.exports.getHerobyId = function(id,callback){
	Hero.find({'_id':id},function(err,item){
		if(err){
			return callback(err);
		}
		return callback(null,item);
	});
};

module.exports.updateHero = function(id,callback){
	Propiedad.update({'_id':id},function(err){
		if(err){
			return callback(err);
		}
		else{
			return callback(null,'sucess');
		}
	});
}

module.exports.newHero = function(id,name,location,need){

	var query = new Hero({
		id:id,
		name:name,
		needs:need
	});
	
	query.save(function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Hero added');
	});
};

module.exports.deleteHero = function(id,callback){
	Hero.findOneAndRemove({'_id':id},function(err){
		if(err){
			return callback(err);
		}
		return callback(null,'Sucess on Remove');
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
