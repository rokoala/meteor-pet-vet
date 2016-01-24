;(function () {

  angular
    .module('petvet.controllers')
    .controller('MenuController',MenuController)

  MenuController.$inject = ['$ionicHistory', '$state'];

  function MenuController($ionicHistory, $state) {

    this.clearHistory = function () {
      $ionicHistory.nextViewOptions({
        historyRoot: true,
        disableAnimate: true,
        expire: 300
      });
    };

    this.state = $state;
    
  };

})();
