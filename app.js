var lyrics = require('./lyrics');

var express = require('express');
var app = express();
// var http = require('http');
// var newLyric = new lyrics();
// var new Lyric = new lyrics.Lyrics();

// respond with Hello World
app.get('/', function (request, response) {
	var selection = Math.floor(Math.random()*lyrics.length);
	response.send(lyrics[selection]);
});

// accept POST request on the homepage
// app.post('/', function (req, res) {
// 	res.send('Got a POST request');
// });

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
// selecting a random quote from the collection

// 	http.createServer(function(request, response){
// 	// var selection = Math.floor(Math.random()*lyrics.length);
// 	// var selection = lyrics.random();


// 	response.writeHead(200, {'Content-type':'text/plain'});
// 	response.write(lyrics);
// 	response.end();
// }).listen(8888);

// 	console.log(lyrics);
