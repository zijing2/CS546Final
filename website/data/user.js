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
    getUserById(uid){
        return users().then((userCollection) => {
            return userCollection.findOne({"_id":uid}).then((user)=>{
                return user;
            });
        });
    },
    getUserByEmail(email){
        return users().then((userCollection) => {
            return userCollection.findOne({"profile.email":email}).then((user)=>{
                return user;
            });
        });
    },
    checkLogin(email,password){
        return users().then((userCollection) => {
            return userCollection.findOne({"profile.email":email}).then((user)=>{
                if(!user){
                    throw "user does not exist";
                }else{
                    //console.log(bcrypt.compareSync(password, user.pwd));
                    if(bcrypt.compareSync(password, user.pwd)){
                        return user;
                    }else{
                        throw "password error";
                    }
                }
            });
        });
    },
    register(email,password){
        //email must be uniq
        return this.getUserByEmail(email).then((user)=>{
            //console.log(bcrypt.hashSync(password));
            if(!user){
                var uid = uuid.v4();
                var date = new Date();
                let newUser = {
                    _id: uid,
                    pwd: bcrypt.hashSync(password),
                    rtime: Date.parse(date),
                    profile:{
                        _id: uid,
                        email: email
                    },
                    pet:{},
                    order:{}
                };

                return users().then((userCollection) => {
                    return userCollection.insertOne(newUser)
                        .then((newInsertInformation) => {
                            return newInsertInformation.insertedId;
                        })
                        .then((newId) => {
                            console.log(newId);
                            return this.getUserById(newId);
                        });  
                });
            }else{
                throw "email has been used";
            }
        });
    
      

        
    }

}

module.exports = exportedMethods;    