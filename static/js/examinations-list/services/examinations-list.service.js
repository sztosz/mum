(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.services')
    .factory('ExaminationsLists')

  ExaminationsLists.$inject = ['$http']

  function ExaminationsLists($http) {
    var ExaminationsLists = {
      get: get,
      create: create
    };

    return ExaminationsLists
  }

  return ExaminationsLists;

  function get() {
    return $http.get('/api/v1/examination-lists/')
  }

  function create(month, year, rate, sum) {
    return $http.post('/api/v1/examination-lists/', {
      month: month,
      year: year,
      rate: rate,
      sum: sum
    })
  }

})();
