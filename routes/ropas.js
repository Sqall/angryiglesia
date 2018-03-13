var express = require('express');
var router = express.Router();

var Ropas = require('../models/ropa');

router.get('/getRopas', function(req, res, next) {
  Ropas.getRopas(function(err,ropas){
    if (!err){
      res.send(ropas);  
    }
    else{
      res.send(err);
    }    
  });
});

router.get('/getRopa/:id',function(req,res,next){
  Ropas.getRopabyId(req.params.id,function(err,ropa){
    if (!err){
      res.send(ropa);
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
