'use strict';

const express = require('express')
const mockApiMiddleware = require("../../api/mock-api-middleware");
var device = require('express-device');

function createApp() {
	
	// needed to require template.marko files!
	require('marko/node-require').install();

	const app = express();
	app.use(mockApiMiddleware);
	app.use(device.capture());
	// app.use(express.static('public'))
	app.use(express.static('build/static'))
	// app.get('/', function (req, res) {
	//   res.send('Hello World!')
	// })
	app.get('/', require('../../pages/home/'));
	return app;
}

module.exports = createApp
