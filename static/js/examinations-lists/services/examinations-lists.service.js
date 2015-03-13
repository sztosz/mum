(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.services')
    .factory('ExaminationsLists', ExaminationsLists);

  ExaminationsLists.$inject = ['$http'];

  function ExaminationsLists($http) {
    var ExaminationsLists = {
      getAll: getAll,
      create: create
    };

    return ExaminationsLists;


    function getAll() {
      return $http.get('/api/v1/examination-lists/')
    }

    function get(examinationlist) {
      return $http.get('/api/v1/examination-lists/' + examinationlist + '/');
    }

    function create(month, year, rate, sum) {
      return $http.post('/api/v1/examination-lists/', {
        month: month,
        year: year,
        rate: rate,
        sum: sum
      })
    }
  }

})();
