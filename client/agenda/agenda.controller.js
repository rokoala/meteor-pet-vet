;(function () {

  angular
    .module('petvet.controllers')
    .controller('AgendaController',AgendaController)

  AgendaController.$inject = [];

  function AgendaController() {
    this.events = [{
      title:"Realização de Consulta",
      description:"Realização de Consulta para o Rex",
      date:new Date()
    }]
  };

})();
