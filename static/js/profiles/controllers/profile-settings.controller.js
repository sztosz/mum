(function () {
  "use strict";

  angular
    .module('mum.profiles.controllers')
    .controller('ProfileSettingsController', ProfileSettingsController);

  ProfileSettingsController.$inject = ['$location', '$stateParams', 'Authentication', 'Profile', 'Snackbar'];

  function ProfileSettingsController($location, $stateParams, Authentication, Profile, Snackbar) {
    var vm = this;

    vm.update = update;
    vm.destroy = destroy;

    activate();

    function activate() {
      var authenticatedAccount = Authentication.getAuthenticatedAccount();
      var username = $stateParams.username;

      if (!authenticatedAccount) {
        $location.url('/');
        Snackbar.error('Brak uprawnień zmiany ustawień użytkownika');
      } else if (authenticatedAccount.username != username) {
        $location.url('/');
        Snackbar.error('Brak uprawnień zmiany ustawień innych użytkowników');
      }

      Profile.get(username).then(profileSuccessFn, profileFailureFn);

      function profileSuccessFn(data) {
        vm.profile = data.data
      }

      function profileFailureFn(data) {
        Snackbar.error('Ten użytkownik nie istnieje')
      }
    }


    function update() {
      Profile.update(vm.profile).then(updateSuccessFn, updateFailureFn);

      function updateSuccessFn() {
        $location.url('/');
        Snackbar.show('Dane zaktualizowano poprawnie')
      }

      function updateFailureFn(data) {
        Snackbar.error(data.error)
      }
    }

    function destroy() {
      Profile.destroy(vm.profile.username).then(destroySuccessFn, destroyFailureFn);

      function destroySuccessFn() {
        Authentication.unauthenticate();
        $location.url('/');
        Snackbar.show('Konto zostało usunięte');
      }

      function destroyFailureFn(data) {
        Snackbar.error(data.data)
      }
    }


  }

})();
