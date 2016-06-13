
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
					templateUrl: 'client/views/search.html',
					controller: 'SearchController'
				})
				/*.when('/show/:id',{
					
                    templateUrl: 'views/show.html',
                    controller: 'ShowController',
                    resolve: {
                        show: function($route, ShowService){
                        	console.log("inside " + $route.current.params.id);
                            return ShowService.get({id: $route.current.params.id})
                        }
                    }
                })
                .when('/history', {
                	templateUrl:'views/searchhistory.html',
                	controller: 'HistoryController'
                })*/
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);