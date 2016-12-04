const express = require('express');
const router = express.Router();
var passport = require('passport');
const data = require("../data");
const user = data.user;
const order = data.order;
const pet = data.pet;

router.get("/login", (req, res) => { 
        var flash = req.flash();
        var error = flash.error; 
        var data = {
            "error":error,
            "layout":""
         };
        res.render('adminlogin',data);
});

router.post("/login", passport.authenticate('localadmin',{
        successRedirect: '/admin',
        failureRedirect: '/admin/login',
        failureFlash :  true
    }));

router.all('/*', isLoggedIn);
router.get("/", (req, res) => { 
        return user.getAllUsers().then((users)=>{   
                var data = {
                "layout":"",
                "users":users,
                "is_user":1
                };
                res.render('admin',data);

         });        
});

router.get("/user", (req, res) => { 
        return user.getAllUsers().then((users)=>{   
                var data = {
                "layout":"",
                "users":users,
                "is_user":1
                };
                res.render('admin',data);

         });        
});

router.get("/order", (req, res) => { 
        return order.getAllOrders().then((orders)=>{   
                var data = {
                "layout":"",
                "orders":orders,
                "is_order":1
                };
                console.log(orders);
                res.render('admin',data);

         });        
});

router.get("/pet", (req, res) => { 
        return user.getAllPets().then((pets)=>{   
                var data = {
                "layout":"",
                "pets":pets,
                "is_pet":1
                };
                console.log(pets);
                res.render('admin',data);

         });        
});

router.get("/product", (req, res) => { 
        //return user.getAllPets().then((pets)=>{   
                var data = {
                "layout":"",
                "is_product":1
                };
                res.render('admin',data);

        // });        
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/admin/login');
});

function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    //console.log(req.user);
    if (req.isAuthenticated() && req.user.adminname){
        return next()
    }
    res.redirect('/admin/login');
}

module.exports = router;