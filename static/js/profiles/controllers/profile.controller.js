(function () {
  "use strict";

  angular
    .module('mum.profiles.controllers')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$location', '$stateParams', 'Profile', 'Snackbar'];

  function ProfileController($location, $stateParams, Profile, Snackbar) {
    var vm = this;

    vm.profile = undefined;

    activate();

    function activate() {
      var username = $stateParams.username;

      Profile.get(username).then(profileSuccessFn, profileFailureFn);

      function profileSuccessFn (data) {
        vm.profile = data.data;
      }

      function profileFailureFn (data) {
        Snackbar.error('Taki użytkownik nie istnieje');

      }
    }
  }

})();
