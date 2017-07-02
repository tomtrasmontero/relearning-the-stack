angular.module('todoApp')
  .controller('TodoListCtrl', function($scope, TodoService) {

  	TodoService.findAll()
  	.then( todos => {
  		$scope.todos = todos;
  	})
  	.catch( err => console.log(err));

  	$scope.create = () => {
  		TodoService.create({ name: $scope.name})
  		.then( todo => $scope.todos.push(todo))
  		.catch( err => console.log(err));
  	};
  });

