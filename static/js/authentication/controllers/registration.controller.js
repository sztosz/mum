(function () {
  "use strict";

  angular
    .module('mum.authentication.controllers')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$scope', '$location', 'Authentication'];

  function RegistrationController($scope, $location, Authtentication) {
    var vm = this;

    vm.register = register;
    vm.errorMessage = null;

    activate();

    function activate() {
      if (Authtentication.isAuthenticated()) {
        $location.url('/')
      }
    }

    function register() {
      vm.errorMessage = null;
      Authtentication.register(vm.email, vm.password, vm.username).then(setErrorMessageOnFailure)

      function setErrorMessageOnFailure(respone) {
        console.log(respone);
        vm.errorMessage = respone
      }
    }
  }
})();
