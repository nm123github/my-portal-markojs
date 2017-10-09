
var marko = require('marko')
var template = marko.load(require('./template.marko'));

module.exports = function(req, res) {
	res.setHeader('Content-Type', 'text/html; charset=utf-8');    
	template.render({
		name:"Neville"
	}, res);
};