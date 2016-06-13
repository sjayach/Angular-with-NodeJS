angular.module('search.controller', ['firebase', 'ui.bootstrap', 'ngCookies'])
	.directive('searchPreview', function() {
		return {
			restrict : 'EA',
			templateUrl: '../views/searchResults.html'
		}
	}).directive('templateUrl', function()  {
  		return {
    		restrict : 'EA',
    		replace: false,    	
  		}
	})/*.filter('unique', function() {
    	return function(input, key) {
        	var unique = {};
        	var uniqueList = [];
        	for(var i = 0; i < input.length; i++){
            	if(typeof unique[input[i][key]] == "undefined"){
                	unique[input[i][key]] = "";
                	uniqueList.push(input[i]);
            	}
        	}
        	return uniqueList;
    	};
	})*/
	.controller('SearchController',function ($scope, $cookies,  $routeParams, searchResource) {

		if ($routeParams.his) {
			$scope.searchText=$routeParams.his;
			searchResource.query({
				
				search: $routeParams.his,
			}, function (response) {
				$scope.shows = response;

			});
		}		
		var browserID =  $cookies['sample'];
		if (!browserID) {
			var number = Math.random() // 0.9394456857981651
			number.toString(36); // '0.xtis06h6'
			browserID= number.toString(36).substr(2, 9); // 'xtis06h6'
			$cookies.sample = browserID;

		}
		var ref = new Firebase("https://extracredit.firebaseio.com/" +browserID);
		var queue1=[];
		
		ref.on("value", function(snapshot) {
				if(snapshot.val()) {
  					queue1 = snapshot.val();
  					$scope.queue = queue1;
  				}
			}, function (errorObject) {
  				console.log("The read failed: " + errorObject.code);
		});
		$scope.search = function () {
			ref = new Firebase("https://extracredit.firebaseio.com/");
			queue1.push($scope.searchText);
			var hopperRef = ref.child(browserID);
			hopperRef.set(queue1);
			
			searchResource.query({
				
				search: $scope.searchText,
			}, function (response) {
				$scope.shows = response;

			});

		};

		// TODO Implement getTrivia and getDate

});