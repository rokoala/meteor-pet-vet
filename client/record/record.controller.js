;
(function() {
  'use strict';

  angular
    .module('petvet.controllers')
    .controller('RecordListController', RecordListController)
    .controller('RecordAddController', RecordAddController)


  RecordListController.$inject = ['$scope', '$state', 'RecordFactory', '$ionicPopover'];

  function RecordListController($scope, $state, RecordFactory, $ionicPopover) {
    var self = this;

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    }).then(function(popover) {
      self.popover = popover;
    });

    this.openPopover = function($event) {
      self.popover.show($event);
    };

    this.closePopover = function() {
      self.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      self.popover.remove();
    });

    this.patiendId = $state.params.patientId;

    self.records = RecordFactory.getAll();
  };

  RecordAddController.$inject = ['$state'];

  function RecordAddController($state) {
    this.patiendId = $state.params.patientId;
  };

})();
