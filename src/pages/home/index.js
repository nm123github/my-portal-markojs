
var marko = require('marko')
var fetch = require('node-fetch');

var templates = {
    desktop: require('./desktop.marko'),
    mobile: require('./mobile.marko')
};

// What does marko.load do? Do we need it?
// var markoTemplate = marko.load(template);

module.exports = function(req, res) {

	// check if desktop or mobile!
	var template = templates.desktop;

	fetch('http://localhost:3000/api/layout').then(function(res) {
        return res.json();

    }).then(function(json) {
    	console.log();

        res.setHeader('Content-Type', 'text/html; charset=utf-8');    
		template.render({
			name: "Neville",
			json: json
		}, res);

    }).catch(function(err) {
    	res.status(err.statusCode).end();

    });

	
};