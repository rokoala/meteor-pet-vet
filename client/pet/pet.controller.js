angular
  .module('petvet.controllers')
  .controller('PetAddController', PetAddController)
  .controller('PetEditController', PetEditController)

PetAddController.$inject = ['$scope', '$state', '$reactive', '$ionicHistory'];

function PetAddController($scope, $state, $reactive, $ionicHistory) {

  $reactive(this).attach($scope);

  this.add = add;

  function add(pet) {
    Meteor.call('addPet', {
      pet: pet,
      ownerId: $state.params.id
    }, function(err, data) {
      $ionicHistory.goBack();
    });
  };
};

PetEditController.$inject = ['$scope', '$state', '$reactive', '$ionicHistory'];

function PetEditController($scope, $state, $reactive, $ionicHistory) {
  $reactive(this).attach($scope);

  this.helpers({
    pet() {
      return Pets.findOne($state.params.id);
    }
  });

  this.edit = edit;


  function edit(pet) {
    Meteor.call('editPet', pet, function(err, data) {
      $ionicHistory.goBack();
    })
  };
};
