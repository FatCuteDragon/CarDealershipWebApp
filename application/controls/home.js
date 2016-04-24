'use strict';
var cars = {};

cars.home = (req, res) => {
	let data = {
		title: 'home',
		message: 'home page'
	};
	res.render('index', data);
};


module.exports = cars;