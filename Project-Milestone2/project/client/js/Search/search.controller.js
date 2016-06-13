angular.module('search.controller', [])
	.directive('searchPreview', function() {
		return {
			restrict : 'EA',
			templateUrl: '../views/searchResults.html'
		}
	})
	.controller('SearchController', function ($scope, searchResource) {

		$scope.search = function () {
			searchResource.query({
				
				search: $scope.searchText,
			}, function (response) {
				$scope.shows = response;
			});	
		};

		// TODO Implement getTrivia and getDate

});