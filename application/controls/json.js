'use strict';
var cars = {};
cars.getCarsByQuery = (req, res) => {
	let data = {};
	res.jsonp(data);
};

module.exports = cars;