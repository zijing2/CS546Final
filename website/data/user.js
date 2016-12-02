const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');
const bcrypt = require("bcrypt-nodejs");

let exportedMethods = {
    getAllUsers() {
        return users().then((userCollection) => {
            return userCollection.find({}).toArray();
        });
    },
      
    checkLogin(email, password) {
        console.log("check login 1 ");
        return new Promise((resolve, reject) => {
            return users().then((userCollection) => {
                userCollection.findOne({ email: email }).then((findUser) => {
                    console.log("check login 2 ");
                    if (bcrypt.compareSync(password, findUser.password)) resolve(findUser);
                    reject("invalid username or password");
                });
            });
        })

    },

    checkEmail(email) {
        console.log("checking email");
        return users().then((userCollection) => {
            return userCollection.findOne({ email: email }).then((checkResult) => {
                if (!checkResult) return true;
                return false;
            });
        });
    },

    getUserById(id) {
        console.log("get user by ID");
        return users().then((userCollection) => {
            return userCollection.findOne({ _id: id }).then((finduser) => {
                if (!finduser) throw "User not found";
                return finduser;
            });
        });
    },
    addUser(email, password) {
        return users().then((userCollection) => {
            let newUser = {
                email: email,
                password: bcrypt.hashSync(password),
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