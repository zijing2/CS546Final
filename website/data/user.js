const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllUsers() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },

    checkEmail(email) {
        return users().then((userCollection) => {
            return userCollection.findOne({ email: email }).then((user) => {
                if (!user) return true;
                return false;
            });
        });
    },

    getUserById(id) {
        return users().then((userCollection) => {
            return userCollection.findOne({ _id: id }).then((user) => {
                if (!user) throw "User not found";
                return user;
            });
        });
    },
    addUser(Email, Password) {
        return users().then((userCollection) => {
            let newUser = {
                Email: Email,
                Password: Password,
                _id: uuid.v4()
            };

            return userCollection.insertOne(newUser).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getUserById(newId);
            });
        });
    },
    removeUser(id) {
        return users().then((userCollection) => {
            return userCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete user with id of ${id}`)
                }
            });
        });
    },

    updateUser(id, Email, Password) {
        return this.getUserById(id).then((currentUser) => {
            let updatedUser = {
                Email: Email,
                Password: Password
            };

            return userCollection.updateOne({ _id: id }, updatedUser).then(() => {
                return this.getUserById(id);
            });
        });

    }



}

module.exports = exportedMethods;    
