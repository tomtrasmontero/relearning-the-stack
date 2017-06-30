angular.module('todo')
  .controller('TodoSummaryCtrl', (TodoService, $scope) => {

  	TodoService.findAll()
  	  .then( (todos) => $scope.todos = todos)
  	  .catch( err => console.log(err));
  });