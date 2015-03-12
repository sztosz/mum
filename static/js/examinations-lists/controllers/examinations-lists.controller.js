(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.controllers')
    .controller('ExaminationsListsController', ExaminationsListsController);

  ExaminationsListsController.$inject = ['$scope', '$location', 'ExaminationsLists'];

  function ExaminationsListsController($scope, $location, ExaminationLists) {
    var vm = this;

    vm.lists = [];

    activate();

    function activate() {
      //console.log('ELDirCont');
      //$scope.$watchCollection(function () {
      //  return $scope.lists }, render);
      //
      //function render(current, original) {
      //  vm.lists = current;
      //}

      ExaminationLists.get().then(listSuccessFn, listErrorFn);


      $scope.$on('examinationsList.created', function (event, list) {
        vm.lists.unshift(list)
      });

      function listSuccessFn(data) {
        vm.lists = data.data;
      }

      function listErrorFn(data) {
        console.log(data);
      }
    }

    function update() {

    }

    function destroy() {

    }

  }
})();
