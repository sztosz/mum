(function () {
  "use strict";
  angular
    .module('mum.examinations-lists.controllers')
    .controller('ExaminationsListsController', ExaminationsListsController);

  ExaminationsListsController.$inject = ['$location', '$routeParams', 'ExaminationsLists'];

  function ExaminationsListsController($location, $routeParams, ExaminationLists) {
    var vm = this;

    vm.lists = [];

    activate();

    function activate() {
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
