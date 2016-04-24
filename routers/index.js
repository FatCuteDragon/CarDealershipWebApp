'use strict';
var express = require('express'),
	router = express.Router(),
	ctrl_cars = require('../application/controls/home');

router.get(['/', '/home'], ctrl_cars.home);

router.get('/home/cars/:id', (req, res, next) => {
	console.log(req.params);
	res.render('error');
});

router.get('/error', (req, res, next) => {
	res.render('error');
});

module.exports = router;