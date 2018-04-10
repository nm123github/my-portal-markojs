'use strict';

const fs = require('fs');
const S = require('string');
const cheerio = require('cheerio')
const fetch = require('node-fetch');
const http = require("http");
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
	app.get('/', function(req, res) {
		if (req.query.spf === "navigate") {
			//var contents = fs.readFileSync('./src/api/mock-spf-response.json').toString();
			//var bodyHtml = /<body.*?>([\s\S]*)<\/body>/.exec(data)[1];
			//res.send(contents);
			
			http.get('http://localhost:3000/', httpres => {
				httpres.setEncoding("utf8");
				let body = "";
				httpres.on("data", data => {
				  body += data;
				});
				httpres.on("end", () => {
					const $ = cheerio.load(body)

					var content = $('#content').html();
					var title = $('title').html() + 'updated';
					var head = $('head').html() + ' <style>body { background-color: lightblue !important; }</style>';
					var footer = $('#footer').html() + '<script>alert(\'hi\')</script>';
					
					var spfRet = {
						title: title,
						body: {
							content: content,
						},
						head: head,
						foot: footer
					};
					var contents = fs.readFileSync('./src/api/mock-spf-response.json').toString();
					res.send(spfRet);
				});
			  });
		} else {
			var home = require('../../pages/home/');
			home(req, res);
		}
	});
	return app;
}

module.exports = createApp
