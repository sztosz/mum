(function () {
  'use strict';

  angular
    .module('mum.authentication', [
      'mum.authentication.controllers',
      'mum.authentication.services'
    ]);

  angular
    .module('mum.authentication.controllers', []);

  angular
    .module('mum.authentication.services', ['ngCookies']);
})();
