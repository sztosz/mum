(function () {
  "use strict";

  angular
    .module('mum', [
      'mum.config',
      'mum.router',
      'mum.authentication',
      'mum.layout',
      'mum.examinations-list',
      'mum.utils'
    ]
  );

  angular
    .module('mum')
    .run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }

})();
