(function () {
  "use strict";

  angular
    .module('mum.authentication.controllers')
    .controller('LoginController', LoginController)

  LoginController.$inject = ['$scope', '$location', 'Authentication'];

  function LoginController($scope, $location, Authentication) {
    var vm = this;

    vm.login = login;
    //vm.errorMessage = null;

    activate();

    function activate() {
      if (Authentication.isAuthenticated()) {
        $location.url('/')
      }
    }

    function login() {
      vm.errorMessage = null;
      Authentication.login(vm.username, vm.password).then(setErrorMessageOnFailure);

      function setErrorMessageOnFailure(respone) {
        console.log(respone);
        vm.errorMessage = respone
      }
    }
  }

})();
