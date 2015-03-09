(function () {
  "use strict";

  angular
    .module('mum.router', ['ui.router'])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
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
      })
      .state('registration', {
        url: '/registration',
        templateUrl: 'static/templates/authentication/registration.html',
        controller: 'RegistrationController',
        controllerAs: 'vm'
      })
      .state('examinations-lists', {
        url: '/examinations-lists',
        templateUrl: 'static/templates/examinations-lists/examinations-lists.html',
        controller: 'ExaminationsListsController',
        controllerAs: 'vm'
      })
      .state('profile', {
        url: '/:username',
        templateUrl: '/static/templates/profiles/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      })
      .state('profile-settings', {
        url: '/:username/settings',
        templateUrl: '/static/templates/profiles/settings.html',
        controller: 'ProfileSettingsController',
        controllerAs: 'vm'
      })
  }

})();


