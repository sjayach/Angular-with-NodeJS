angular.module('history.controller',['firebase','ngCookies'])
    .controller('HistoryController', function($scope, $cookies){
        var browserID =  $cookies['sample'];
        if (browserID) {
        	var ref = new Firebase("https://extracredit.firebaseio.com/" +browserID);
			var history1=[];
		
			ref.on("value", function(snapshot) {
				if(snapshot.val()) {
  					history1 = snapshot.val();
  					$scope.searchhis = history1;
  				}
				}, function (errorObject) {
  					console.log("The read failed: " + errorObject.code);
			});
        }

        });
