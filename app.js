var lyrics = require('./lyrics');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// var http = require('http');

// // respond with Hello World
app.get('/', function (request, response) {
	var selection = Math.floor(Math.random()*lyrics.length);
	response.send(lyrics[selection]);
});

app.get('/api/lyrics', function (req, res) {
	var selection = Math.floor(Math.random()*lyrics.length);
	res.send(lyrics[selection]);

	//res.send('Hello World');
});
// accept POST 
// app.post('/lyrics', function (req, res) {
// 	res.send('Got a POST request');
// });

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
// 	response.writeHead(200, {'Content-type':'text/plain'});
// 	response.write(lyrics);
// 	response.end();
// }).listen(8888);