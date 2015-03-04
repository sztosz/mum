(function () {
  "use strict";

  angular
    .module('mum.authentication.controllers')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$scope', '$location', 'Authentication'];

  function RegistrationController($scope, $location, Authtentication) {
    var vm = this;

    vm.register = register;

    activate();

    function activate() {
      if (Authtentication.isAuthenticated()) {
        $location.url('/')
      }
    }

    function register() {
      Authtentication.register(vm.email, vm.password, vm.username)
    }
  }
})();
