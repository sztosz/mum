(function () {
  "use strict";

  angular
    .module('mum.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  function Authentication($cookies, $http) {

    var Authentication = {
      register: register,
      login: login,
      logout: logout,
      getAuthenticatedAccount: getAuthenticatedAccount,
      setAuthenticatedAccount: setAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      unauthenticate: unauthenticate
    };

    return Authentication;

    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      })
    }

    function login(email, password) {
      return $http.post('/api/v1/login/', {
        email: email,
        password: password
      })
    }

    function logout() {
      return $http.post('/api/v1/login/', {}).then(redirect, redirect);

      function redirect(){
        unauthenticate();
        window.location = '/'
      }
    }

    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount) {
        return;
      }
      return JSON.parse($cookies.authenticatedAccount);
    }

    function setAuthenticatedAccount(account) {
      $cookies.authenticatedAccount = JSON.stringify(account);
    }

    function isAuthenticated() {
      return !!$cookies.authenticatedAccount;
    }

    function unauthenticate() {
      delete $cookies.authenticatedAccount;
    }

  }

})();
