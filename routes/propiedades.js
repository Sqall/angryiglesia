var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: './uploads'});

var Propiedades = require('../models/item');

router.get('/', function(req, res, next) {
  Propiedades.getPropiedades('Propiedad',function(err,propiedades){
  	if (err){
  		res.render('propiedades',{ error:'Hubo un error, pruebe nuevamente en unos minutos' });
  	}
  	else{
  		res.render('propiedades', { propiedades: propiedades , propiedad:true});
  	}
  });
});
/*

router.get('/mostrar/:id',function(req,res,next){
  Propiedades.getPropiedadbyId(req.params.id,function(err,item){
    if(err){
      res.render('propiedades',{'error':'Hubo un error, pruebe nuevamente en unos minutos'});
    }
    else{
      res.render('propiedad',{ item: item });
    }
  });
});

router.get('/buscar/:categoria/:subcategoria',function(req,res,next){
  Propiedades.getPropiedadesbyCategoria(req.params.subcategoria,function(err,propiedades){
    console.log(propiedades);
    if(err){
      res.render('propiedades',{'error':'Hubo un error, pruebe nuevamente en unos minutos'});
    }
    else{
      res.render('propiedades',{propiedades:propiedades, cate:req.params.categoria, sub:req.params.subcategoria});
    }
  });
});

router.get('/Campo',function(req,res,next){
  Propiedades.getPropiedades('Campo',function(err,propiedades){
    if (err){
      res.render('propiedades',{ error:'Hubo un error, pruebe nuevamente en unos minutos' });
    }
    else{
      res.render('propiedades', { propiedades: propiedades , campo:true});
    }
  });
});

router.get('/Alquiler',function(req,res,next){
  Propiedades.getPropiedades('Alquiler',function(err,propiedades){
    if (err){
      res.render('propiedades',{ error:'Hubo un error, pruebe nuevamente en unos minutos' });
    }
    else{
      res.render('propiedades', { propiedades: propiedades , alquiler:true});
    }
  });
});

router.get('/Lote',function(req,res,next){
  Propiedades.getPropiedades('Lote',function(err,propiedades){
    if (err){
      res.render('propiedades',{ error:'Hubo un error, pruebe nuevamente en unos minutos' });
    }
    else{
      res.render('propiedades', { propiedades: propiedades , lote:true});
    }
  });
});

router.get('/Arrendamiento',function(req,res,next){
  Propiedades.getPropiedades('Arrendamiento',function(err,propiedades){
    if (err){
      res.render('propiedades',{ error:'Hubo un error, pruebe nuevamente en unos minutos' });
    }
    else{
      res.render('propiedades', { propiedades: propiedades , arrendamiento:true});
    }
  });
});

router.get('/Propiedad',function(req,res,next){
  Propiedades.getPropiedades('Propiedad',function(err,propiedades){
    if (err){
      res.render('propiedades',{ error:'Hubo un error, pruebe nuevamente en unos minutos' });
    }
    else{
      res.render('propiedades', { propiedades: propiedades , propiedad:true});
    }
  });
});

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
};

*/
module.exports = router;
