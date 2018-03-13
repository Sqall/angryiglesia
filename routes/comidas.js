var express = require('express');
var router = express.Router();

var Comidas = require('../models/comida');


router.get('/getComidas', function(req, res, next) {
  Comidas.getComidas(function(err,comidas){
    if (!err){
      res.send(comidas);  
    }
    else{
      res.send(err);
    }    
  });
});

router.get('/getComida/:id',function(req,res,next){
  Comidas.getComidabyId(req.params.id,function(err,comida){
    if (!err){
      res.send(comida);
    }
    else{
      res.send(err);
    }
  });
});

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
};

module.exports = router;
