angular.module('appForms')
  .factory('PeopleService', function ($q){
  	let _people = [
  	  { id: 1, name: 'Moe', email: 'Moe@example.com', departmentId: 1 },
  	  { id: 2, name: 'Larry', email: 'Larry@example.com', departmentId: 2},
  	  { id: 3, name: 'Curly', email: 'Curly@example.com', departmentId: 2}
  	];

  	return {
  		findAll: () => {
  			//use the q library to resolve people 
  			const dfd = $q.defer();
  			dfd.resolve(_people);
  			return dfd.promise;
  		}, findById: (id) => {
  			let person = _people.filter( person => person.id == id)[0];
  			const dfd = $q.defer();
  			dfd.resolve(person);
  			return dfd.promise;
  		},
  		save: function(person) {
  			return this.findById(person.id)
  			.then( existing => {
  				angular.copy(person, existing);
  			});
  		}
  	};
  });