(function () {
  "use strict";

  angular
    .module('mum.config', []).config(config);

  config.$inject = ['$locationProvider'];

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');
  }
})();
