const mongoCollections = require("../config/mongoCollections");
const order = mongoCollections.order;
const uuid = require('node-uuid');
const bcrypt = require("bcrypt-nodejs");
const xss = require('xss');

let exportedMethods = {

    getOrderByUid(uid) {
        return order().then((orderCollection) => {
            return orderCollection.find({"uid":uid}).toArray();
        }).catch((err)=>{console.log(err)});
    },
    getOrderByOid(oid) {
        return order().then((orderCollection) => {
            return orderCollection.findOne({"_id":oid});
        }).catch((err)=>{console.log(err)});
    },
    placeOrder(package,price,address,phone,time,theme,gift,cake,album,uid,pet){
        if(typeof package=='undefined'||typeof uid=='undefined'){
            throw "package invalid";
        }
        if(typeof price=='undefined'){
            throw "price invalid"
        }   
        if(typeof phone=='undefined'){
            throw "phone invalid"
        }   
        if(typeof address=='undefined'){
            throw "address invalid"
        }   
        if(typeof time=='undefined'){
            throw "time invalid"
        }   
        if(typeof theme=='undefined'){
            throw "theme invalid"
        }   
        if(typeof gift=='undefined'){
            throw "gift invalid"
        }   
        if(typeof cake=='undefined'){
            throw "cake invalid";
        }
        if(typeof album=='undefined'){
            throw "album invalid"
        }   
        if(typeof uid=='undefined'){
            throw "uid invalid"
        }   
        var oid = uuid.v4();
        var date = new Date();
        // var pet = { _id: '7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310',
        //             name: 'Maius',
        //             breed: 'dog',
        //             gender: 'girl',
        //             birthday: '2013.05.29',
        //             hobbies: 'swimming',
        //             hates: 'bath',
        //             image: '/public/img/maius.jpeg' 
        //         };
        var newOrder = {
            "_id" : oid,
            "place_time" : Date.parse(date),
            "order_package" : xss(package),
            "order_price" : price,
            "order_address" : xss(address),
            "order_phone" : phone,
            "order_time" : xss(time),
            "order_product_theme" : xss(theme),
            "order_product_gift" : xss(gift),
            "order_product_cake" : xss(cake),
            "order_product_album" : xss(album),
            "order_img" : "/public/img/dog10.jpg",
            "pet" : pet,
            "uid" : uid
        };
        return order().then((orderCollection) => {
            return orderCollection.insertOne(newOrder)
            .then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            })
            .then((newId) => {
                console.log(newId);
                return this.getOrderByOid(newId);
            });  
        });
     
    }
   
}

module.exports = exportedMethods;    