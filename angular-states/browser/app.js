// ui.router needed to use states instead of build in Angular router
angular.module('todoApp', ['ui.router']);

angular.module('todoApp')
	.config( ($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
		  .state('home', {
		  	//tell what view the state corresponds to
		  	url: '/',
		  	//html template to view in browser
		  	templateUrl: "/home.html"
		  })
		  .state('todos', {
		  	url: '/todos',
		  	templateUrl: '/todos.html',
		  	controller: 'TodoListCtrl'
		  })
		  .state('tabs', {
		  	url: '/tabs',
		  	templateUrl: '/tabs.html'
		  });		  

		  //get rid of the # in the url
		  $locationProvider.html5Mode(true);

		  //if the state does not match, redirect to /
		  $urlRouterProvider.otherwise('/');
	});