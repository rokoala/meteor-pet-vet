angular
  .module('Petvet')
  .config(config);

function config($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'client/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/login/login.html',
      controller: 'LoginController as vm'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'client/home/home.html',
          controller: 'HomeController as vm'
        }
      }
    })
    .state('app.ownerList', {
      url: '/owners',
      views: {
        'menuContent': {
          templateUrl: 'client/owner/owner.list.html',
          controller: 'OwnerListController as vm'
        }
      }
    })
    .state('app.addOwner', {
      url: '/add/owner',
      views: {
        'menuContent': {
          templateUrl: 'client/owner/owner.add.html',
          controller: 'OwnerAddController as vm'
        }
      }
    })
    .state('app.editOwner', {
      url: '/edit/owner/:id',
      views: {
        'menuContent': {
          templateUrl: 'client/owner/owner.edit.html',
          controller: 'OwnerEditController as vm'
        }
      }
    })
    .state('app.addPet', {
      url: '/owner/:id/add/pet',
      views: {
        'menuContent': {
          templateUrl: 'client/pet/pet.add.html',
          controller: 'PetAddController as vm'
        }
      }
    })
    .state('app.editPet', {
      url: '/owner/:ownerid/pet/:id/edit',
      views: {
        'menuContent': {
          templateUrl: 'client/pet/pet.edit.html',
          controller: 'PetEditController as vm'
        }
      }
    })
    .state('app.petList', {
      url: '/pets',
      views: {
        'menuContent': {
          templateUrl: 'client/pet/pet.list.html',
          controller: 'PetListController as vm'
        }
      }
    })
    .state('app.pet', {
      url: '/pet/:id',
      views: {
        'menuContent': {
          templateUrl: 'client/pet/pet.html',
          controller: 'PetController as vm'
        }
      }
    })
    .state('app.petDetail', {
      url: '/pet/:id/detail',
      views: {
        'menuContent': {
          templateUrl: 'client/pet/pet.edit.html',
          controller: 'PetEditController as vm'
        }
      }
    })
    .state('app.petPhotos',{
      url: '/pet/:id/photos',
      views: {
        'menuContent': {
          templateUrl: 'client/pet/pet.photos.html'
        }
      }
    })
    .state('app.recordList',{
      url: '/pet/:id/records',
      views: {
        'menuContent': {
          templateUrl: 'client/record/record.list.html',
          controller: 'RecordListController as vm'
        }
      }
    })
    .state('app.agenda',{
      url: '/agenda',
      views: {
        'menuContent': {
          templateUrl: 'client/agenda/agenda.html',
          controller: 'AgendaController as agenda'
        }
      }
    })
    .state('app.addAppointment',{
      url: '/add/appointment',
      views: {
        'menuContent': {
          templateUrl: 'client/appointment/appointment.add.html',
          controller: 'AppointmentAddController as vm'
        }
      }
    })
    // .state('app.patientList', {
    //   url: '/patients',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/patient/patient.list.html',
    //       controller: 'PatientListController',
    //       controllerAs: 'vm'
    //     }
    //   }
    // })
    // .state('app.patient', {
    //   url: '/patient/:patientId',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/patient/patient.html',
    //       controller: 'PatientController',
    //       controllerAs: 'patient',
    //       resolve: {
    //         patient: function($stateParams, PatientFactory) {
    //           return PatientFactory.get($stateParams.patientId);
    //         }
    //       }
    //     }
    //   }
    // })
    // .state('app.patientDetail', {
    //   url: '/patient/:patientId/detail',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/patient/patient.detail.html',
    //       controller: 'PatientDetailController',
    //       controllerAs: 'vm',
    //       resolve: {
    //         patient: function($stateParams, PatientFactory) {
    //           return PatientFactory.get($stateParams.patientId);
    //         }
    //       }
    //     }
    //   }
    // })
    // .state('app.patientPhotos', {
    //   url: '/patient/:patientId/photos',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/patient/patient.photos.html',
    //       resolve: {
    //         patient: function($stateParams, PatientFactory) {
    //           return PatientFactory.get($stateParams.patientId);
    //         }
    //       }
    //     }
    //   }
    // })
    // .state('app.recordList', {
    //   url: '/patient/:patientId/records',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/record/record.list.html',
    //       controller: 'RecordListController',
    //       controllerAs: 'vm'
    //     }
    //   }
    // })
    // .state('app.addRecord', {
    //   url: '/patient/:patientId/records/add',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/record/record.add.html',
    //       controller: 'RecordAddController',
    //       controllerAs: 'vm'
    //     }
    //   }
    // })
    // .state('app.feed', {
    //   url: '/feed',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/feed/feed.html',
    //       controller: 'FeedController',
    //       controllerAs: 'feed'
    //     }
    //   }
    // })
    // .state('app.agenda', {
    //   url: '/agenda',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'js/components/agenda/agenda.html',
    //       controller: 'AgendaController',
    //       controllerAs: 'agenda'
    //     }
    //   }
    // })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
}
