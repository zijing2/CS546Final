const express = require('express');
const router = express.Router();
var passport = require('passport');
const data = require("../data");
const user = data.user;
const order = data.order;
const pet = data.pet;

router.all('/*', isLoggedIn);
router.get("/", (req, res) => {
        order.getOrderByUid(req.user._id).then((orders)=>{
                
                var data = {
                        "partial_css":"pagecss",
                        "partial_topnav":"topnav",
                        "partial_js":"pagejs",
                        "css":"/public/css/orderlist.css",
                        "js":"/public/js/orderlist.js",
                        "user":req.user,
                        "orders":orders,
                        "title":"PetPar-OrderList"
                };
                res.render('orderlist',data);
        });
   
        
});

router.get("/:order_id", (req, res) => {
        //console.log(req.user);
        order.getOrderByOid(req.params.order_id).then((my_order)=>{
                order.getOrderByUid(req.user._id).then((orders)=>{
                        var data = {
                                "partial_css":"pagecss",
                                "partial_topnav":"topnav",
                                "partial_js":"pagejs",
                                "css":"/public/css/orderdetail.css",
                                "js":"/public/js/orderdetail.js",
                                "user":req.user,
                                "order":my_order,
                                "orders":orders,
                                "title":"PetPar-OrderDetail"
                        };
                        res.render('order',data);
                 }).catch((err)=>{console.log(err);});
        });
});

//place order
router.post("/", (req, res) => {
        
        
        //console.log(req.user);
        var package = req.body.order_package;
        var price = req.body.order_price;
        var theme = req.body.order_product_theme;
        var gift = req.body.order_product_gift;
        var cake = req.body.order_product_cake;
        var album = req.body.order_product_album;
        var address = req.body.order_address;
        var phone = req.body.order_phone;
        var time = req.body.order_time;
        var uid = req.user._id;


        user.getPetbyUid(uid).then((pet)=>{
                order.placeOrder(package,price,address,phone,time,theme,gift,cake,album,uid,pet).then((order)=>{
                        //console.log(order);
                        res.status(200).json({"created":1,"order":order});
                }).catch((err)=>{
                        res.status(200).json({"err":err});
                });
        });
        
        
});

function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()&&req.user._id){
        return next()
    }
    res.redirect('/login');
}


module.exports = router;