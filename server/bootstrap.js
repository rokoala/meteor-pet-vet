Meteor.startup(function () {
  if(Owners.find().count() !== 0) return;

  let owners = [{
    name:"João da silva",
    email:"joao.silva@gmail.com",
    cpf:'1276312345',
    address:'Rua das Flores, 25',
    phone:'1193124213'
  },
  {
    name:"Maria das Graças",
    email:"maria.graca@gmail.com",
    cpf:'1245319345',
    address:'Rua das Pedras, 22',
    phone:'1193144213'
  },
  {
    name:"Rodrigo Koga",
    email:"koga.rodrigo@gmail.com",
    cpf:'1285317345',
    address:'Rua das Arvores, 15',
    phone:'1193114613'
  }];

  owners.forEach((owner) => {
    Owners.insert(owner);
  })
});
