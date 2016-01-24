;
(function() {

  'use strict';

  angular
    .module('petvet.factories')
    .factory('RecordFactory', RecordFactory)

  RecordFactory.$inject = [];

  function RecordFactory() {
    var self = this;

    var recordService = {
      getAll: getAll,
      create: create
    };
    return recordService;


    var recordStructure = {
      name: "",
      date: null
    };

    function getAll(id) {

      var records = [];

      records.push(create({
        name: 'Exame Físico',
        date: new Date()
      }));
      records.push(create({
        name: 'Anamnese',
        date: new Date()
      }));

      return records;
    };

    function create(option) {
      return angular.merge({}, recordStructure, option);
    };

  };

})()
