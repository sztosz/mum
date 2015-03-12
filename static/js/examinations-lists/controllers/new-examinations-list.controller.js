(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.controllers')
    .controller('NewExaminationsListController', NewExaminationsListController);

  NewExaminationsListController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'ExaminationsLists', 'ExaminationsListsOptionValues'];

  function NewExaminationsListController($rootScope, $scope, Authentication, Snackbar, ExaminationsLists, ExaminationsListsOptionValues) {
    var vm = this;

    vm.submit = submit;
    vm.monthNames = ExaminationsListsOptionValues.monthNames();

    function submit() {
      console.log('submit clicked');
      ExaminationsLists.create(vm.month, vm.year, vm.rate, vm.sum).then(createSuccessFn, createFailureFn);

      function createSuccessFn(){
        $rootScope.$broadcast('examinationsList.created', {
          month: vm.month,
          year: vm.year,
          rate: vm.rate,
          sum: vm.sum
        });
        $scope.closeThisDialog();

      }

      function createFailureFn(){

      }
    }

  }
})();
