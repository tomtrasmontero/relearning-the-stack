angular.module('appForms')
  .config(($stateProvider, $urlRouterProvider,$locationProvider) => {
  	//get rid of the # in the url
	$locationProvider.hashPrefix(''); 
 
  	$stateProvider
  	  .state('home', {
  	  	url:'/',
  	  	templateUrl: 'home.html'
  	  })
  	  .state('tabs', {
  	  	url:'/tabs',
  	  	templateUrl: 'tabs.html',
  	  	constroller: function($state){
  	  		//to get a default state when clicking on the tabs state
  	  		if($state.includes('tabs')){
  	  			console.log($state.current.name);
  	  			$state.go('tabs.people');
  	  		}
  	  	}
  	  })
  	  //nested states - since its nested this is /tabs/people
  	  .state('tabs.people', {
  	  	url:'/people',
  	  	templateUrl: 'people.html',
  	  	resolve:{
  	  		people: function(PeopleService) {
  	  			return PeopleService.findAll()
  	  			.then( people => people);
  	  		}
  	  	},
  	  	controller: function($scope, people){
  	  		$scope.people = people;
  	  	}
  	  })
  	  .state('tabs.people.person', {
  	  	url:'/person/:id',
  	  	templateUrl: 'person.html',
  	  	resolve:{
  	  		person: function(PeopleService, $stateParams) {
  	  			return PeopleService.findById($stateParams.id)
  	  			.then( person => angular.copy(person));
  	  		},
  	  		departments: function(){
  	  			return [
  	  			  {id: 1, name: 'engineering'},
  	  			  {id: 2, name: 'HR'},
  	  			  {id: 6, name: 'executive'},
  	  			];
  	  		}
  	  	},
  	  	controller: function($scope, person, PeopleService,$state, departments){
  	  		$scope.person = person;

  	  		$scope.departments = departments;

  	  		$scope.cancel = () => {
  	  			$state.go('tabs.people');
  	  		};

  	  		$scope.save = () => {
  	  			PeopleService.save($scope.person)
  	  			.then( () => {
  	  				$state.go('tabs.people');
  	  			});
  	  		};
  	  	}
  	  })  	  
  	  .state('tabs.things', {
  	  	url: '/things',
  	  	templateUrl: 'things.html',
  	  	resolve: {
  	  		things: function() {
  	  			return [
  	  				{ id: 5, name: 'rock'},
  	  				{ id: 7, name: 'paper'}
  	  			];
  	  		}
  	  	},
  	  	controller: function($scope, things){
  	  		$scope.things = things;
  	  	}
  	  });

  	$urlRouterProvider.otherwise('/');

  });