;(function () {

  angular
    .module('petvet.controllers')
    .controller('HomeController',HomeController)

  HomeController.$inject = [];

  function HomeController() {

    var self = this;

    self.user = {
      name:"Username"
    };

  };

})();
