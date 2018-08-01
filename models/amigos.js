var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var AmigosSchema = mongoose.Schema({
	nombre:{
		type:String,
		index:true
	},
	ubicacion:{
		type:String,
	},
	necesidades:[{
		type:String,
	}],
	historial:[{
		fecha:Date,
		descripcion:String
	}]
});

var Amigos = module.exports = mongoose.model('Amigos',AmigosSchema);

module.exports.getAmigos = function(callback){
	Amigos.find({},function(err,amigos){
		if (err)
			return callback(err);
		else
			return callback(null,amigos);
	});
};

module.exports.getAmigoById = function(id,callback){
	Amigos.findById({"_id":id},function(err,amigo){
		if (err)
			return callback(err);
		else
			return callback(null,amigo);
	});
};

module.exports.getHistorial = function(username,callback){
	var query = {username: username};
	User.findOne(query,callback);
};

module.exports.comparePassword = function(candidatePassword,hash,callback){
	bcrypt.compare(candidatePassword,hash,function(err,isMatch){
		callback(null,isMatch);
	});
};

module.exports.createUser = function(newUser,callback){
	bcrypt.genSalt(10,function(err,salt){
		bcrypt.hash(newUser.password,salt,function(err,hash){
			newUser.password = hash;
			newUser.save(callback);			
		});
	});
};