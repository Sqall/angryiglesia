var express = require('express');
var router = express.Router();

var Ropas = require('../models/ropa');
/*
//NodeMailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://nodemailhelper%40gmail.com:nodeaccount@smtp.gmail.com');
*/


router.get('/', function(req, res, next) {
	Ropas.getHome(function(err,home){
		if (!err){
			res.send(home);	
		}
		else{
			res.send('error');
		}
		
	});
});

module.exports = router;
