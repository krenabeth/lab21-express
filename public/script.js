// script.js is a file that might perform AJAX operations
var lyrics = '';
$.get('/api/lyrics', function(data) {
	lyrics = data;
	//console.log(lyrics);
});
// logic to display lyrics on the page