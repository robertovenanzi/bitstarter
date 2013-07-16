var express = require('express');
var fs = require('fs');

// var homepage = fs.readFileSync('./index.html', 'utf8');
var buffer = fs.readFileSync('./index.html');
  
// console.log("stringa homepage = " + homepage);
console.log("stringa homepage = " + buffer.toString('utf8'));

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  // response.send('Hello World!');
  // response.send(homepage);
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
