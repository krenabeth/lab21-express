var app = angular.module("lyricsModule", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'lyrics',
		controller: 'formCtrl'	
	})

	.otherwise({ redirectTo: '/'})
});