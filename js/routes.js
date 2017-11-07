//routes
App.config(function($routeProvider){
	
	$routeProvider
	.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/table',{
		templateUrl: 'pages/table.html',
		controller: 'homeController'
	})
});