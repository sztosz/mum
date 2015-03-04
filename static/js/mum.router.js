(function () {
  "use strict";

  angular
    .module('mum.router', ['ui.router'])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'static/templates/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'static/templates/authentication/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      }).state('registration', {
        url: '/registration',
        templateUrl: 'static/templates/authentication/registration.html',
        controller: 'RegistrationController',
        controllerAs: 'vm'
      })
  }

})();


