// ui.router needed to use states instead of build in Angular router
angular.module('todoApp', ['ui.router']);

angular.module('todoApp')
	.config( ($stateProvider, $urlRouterProvider) => {
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

		  //if the state does not match, redirect to /
		  $urlRouterProvider.otherwise('/');
	});