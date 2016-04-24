'use strict';
let http = require('http'),
	express = require('express'),
	app = new express(),
	bodyParser = require('body-parser'),
	config = require('./config/conf'),
	index = require('./routers/index');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
})); // for parsing application/x-www-form-urlencoded
app.set('views', __dirname + '/views'); //public views folder set
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade'); //render page engine set
app.use('/', index); //route set

// 404 error handle
app.use(function(req, res, next) {
	console.error('can not found page:', req.url);
	res.redirect(301, '/error');
});

var port = parseInt(process.argv[2] || config.port);
var server = http.createServer(app);
server.listen(port);

/*
server.on('connection', (req) => {
	console.log('server connectioned....');
});

server.on('close', (req) => {
	console.log('server closed....');
});
*/