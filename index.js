'use strict';

const app = require('./src/components/be/app')()
const lasso = require('lasso').configure("lasso.json");	// build source!

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
