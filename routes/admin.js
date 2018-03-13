var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './public/imgpropiedades' });
const fs = require('fs');

var mongoose = require('mongoose');
//mongoose.connect('mongodb://hermangatti:gattipass@ds113668.mlab.com:13668/inmobiliariahermangatti');

var Grid = require('gridfs-stream');
var GridFS = Grid(mongoose.connection.db, mongoose.mongo);


var Ropas = require('../models/ropa');



/* GET home page. */
/*
router.get('/',ensureAuthenticated, function(req, res, next) {
	res.render('admin');
});

router.get('/nuevapropiedad',ensureAuthenticated,function(req,res,next){
	res.render('newprop');
});

router.get('/edit/propiedad/:id',ensureAuthenticated,function(req,res,next){
	Propiedades.getPropiedadbyId(req.params.id,function(err,item){
	    if(err){
	      res.render('propiedades',{'error':'Hubo un error, pruebe nuevamente en unos minutos'});
	    }
	    else{
	      res.render('editprop',{ item: item });
	    }
	});
});

router.post('/new/propiedad',ensureAuthenticated,upload.array('images',5),function(req,res,next){

	var direccion = req.body.direccion;
	var categoria = req.body.categoria;
	var subcategoria = req.body.subcategoria;
	var precio = req.body.precio;
	var descripcion = req.body.descripcion;
	var images = [];				 
	if (req.files){
		for (var i = 0, len = req.files.length; i < len; i++) {
		  images.push(req.files[i].filename);		  
		}
	}
	else{
		images.push("noimage.png");
	}
	/*if (req.files){
	    var writestream = GridFS.createWriteStream({
	        filename: req.files[0].filename
	    });
	    writestream.on('close', function (file) {
	      callback(null, file);
	    });
    }

	req.checkBody('direccion','Necesita una Dirección').notEmpty();
  	req.checkBody('categoria', 'Necesita una Categoria').notEmpty();
  	req.checkBody('precio', 'Necesita una Precio').notEmpty();

  	var errors = req.validationErrors();

  	if(errors){
  		res.render('newprop',{
  			"error":errors
  		})
  	} else{

      Propiedades.newPropiedad(direccion,categoria,subcategoria,precio,images,descripcion,function(err,status){
        if(err){
          res.render('propiedades',{'error':'Hubo un error, pruebe nuevamente en unos minutos'});
        }
        else{
          req.flash('success','Propiedad Agregada');
          res.location('/admin/nuevapropiedad');
          res.redirect('/admin/nuevapropiedad');
        }
      });
  	}
  });

router.post('/new/imagen/:prop',ensureAuthenticated,upload.array('images',1),function(req,res,next){
	var propiedad = req.params.prop;
	var images = req.files[0].filename;
	Propiedades.addImage(propiedad,images,function(err,status){
	  if(err){
	    req.flash('error', err);
	    res.redirect('/admin/edit/propiedad/'+propiedad);
	  }
	  else{
	    req.flash('success','Imagen agregada exitosamente');
		res.redirect('/admin/edit/propiedad/'+propiedad);
	  }
	});
});

router.post('/borrar/propiedad/:id',ensureAuthenticated,function(req,res,next){
	Propiedades.getPropiedadbyId(req.params.id,function(err,propiedad){
		if (err){
			res.render('admin',{'error':'Hubo un error, pruebe nuevamente'});
		}
		else{
			for (var i = propiedad.imagenes.length - 1; i >= 0; i--) {
				fs.stat('../public/imgpropiedades/'+propiedad.imagenes[i],function(err,stats){
					if (err) {
						res.redirect('/propiedades',{'error':'Imagen no encontrada'});
					}
					else{
						fs.unlink('../public/imgpropiedades/'+propiedad.imagenes[i]);
					}
				})				
			};
		}
	});
	Propiedades.deletePropiedad(req.params.id,function(err,status){
		if (err){
			res.render('propiedades',{'error': 'Hubo un error, pruebe nuevamente en unos minutos'});
		}
		else{
			req.flash('success','Propiedad Borrada');
			res.location('/propiedades');
			res.redirect('/propiedades');
		}
	});
});

router.post('/borrar/imagen/:prop/:id',ensureAuthenticated,function(req,res,next){
	fs.stat('./public/imgpropiedades/'+req.params.id,function(err,stats){
		if (err){
			req.flash('error','La imagen no se encuentra.');
			res.redirect('/admin/edit/propiedad/'+req.params.prop);
		}
		else{			
			fs.unlink('./public/imgpropiedades/'+req.params.id);
			Propiedades.deleteImage(req.params.prop,req.params.id,function(err){
				if(err){
					req.flash('error','Hubo un problema, intente nuevamente.');					
					res.redirect('/admin/edit/propiedad/'+req.params.prop);
				}
				else{
					req.flash('sucess','Imagen Borrada');
					res.redirect('/admin/edit/propiedad/'+req.params.prop);
				}
			});
		}
	});	
});

router.post('/edit/propiedad',ensureAuthenticated,upload.array('images',5),function(req,res,next){

	var id = req.body._id;
	var direccion = req.body.direccion;
	var categoria = req.body.categoria;
	var subcategoria = req.body.subcategoria;
	var precio = req.body.precio;
	var descripcion = req.body.descripcion;

	req.checkBody('direccion','Necesita una Dirección').notEmpty();
	req.checkBody('categoria', 'Necesita una Categoria').notEmpty();
  	req.checkBody('precio', 'Necesita una Precio').notEmpty();
	req.checkBody('subcategoria', 'Necesita una SubCategoria').notEmpty();  	

  	var errors = req.validationErrors();

  	if(errors){
  		res.render('editprop',{
  			"error":errors
  		})
  	} else{

      Propiedades.updatePropiedad(id,direccion,categoria,subcategoria,precio,descripcion,function(err,status){
        if(err){
          res.render('propiedades',{'error':'Hubo un error, pruebe nuevamente en unos minutos'});
        }
        else{
          req.flash('success','Propiedad Modificada');
          res.location('/admin');
          res.redirect('/admin');
        }
      });
  	}
});

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
};
*/
module.exports = router;
