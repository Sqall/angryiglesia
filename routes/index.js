var express = require('express');
var router = express.Router();
var multer = require('multer');

var Items = require('../models/item');
/*
//NodeMailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://nodemailhelper%40gmail.com:nodeaccount@smtp.gmail.com');
*/

/* GET home page. */
router.get('/', function(req, res, next) {
	Items.getHome(function(err,items){
		if (!err){
			res.send(items);	
		}
		else{
			res.send('error');
		}
		
	});
});
/*
router.get('/about',function(req,res,next){
	res.render('about');
});

router.get('/contacto',function(req,res,next){
	res.render('contacto');
});

router.get('/hg-admin',function(req,res,next){
	res.render('login');
});

router.post('/mailto',function(req,res,next){

	var mailOptions = {
		from: req.body.email,
	    to: 'hermangatti@hotmail.com',
	    subject: 'Consulta de '+req.body.email,
	    text: req.body.comment,
	    html: req.body.comment
	}

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    req.flash('success', 'Su correo electrónico se envío correctamente, nos contactaremos con usted lo más pronto posible.');
   		res.redirect('/about');
	});
});

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
}
*/
module.exports = router;
