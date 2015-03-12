(function () {
  "use strict";

  angular
    .module('mum.examinations-lists.services')
    .factory('ExaminationsListsOptionValues', ExaminationsListsOptionValues);

  ExaminationsListsOptionValues.$inject = ['$http'];

  function ExaminationsListsOptionValues($http) {
    var ExaminationsListsOptionValues = {
      monthNames: monthNames
    };

    return ExaminationsListsOptionValues;

    function monthNames() {
      var monthNames = [
        {name: 'Styczeń', number: '01'},
        {name: 'Luty', number: '02'},
        {name: 'Marzec', number: '03'},
        {name: 'Kwiecień', number: '04'},
        {name: 'Maj', number: '05'},
        {name: 'Czerwiec', number: '06'},
        {name: 'Lipiec', number: '07'},
        {name: 'Sierpień', number: '08'},
        {name: 'Wrzesień', number: '09'},
        {name: 'Październik', number: '10'},
        {name: 'Listopad', number: '11'},
        {name: 'Grudzień', number: '12'}
      ];
      return monthNames
    }


  }
})();
