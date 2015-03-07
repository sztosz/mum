( function () {
  "use strict";
  angular
    .module('mum.examinations-lists.directives')
    .directive('examinations-lists')

  function examinationsLists() {
    var directive = {
      controller: 'ExaminationsListsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        examinationsList: '='
      },
      templateUrl: '/static/templates/examinations-lists.html'
    };
  return directive;
  }

})();

