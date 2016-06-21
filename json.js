var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(request, response) {
  var filename = process.argv[3]
  fs.readFile(filename, function(error, data) {
    if (error) return response.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (error) {
      response.sendStatus(500)
    }
    response.json(books)
  })
})

app.listen(process.argv[2])
