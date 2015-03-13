(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.directives')
    .directive('examinationsList', examinationList);

  function examinationList() {
    var directive = {
      controller: 'ExaminationsListDirectiveController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        element: '='
      },
      templateUrl: '/static/templates/examinations-lists/directives/examinations_list.html'
    };

    return directive;
  }
})();
