angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/mini', {
			templateUrl: 'views/mini.html',
			controller: 'MiniController'
		})

		.when('/maxi', {
			templateUrl: 'views/maxi.html',
			controller: 'MaxiController'	
		});

	$locationProvider.html5Mode(true);

}]);