const express = require('express');
const router = express.Router();
var passport = require('passport');
const data = require("../data");
const user = data.user;
const order = data.order;
const pet = data.pet;
const product = data.product;

router.get("/login", (req, res) => {
        var flash = req.flash();
        var error = flash.error;
        var data = {
                "error": error,
                "layout": ""
        };
        res.render('adminlogin', data);
});

router.post("/login", passport.authenticate('localadmin', {
        successRedirect: '/admin',
        failureRedirect: '/admin/login',
        failureFlash: true
}));

router.all('/*', isLoggedIn);
router.get("/", (req, res) => {
        return user.getAllUsers().then((users) => {
                var data = {
                        "layout": "",
                        "users": users,
                        "is_user": 1
                };
                res.render('admin', data);

        });
});





router.get("/deProduct/:pid", (req, res) => {
        console.log("123123123123");
        console.log(req.params.pid);
        var pid = req.params.pid;
        product.deleteProductById(pid).then((reslut) => {
                res.redirect('/admin/product');
        });

});

router.get("/deUser/:uid", (req, res) => {
        console.log(req.params.uid);
        var uid = req.params.uid;
        user.deleteUserById(uid).then((reslut) => {
                res.redirect('/admin/user');
        })

});

router.get("/dePet/:pid", (req, res) => {
        console.log("111111111111111111111111");
        console.log(req.params.pid);
        var uid = req.params.pid;
        user.deletePetsById(uid).then((result) => {
                res.redirect('/admin/pet');
        })

});


router.get("/deOrder/:oid", (req, res) => {
        console.log("sssasdasdasd");
        console.log(req.params.oid);
        var oid = req.params.oid;
        order.deleteOrderById(oid).then((reslut) => {
                res.redirect('/admin/order');
        })

});




router.post("/newproduct", (req, res) => {
        var type = req.body.type;
        var name = req.body.name;
        var img = req.body.img;
        console.log(req.body);
        product.addProduct(type, name, img).then((productinfo) => {
                res.redirect(req.get('referer'));
        }).catch((err) => {
                req.flash('err', err);
                res.redirect('/admin/product');
        });

});




router.get("/user", (req, res) => {
        return user.getAllUsers().then((users) => {
                var data = {
                        "layout": "",
                        "users": users,
                        "is_user": 1
                };
                res.render('admin', data);

        });
});

router.get("/order", (req, res) => {
        return order.getAllOrders().then((orders) => {
                var data = {
                        "layout": "",
                        "orders": orders,
                        "is_order": 1
                };
                console.log(orders);
                res.render('admin', data);

        });
});

router.get("/pet", (req, res) => {
        return user.getAllPets().then((pets) => {
                var data = {
                        "layout": "",
                        "pets": pets,
                        "is_pet": 1
                };
                console.log(pets);
                res.render('admin', data);

        });
});

router.get("/product", (req, res) => { 
        return product.getAllProducts().then((products)=>{
                console.log("11111111111111");
                console.log(products);
                var data = {
                "layout":"",
                "products":products,
                "is_product":1
                };
                res.render('admin',data);

        });        
});

router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/admin/login');
});

function isLoggedIn(req, res, next) {
        //console.log(req.isAuthenticated());
        //console.log(req.user);
        if (req.isAuthenticated() && req.user.adminname) {
                return next()
        }
        res.redirect('/admin/login');
}

module.exports = router;