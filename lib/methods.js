Meteor.methods({
  newOwner (owner) {
    owner.timestamp = new Date();

    let ownerId = Owners.insert(owner);
    // Chats.update(message.chatId, { $set: { lastMessage: message } });
    return ownerId;
  },
  editOwner(owner) {
    return Owners.update(owner._id, owner);
  },
  addPet(options){
    let pet = options.pet;

    pet.ownerId = options.ownerId;
    pet.timestamp = new Date();

    let petId = Pets.insert(pet);

    Owners.update(options.ownerId, {$push:{pets:petId}});

    return petId;
  },
  editPet(pet){
    pet.timestamp = new Date();
    return Pets.update(pet._id,pet);
  },
  fullPet(){
    let pets = Pets.find();

    // pets.forEach((pet)=>{
    //   console.log(pet.onwerId);
    //   pet.owner = Owners.findOne({_id:pet.ownerId});
    // });

    // pet.owner = Owners.findOne({_id:ownerId});
    console.log(pets);
    return pets;
  }
});
