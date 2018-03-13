var app = angular.module('demo', []);

app.controller('Hello', function($scope, $http, $window) {

	$scope.filterParam = 'defaultFilterParam';

	$http.get('http://fierce-everglades-97846.herokuapp.com:8080/greeting').then(function(response) {
		$scope.greeting = response.data;
	});

	$scope.filter = function(param) {
		$scope.filterParam = param;
	};

	$scope.graph = function() {
		$scope.filterParam = 'graph';
		var url = "http://localhost:8080/authenticate";
		$window.location.href = url;
	};

});