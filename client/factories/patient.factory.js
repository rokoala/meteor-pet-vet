;
(function() {
  'use strict'

  angular
    .module('petvet.factories')
    .factory('PatientFactory', PatientFactory);

  PatientFactory.$inject = [];

  function PatientFactory() {

    var patients = [{
      id: 1,
      name: "João da silva",
      email: "joao.silva@gmail.com",
      cpf: '1276312345',
      address: 'Rua das Flores, 25',
      phone: '1193124213',
      pet: {
        id: 1,
        name: "Mimi",
        type: "cat",
        breed: "Scottish Fold",
        age: '5',
        weight: '3000',
        img: 'img/scottish-fold.jpg',
        lastAppointment: new Date(),
        records: {}
      }
    }, {
      id: 2,
      name: "Maria das Graças",
      email: "maria.graca@gmail.com",
      cpf: '1245319345',
      address: 'Rua das Pedras, 22',
      phone: '1193144213',
      pet: {
        id: 2,
        name: "Thor",
        type: "dog",
        breed: "Rottweiler",
        age: '2',
        weight: '2000',
        img: 'img/rottweiler.png',
        lastAppointment: new Date(),
        records: {}
      }
    }, {
      id: 3,
      name: "Rodrigo Koga",
      email: "koga.rodrigo@gmail.com",
      cpf: '1285317345',
      address: 'Rua das Arvores, 15',
      phone: '1193114613',
      pet: {
        id: 3,
        name: "Jake the dog",
        type: "dog",
        breed: "Buldogue",
        age: '6',
        weight: '4500',
        img: 'img/jake.png',
        lastAppointment: new Date(),
        records: {}
      }
    }];

    var patientService = {
      getAll: getAll,
      get: get
    };

    return patientService;

    function getAll() {
      return patients;
    };

    function get(id) {
      return patients[id - 1];
    }
  };

})()
