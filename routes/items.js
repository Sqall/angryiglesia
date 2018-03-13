var express = require('express');
var router = express.Router();

var Items = require('../models/item');

router.get('/getItems', function(req, res, next) {
  Items.getItems(function(err,items){
    if (!err){
      res.send(items);  
    }
    else{
      res.send(err);
    }    
  });
});

router.get('/getItem/:id',function(req,res,next){
  Items.getItembyId(req.params.id,function(err,item){
    if (!err){
      res.send(item);
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
