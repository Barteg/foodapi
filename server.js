var express = require('express')

var app = express()
app.use(require('./controllers'))

var port = process.env.PORT || 5000
var server = app.listen(5000, function () {
  console.log('Server successfully started on port %d', server.address().port)
})