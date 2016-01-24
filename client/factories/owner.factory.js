;(function () {
  'use strict'

  angular
    .module('petvet.factories')
    .factory('OwnerFactory',OwnerFactory);

  OwnerFactory.$inject = [];

  function OwnerFactory() {

    var owners = [{
      id:1,
      name:"João da silva",
      email:"joao.silva@gmail.com",
      cpf:'1276312345',
      address:'Rua das Flores, 25',
      phone:'1193124213'
    },
    {
      id:2,
      name:"Maria das Graças",
      email:"maria.graca@gmail.com",
      cpf:'1245319345',
      address:'Rua das Pedras, 22',
      phone:'1193144213'
    },
    {
      id:3,
      name:"Rodrigo Koga",
      email:"koga.rodrigo@gmail.com",
      cpf:'1285317345',
      address:'Rua das Arvores, 15',
      phone:'1193114613'
    }];

    var ownerService = {
      getAll:getAll,
      get:get
    };

    return ownerService;

    function getAll() {
      return owners;
    };

    function get(id) {
      return owners[id-1];
    }
  };

})()
