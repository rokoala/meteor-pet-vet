;
(function() {

  'use strict';

  angular
    .module('petvet.controllers')
    .controller('OwnerListController', OwnerListController)
    .controller('OwnerAddController', OwnerAddController)
    .controller('OwnerEditController', OwnerEditController)

  OwnerListController.$inject = ['$scope', '$reactive'];

  function OwnerListController($scope, $reactive) {

    $reactive(this).attach($scope);

    this.remove = remove;

    this.helpers({
      owners() {
        return Owners.find();
      }
    });

    function remove(owner) {
      Owners.remove(owner._id);
    }
  };

  OwnerAddController.$inject = ['$state', '$reactive', '$scope', '$ionicHistory'];

  function OwnerAddController($state, $reactive, $scope, $ionicHistory) {
    var self = this;

    $reactive(this).attach($scope);

    this.add = function(user) {

      if (self.form.$valid) {

        $ionicHistory.nextViewOptions({
          historyRoot: true,
          disableAnimate: true,
          expire: 300
        });

        Meteor.call('newOwner', user, function (err, id) {
          $state.go('app.editOwner', {
            id: id
          });
        });
      }
    };
  };

  OwnerEditController.$inject = ['$state','$reactive', '$scope', '$ionicHistory'];

  function OwnerEditController($state,$reactive, $scope, $ionicHistory) {
    $reactive(this).attach($scope);

    this.edit = edit;

    this.helpers({
      user() {
        return Owners.findOne($state.params.id);
      },
      pets(){
        return Pets.find({ownerId:$state.params.id});
      }
    });

    function edit(user) {
      Meteor.call('editOwner', user,function (err,data) {
        $ionicHistory.goBack();
      });
    };
  };

})();
