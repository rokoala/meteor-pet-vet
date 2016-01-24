

  'use strict';

  angular
    .module('petvet.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state','$reactive', '$scope'];

  function LoginController($state, $reactive, $scope) {

    $reactive(this).attach($scope);

    this.login = function () {
      $state.go('app.home');
    };
  };
