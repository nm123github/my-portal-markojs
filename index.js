'use strict';

const app = require('./src/app')()
const lasso = require('lasso').configure("lasso.json");	// build source!

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
