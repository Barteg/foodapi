var express = require('express')

var app = express()
app.use(require('./controllers'))

var port = process.env.PORT || 3000
var server = app.listen(3000, function () {
  console.log('Server successfully started on port %d', server.address().port)
})