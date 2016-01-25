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
      toastr.success("Pet adicionado com sucesso", "Sucesso");
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
      toastr.success("Pet editado com sucesso", "Sucesso");
    })
  };
};

PetListController.$inject = ['$scope', '$state', '$reactive'];

function PetListController($scope, $state, $reactive) {
  $reactive(this).attach($scope);

  this.remove = remove;

  this.helpers({
    pets(){
      let pets = Pets.find().fetch();
      pets.forEach((pet) =>{
        pet.owner = Owners.findOne(pet.ownerId);
      });
      return pets;
    }
  });

  function remove(petId) {
    Pets.remove(petId);
    toastr.success("Pet removido com sucesso", "Sucesso");
  };
};

PetController.$inject = ['$scope', '$state', '$reactive'];

function PetController($scope, $state, $reactive) {
  $reactive(this).attach($scope);

  this.helpers({
    pet(){
      let pet = Pets.findOne({_id:$state.params.id});
      pet.owner = Owners.findOne(pet.ownerId);
      return pet;
    }
  });
};
