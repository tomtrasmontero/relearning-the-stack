// Creating an angular app
var app = angular.module('app', []);

//creating a controller (name of controller, function )
app.controller('TodoCtrl', ($http,$scope) => {
	$scope.todos = [
		{id: 1, name: 'foo'},
		{id: 2, name: 'bar'}
	];

	$scope.destroy = (itemId) => {
		$scope.todos = $scope.todos.filter((ele,idx,arr) => itemId !== ele.id);
		console.log('todos deleted!');
	};
});