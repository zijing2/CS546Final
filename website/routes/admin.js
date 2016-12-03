const express = require('express');
const router = express.Router();
var passport = require('passport');
const data = require("../data");
const user = data.user;

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

router.all('/', isLoggedIn);
router.get("/", (req, res) => { 
        return user.getAllUsers().then((users)=>{   
                var data = {
                "layout":"",
                "users":users
                };
                res.render('admin',data);

         });        
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/admin/login');
});

function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect('/admin/login');
}

module.exports = router;