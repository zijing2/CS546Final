const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const pet = mongoCollections.pet;
const uuid = require('node-uuid');
const bcrypt = require("bcrypt-nodejs");
const xss = require('xss');

let exportedMethods = {
    getAllUsers() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },
    getUserById(uid) {
        return users().then((userCollection) => {
            return userCollection.findOne({ "_id": uid }).then((user) => {
                return user;
            });
        });
    },
    deleteUserById(uid) {
        return users().then((userCollection) => {
            return userCollection.remove({ "_id": uid }).then((result) => {
                return result;
            })
        })
    },
    getUserByEmail(email) {
        return users().then((userCollection) => {
            return userCollection.findOne({ "profile.email": email }).then((user) => {
                return user;
            });
        });
    },
    checkLogin(email, password) {
        return users().then((userCollection) => {
            return userCollection.findOne({ "profile.email": email }).then((user) => {
                if (!user) {
                    throw "user does not exist";
                } else {
                    //console.log(bcrypt.compareSync(password, user.pwd));
                    if (bcrypt.compareSync(password, user.pwd)) {
                        return user;
                    } else {
                        throw "password error";
                    }
                }
            });
        });
    },
    register(email, password) {
        //email must be uniq
        return this.getUserByEmail(email).then((user) => {
            //console.log(bcrypt.hashSync(password));
            if (!user) {
                var uid = uuid.v4();
                var date = new Date();
                let newUser = {
                    _id: uid,
                    pwd: bcrypt.hashSync(password),
                    rtime: Date.parse(date),
                    profile: {
                        _id: uid,
                        email: email
                    },
                    pet: {},
                    order: {}
                };

                return users().then((userCollection) => {
                    return userCollection.insertOne(newUser)
                        .then((newInsertInformation) => {
                            return newInsertInformation.insertedId;
                        })
                        .then((newId) => {
                            console.log(newId);

                            //creat pet 
                            var newPet = {
                                _id: uuid.v4(),
                                owner_id: newId
                            };
                            return pet().then((petCollection) => {
                                return petCollection.insertOne(newPet)
                                    .then((newInsertInformation) => {
                                        // return newInsertInformation.insertedId;
                                        return this.getUserById(newId);
                                    });
                            });

                        });
                });
            } else {
                throw "email has been used";
            }
        });
    },
    updateUser(uid, updateUser) {
        return users().then((userCollection) => {
            var updateData = {};

            //console.log(updateUser.user_name);

            if (updateUser.user_name) {
                updateData["profile.name"] = updateUser.user_name;
            }
            if (updateUser.user_gender) {
                updateData["profile.gender"] = updateUser.user_gender;
            }
            if (updateUser.user_birthday) {
                updateData["profile.birthday"] = updateUser.user_birthday;
            }
            if (updateUser.user_phone) {
                updateData["profile.phone"] = updateUser.user_phone;
            }
            if (updateUser.user_address) {
                updateData["profile.address"] = updateUser.user_address;
            }
            let updateCommand = {
                $set: updateData
            };

            //console.log(updateCommand);

            return userCollection.updateOne({
                _id: uid
            }, updateCommand).then((result) => {
                return this.getUserById(uid);
            });

        });
    },
    getAllPets() {
        return pet().then((petCollection) => {
            return petCollection.find({}).toArray();
        });
    },
    getPetbyUid(uid) {
        return pet().then((petCollection) => {
            return petCollection.findOne({ "_id": uid }).then((pet) => {
                return pet;
            });
        });
    },
    deletePetsById(pid){
        return pet().then((petCollection) => {
            return petCollection.remove({ "_id": pid }).then((pet) => {
                return pet;
            });
        });
    },
    updatePetbyOwnerId(owner_id, updatePet) {
        return pet().then((petCollection) => {
            var updateData = {};
            if (updatePet.pet_name) {
                updateData["name"] = updatePet.pet_name;
            }
            if (updatePet.pet_gender) {
                updateData["gender"] = updatePet.pet_gender;
            }
            if (updatePet.pet_birthday) {
                updateData["birthday"] = updatePet.pet_birthday;
            }
            if (updatePet.pet_breed) {
                updateData["breed"] = updatePet.pet_breed;
            }
            if (updatePet.pet_hobbies) {
                updateData["hobbies"] = updatePet.pet_hobbies;
            }
            if (updatePet.pet_hates) {
                updateData["hates"] = updatePet.pet_hates;
            }
            let updateCommand = {
                $set: updateData
            };
            return petCollection.updateOne({
                "owner_id": owner_id
            }, updateCommand).then((result) => {
                return this.getPetbyUid(owner_id);
            });

        });
    }

}

module.exports = exportedMethods;    