angular
  .module('petvet.controllers')
  .controller('PetAddController', PetAddController)
  .controller('PetEditController', PetEditController)
  .controller('PetListController', PetListController)
  .controller('PetController', PetController)

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

PetListController.$inject = ['$scope', '$state', '$reactive'];

function PetListController($scope, $state, $reactive) {
  $reactive(this).attach($scope);

  this.helpers({
    pets(){
      return Meteor.call("fullPet",function (err,data) {
        console.log(data);
        return data;
      });
    }
  });
};

PetController.$inject = ['$scope', '$state', '$reactive'];

function PetController($scope, $state, $reactive) {
  $reactive(this).attach($scope);

  this.helpers({
    pet(){
      return Pets.findOne({_id:$state.params.id});
    }
  });
};
