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

router.post('/addItem/:id/:name/:size/:quant/:maxst')
  Items.newItem(req.params.id,req.parms.name,req.params.size,req.params.quant,req.params.maxst,function(err,item){
    if (!err){
      res.send(item);
    }
    else{
      res.send(err);
    }
  });
};

module.exports = router;
