(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.controllers')
    .controller('ExaminationsListDirectiveController', ExaminationsListDirectiveController);

  ExaminationsListDirectiveController.$inject = ['$scope', 'ExaminationsListsOptionValues'];

  function ExaminationsListDirectiveController($scope, ExaminationsListsOptionValues){
    var vm = this;

    activate();

    function activate() {
      vm.getMonthName = ExaminationsListsOptionValues.numberToName
    }
  }

})();

