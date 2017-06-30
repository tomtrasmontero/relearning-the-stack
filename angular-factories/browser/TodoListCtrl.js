angular.module('todo')
  .controller('TodoListCtrl', ($scope, TodoService) => {

    $scope.create = () => {
      TodoService.create({ name: $scope.name })
        .then( () => $scope.name = '')
        .catch( (err) => console.log(err));
    };

  	$scope.destroy = (todo) => {
      TodoService.destroy(todo)
        .catch( (err) => console.log(err));
  	};

    TodoService.findAll()
      .then( (todos) => $scope.todos = todos )
      .catch( (err) => console.log(err));

  });