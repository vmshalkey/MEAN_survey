var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/login', {
		controller: 'MainController',
		controllerAs: 'main_ctrl',
		templateUrl: '/partials/login.html'
	})
	.when('/dashboard', {
		controller: 'DashboardController',
		controllerAs: 'dashboard_ctrl',
		templateUrl: '/partials/dashboard.html'
	})
	.when('/polls', {
		controller: 'PollsController',
		controllerAs: 'polls_ctrl',
		templateUrl: '/partials/polls.html'
	})
	.when('/votes', {
		controller: 'VotesController',
		controllerAs: 'votes_ctrl',
		templateUrl: '/partials/votes.html'

	})
	.otherwise('/login');
})