angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeController',
      templateUrl: './views/home.html'
    })
})
