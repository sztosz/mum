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
      console.log('register')
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registrationSuccessFn, registrationFailureFn);

      function registrationSuccessFn() {
        Authentication.login(username, password)
        console.log('register.success')
      }

      function registrationFailureFn(data) {
        return data.data.message;
      }
    }

    function login(username, password) {
      console.log('login')
      return $http.post('/api/v1/auth/login/', {
        username: username,
        password: password
      }).then(loginSuccessFn, loginFailureFn);

      function loginSuccessFn(data) {
        console.log('login.success')
        Authentication.setAuthenticatedAccount(data.data);
        window.location = '/'
      }

      function loginFailureFn(data) {
        return data.data.message;
      }
    }

    function logout() {
      return $http.post('/api/v1/auth/logout/', {}).then(logoutSuccessFN, logoutFailureFN);

      function logoutSuccessFN(){
        Authentication.unauthenticate();
        window.location = '/'
      }

      function logoutFailureFN() {
        Authentication.unauthenticate();
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
