
var marko = require('marko')
var fetch = require('node-fetch');

var templates = {
    desktop: require('./desktop.marko'),
    mobile: require('./mobile.marko')
};

// What does marko.load do? Do we need it?
// var markoTemplate = marko.load(template);

module.exports = function(req, res) {

	// render desktop or mobile!
    var template = templates.mobile
    if ( req.device.type === 'desktop' ) {
    	template = templates.desktop;
    }

	fetch('http://localhost:3000/api/layout').then(function(res) {
        return res.json();

    }).then(function(json) {
    	console.log(json);
        
        res.setHeader('Content-Type', 'text/html; charset=utf-8');    
		template.render({
			name: "Neville",
            lassoFlags: [ req.device.type ]
		}, res);

    }).catch(function(err) {
    	res.status(err.statusCode).end();

    });

	
};