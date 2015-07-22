var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:fileName', function(req, res){
	fs.readFile("./public/" + req .params.fileName, function(err, data){
		res.header('Content-Type', 'text/plain');
		res.send(data);
	})
});

// app.get('/', function(req, res){
// 	fs.readFile('data.txt', function(err, data){
// 		res.header('Content-Type', 'text/plain');
// 		res.send(data);
// 	})
// });

// app.get('/', function(req, res) {
// 	res.header('Content-Type', 'text/plain');
// 	res.send(fileContents);
// });

var server = app.listen(3613, function() {
	console.log('Express server listening on port ' + server.address().port);
});
