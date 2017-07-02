angular.module('todoApp')
  .factory('TodoService', function($http){
  	return {
  		findAll: () => {
  			return $http.get('/api/todos')
  			.then( (result) => result.data);
  		},
  		create: (todo) => {
  			return $http.post('/api/todos', todo)
  			.then( result => {
  				return result.data;
  			});
  		}
  	};
  });