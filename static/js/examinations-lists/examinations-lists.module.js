(function () {
  "use strict";

  angular
    .module('mum.examinations-lists', [
      'mum.examinations-lists.controllers',
      'mum.examinations-lists.services',
      'mum.examinations-lists.directives'
    ]);

  angular
    .module('mum.examinations-lists.controllers', []);

  angular
    .module('mum.examinations-lists.services', []);

  angular
    .module('mum.examinations-lists.directives', ['ngDialog'])


})();
