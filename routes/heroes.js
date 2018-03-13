var express = require('express');
var router = express.Router();

var Hero = require('../models/hero');

router.get('/getHeroes', function(req, res, next) {
  Hero.getHeroes(function(err,heroes){
    if (!err){
      res.send(heroes);  
    }
    else{
      res.send(err);
    }    
  });
});

router.get('/getHero/:id',function(req,res,next){
  Hero.getHerobyId(req.params.id,function(err,hero){
    if (!err){
      res.send(hero);
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
