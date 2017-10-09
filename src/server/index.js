'use strict';

const express = require('express')
const mockApiMiddleware = require("./api/mock-api-middleware");


function createApp() {
	
	// needed to require template.marko files!
	require('marko/node-require').install();

	const app = express();
	app.use(mockApiMiddleware);
	app.use(express.static('public'))
	// app.get('/', function (req, res) {
	//   res.send('Hello World!')
	// })
	app.get('/', require('../client/pages/home/'));
	return app;
}

module.exports = createApp
