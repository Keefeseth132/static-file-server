var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

fs.readFile('data.txt', function(err, data){
	app.get('/', function(req, res){
		res.header('Content-Type', 'text/plain');
		res.send(data);
	})
});

// app.get('/', function(req, res) {
// 	res.header('Content-Type', 'text/plain');
// 	res.send(fileContents);
// });

var server = app.listen(3613, function() {
	console.log('Express server listening on port ' + server.address().port);
});
