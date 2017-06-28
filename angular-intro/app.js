// Creating an angular app
var app = angular.module('app', []);

//creating a controller (name of controller, function )
//pubsub style using rootScope
app.controller('TodoCtrl', ($http,$scope, $rootScope) => {
	$scope.todos = [
		{id: 1, name: 'foo'},
		{id: 2, name: 'bar'}
	];

	$scope.destroy = (itemId) => {
		$scope.todos = $scope.todos.filter((ele,idx,arr) => itemId !== ele.id);
		$rootScope.$broadcast('message', 'destroyed Todo');
	};

	$scope.create = () => {
		let maxId = $scope.todos.reduce( (memo, todo) => {
			if(todo.id > memo)
				memo = todo.id;
			return memo;
		}, 0);
			

		$scope.todos.push({ id: ++maxId , name: $scope.name });

		$rootScope.$broadcast('message', 'created Todo');
		
		//clear input field
		$scope.name='';
	};
});

app.controller('MessageCtrl', ($scope,$timeout) => {
	$scope.$on('message', (ev, message) => {
		console.log(ev);
		$scope.message = message;
	});
});