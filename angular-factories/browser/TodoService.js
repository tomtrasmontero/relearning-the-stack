angular.module('todo')
  //factory has to return something
  //is a singleton
  .factory('TodoService', ($http) => {
  	
  	const todos = [];

  	const findAll = () => {
  	  return $http.get('/api/todos')
      .then( (result) => {
      	//This service is a one source of truth;  deep copy ctrl are using same array
      	angular.copy(result.data, todos);
      	return todos;
      });
  	};

  	const destroy = (todo) => {
	  return $http.delete(`/api/todos/${todo.id}`)
	  .then( (todo) => {
	    let idx = todos.indexOf(todo);
	    todos.splice(idx,1);
	  });
  	};

  	const create = (todo) => {
      return $http.post('/api/todos', todo)
        .then( (result) => {
          todos.push(result.data);
        });
  	};

  	return {
  		findAll: findAll,
  		destroy: destroy,
  		create: create
  	};

  });