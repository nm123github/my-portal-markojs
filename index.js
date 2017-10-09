'use strict';

const app = require('./src/server')()

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
