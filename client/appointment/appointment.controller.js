;
(function() {

  angular
    .module('petvet.controllers')
    .controller('AppointmentAddController', AppointmentAddController)

  AppointmentAddController.$inject = ['$ionicModal', '$scope','$reactive'];

  function AppointmentAddController($ionicModal, $scope, $reactive) {
    var self = this;

    $reactive(this).attach($scope);

    this.appointment = {};

    this.openOwnerModal = openOwnerModal;
    this.openDateModal = openDateModal;

    this.helpers({
      pets(){
        let pets = Pets.find().fetch();
        pets.forEach((pet) =>{
          pet.owner = Owners.findOne(pet.ownerId);
        });
        return pets;
      }
    })

    $ionicModal.fromTemplateUrl('owner-list-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      self.modal = modal;
    });

    function openOwnerModal() {
      self.modal.show();
    };

    function openDateModal() {
      // self.dateModal.show();
      self.appointment.date = new Date();
    };

    this.selectPet = function(pet) {
      self.appointment.owner = pet.owner;
      self.appointment.pet = pet;
      self.modal.hide();
    };

  };

})();
