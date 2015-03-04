(function () {
  "use strict";

  angular
    .module('mum.authentication.controllers')
    .controller('LoginController', LoginController)

  LoginController.$inject = ['$scope', '$location', 'Authentication'];

  function LoginController($scope, $location, Authentication) {
    var vm = this;

    vm.login = login;

    activate();

    function activate() {
      if (Authentication.isAuthenticated()) {
        $location.url('/')
      }
    }

    function login() {
      Authentication.login(vm.email, vm.password);
    }
  }

})();
