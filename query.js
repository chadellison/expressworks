var express = require('express')
var app = express()

app.get('/search', function(req, response) {
  var query = req.query
  response.send(query)
})

app.listen(process.argv[2] || 3000)
