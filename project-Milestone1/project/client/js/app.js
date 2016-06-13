
angular.module('app', 
	['ngRoute', 'ngResource', 'search.controller', 'search.service'])
	.filter('trustHTML', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	})
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'SearchController'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);