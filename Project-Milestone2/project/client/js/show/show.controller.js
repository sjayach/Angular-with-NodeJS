angular.module('show.controller',[])
    .controller('ShowController', function($scope, show){
        $scope.show = show;
        $scope.getImage = function(link) {
        	if(!link)
        		return "../images/default.gif"
        	return link;
        };
    });