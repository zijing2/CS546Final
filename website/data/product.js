const mongoCollections = require("../config/mongoCollections");
const products = mongoCollections.product;
const uuid = require('node-uuid');
const bcrypt = require("bcrypt-nodejs");
// const xss = require('xss');

let exportedMethods = {
    getAllProducts() {
        return products().then((productCollection) => {
            return productCollection.find({}).toArray();
        });
    },
    getProductById(id){
        return products().then((productCollection) => {
            return productCollection.findOne({"_id":id}).then((product)=>{
                return product;
            });
        });
    },
    getProductByType(type) {
        return products().then((productCollection) => {
            return productCollection.find({ "type": type }).toArray().then((products) => {
                return products;
            });
        });
    },
    addProduct(type,name,img){
        var uid = uuid.v4();
        let newProduct = {
            type : type,
            name : name,
            img : img,
            _id: uid
        }
        return products().then((productCollection) => {
            return productCollection.insertOne(newProduct).then((newInsertInformation) => {
                 return newInsertInformation.insertedId;
            }).then((newId)=>{
                return getProductById(newId);
            })
        });
    },

    deleteProductById(id){
        return products().then((productCollection)=>{
            productCollection.remove({"_id":id}).then((result)=>{
                return result;
            })
        })

    }




}

module.exports = exportedMethods;    