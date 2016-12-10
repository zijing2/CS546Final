const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const user = data.user;
const admin = data.admin;
const order = data.order;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        db.createCollection("User");
        db.createCollection("Pet");
        db.createCollection("Product");
        db.createCollection("Order");
        return dbConnection;
    }).then((db) => {
       return user.register("jwang102@stevens.edu", "123456");
    }).then(() => {
       return user.register("wangjiao_jo@foxmail.com", "123456");
    }).then(() => {
       return order.placeOrder("standard", 50, "795 Folsom Ave, Suite 600 San Francisco, CA 94107", "(201)7365029", "2016.12.02 09:00:00", "theme", "gift", "cake", "album", "1", "pet");
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}).catch((error) => {
    console.error(error);
});